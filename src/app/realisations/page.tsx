import type { Metadata } from 'next'
import RealisationsGallery from '@/components/realisations/RealisationsGallery'
import { getProjects } from '@/lib/projects'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Réalisations en impression 3D',
  description:
    'Découvrez nos réalisations en impression 3D, prototypage, modélisation, résine, FDM et électronique sur mesure.',
  alternates: { canonical: '/realisations' },
}

export default async function RealisationsPage() {
  const projects = await getProjects()

  return <><BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Réalisations', path: '/realisations' }]} /><RealisationsGallery initialProjects={projects} /></>
}
