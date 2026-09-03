export interface ProjectImage {
  id: string
  filename: string
  path: string
  status: 'completed' | 'process'
  title: string
  alt: string
  services: string[]
  objectPosition: string
}
