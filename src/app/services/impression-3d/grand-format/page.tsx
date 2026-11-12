import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['impression-3d-grand-format']

export const metadata: Metadata = generateServiceMetadata(service, '/services/impression-3d/grand-format')

export default function GrandFormatPage() {
  return <ServicePage service={{
    ...service,
    galleryImages: [
      {
        src: '/images/projects/completed/cheval-guerlain-impression-3d-grand-format.webp',
        alt: 'Sculpture Guerlain grand format imprimée en 3D et finie pour une installation de marque',
      },
      {
        src: '/images/projects/completed/sculpture-boss-impression-3d-grand-format.webp',
        alt: 'Sculpture BOSS grand format imprimée en 3D et finie pour une présentation parfum',
      },
    ],
  }} />
}
