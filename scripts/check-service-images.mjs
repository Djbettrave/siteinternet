import { access, readFile, readdir } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import sharp from 'sharp'

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(entry => entry.isDirectory() ? filesIn(join(directory, entry.name)) : join(directory, entry.name)))
  return files.flat()
}

const sourceFiles = (await filesIn('src')).filter(file => /\.(tsx?|mdx|json)$/.test(file))
const referencedPaths = new Set()
for (const file of sourceFiles) {
  const source = await readFile(file, 'utf8')
  for (const match of source.matchAll(/["'`](\/images\/[^"'`\n]*?\.(?:jpe?g|png|webp|svg|avif))["'`]/g)) {
    referencedPaths.add(match[1])
  }
}

const missing = []
for (const publicPath of referencedPaths) {
  try {
    await access(resolve('public', '.' + publicPath))
  } catch {
    missing.push(publicPath)
  }
}

if (missing.length) {
  console.error('Images du site introuvables :')
  missing.forEach((path) => console.error('- ' + path))
  process.exit(1)
}

const imageFiles = (await filesIn('public/images')).filter(file => /\.(jpe?g|png|webp|avif)$/i.test(file))
for (const file of imageFiles) {
  try {
    await sharp(file).metadata()
  } catch (error) {
    console.error('Image illisible : ' + file, error.message)
    process.exit(1)
  }
}
console.log(`${referencedPaths.size} références d’images et ${imageFiles.length} fichiers vérifiés.`)
