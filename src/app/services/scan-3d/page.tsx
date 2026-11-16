import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['scan-3d']

export const metadata: Metadata = generateServiceMetadata(service, '/services/scan-3d')

export default function Scan3DPage() {
  return <ServicePage service={service} />
}
