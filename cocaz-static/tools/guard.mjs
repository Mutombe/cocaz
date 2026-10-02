// Guardrail audit: orphaned last lines, uneven line counts across a row of cards,
// misaligned sub-elements across siblings, clipped text.
const BASE = 'http://localhost:5183'
const ROUTES = (process.env.ROUTES || '/,/about,/services,/services/media-production,/services/event-management,/services/talent-management,/events,/gallery,/contact,/join,/terms').split(',')
const SIZES = (process.env.SIZES || "1440x900,1366x768,390x844,360x740,430x932").split(",").map((x) => x.split("x").map(Number))

const settle = async (page) => {
  const total = await page.evaluate(() => document.documentElement.scrollHeight)
  const h = await page.evaluate(() => innerHeight)
  for (let y = 0; y < total; y += Math.round(h * 0.7)) { await page.evaluate((yy) => scrollTo(0, yy), y); await page.waitForTimeout(110) }
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(500)
}

const inspect = (page) => page.evaluate(() => {
  const vis = (el) => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 2 && r.height > 2 && cs.visibility !== 'hidden' && cs.display !== 'none' && cs.opacity !== '0' }
  const label = (el) => el.textContent.trim().replace(/\s+/g, ' ').slice(0, 46)
  // line boxes of an element's text
  const lines = (el) => {
    const range = document.createRange(); range.selectNodeContents(el)
    const rows = []
    for (const r of range.getClientRects()) {
      if (r.width < 1) continue
      const row = rows.find((x) => Math.abs(x.top - r.top) < r.height * 0.6)
      if (row) { row.left = Math.min(row.left, r.left); row.right = Math.max(row.right, r.right) } else rows.push({ top: r.top, left: r.left, right: r.right })
    }
    return rows.sort((a, b) => a.top - b.top).map((x) => x.right - x.left)
  }
  const out = { orphans: [], rows: [], clipped: [] }

  // 1. orphans: a last line much shorter than the rest
  document.querySelectorAll('main h1, main h2, main h3, main p, footer p').forEach((el) => {
    if (!vis(el) || el.closest('[role=dialog]') || el.querySelector('p,h1,h2,h3,div')) return
    const l = lines(el); if (l.length < 2) return
    const widest = Math.max(...l), last = l[l.length - 1]
    if (last < widest * 0.24) out.orphans.push(`${el.tagName} ${l.length}L last ${Math.round(last)}/${Math.round(widest)}px: ${label(el)}`)
  })

  // 2. rows of sibling cards: same structure should break the same way
  const seen = new Set()
  document.querySelectorAll('main *').forEach((grid) => {
    const cs = getComputedStyle(grid)
    if (!(cs.display === 'grid' || cs.display === 'flex')) return
    const kids = [...grid.children].filter(vis)
    if (kids.length < 2) return
    const byRow = new Map()
    kids.forEach((k) => { const t = Math.round(k.getBoundingClientRect().top / 4); (byRow.get(t) || byRow.set(t, []).get(t)).push(k) })
    byRow.forEach((row) => {
      if (row.length < 2) return
      const parts = (card, sel) => [...card.querySelectorAll(sel)].filter(vis)
      for (const sel of ['h3', 'p']) {
        const items = row.map((c) => parts(c, sel)[0]).filter(Boolean)
        if (items.length < 2 || items.length !== row.length) continue
        const counts = items.map((e) => lines(e).length)
        const tops = items.map((e) => Math.round(e.getBoundingClientRect().top))
        const key = items.map(label).join('|')
        if (seen.has(sel + key)) continue
        if (new Set(counts).size > 1 || Math.max(...tops) - Math.min(...tops) > 2) {
          seen.add(sel + key)
          out.rows.push(`${sel} lines ${counts.join('/')} tops ${tops.map((t) => t - Math.min(...tops)).join('/')}: ${items.map((e) => label(e).slice(0, 22)).join(' | ')}`)
        }
      }
      // heights of the cards themselves
      const hs = row.map((c) => Math.round(c.getBoundingClientRect().height))
      if (Math.max(...hs) - Math.min(...hs) > 2 && row.every((c) => c.querySelector('h3'))) out.rows.push(`card heights ${hs.join('/')}: ${label(row[0]).slice(0, 30)}`)
    })
  })

  // 3. clipped or truncated text
  document.querySelectorAll('main h1, main h2, main h3, main p, main a, main span, main dt, main dd, main li, footer dt, footer dd').forEach((el) => {
    if (!vis(el) || el.children.length) return
    if (el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflow !== 'visible') out.clipped.push(label(el))
  })
  return out
})

export default async function run(page) {
  const report = {}
  for (const route of ROUTES) {
    for (const [w, h] of SIZES) {
      await page.setViewportSize({ width: w, height: h }); await page.goto(BASE + route); await page.waitForTimeout(1000); await settle(page)
      const r = await inspect(page)
      const key = `${route} @${w}`
      const flat = [...r.orphans.map((x) => 'ORPHAN ' + x), ...r.rows.map((x) => 'ROW ' + x), ...r.clipped.map((x) => 'CLIP ' + x)]
      if (flat.length) report[key] = flat
    }
  }
  report.total = Object.values(report).reduce((n, a) => n + a.length, 0)
  return report
}
