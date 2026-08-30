// 临时测试：验证 publish.js 的 gh-pages 部署逻辑（git worktree 隔离方案）
// 使用独立临时 git 仓库，绝不触碰真实项目仓库
import { execSync } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'
import { pathToFileURL, fileURLToPath } from 'url'

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'hp-pub-test-'))
const remoteDir = path.join(root, 'remote.git')
const mainDir = path.join(root, 'main')

function sh(cmd, opts = {}) {
  return execSync(cmd, { encoding: 'utf8', cwd: opts.cwd || mainDir, stdio: opts.stdio || 'pipe' }).toString().trim()
}

const pass = (m) => console.log(`  ✅ ${m}`)
const fail = (m) => { console.error(`  ❌ ${m}`); process.exitCode = 1 }

try {
  // ---- 准备：bare remote + main 仓库 ----
  fs.mkdirSync(mainDir)
  process.chdir(mainDir) // 关键：publish.js 内部命令继承进程 cwd，必须先切到测试仓库
  sh(`git init --bare "${remoteDir}"`)
  sh('git init -b main')
  sh('git config user.name TestUser')
  sh('git config user.email test@example.com')
  fs.writeFileSync(path.join(mainDir, 'readme.txt'), 'main branch content\n')
  sh('git add -A')
  sh('git commit -m init')
  sh(`git remote add origin "${remoteDir}"`)
  sh(`git push -u origin main`)

  fs.mkdirSync(path.join(mainDir, 'dist'))
  fs.writeFileSync(path.join(mainDir, 'dist', 'index.html'), '<html>v1</html>')
  fs.writeFileSync(path.join(mainDir, 'dist', 'a.txt'), 'A')
  fs.writeFileSync(path.join(mainDir, 'dist', '404.html'), '<html>404</html>')

  // ---- 加载 publish 模块（deploy-only 场景，不影响真实项目） ----
  process.env.PUBLISH_REMOTE = 'origin'
  process.env.PUBLISH_GH = 'gh-pages'
  process.env.PUBLISH_DIST = 'dist'
  const publishPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'publish.js')
  const mod = await import(pathToFileURL(publishPath).href)

  // ---- 测试 1：首次部署（远端无 gh-pages，走 orphan 分支创建） ----
  console.log('\n[测试1] 首次部署（创建 gh-pages 分支）')
  const ok1 = await mod.stepDeployGhPages()
  ok1 ? pass('首次部署成功') : fail('首次部署失败')
  const files1 = sh(`git --git-dir="${remoteDir}" ls-tree -r --name-only gh-pages`).split('\n').sort()
  const expect1 = ['404.html', 'a.txt', 'index.html'].sort()
  JSON.stringify(files1) === JSON.stringify(expect1) ? pass(`gh-pages 内容正确: ${files1.join(', ')}`) : fail(`gh-pages 内容错误: ${files1.join(', ')}`)
  sh('git rev-parse --abbrev-ref HEAD') === 'main' ? pass('主工作区分支仍为 main') : fail('主工作区分支被切换!')
  fs.existsSync(path.join(mainDir, 'readme.txt')) ? pass('主工作区文件完好') : fail('主工作区文件丢失!')

  // ---- 测试 2：更新部署（修改 dist 后重新部署） ----
  console.log('\n[测试2] 更新部署（dist 有变更）')
  fs.writeFileSync(path.join(mainDir, 'dist', 'index.html'), '<html>v2</html>')
  fs.writeFileSync(path.join(mainDir, 'dist', 'b.txt'), 'B')
  const ok2 = await mod.stepDeployGhPages()
  ok2 ? pass('更新部署成功') : fail('更新部署失败')
  const idx2 = sh(`git --git-dir="${remoteDir}" show gh-pages:index.html`)
  idx2 === '<html>v2</html>' ? pass('gh-pages 内容已更新(v2)') : fail('gh-pages 内容未更新: ' + idx2)
  const files2 = sh(`git --git-dir="${remoteDir}" ls-tree -r --name-only gh-pages`).split('\n').sort()
  JSON.stringify(files2) === JSON.stringify(['404.html', 'a.txt', 'b.txt', 'index.html'].sort()) ? pass(`旧文件已清理, 新文件已加入: ${files2.join(', ')}`) : fail(`文件集合错误: ${files2.join(', ')}`)
  sh('git rev-parse --abbrev-ref HEAD') === 'main' ? pass('主工作区分支仍为 main') : fail('主工作区分支被切换!')
  fs.existsSync(path.join(mainDir, 'readme.txt')) && fs.existsSync(path.join(mainDir, 'dist', 'b.txt')) ? pass('主工作区文件完好') : fail('主工作区文件丢失!')

  // ---- 测试 3：无变更部署（应跳过提交） ----
  console.log('\n[测试3] 无变更部署（应跳过）')
  const ok3 = await mod.stepDeployGhPages()
  ok3 ? pass('无变更部署正常跳过') : fail('无变更部署失败')
  const commitCount = sh(`git --git-dir="${remoteDir}" rev-list --count gh-pages`)
  commitCount === '2' ? pass(`gh-pages 提交数保持 2（未产生空提交）: ${commitCount}`) : fail(`gh-pages 提交数异常: ${commitCount}`)

  // ---- 测试 4：临时 worktree 已全部清理 ----
  console.log('\n[测试4] 临时 worktree 清理')
  const wts = sh('git worktree list')
  wts.split('\n').length === 1 ? pass('无残留 worktree') : fail('存在残留 worktree: ' + wts)

  // ---- 测试 5：parseArgs ----
  console.log('\n[测试5] 参数解析')
  process.argv = ['node', 'x', '--deploy-only']
  const p1 = mod.parseArgs()
  p1.deployOnly === true ? pass('--deploy-only 解析正确') : fail('--deploy-only 解析失败')
  process.argv = ['node', 'x', '-m', 'hello world']
  const p2 = mod.parseArgs()
  p2.commitMsg === 'hello world' ? pass('-m 解析正确') : fail('-m 解析失败: ' + p2.commitMsg)
  process.argv = ['node', 'x', '自定义消息', '--no-deploy']
  const p3 = mod.parseArgs()
  p3.noDeploy === true && p3.commitMsg === '自定义消息' ? pass('位置参数 + --no-deploy 解析正确') : fail('参数解析失败')

  // ---- 测试 6：commit 成功但 push 失败后，重试应检测 ahead 并推送 ----
  console.log('\n[测试6] 上次未推送时的重试（ahead 检测）')
  fs.writeFileSync(path.join(mainDir, 'newfile.txt'), 'new content')
  sh('git add -A')
  sh('git commit -m "unpushed change"') // 本地领先 origin/main，模拟上次 push 失败
  const ok6 = await mod.stepPushMain('retry test')
  ok6 ? pass('重试检测到 ahead 并成功推送') : fail('重试推送失败')
  const behind = parseInt(sh(`git rev-list --count origin/main..HEAD`), 10)
  behind === 0 ? pass('本地与远端 main 已同步') : fail(`本地仍领先远端 ${behind} 个提交`)

  // ---- 测试 7：完全无变更时跳过 ----
  console.log('\n[测试7] 无任何变更时跳过推送')
  const ok7 = await mod.stepPushMain('noop')
  ok7 ? pass('无变更时正常跳过') : fail('无变更时未跳过')
  const commits = parseInt(sh(`git rev-list --count origin/main..HEAD`), 10)
  commits === 0 ? pass('未产生多余提交') : fail(`产生了多余提交: ${commits}`)

  console.log('\n========== 测试结束 ==========')
} finally {
  try { sh('git worktree prune') } catch {}
  try { process.chdir(os.tmpdir()) } catch {} // 先离开待删目录，否则 Windows 无法删除
  try { fs.rmSync(root, { recursive: true, force: true }) } catch (e) { console.log('⚠️ 清理失败（可手动删除 ' + root + '）: ' + e.message) }
  console.log('已清理临时测试目录')
}
