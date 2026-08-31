import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const guideCategories = {
  fdm: {
    name: 'Impression 3D FDM',
    shortName: 'FDM',
    description: 'Réglages, défauts d’impression et conseils de préparation pour l’impression filament.',
  },
  'fichiers-3d': {
    name: 'Fichiers 3D',
    shortName: 'Fichiers 3D',
    description: 'Formats, maillage, optimisation et préparation d’un fichier réellement imprimable.',
  },
  resine: {
    name: 'Impression 3D résine',
    shortName: 'Résine',
    description: 'Technologies, exposition, adhérence et résolution des échecs les plus fréquents.',
  },
} as const

export type GuideCategorySlug = keyof typeof guideCategories

export interface GuideFrontmatter {
  title: string
  description: string
  imageAlt: string
  imageCaption: string
  readingTime?: string
  updatedAt?: string
  order?: number
}

export interface GuideArticle extends GuideFrontmatter {
  slug: string
  category: GuideCategorySlug
  image?: string
  content?: string
}

const contentRoot = path.join(process.cwd(), 'src', 'content', 'guides')
const imageExtensions = ['webp', 'jpg', 'jpeg', 'png']

export function isGuideCategory(value: string): value is GuideCategorySlug {
  return value in guideCategories
}

function getGuideFile(category: GuideCategorySlug, slug: string) {
  return path.join(contentRoot, category, slug, 'article.mdx')
}

function getGuideImage(category: GuideCategorySlug, slug: string) {
  const imageBase = path.join(process.cwd(), 'public', 'images', 'guides', category, slug, slug)
  const extension = imageExtensions.find((candidate) => fs.existsSync(`${imageBase}.${candidate}`))
  return extension ? `/images/guides/${category}/${slug}/${slug}.${extension}` : undefined
}

export function getGuidesByCategory(category: GuideCategorySlug): GuideArticle[] {
  const directory = path.join(contentRoot, category)
  if (!fs.existsSync(directory)) return []

  return fs.readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(getGuideFile(category, entry.name)))
    .map((entry) => {
      const slug = entry.name
      const source = fs.readFileSync(getGuideFile(category, slug), 'utf8')
      const { data } = matter(source)
      return { ...data, slug, category, image: getGuideImage(category, slug) } as GuideArticle
    })
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
}

export function getAllGuides() {
  return (Object.keys(guideCategories) as GuideCategorySlug[]).flatMap(getGuidesByCategory)
}

export function getGuide(category: GuideCategorySlug, slug: string): GuideArticle | null {
  const file = getGuideFile(category, slug)
  if (!fs.existsSync(file)) return null
  const { data, content } = matter(fs.readFileSync(file, 'utf8'))
  return { ...data, content, slug, category, image: getGuideImage(category, slug) } as GuideArticle
}
