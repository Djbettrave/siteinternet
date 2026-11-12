import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import MobileReveal from '@/components/ui/MobileReveal'

export interface SectorData {
  slug: string
  name: string
  icon?: string
  headline: string
  subheadline: string
  description: string
  keywords?: string[]
  heroImage?: string
  editorial?: {
    eyebrow?: string
    title: string
    paragraphs: string[]
    image: string
    imageAlt: string
    showImage?: boolean
    imagePosition?: 'left' | 'right'
    imageFocus?: 'center' | 'upper'
    imageAspect?: 'standard' | 'tall'
  }
  useCases: {
    title: string
    description: string
    icon?: string
  }[]
  benefits: string[]
  services?: {
    name: string
    href: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  cta: {
    title: string
    description: string
  }
  stats?: {
    value: string
    label: string
  }[]
}

export function generateSectorMetadata(sector: SectorData, path?: string): Metadata {
  return {
    title: `${sector.name} | Impression 3D & Électronique`,
    description: sector.description,
    keywords: [
      `impression 3D ${sector.name.toLowerCase()}`,
      `prototypage ${sector.name.toLowerCase()}`,
      `${sector.name.toLowerCase()} sur mesure`,
      'bureau d\'étude',
      'électronique',
      ...(sector.keywords ?? []),
    ],
    ...(path && {
      alternates: {
        canonical: `https://www.inphenix-system.fr${path}`,
      },
    }),
    openGraph: {
      title: `${sector.name} - Inphenix System`,
      description: sector.description,
      type: 'website',
    },
  }
}

export function generateSectorSchema(sector: SectorData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Services Impression 3D et Électronique pour ${sector.name}`,
    provider: {
      '@type': 'Organization',
      name: 'Inphenix System',
      url: 'https://inphenix-system.fr',
    },
    description: sector.description,
    areaServed: 'France',
    serviceType: `Impression 3D pour ${sector.name}`,
  }
}

interface SectorPageProps {
  sector: SectorData
}

export default function SectorPage({ sector }: SectorPageProps) {
  const showHeroVisual = sector.slug === 'architecture' || sector.slug === 'medical'
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sector.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Secteurs', path: '/secteurs' }, { name: sector.name, path: `/secteurs/${sector.slug}` }]} />
      {/* Schema markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSectorSchema(sector)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
        <div className="container-custom relative">
          <div className={`w-full min-w-0 py-12 lg:py-16 ${showHeroVisual && sector.heroImage ? 'grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-center' : ''}`}>
            <div className="w-full min-w-0 max-w-3xl">
              {/* Headline */}
              <h1
                className="mb-6 max-w-full text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
                style={{ overflowWrap: 'anywhere', whiteSpace: 'normal' }}
              >
                {sector.headline.split('\n').map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              {/* Subheadline */}
              <p
                className="mb-8 max-w-full text-lg text-secondary-300 sm:max-w-2xl sm:text-xl"
                style={{ overflowWrap: 'anywhere', whiteSpace: 'normal' }}
              >
                {sector.subheadline.split('. ').map((sentence, index, array) => (
                  <span key={index} className="block">
                    {sentence}{index < array.length - 1 ? '.' : sentence.endsWith('.') ? '' : '.'}
                  </span>
                ))}
              </p>

              {/* Stats */}
              {sector.stats && (
                <div className="mt-12 flex max-w-full flex-wrap items-center gap-8 border-t border-white/10 pt-8">
                  {sector.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-secondary-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {showHeroVisual && sector.heroImage && <ImagePlaceholder ariaLabel={`Photo de couverture à choisir pour le secteur ${sector.name}`} dark className="aspect-[4/3] shadow-2xl" />}
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Applications pour le secteur {sector.name}</h2>
            <p className="section-subtitle mx-auto">
              Découvrez comment nous accompagnons les professionnels du {sector.name.toLowerCase()}
              avec des solutions sur mesure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sector.useCases.map((useCase, index) => (
              <MobileReveal key={index} delay={index * 55}>
                <div className="group card p-6 md:p-8 md:hover:shadow-lg md:hover:border-primary-300 transition-all duration-200">
                  <div className="mb-4 flex items-center gap-3 md:mb-5 md:block">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 transition-colors md:group-hover:bg-primary-600 md:mb-5 md:h-14 md:w-14">
                      <svg className="h-5 w-5 text-primary-600 transition-colors md:group-hover:text-white md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={useCase.icon || 'M13 10V3L4 14h7v7l9-11h-7z'} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 transition-colors md:group-hover:text-primary-600 md:text-xl">{useCase.title}</h3>
                  </div>
                  <p className="leading-relaxed text-secondary-600">{useCase.description}</p>
                </div>
              </MobileReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sector perspective */}
      {sector.editorial && (
        <section className="bg-secondary-50 py-20 lg:py-24">
          <div className="container-custom">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={sector.editorial.imagePosition === 'right' ? 'lg:order-2' : ''}>
                {sector.editorial.showImage ? (
                  <div className={`relative overflow-hidden rounded-2xl shadow-lg ${sector.editorial.imageAspect === 'tall' ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                    <Image src={sector.editorial.image} alt={sector.editorial.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover ${sector.editorial.imageFocus === 'upper' ? 'object-[center_62%] scale-[1.22]' : 'object-center'}`} />
                  </div>
                ) : (
                  <ImagePlaceholder ariaLabel={sector.editorial.imageAlt} className="aspect-[4/3] shadow-lg" />
                )}
              </div>
              <div className={sector.editorial.imagePosition === 'right' ? 'lg:order-1' : ''}>
                {sector.editorial.eyebrow && (
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary-600">
                    {sector.editorial.eyebrow}
                  </p>
                )}
                <h2 className="mb-6 text-3xl font-bold leading-tight text-secondary-900 md:text-4xl">
                  {sector.editorial.title}
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-secondary-600">
                  {sector.editorial.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-6">
              Pourquoi choisir Inphenix pour vos projets {sector.name} ?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Notre expertise combinée en impression 3D et électronique nous permet de répondre
              aux exigences spécifiques du secteur {sector.name.toLowerCase()}.
            </p>
            <ul className="space-y-4">
              {sector.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-secondary-700">
                  <span className="mt-0.5 flex-shrink-0 text-primary-600">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Questions fréquentes - {sector.name}</h2>
              <p className="section-subtitle mx-auto">
                Les réponses aux questions les plus courantes sur nos services pour le secteur {sector.name.toLowerCase()}.
              </p>
            </div>

            <div className="space-y-4">
              {sector.faqs.map((faq, index) => (
                <details key={index} className="group border border-secondary-200 rounded-xl overflow-hidden">
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

      {/* CTA Section */}
      <section className="py-24 bg-primary-600">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {sector.cta.title}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {sector.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap">
                Nous contacter
              </Link>
              <a
                href="https://impression3d.inphenix-system.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 text-white hover:bg-primary-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Devis instantané Impression 3D
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
