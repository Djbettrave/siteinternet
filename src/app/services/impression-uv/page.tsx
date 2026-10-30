import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['impression-uv']

export const metadata: Metadata = generateServiceMetadata(service, '/services/impression-uv')

export default function ImpressionUvPage() {
  return <ServicePage service={service} />
}
