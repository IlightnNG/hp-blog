#!/usr/bin/env node
/**
 * 博客发布工作流
 *
 * 用法：
 *   npm run publish [提交信息]         全流程：生成列表 → 构建 → 提交推送 main → 部署 gh-pages
 *   npm run publish -m "提交信息"      同上（显式 -m）
 *   npm run publish -- --deploy-only   仅部署 gh-pages（使用现有 dist/，不触碰 main）
 *   npm run publish -- --no-deploy     只构建并提交推送 main，跳过 gh-pages
 *   npm run deploy                     仅部署 gh-pages（等价 --deploy-only）
 *   npm run publish -- --help          显示帮助
 *
 * 特性：
 *   - 每一步独立容错，失败步骤汇总报告，退出码非 0（便于 CI / AI 自动上线检测）
 *   - gh-pages 部署使用 git worktree 临时目录，绝不切换/清空本地工作区
 *   - 支持环境变量 GITHUB_TOKEN：推送时自动注入 token，无需交互输入密码
 *   - 无变更时自动跳过 commit/push，不会因 "nothing to commit" 中断
 */

import { execSync } from 'child_process'
import { existsSync, readdirSync, mkdirSync, copyFileSync, rmSync, mkdtempSync, readFileSync } from 'fs'
import os from 'os'
import path from 'path'
import { pathToFileURL } from 'url'
import generateList from './list-for-bash.js'

// ---------- 加载 .env（若存在）----------
// 优先级：真实环境变量 > .env 文件；.env 中的值会被解析为字符串
{
  const envPath = path.join(process.cwd(), '.env')
  if (existsSync(envPath)) {
    for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/)
      if (m && m[1] && !process.env[m[1]]) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
      }
    }
  }
}

const REMOTE = process.env.PUBLISH_REMOTE || 'origin'
const MAIN_BRANCH = process.env.PUBLISH_MAIN || 'main'
const GH_BRANCH = process.env.PUBLISH_GH || 'gh-pages'
const DIST_DIR = process.env.PUBLISH_DIST || 'dist'

// ---------- 日志 ----------
const log = {
  info: (m) => console.log(`  ${m}`),
  ok: (m) => console.log(`  ✅ ${m}`),
  warn: (m) => console.warn(`  ⚠️  ${m}`),
  err: (m) => console.error(`  ❌ ${m}`)
}

const GIT_ENV = () => ({ ...process.env, GIT_TERMINAL_PROMPT: '0' })

// ---------- 基础工具 ----------
// 执行命令（inherit 输出），失败返回 false；日志中自动隐藏 GITHUB_TOKEN
function run(cmd, opts = {}) {
  const token = process.env.GITHUB_TOKEN
  const display = token ? cmd.split(token).join('***') : cmd
  log.info(`$ ${display}`)
  try {
    execSync(cmd, { stdio: 'inherit', env: GIT_ENV(), ...opts })
    return true
  } catch (e) {
    return false
  }
}

// 执行并捕获输出（用于检测认证错误），不向控制台回显
function runCapture(cmd) {
  try {
    execSync(cmd, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', env: GIT_ENV() })
    return { ok: true }
  } catch (e) {
    return { ok: false, err: String((e && e.stderr) || (e && e.message) || '') }
  }
}

function hintAuth(errText) {
  if (/could not read Username|Authentication failed|terminal prompts disabled|HTTP 40[13]/i.test(errText)) {
    log.warn('检测到认证失败。请任选一种方式配置凭据后重试：')
    log.warn('  1) git config --global credential.helper manager   (Windows 凭据管理器)')
    log.warn('  2) gh auth login                                   (GitHub CLI)')
    log.warn('  3) 设置环境变量 GITHUB_TOKEN 后重试（推荐用于 CI / AI 自动上线）')
  }
}

// 获取带 token 的推送 URL（GITHUB_TOKEN 存在时注入，免交互密码）
function getPushUrl() {
  try {
    const url = execSync(`git remote get-url ${REMOTE}`, { encoding: 'utf8', env: GIT_ENV() }).trim()
    const token = process.env.GITHUB_TOKEN
    if (token && url.startsWith('https://')) {
      return url.replace('https://', `https://x-access-token:${token}@`)
    }
    return url
  } catch {
    return null
  }
}

function checkGitIdentity() {
  let ok = true
  for (const key of ['user.name', 'user.email']) {
    try {
      execSync(`git config ${key}`, { stdio: 'ignore', env: GIT_ENV() })
    } catch {
      ok = false
      log.err(`缺少 git 配置 ${key}，请先执行：git config --global ${key} "你的值"`)
    }
  }
  return ok
}

// ---------- 步骤 1：提交并推送 main ----------
export function stepPushMain(commitMsg) {
  console.log('\n── [步骤] 提交并推送 main ──')
  if (!run('git add -A')) return false

  let staged = ''
  try {
    staged = execSync('git diff --cached --name-only', { encoding: 'utf8', env: GIT_ENV() }).trim()
  } catch { return false }
  if (!staged) {
    // 无新变更时，检测本地是否领先远端（上次 commit 成功但 push 失败的情况）
    let ahead = 0
    try {
      ahead = parseInt(execSync(`git rev-list --count ${REMOTE}/${MAIN_BRANCH}..HEAD`, { encoding: 'utf8', env: GIT_ENV() }), 10) || 0
    } catch { ahead = 1 } // 无法判断（如远端引用缺失）时保守视为需要推送
    if (ahead === 0) {
      log.warn('没有需要提交或推送的变更，跳过')
      return true
    }
    log.warn(`本地领先远端 ${ahead} 个提交（可能上次 push 未成功），继续推送`)
  } else {
    const safeMsg = String(commitMsg).replace(/"/g, '\\"')
    if (!run(`git commit -m "${safeMsg}"`)) return false
  }

  const url = getPushUrl()
  if (!url) { log.err(`无法获取 remote ${REMOTE} 的地址`); return false }
  const res = runCapture(`git push ${url} ${MAIN_BRANCH}`)
  if (!res.ok) { hintAuth(res.err); return false }
  // push 使用 URL 形式不会自动更新 remote-tracking 引用，手动同步（供后续 ahead 检测使用）
  try {
    execSync(`git fetch ${url} ${MAIN_BRANCH}:refs/remotes/${REMOTE}/${MAIN_BRANCH}`, { stdio: 'ignore', env: GIT_ENV() })
  } catch {}
  return true
}

// ---------- 步骤 2：部署 gh-pages（git worktree，隔离操作） ----------
function copyDirContents(src, dest) {
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name)
    const d = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      mkdirSync(d, { recursive: true })
      copyDirContents(s, d)
    } else {
      copyFileSync(s, d)
    }
  }
}

function clearDirKeepGit(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry === '.git') continue
    rmSync(path.join(dir, entry), { recursive: true, force: true })
  }
}

export function stepDeployGhPages() {
  console.log('\n── [步骤] 部署 gh-pages ──')
  if (!existsSync(DIST_DIR) || !existsSync(path.join(DIST_DIR, 'index.html'))) {
    log.err(`dist/ 不完整（缺少 index.html），请先运行 npm run build`)
    return false
  }
  if (!existsSync(path.join(DIST_DIR, '404.html'))) {
    log.warn('dist/404.html 不存在：GitHub Pages 深链接（直接访问 /posts/xxx）将 404，建议先构建一次')
  }

  const url = getPushUrl()
  if (!url) { log.err(`无法获取 remote ${REMOTE} 的地址`); return false }

  // 1. 检测远端分支是否存在（失败多为认证/网络问题，与"分支不存在"区分开）
  let hasRemote = false
  let lsErr = ''
  try {
    hasRemote = execSync(`git ls-remote ${url} ${GH_BRANCH}`, { encoding: 'utf8', env: GIT_ENV() }).trim().length > 0
  } catch (e) {
    lsErr = String((e && e.stderr) || '')
  }
  if (lsErr) {
    if (/could not read Username|Authentication failed|terminal prompts disabled|HTTP 40[13]/i.test(lsErr)) {
      hintAuth(lsErr)
      return false
    }
    log.err(`无法访问远程仓库（${lsErr.slice(0, 120)}）`)
    return false
  }
  log.info(hasRemote ? `远端存在 ${GH_BRANCH}，基于最新版本更新` : `远端无 ${GH_BRANCH}，将创建全新分支`)

  // 2. 在隔离的临时 worktree 中操作
  const tmp = mkdtempSync(path.join(os.tmpdir(), 'hp-blog-ghpages-'))
  log.info(`临时 worktree：${tmp}（不影响当前工作区）`)
  try {
    if (hasRemote) {
      // 用 URL fetch 并显式更新 remote-tracking 引用（私有仓库 + token 场景也能工作）
      if (!run(`git fetch ${url} ${GH_BRANCH}:refs/remotes/${REMOTE}/${GH_BRANCH}`)) return false
      if (!run(`git worktree add --detach ${tmp} ${REMOTE}/${GH_BRANCH}`)) return false
      // 清空旧内容（保留 .git 引用）
      if (!run(`git -C ${tmp} rm -rf .`)) return false
    } else {
      if (!run(`git worktree add --detach ${tmp} HEAD`)) return false
      if (!run(`git -C ${tmp} checkout --orphan ${GH_BRANCH}`)) return false
      clearDirKeepGit(tmp)
    }

    // 3. 复制构建产物
    log.info('复制构建产物...')
    copyDirContents(DIST_DIR, tmp)

    // 4. 提交（无变化则跳过）
    if (!run(`git -C ${tmp} add -A`)) return false
    let staged = ''
    try {
      staged = execSync(`git -C ${tmp} diff --cached --name-only`, { encoding: 'utf8', env: GIT_ENV() }).trim()
    } catch { return false }
    if (!staged) {
      log.warn('gh-pages 内容无变化，跳过部署提交')
      return true
    }
    if (!run(`git -C ${tmp} commit -m "deploy: ${new Date().toISOString()}"`)) return false

    // 5. 推送
    const res = runCapture(`git -C ${tmp} push ${url} HEAD:${GH_BRANCH}`)
    if (!res.ok) { hintAuth(res.err); return false }
    return true
  } finally {
    // 6. 无论成败都清理临时 worktree（绝不触碰主工作区）
    try {
      execSync(`git worktree remove --force ${tmp}`, { stdio: 'ignore', env: GIT_ENV() })
    } catch {}
    try { rmSync(tmp, { recursive: true, force: true }) } catch {}
  }
}

// ---------- 参数解析 ----------
export function parseArgs() {
  const args = process.argv.slice(2)
  const flags = { deployOnly: false, noDeploy: false, help: false }
  let commitMsg = null
  for (let i = 0; i < args.length; i++) {
    const a = args[i]
    if (a === '--deploy-only') flags.deployOnly = true
    else if (a === '--no-deploy') flags.noDeploy = true
    else if (a === '--help' || a === '-h') flags.help = true
    else if (a === '-m') { if (args[i + 1]) { commitMsg = args[i + 1]; i++ } }
    else if (!commitMsg) commitMsg = a
  }
  if (flags.deployOnly && flags.noDeploy) {
    console.error('❌ --deploy-only 与 --no-deploy 不能同时使用')
    process.exit(1)
  }
  return { ...flags, commitMsg: commitMsg || '' }
}

const HELP = `博客发布工作流

用法：
  npm run publish -- "提交信息"     全流程：生成列表 → 构建 → 提交推送 main → 部署 gh-pages
  npm run publish -- -m "提交信息"  同上（显式 -m；npm run 必须用 -- 分隔，否则 -m 会被 npm 拦截）
  npm run publish -- --deploy-only  仅部署 gh-pages（使用现有 dist/，不触碰 main）
  npm run publish -- --no-deploy    只构建并提交推送 main，跳过 gh-pages
  npm run deploy                    仅部署 gh-pages（等价 --deploy-only）
  npm run publish -- --help         显示帮助

环境变量：
  GITHUB_TOKEN  推送时自动注入 token（免密码，推荐 CI / AI 自动上线使用）
                可直接写在项目根目录的 .env 文件中（真实环境变量优先），
                模板见 .env.example；.env 已被 .gitignore 忽略

说明：
  - gh-pages 部署使用 git worktree 临时目录，不会切换或清空本地工作区
  - 任何一步失败都会在最后汇总报告并以非 0 退出码结束
  - 无变更时自动跳过 commit/push，不会因 "nothing to commit" 中断
  - main 分支提交必须提供简短的英文摘要（-m），约定见 AGENTS.md；
    未提供时回退为 "chore: update blog content"（不允许 auto-commit）`

async function main() {
  const args = parseArgs()
  if (args.help) { console.log(HELP); return }

  console.log('========== 博客发布 ==========')
  try {
    console.log(`当前分支: ${execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8', env: GIT_ENV() }).trim()}`)
  } catch {}

  // 提交摘要：必须提供简短的英文摘要（约定见 AGENTS.md），不允许 auto-commit
  if (!args.commitMsg) {
    log.warn('未提供提交摘要（-m），使用默认消息 "chore: update blog content"')
    args.commitMsg = 'chore: update blog content'
  }

  if (!checkGitIdentity()) process.exit(1)

  const results = []

  if (args.deployOnly) {
    console.log('模式：仅部署 gh-pages（使用现有 dist/）')
    results.push(['部署 gh-pages', stepDeployGhPages()])
  } else {
    console.log('模式：全流程发布')

    console.log('\n── [步骤] 生成文章列表 ──')
    try {
      await generateList()
      results.push(['生成文章列表', true])
    } catch (e) {
      log.err(String((e && e.message) || e))
      results.push(['生成文章列表', false])
    }

    console.log('\n── [步骤] 生成媒体列表 ──')
    results.push(['生成媒体列表', run('node scripts/medias.js')])

    console.log('\n── [步骤] 构建项目 ──')
    results.push(['构建项目', run('npm run build')])

    results.push(['提交并推送 main', stepPushMain(args.commitMsg)])

    if (!args.noDeploy) {
      results.push(['部署 gh-pages', stepDeployGhPages()])
    }
  }

  // 汇总
  console.log('\n========== 结果汇总 ==========')
  let failed = 0
  for (const [name, ok] of results) {
    console.log(`  ${ok ? '✅' : '❌'} ${name}`)
    if (!ok) failed++
  }
  if (failed > 0) {
    log.err(`共 ${results.length} 步，失败 ${failed} 步`)
    process.exit(1)
  }
  console.log('🎉 发布成功！')
}

// 仅作为入口执行（import 时不运行，便于测试/复用）
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
