import type { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['impression-3d-metal']

export const metadata: Metadata = generateServiceMetadata(service, '/services/impression-3d/metal')

export default function MetalPage() {
  return <ServicePage service={service} />
}
