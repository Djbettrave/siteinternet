import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import MobileReveal from '@/components/ui/MobileReveal'
import Print3DHeroGallery from '@/components/services/Print3DHeroGallery'

export interface ServiceData {
  slug: string
  name: string
  category?: string
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  headline: string
  subheadline: string
  heroVisual?: {
    alt: string
    label: string
  }
  galleryImages?: {
    src: string
    alt: string
    fit?: 'cover' | 'contain'
  }[]
  heroLayout?: 'text-left' | 'image-left'
  description: string
  features: {
    title: string
    description: string
    icon?: string
  }[]
  specs?: {
    label: string
    value: string
  }[]
  specsTitle?: string
  specsDescription?: string
  specsNote?: string
  specsLayout?: 'list' | 'grid' | 'project'
  materials?: {
    name: string
    properties: string
  }[]
  process?: {
    step: number
    title: string
    description: string
  }[]
  contentSections?: {
    title?: string
    paragraphs: string[]
    layout?: 'default' | 'wide'
  }[]
  inlineVisuals?: {
    afterSection: number
    position: 'left' | 'right'
    layout?: 'split' | 'stacked'
    alt: string
    label?: string
    image?: {
      src: string
      alt: string
      aspect?: 'portrait' | 'landscape' | 'panoramic' | 'standard'
      fit?: 'contain' | 'cover'
      tone?: 'normal' | 'soft'
      objectPosition?: string
      priority?: boolean
    }
    visualSize?: 'normal' | 'compact'
    note?: {
      title: string
      items: string[]
    }
    images?: {
      alt: string
      label: string
    }[]
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  cta?: {
    title: string
    description: string
  }
  relatedServices?: {
    name: string
    href: string
  }[]
}

export function generateServiceMetadata(service: ServiceData, path?: string): Metadata {
  return {
    title: service.metaTitle || `${service.name} sur mesure`,
    description: service.metaDescription || service.subheadline,
    keywords: [
      service.name.toLowerCase(),
      `${service.name.toLowerCase()} sur mesure`,
      ...(service.keywords || []),
      'impression 3D',
      'impression 3D grand format',
      'devis instantané',
      'prototypage rapide',
      'sur mesure',
      'France',
    ],
    ...(path && {
      alternates: {
        canonical: `https://www.inphenix-system.fr${path}`,
      },
    }),
    openGraph: {
      title: `${service.metaTitle || `${service.name} sur mesure`} – Inphenix System`,
      description: service.metaDescription || service.subheadline,
      type: 'website',
    },
  }
}

interface ServicePageProps {
  service: ServiceData
}

export default function ServicePage({ service }: ServicePageProps) {
  const servicePath = service.slug.startsWith('impression-3d-')
    ? `/services/impression-3d/${service.slug.replace('impression-3d-', '')}`
    : `/services/${service.slug}`
  const showFaqs = ['impression-3d-fdm'].includes(service.slug) && service.faqs.length > 0
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  const usesPrint3DGallery = ['scan-3d', 'impression-3d-fdm', 'impression-3d-resine', 'impression-3d-grand-format', 'impression-3d-en-serie', 'impression-3d-metal', 'electronique', 'impression-uv', 'modelisation-3d', 'prototypage'].includes(service.slug)
  const showFeatures = !['scan-3d', 'modelisation-3d', 'impression-uv', 'electronique', 'impression-3d-fdm', 'impression-3d-resine', 'impression-3d-metal', 'impression-3d-grand-format'].includes(service.slug)
  const showSpecs = !['scan-3d', 'impression-3d-fdm', 'impression-3d-resine', 'impression-3d-metal'].includes(service.slug)
  const showProcess = service.slug === 'impression-uv'

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Services', path: '/services' }, { name: service.name, path: servicePath }]} />
      {showFaqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      {usesPrint3DGallery ? (
        <section className="flex min-h-[calc(86svh-80px)] items-center overflow-hidden bg-[#f8fafc]">
          <div className="container-custom w-full py-8 md:py-10 lg:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-[.88fr_1.12fr] lg:gap-14">
              <div className={service.heroLayout === 'image-left' ? 'lg:order-2' : ''}>
                <h1 className="text-4xl font-bold leading-[.98] tracking-[-0.055em] text-secondary-950 sm:text-5xl lg:text-[3.4rem]">
                  {service.headline.split('\n').map((line, index) => <span key={line} className={`block ${index === 1 ? 'mt-2 text-primary-700' : index > 1 ? 'text-primary-700' : ''}`}>{line}</span>)}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary-600 md:text-lg">{service.subheadline}</p>
              </div>
              <div className={service.heroLayout === 'image-left' ? 'lg:order-1' : ''}>
                <Print3DHeroGallery images={service.galleryImages} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="border-b border-secondary-100 bg-white">
          <div className="container-custom py-12 md:py-16 lg:py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-secondary-950 md:text-5xl">
                {service.headline.split('\n').map((line, index) => (
                  <span key={index} className={`block ${index > 0 ? 'mt-2 text-primary-700' : ''} ${service.slug === 'impression-uv' && index === 1 ? 'text-[0.72em] leading-snug md:text-[0.76em]' : ''}`}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-600 md:text-xl">{service.subheadline}</p>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {showFeatures && <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Ce que nous proposons</h2>
            <p className="section-subtitle mx-auto">
              {service.description}
            </p>
          </div>

          <div className={`grid md:grid-cols-2 ${service.slug === 'prototypage' ? 'gap-4' : 'lg:grid-cols-3 gap-8'}`}>
            {service.features.map((feature, index) => (
              <MobileReveal key={index} delay={index * 55}>
                <div className={`group card transition-all duration-200 md:hover:shadow-lg md:hover:border-primary-300 ${service.slug === 'prototypage' ? 'p-4' : 'p-6 md:p-8'}`}>
                  <div className={`flex items-center gap-3 ${service.slug === 'prototypage' ? 'mb-2' : 'mb-4 md:mb-5 md:block'}`}>
                    <div className={`flex flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 transition-colors md:group-hover:bg-primary-600 ${service.slug === 'prototypage' ? 'h-9 w-9' : 'h-11 w-11 md:mb-5 md:h-14 md:w-14'}`}>
                      <svg className="h-5 w-5 text-primary-600 transition-colors md:group-hover:text-white md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon || 'M13 10V3L4 14h7v7l9-11h-7z'} />
                      </svg>
                    </div>
                    <h3 className={`font-semibold text-secondary-900 transition-colors md:group-hover:text-primary-600 ${service.slug === 'prototypage' ? 'text-base' : 'text-lg md:text-xl'}`}>{feature.title}</h3>
                  </div>
                  <p className={`leading-relaxed text-secondary-600 ${service.slug === 'prototypage' ? 'text-sm' : ''}`}>{feature.description}</p>
                </div>
              </MobileReveal>
            ))}
          </div>
        </div>
      </section>}

      {/* SEO content */}
      {service.contentSections && (
        <section className="py-20 bg-white">
          <div className="container-custom max-w-7xl">
            <div className="space-y-12">
              {service.contentSections.map((section, index) => {
                const visual = service.inlineVisuals?.find((item) => item.afterSection === index)

                const stacked = visual?.layout === 'stacked'
                const wide = section.layout === 'wide'

                return (
                  <section
                    key={section.title || `section-${index}`}
                    className={visual ? (stacked ? 'space-y-10' : 'grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:gap-16') : wide ? 'max-w-none py-4' : 'max-w-4xl'}
                  >
                    <div className={`${visual?.position === 'left' && !stacked ? 'lg:order-2' : ''} ${stacked ? 'max-w-5xl' : ''}`}>
                      {section.title && <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-5">{section.title}</h2>}
