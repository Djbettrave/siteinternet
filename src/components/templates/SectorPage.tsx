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
  heroImageAlt?: string
  useCasesTitle?: string
  useCasesSubtitle?: string
  projects?: { image: string; alt: string; title: string }[]
  why?: {
    title: string
    paragraphs: string[]
    points: { title: string; description: string }[]
  }
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
  showBenefits?: boolean
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
  const showHeroVisual = sector.slug === 'architecture' || sector.slug === 'medical' || sector.slug === 'luxe'
  const isLuxe = sector.slug === 'luxe'
  const projectsSection = sector.projects && (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-custom">
        <h2 className="mb-10 text-3xl font-bold tracking-[-0.04em] text-secondary-900 md:text-4xl">Réalisations pour les maisons de luxe</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {sector.projects.map((project) => (
            <figure key={project.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary-100">
                <Image src={project.image} alt={project.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm font-medium text-secondary-800">{project.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Secteurs', path: '/secteurs' }, { name: sector.name, path: `/secteurs/${sector.slug}` }]} />
      {/* Schema markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSectorSchema(sector)) }}
      />

      {/* Hero Section */}
      <section className={`relative overflow-hidden ${isLuxe ? 'bg-[#f6f6f4]' : 'bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900'}`}>
        <div className="container-custom relative">
          <div className={`w-full min-w-0 py-12 lg:py-16 ${showHeroVisual && sector.heroImage ? 'grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-center' : ''}`}>
            <div className={`w-full min-w-0 max-w-3xl ${sector.slug === 'luxe' ? 'lg:order-2' : ''}`}>
              {/* Headline */}
              <h1
                className={`mb-6 max-w-full text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${isLuxe ? 'text-secondary-950' : 'text-white'}`}
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
                className={`mb-8 max-w-full text-lg sm:max-w-2xl sm:text-xl ${isLuxe ? 'text-secondary-600' : 'text-secondary-300'}`}
                style={{ overflowWrap: 'anywhere', whiteSpace: 'normal' }}
              >
                {sector.subheadline.split('. ').map((sentence, index, array) => (
                  <span key={index} className="block">
                    {sentence}{index < array.length - 1 ? '.' : sentence.endsWith('.') ? '' : '.'}
                  </span>
                ))}
              </p>

            </div>

            {showHeroVisual && sector.heroImage && (
              sector.slug === 'luxe'
                ? <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(24,31,42,0.14)] lg:order-1"><Image src={sector.heroImage} alt={sector.heroImageAlt || `Photo de couverture pour le secteur ${sector.name}`} fill priority sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover object-[center_45%]" /></div>
                : <ImagePlaceholder ariaLabel={`Photo de couverture à choisir pour le secteur ${sector.name}`} dark className="aspect-[4/3] shadow-2xl" />
            )}
          </div>
        </div>

        {/* Decorative */}
        {!isLuxe && <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>}
      </section>

      {!isLuxe && projectsSection}

      {/* Use Cases Section */}
      <section className={`py-20 lg:py-24 ${isLuxe ? 'bg-white' : sector.projects ? 'bg-secondary-50' : 'bg-white'}`}>
        <div className="container-custom">
          <div className={`${isLuxe ? 'mb-10' : 'text-center mb-16'}`}>
            <h2 className="section-title">{sector.useCasesTitle || `Applications pour le secteur ${sector.name}`}</h2>
            <p className={`section-subtitle ${isLuxe ? 'max-w-none lg:whitespace-nowrap' : 'mx-auto'}`}>
              {sector.useCasesSubtitle || `Découvrez comment nous accompagnons les professionnels du ${sector.name.toLowerCase()} avec des solutions sur mesure.`}
            </p>
          </div>

          {isLuxe ? (
            <ul className="max-w-4xl divide-y divide-secondary-200 border-y border-secondary-200">
              {sector.useCases.map((useCase) => (
                <li key={useCase.title} className="grid gap-2 py-5 md:grid-cols-[14rem_1fr] md:gap-8">
                  <span className="flex items-center gap-3 font-semibold text-secondary-900"><span className="h-1.5 w-1.5 rounded-full bg-primary-700" />{useCase.title}</span>
                  <span className="leading-relaxed text-secondary-600">{useCase.description}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
          )}
        </div>
      </section>

      {sector.why && !isLuxe && (
        <section className="bg-secondary-50 py-20 lg:py-24"><div className="container-custom"><div className="max-w-4xl"><h2 className="text-3xl font-bold tracking-[-0.04em] text-secondary-900 md:text-4xl">{sector.why.title}</h2><div className="mt-7 max-w-3xl space-y-5 text-lg leading-relaxed text-secondary-600">{sector.why.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div><div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-3">{sector.why.points.map((point) => <div key={point.title} className="border-t-2 border-primary-500 pt-5"><h3 className="text-base font-semibold text-secondary-900">{point.title}</h3><p className="mt-2 text-sm leading-relaxed text-secondary-600">{point.description}</p></div>)}</div></div></section>
      )}

      {/* Sector perspective */}
      {sector.editorial && (
        <section className="bg-secondary-50 py-20 lg:py-24">
          <div className="container-custom">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={sector.editorial.imagePosition === 'right' ? 'lg:order-2' : ''}>
                {sector.editorial.showImage ? (
                  <div className={`relative overflow-hidden rounded-2xl shadow-lg ${sector.editorial.imageAspect === 'tall' ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                    <Image src={sector.editorial.image} alt={sector.editorial.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover ${sector.editorial.imageFocus === 'upper' ? 'object-[20%_66%] scale-[1.34]' : 'object-center'}`} />
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
      {sector.showBenefits !== false && <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
