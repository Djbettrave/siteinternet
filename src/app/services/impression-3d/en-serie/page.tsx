import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { SeriesHeroGallery, SeriesInlineVisual } from '@/components/services/SeriesVisuals'
import { seriesImages } from '@/data/seriesImages'

const service = servicesData['impression-3d-en-serie']

export const metadata: Metadata = generateServiceMetadata(service, '/services/impression-3d/en-serie')

export default function Impression3DEnSeriePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  }

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Services', path: '/services' }, { name: service.name, path: '/services/impression-3d/en-serie' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="overflow-hidden bg-[#f8fafc]">
        <div className="container-custom py-14 md:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
            <div>
              <h1 className="text-4xl font-bold leading-[.98] tracking-[-0.055em] text-secondary-950 sm:text-5xl lg:text-6xl">
                {service.headline.split('\n').map((line, index) => <span key={line} className={`block ${index === 1 ? 'mt-2 text-primary-700' : ''}`}>{line}</span>)}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-secondary-600">{service.subheadline}</p>
            </div>
            <SeriesHeroGallery />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-custom">
          <div className="mb-16 text-center"><h2 className="section-title">Ce que nous proposons</h2><p className="section-subtitle mx-auto">{service.description}</p></div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => <article key={feature.title} className="group card p-8 transition-all duration-200 hover:border-primary-300 hover:shadow-lg"><div className="flex items-start gap-4"><div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100 transition-colors group-hover:bg-primary-600"><svg className="h-5 w-5 text-primary-700 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={feature.icon || 'M13 10V3L4 14h7v7l9-11h-7z'} /></svg></div><div><h3 className="text-xl font-semibold text-secondary-900 transition-colors group-hover:text-primary-600">{feature.title}</h3><p className="mt-3 text-secondary-600">{feature.description}</p></div></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-custom max-w-6xl space-y-20 md:space-y-28">
          {service.contentSections?.map((section, index) => {
            const visual = index === 0 ? seriesImages[3] : index === 2 ? seriesImages[4] : undefined
            const reverse = index === 2
            return (
              <section key={section.title} className={visual ? 'grid items-center gap-10 md:grid-cols-2 md:gap-16' : 'mx-auto max-w-3xl'}>
                <div className={reverse ? 'md:order-2' : ''}>
                  <h2 className="text-2xl font-bold tracking-[-0.035em] text-secondary-950 md:text-3xl">{section.title}</h2>
                  <div className="mt-5 space-y-4 leading-relaxed text-secondary-600">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </div>
                {visual && <figure className={reverse ? 'md:order-1' : ''}><SeriesInlineVisual image={visual} className={visual === seriesImages[3] ? 'aspect-[3/4]' : 'aspect-[4/3]'} /><figcaption className="mt-3 text-xs leading-relaxed text-secondary-500">{visual.caption}</figcaption></figure>}
              </section>
            )
          })}
        </div>
      </section>

      <section className="bg-secondary-50 py-24"><div className="container-custom"><div className="text-center"><h2 className="section-title">Spécifications techniques</h2><p className="section-subtitle mx-auto">Les caractéristiques clés de cette production.</p></div><div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-secondary-200 bg-white shadow-sm">{service.specs?.map((spec, index) => <div key={spec.label} className={`flex items-center justify-between gap-5 px-6 py-5 ${index !== service.specs!.length - 1 ? 'border-b border-secondary-100' : ''}`}><div className="flex items-center gap-3"><span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" /><span className="font-medium text-secondary-700">{spec.label}</span></div><span className="rounded-lg bg-secondary-100 px-3 py-1 text-right text-sm font-bold text-secondary-900">{spec.value}</span></div>)}</div></div></section>

      <section className="bg-white py-20 md:py-24"><div className="container-custom"><div className="mx-auto max-w-3xl"><h2 className="text-center text-3xl font-bold tracking-[-0.04em] text-secondary-950 md:text-4xl">Questions fréquentes</h2><div className="mt-10 space-y-3">{service.faqs.map((faq) => <details key={faq.question} className="group border border-secondary-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-semibold text-secondary-900"><span>{faq.question}</span><span className="text-xl transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="px-6 pb-6 leading-relaxed text-secondary-600">{faq.answer}</p></details>)}</div></div></div></section>

      {service.cta && <section className="bg-primary-700 py-20 text-white md:py-24"><div className="container-custom mx-auto max-w-3xl text-center"><p className="mb-5 text-xs font-semibold tracking-[0.16em] text-primary-100">VOTRE PROJET</p><h2 className="text-3xl font-bold tracking-[-0.04em] md:text-4xl">{service.cta.title}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-100">{service.cta.description}</p><Link href="/contact" className="mt-8 inline-flex items-center gap-4 bg-white px-6 py-3.5 font-semibold text-primary-800 transition hover:bg-primary-50">Nous contacter <span aria-hidden="true">↗</span></Link></div></section>}
    </>
  )
}
