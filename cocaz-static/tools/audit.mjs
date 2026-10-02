// Mechanical checks from the build notes: overflow, hero fit, stretched images,
// line counts desktop vs phone, long paragraphs, em dashes and hollow words.
const BASE = 'http://localhost:5183'
const ROUTES = ['/', '/about', '/services', '/services/media-production', '/services/event-management', '/services/talent-management', '/events', '/gallery', '/contact', '/join', '/terms']
const HERO_SIZES = [[1440, 900], [1366, 768], [1280, 720], [1280, 640], [1440, 1080], [390, 844], [360, 740], [414, 896]]
const BANNED = /\b(seamless|robust|leverage|elevate|unlock|bespoke|cutting[- ]edge|comprehensive|tailored|holistic|not just)\b/gi

const settle = async (page) => {
  const total = await page.evaluate(() => document.documentElement.scrollHeight)
  const h = await page.evaluate(() => innerHeight)
  for (let y = 0; y < total; y += Math.round(h * 0.7)) { await page.evaluate((yy) => scrollTo(0, yy), y); await page.waitForTimeout(120) }
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(500)
}

const measure = (page) => page.evaluate(() => {
  const out = {}
  const visible = (el) => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' }
  const key = (el) => el.textContent.trim().replace(/\s+/g, ' ').slice(0, 70)
  document.querySelectorAll('main p, main li, main h3, main h4, main a.btn-ink, main a.btn-ghost, main a.btn-gold, main button, main .chip, footer p, footer a').forEach((el) => {
    if (!visible(el) || el.children.length > 2 || el.closest('[role=dialog]') || el.hasAttribute('data-prose') || getComputedStyle(el).opacity === '0') return
    const t = key(el); if (!t || t.length < 4) return
    const cs = getComputedStyle(el); let lh = parseFloat(cs.lineHeight); if (isNaN(lh)) lh = parseFloat(cs.fontSize) * 1.2
    const inner = el.getBoundingClientRect().height - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
    out[el.tagName + '|' + t] = Math.max(1, Math.round(inner / lh))
  })
  return out
})

export default async function run(page) {
  const report = { hero: [], overflow: [], stretched: [], oneToTwo: [], fivePlus: [], dashes: [], banned: [] }

  // hero fits one screen
  for (const [w, h] of HERO_SIZES) {
    await page.setViewportSize({ width: w, height: h }); await page.goto(BASE + '/'); await page.waitForTimeout(1500)
    const r = await page.evaluate(() => {
      const last = [...document.querySelectorAll('[data-hero-last]')].find((e) => e.offsetParent !== null)
      return { bottom: Math.round(last.getBoundingClientRect().bottom), vh: innerHeight }
    })
    report.hero.push(`${w}x${h}: last element bottom ${r.bottom} of ${r.vh} ${r.bottom <= r.vh ? 'OK' : 'OVER'}`)
  }

  for (const route of ROUTES) {
    const lines = {}
    for (const [w, h] of [[1280, 800], [390, 844]]) {
      await page.setViewportSize({ width: w, height: h }); await page.goto(BASE + route); await page.waitForTimeout(900); await settle(page)
      const info = await page.evaluate((BANNED_SRC) => {
        const de = document.documentElement
        const stretched = [...document.images].filter((i) => i.naturalWidth && i.offsetParent !== null).map((i) => {
          const cs = getComputedStyle(i); if (cs.objectFit === 'cover' || cs.objectFit === 'contain') return null
          const r = i.getBoundingClientRect(); const a = r.width / r.height, n = i.naturalWidth / i.naturalHeight
          return Math.abs(a - n) / n > 0.03 ? `${i.src.split('/').pop()} ${a.toFixed(2)} vs ${n.toFixed(2)}` : null
        }).filter(Boolean)
        const text = document.body.innerText
        return { overflow: de.scrollWidth > de.clientWidth ? de.scrollWidth - de.clientWidth : 0, stretched, dashes: (text.match(/—/g) || []).length, banned: [...new Set((text.match(new RegExp(BANNED_SRC, 'gi')) || []).map((s) => s.toLowerCase()))] }
      }, BANNED.source)
      if (info.overflow) report.overflow.push(`${route} @${w}: +${info.overflow}px`)
      info.stretched.forEach((s) => report.stretched.push(`${route} @${w}: ${s}`))
      if (w === 1280) { if (info.dashes) report.dashes.push(`${route}: ${info.dashes}`); if (info.banned.length) report.banned.push(`${route}: ${info.banned.join(', ')}`) }
      lines[w] = await measure(page)
    }
    for (const [k, m] of Object.entries(lines[390])) {
      const d = lines[1280][k]; const [tag, t] = k.split('|')
      if (d === 1 && m >= 2 && !/^H[1-4]$/.test(tag)) report.oneToTwo.push(`${route} ${tag} (${m}): ${t}`)
      if (m >= 5 && tag === 'P') report.fivePlus.push(`${route} (${m} lines): ${t}`)
    }
  }
  report.summary = Object.fromEntries(Object.entries(report).filter(([k]) => k !== 'hero').map(([k, v]) => [k, v.length]))
  return report
}
