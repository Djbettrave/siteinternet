import { access, readdir, readFile } from 'fs/promises'
import { unstable_cache } from 'next/cache'
import { join } from 'path'
import type { ProjectImage } from '@/types/project'

type ProjectStatus = ProjectImage['status']
type ImageConfig = { objectPosition?: string; title?: string; alt?: string }
type ProjectsConfig = Partial<Record<ProjectStatus, Record<string, ImageConfig | string>>>

const serviceKeywordMap: Record<string, string[]> = {
  fdm: ['Impression 3D FDM'],
  résine: ['Impression 3D Résine'],
  resine: ['Impression 3D Résine'],
  'grand format': ['Impression Grand Format'],
  scan: ['Scan 3D'],
  modélisation: ['Modélisation 3D'],
  modelisation: ['Modélisation 3D'],
  prototypage: ['Prototypage'],
  électronique: ['Électronique & Motorisation'],
  electronique: ['Électronique & Motorisation'],
  motorisation: ['Électronique & Motorisation'],
  led: ['Électronique & Motorisation'],
  lumière: ['Électronique & Motorisation'],
  lumiere: ['Électronique & Motorisation'],
}

function extractServicesFromFilename(filename: string): string[] {
  const services = new Set<string>()
  const lowerFilename = filename.toLowerCase()
  for (const [keyword, names] of Object.entries(serviceKeywordMap)) {
    if (lowerFilename.includes(keyword)) names.forEach((name) => services.add(name))
  }
  return Array.from(services)
}

function fallbackTitle(filename: string): string {
  const name = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '')
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function normalizeImageConfig(value: ImageConfig | string | undefined): ImageConfig {
  return typeof value === 'string' ? { objectPosition: value } : value ?? {}
}

async function loadConfig(projectsPath: string): Promise<ProjectsConfig> {
  try {
    return JSON.parse(await readFile(join(projectsPath, 'config.json'), 'utf8')) as ProjectsConfig
  } catch {
    return {}
  }
}

async function readImagesFromDir(
  dirPath: string,
  status: ProjectStatus,
  imageConfigs: Record<string, ImageConfig | string> = {},
): Promise<ProjectImage[]> {
  try {
    await access(dirPath)
    const files = await readdir(dirPath)
    return files
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((filename, index) => {
        const imageConfig = normalizeImageConfig(imageConfigs[filename])
        const title = imageConfig.title ?? fallbackTitle(filename)
        return {
          id: `${status}-${index}`,
          filename,
          path: `/images/projects/${status}/${filename}`,
          status,
          title,
          alt: imageConfig.alt ?? title,
          services: extractServicesFromFilename(filename),
          objectPosition: imageConfig.objectPosition ?? 'center',
        }
      })
  } catch {
    return []
  }
}

export const getProjects = unstable_cache(
  async () => {
    const projectsPath = join(process.cwd(), 'public', 'images', 'projects')
    const config = await loadConfig(projectsPath)
    const [completed, inProgress] = await Promise.all([
      readImagesFromDir(join(projectsPath, 'completed'), 'completed', config.completed),
      readImagesFromDir(join(projectsPath, 'process'), 'process', config.process),
    ])
    return [...completed, ...inProgress]
  },
  ['projects-list'],
  { revalidate: 3600, tags: ['projects'] },
)
