import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['impression-3d-en-serie']

export const metadata: Metadata = generateServiceMetadata(service, '/services/impression-3d/en-serie')

export default function Impression3DEnSeriePage() {
  return <ServicePage service={service} />
}
