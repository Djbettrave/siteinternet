import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['scan-3d']

export const metadata: Metadata = generateServiceMetadata(service, '/services/scan-3d')

export default function Scan3DPage() {
  return <ServicePage service={{
    ...service,
    galleryImages: [
      { src: '/images/services/scan-3d/scan-3d-sculpture-lion-reproduction-resine.jpeg', alt: 'Sculpture de lion scannée en 3D avec sa reproduction miniature en résine', fit: 'contain' },
      { src: '/images/services/scan-3d/scan-3d-sculpture-serpent-miniature-resine.jpeg', alt: 'Sculpture de serpent scannée en 3D avec sa reproduction miniature en résine', fit: 'contain' },
    ],
  }} />
}
