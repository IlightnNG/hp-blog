#!/usr/bin/env node
/**
 * 媒体数据构建脚本
 *
 * 用法：
 *   node scripts/medias.js            从 public/medias/*.yaml 生成 public/medias/list.json
 *   node scripts/medias.js --migrate  一次性迁移：把旧 list.json 转成按年份的 yaml 源文件
 *   node scripts/medias.js --check    只校验 yaml，不写文件（返回非 0 表示有问题）
 *
 * 数据流：
 *   public/medias/2024.yaml ... (手写源数据)  --medias.js-->  public/medias/list.json (前端读取)
 *
 * 脚本职责：
 *   - 校验必填字段（title/type/date）、type 枚举、rating 范围、日期格式
 *   - 按 title+type 检测重复条目并警告
 *   - 自动生成 id、按日期降序排序
 *   - 前端读取格式不变（list.json 字段与之前完全一致）
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import YAML from 'yaml'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const MEDIA_DIR = path.join(__dirname, '../public/medias')
const LIST_FILE = path.join(MEDIA_DIR, 'list.json')
const VALID_TYPES = ['anime', 'book', 'movie', 'game', 'cartoon', 'series']

const log = (m) => console.log(m)
const warn = (m) => console.warn(`  ⚠️  ${m}`)

// ---------- 工具 ----------
// 各种日期输入 -> 'YYYY-MM-DD' 字符串；非法返回 null
function normalizeDate(d) {
  if (d instanceof Date && !isNaN(d)) {
    return d.toISOString().slice(0, 10)
  }
  const s = String(d ?? '').trim()
  const m = s.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/)
  if (!m) return null
  return `${m[1]}-${String(Number(m[2])).padStart(2, '0')}-${String(Number(m[3])).padStart(2, '0')}`
}

// 校验单条，返回 { ok, errors, normalized }
function validateItem(item, source) {
  const errors = []
  if (!item || typeof item !== 'object' || Array.isArray(item)) {
    return { ok: false, errors: ['不是有效的条目对象'], normalized: null }
  }
  if (!item.title || !String(item.title).trim()) errors.push('缺少 title')
  if (!VALID_TYPES.includes(item.type)) errors.push(`type 非法: ${item.type}（允许: ${VALID_TYPES.join('/')}）`)
  const date = normalizeDate(item.date)
  if (!date) errors.push(`date 非法: ${item.date}`)
  if (item.rating !== undefined && item.rating !== null) {
    const r = Number(item.rating)
    if (isNaN(r) || r < 0 || r > 10) errors.push(`rating 非法: ${item.rating}`)
  }
  if (errors.length) return { ok: false, errors, normalized: null }
  return {
    ok: true,
    errors: [],
    normalized: {
      title: String(item.title).trim(),
      type: item.type,
      date,
      rating: item.rating !== undefined ? Number(item.rating) : undefined,
      tags: Array.isArray(item.tags) ? item.tags.map((t) => String(t).trim()) : [],
      summary: item.summary !== undefined ? String(item.summary) : '',
      review: item.review !== undefined ? String(item.review) : ''
    }
  }
}

// ---------- 生成 list.json ----------
export function buildList() {
  const files = fs.readdirSync(MEDIA_DIR).filter((f) => f.endsWith('.yaml')).sort()
  if (files.length === 0) {
    warn(`public/medias 下没有 .yaml 源文件（可运行 node scripts/medias.js --migrate 从旧数据迁移）`)
    process.exit(1)
  }

  const items = []
  const seen = new Set()
  let warnCount = 0
  let skipCount = 0

  for (const f of files) {
    let doc
    try {
      doc = YAML.parse(fs.readFileSync(path.join(MEDIA_DIR, f), 'utf8')) || []
    } catch (e) {
      warn(`${f} 解析失败: ${e.message}`)
      skipCount++
      continue
    }
    if (!Array.isArray(doc)) {
      warn(`${f} 顶层应为数组（- 开头的条目列表）`)
      skipCount++
      continue
    }
    doc.forEach((item, i) => {
      const { ok, errors, normalized } = validateItem(item, f)
      if (!ok) {
        warn(`${f} 第 ${i + 1} 条: ${errors.join('；')}`)
        warnCount++
        return
      }
      const key = `${normalized.title}|${normalized.type}`
      if (seen.has(key)) {
        warn(`重复条目: "${normalized.title}" (${normalized.type}) 在 ${f} 中出现多次，已跳过重复项`)
        warnCount++
        return
      }
      seen.add(key)
      items.push(normalized)
    })
  }

  // 日期降序，同日按标题
  items.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))
  const out = items.map((item, i) => ({ id: i + 1, ...item }))

  fs.writeFileSync(LIST_FILE, JSON.stringify(out, null, 4) + '\n')
  log(`✅ 已生成 ${LIST_FILE}`)
  log(`   共 ${out.length} 条（来源 ${files.length} 个 yaml），跳过 ${skipCount} 条，警告 ${warnCount} 条`)
  return { total: out.length, warnCount, skipCount }
}

// ---------- 一次性迁移：旧 list.json -> 按年份 yaml ----------
function migrate() {
  if (!fs.existsSync(LIST_FILE)) {
    warn('没有旧 list.json 可迁移')
    process.exit(1)
  }
  const old = JSON.parse(fs.readFileSync(LIST_FILE, 'utf8'))
  if (!Array.isArray(old)) {
    warn('list.json 格式异常（顶层应为数组）')
    process.exit(1)
  }

  const byYear = {}
  old.forEach((item) => {
    const date = normalizeDate(item.date)
    const year = date ? date.slice(0, 4) : 'unknown'
    ;(byYear[year] = byYear[year] || []).push({ ...item, date })
  })

  const years = Object.keys(byYear).sort()
  for (const year of years) {
    const list = byYear[year].sort((a, b) => (a.date || '').localeCompare(b.date || ''))
    const lines = [
      `# ============ ${year} 年 ============`,
      '# 字段说明: title(必填) / type(必填: anime|book|movie|game|cartoon|series) / date(必填 YYYY-MM-DD)',
      '#           / rating(0-10 可选) / tags(可选) / summary(可选) / review(可选)',
      '# 只看过未评价的条目只需三行（title/type/date）',
      ''
    ]
    for (const item of list) {
      const hasExtra =
        item.rating !== undefined ||
        (Array.isArray(item.tags) && item.tags.length > 0) ||
        item.summary ||
        item.review
      lines.push(`- title: ${YAML.stringify(String(item.title)).trim()}`)
      lines.push(`  type: ${item.type}`)
      lines.push(`  date: '${item.date}'`)
      if (hasExtra) {
        if (item.rating !== undefined) lines.push(`  rating: ${Number(item.rating)}`)
        if (Array.isArray(item.tags) && item.tags.length > 0) {
          lines.push(`  tags: [${item.tags.map((t) => YAML.stringify(String(t)).trim()).join(', ')}]`)
        }
        if (item.summary) lines.push(`  summary: ${YAML.stringify(String(item.summary)).trim()}`)
        if (item.review) lines.push(`  review: ${YAML.stringify(String(item.review)).trim()}`)
      }
      lines.push('')
    }
    fs.writeFileSync(path.join(MEDIA_DIR, `${year}.yaml`), lines.join('\n'))
    log(`✅ 生成 ${year}.yaml：${list.length} 条`)
  }

  // 为"今年"生成空模板（便于直接录入新内容）
  const thisYear = String(new Date().getFullYear())
  if (!byYear[thisYear]) {
    const tpl = [
      `# ============ ${thisYear} 年 ============`,
      '# 字段说明: title(必填) / type(必填: anime|book|movie|game|cartoon|series) / date(必填 YYYY-MM-DD)',
      '#           / rating(0-10 可选) / tags(可选) / summary(可选) / review(可选)',
      '# 示例:',
      '# - title: 番剧名',
      '#   type: anime',
      '#   date: 2026-04-01',
      '#   rating: 9.0',
      '#   tags: [战斗, 奇幻]',
      '#   summary: 一句话感想',
      '',
      '# 只看过未评价的条目只需三行:',
      '# - title: 某番',
      '#   type: anime',
      '#   date: 2026-04-15',
      ''
    ]
    fs.writeFileSync(path.join(MEDIA_DIR, `${thisYear}.yaml`), tpl.join('\n'))
    log(`✅ 生成 ${thisYear}.yaml（空模板，可直接开始录入）`)
  }

  log('迁移完成。请检查各年份 yaml 后运行 node scripts/medias.js 重新生成 list.json')
}

// ---------- 入口 ----------
function main() {
  const args = process.argv.slice(2)
  if (args.includes('--migrate')) {
    log('开始迁移旧 list.json -> 按年份 yaml ...')
    migrate()
    return
  }
  if (args.includes('--check')) {
    // 校验模式：解析所有 yaml，有错误则退出码非 0
    const res = buildListCheckOnly()
    process.exit(res.warnCount > 0 || res.skipCount > 0 ? 1 : 0)
    return
  }
  buildList()
}

// check 模式：只校验不写文件
function buildListCheckOnly() {
  const files = fs.readdirSync(MEDIA_DIR).filter((f) => f.endsWith('.yaml')).sort()
  let warnCount = 0
  let skipCount = 0
  for (const f of files) {
    let doc
    try {
      doc = YAML.parse(fs.readFileSync(path.join(MEDIA_DIR, f), 'utf8')) || []
    } catch (e) {
      warn(`${f} 解析失败: ${e.message}`)
      skipCount++
      continue
    }
    if (!Array.isArray(doc)) { warn(`${f} 顶层应为数组`); skipCount++; continue }
    doc.forEach((item, i) => {
      const { ok, errors } = validateItem(item, f)
      if (!ok) { warn(`${f} 第 ${i + 1} 条: ${errors.join('；')}`); warnCount++ }
    })
  }
  log(warnCount || skipCount ? `❌ 校验发现 ${warnCount} 条错误、${skipCount} 个文件异常` : '✅ 校验通过')
  return { warnCount, skipCount }
}

main()
