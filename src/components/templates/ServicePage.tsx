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
  }[]
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
      aspect?: 'portrait' | 'landscape' | 'standard'
      fit?: 'contain' | 'cover'
      tone?: 'normal' | 'soft'
      priority?: boolean
    }
    visualSize?: 'normal' | 'compact'
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
  const usesPrint3DGallery = ['impression-3d-fdm', 'impression-3d-resine', 'impression-3d-grand-format', 'impression-3d-metal'].includes(service.slug)

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Services', path: '/services' }, { name: service.name, path: servicePath }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      {usesPrint3DGallery ? (
        <section className="overflow-hidden bg-[#f8fafc]">
          <div className="container-custom py-14 md:py-20 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
              <div>
                <h1 className="text-4xl font-bold leading-[.98] tracking-[-0.055em] text-secondary-950 sm:text-5xl lg:text-6xl">
                  {service.headline.split('\n').map((line, index) => <span key={line} className={`block ${index === 1 ? 'mt-2 text-primary-700' : ''}`}>{line}</span>)}
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-secondary-600">{service.subheadline}</p>
              </div>
              <Print3DHeroGallery images={service.galleryImages} />
            </div>
          </div>
        </section>
      ) : (
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
        <div className="container-custom relative">
          <div className={`py-20 lg:py-28 ${service.heroVisual ? 'grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.62fr)]' : ''}`}>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {service.headline.split('\n').map((line, index) => (
                  <span key={index} className={`block ${service.slug === 'impression-uv' && index === 1 ? 'text-[0.68em] md:text-[0.72em] leading-snug' : ''}`}>
                    {line}
                  </span>
                ))}
              </h1>

              <p className="text-xl text-secondary-300 mb-8 max-w-2xl">
                {service.subheadline}
              </p>

              {/* CTA uniquement pour FDM et Résine */}
              {(service.slug === 'impression-3d-fdm' || service.slug === 'impression-3d-resine') && (
                <a
                  href="https://impression3d.inphenix-system.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                >
                  Devis instantané Impression 3D
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>

            {service.heroVisual && (
              <ImagePlaceholder ariaLabel={service.heroVisual.alt} dark className="aspect-[4/5]" />
            )}
          </div>
        </div>

        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      </section>
      )}

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Ce que nous proposons</h2>
            <p className="section-subtitle mx-auto">
              {service.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <MobileReveal key={index} delay={index * 55}>
                <div className="group card p-6 md:p-8 md:hover:shadow-lg md:hover:border-primary-300 transition-all duration-200">
                  <div className="mb-4 flex items-center gap-3 md:mb-5 md:block">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 transition-colors md:group-hover:bg-primary-600 md:mb-5 md:h-14 md:w-14">
                      <svg className="h-5 w-5 text-primary-600 transition-colors md:group-hover:text-white md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon || 'M13 10V3L4 14h7v7l9-11h-7z'} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 transition-colors md:group-hover:text-primary-600 md:text-xl">{feature.title}</h3>
                  </div>
                  <p className="leading-relaxed text-secondary-600">{feature.description}</p>
                </div>
              </MobileReveal>
            ))}
          </div>
        </div>
      </section>

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
                      <div className="space-y-4 text-secondary-600 leading-relaxed">
                        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                    </div>
                    {visual && (
                    <div className={`${visual.position === 'left' && !stacked ? 'lg:order-1' : ''} ${stacked ? (visual.visualSize === 'compact' ? 'mx-auto w-full max-w-4xl' : 'w-full') : ''} ${visual.visualSize === 'compact' && !stacked ? 'lg:max-w-[440px] lg:justify-self-end' : ''}`}>
                        {visual.image ? (
                          <div className={`relative overflow-hidden rounded-xl ${visual.image.aspect === 'portrait' ? 'aspect-[4/5]' : visual.image.aspect === 'standard' ? 'aspect-[4/3]' : 'aspect-video'}`}>
                            <Image
                              src={visual.image.src}
                              alt={visual.image.alt}
                              fill
                              priority={visual.image.priority}
                              sizes={stacked ? '(min-width: 1024px) 1200px, 100vw' : '(min-width: 1024px) 50vw, 100vw'}
                              className={`${visual.image.fit === 'cover' ? 'object-cover' : 'object-contain'} ${visual.image.tone === 'soft' ? 'brightness-[0.94] contrast-[1.02]' : ''}`}
                            />
                          </div>
                        ) : visual.images ? (
                          <div className={`grid aspect-[4/3] ${visual.images.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
                            {visual.images.map((image) => (
                              <ImagePlaceholder key={image.label} ariaLabel={image.alt} className="h-full min-h-0" />
                            ))}
                          </div>
                        ) : (
                          <ImagePlaceholder ariaLabel={visual.alt} className="aspect-[4/3]" />
                        )}
                      </div>
                    )}
                  </section>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Specs */}
      {service.specs && (
        <section className="py-24 bg-secondary-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">{service.specsTitle || 'Spécifications techniques'}</h2>
              <p className="section-subtitle mx-auto">{service.specsDescription || 'Les caractéristiques clés de cette technologie.'}</p>
            </div>
            {service.specsLayout === 'project' ? (
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-x-12">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="border-t border-secondary-300 py-5">
                      <p className="text-secondary-600 leading-relaxed">
                        <span className="font-semibold text-secondary-900">{spec.label} :</span>{' '}
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
                {service.specsNote && (
                  <p className="mt-8 pt-6 border-t border-secondary-300 text-secondary-600 leading-relaxed">
                    {service.specsNote}
                  </p>
                )}
              </div>
            ) : service.specsLayout === 'grid' ? (
              <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                {service.specs.map((spec) => (
                  <div key={spec.label} className="border-t border-secondary-300 pt-4">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-primary-700 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {spec.label}
                    </div>
                    <p className="text-lg font-semibold text-secondary-900 leading-snug">{spec.value}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-secondary-200">
                  {service.specs.map((spec, index) => (
                    <div key={index} className={`flex items-center justify-between px-6 py-5 ${index !== service.specs!.length - 1 ? 'border-b border-secondary-100' : ''} hover:bg-secondary-50 transition-colors`}>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></div>
                        <span className="text-secondary-700 font-medium">{spec.label}</span>
                      </div>
                      <span className="font-bold text-secondary-900 bg-secondary-100 px-3 py-1 rounded-lg text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Materials */}
      {service.materials && (
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Matériaux disponibles</h2>
              <p className="section-subtitle mx-auto">Chaque matériau a ses propriétés et usages spécifiques.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.materials.map((material, index) => (
                <div key={index} className="group bg-secondary-50 rounded-xl p-6 border border-secondary-200 hover:border-primary-300 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                      <svg className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-secondary-900 text-lg">{material.name}</h3>
                  </div>
                  <p className="text-secondary-600">{material.properties}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && (
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Notre processus</h2>
              <p className="section-subtitle mx-auto">
                De votre demande à la livraison, un accompagnement structuré.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {index !== service.process!.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-200 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">{step.title}</h3>
                    <p className="text-secondary-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Questions fréquentes</h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <details key={index} className="group bg-white border border-secondary-200 rounded-xl overflow-hidden">
                  <summary className="px-6 py-5 cursor-pointer flex items-center justify-between gap-4 hover:bg-secondary-50 transition-colors list-none">
                    <span className="font-semibold text-secondary-900">{faq.question}</span>
                    <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {service.cta && (
        <section className="py-24 bg-primary-600">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {service.cta.title}
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                {service.cta.description}
              </p>
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block">
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
