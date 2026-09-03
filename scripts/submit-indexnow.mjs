const key = '481a284e62ec8b1ab2a35b53563e741e'
const siteUrl = (process.env.INDEXNOW_SITE_URL ?? 'https://www.inphenix-system.fr').replace(/\/$/, '')
const paths = process.argv.slice(2)

if (paths.length === 0) {
  console.error('Usage: npm run indexnow -- /nouvelle-page /page-modifiee')
  process.exit(1)
}

const site = new URL(siteUrl)
const urlList = paths.map((value) => new URL(value, siteUrl).href)

if (urlList.some((url) => new URL(url).host !== site.host)) {
  throw new Error('Toutes les URL soumises doivent appartenir au domaine configuré.')
}

const response = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: site.host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList,
  }),
})

if (!response.ok) {
  throw new Error(`IndexNow a répondu ${response.status}: ${await response.text()}`)
}

console.log(`IndexNow : ${urlList.length} URL(s) envoyée(s) avec succès.`)
