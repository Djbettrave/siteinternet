export type ProjectCategory = 'realisations' | 'fabrication' | 'atelier'

export interface ProjectImage {
  id: string
  filename: string
  path: string
  status: 'completed' | 'process'
  category: ProjectCategory
  title: string
  alt: string
  services: string[]
  objectPosition: string
}
