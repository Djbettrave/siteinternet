import { access, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const dataFile = resolve('src/data/services.ts')
const source = await readFile(dataFile, 'utf8')
const referencedPaths = [...source.matchAll(/src:\s*'([^']+)'/g)]
  .map((match) => match[1])
  .filter((path) => path.startsWith('/images/'))

const missing = []
for (const publicPath of referencedPaths) {
  try {
    await access(resolve('public', '.' + publicPath))
  } catch {
    missing.push(publicPath)
  }
}

if (missing.length) {
  console.error('Images de service introuvables :')
  missing.forEach((path) => console.error('- ' + path))
  process.exit(1)
}

console.log(referencedPaths.length + ' image(s) de service vérifiée(s).')
