import { Metadata } from 'next'
import Link from 'next/link'
import { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { SeriesExtraGallery, SeriesHeroGallery, SeriesInlineVisual } from '@/components/services/SeriesVisuals'
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
              <p className="mb-5 text-xs font-semibold tracking-[0.16em] text-primary-700">IMPRESSION 3D · PRODUCTION EN SÉRIE</p>
              <h1 className="text-4xl font-bold leading-[.98] tracking-[-0.055em] text-secondary-950 sm:text-5xl lg:text-6xl">
                {service.headline.split('\n').map((line, index) => <span key={line} className={`block ${index === 1 ? 'mt-2 text-primary-700' : ''}`}>{line}</span>)}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-secondary-600">{service.subheadline}</p>
              <Link href="/contact" className="btn-primary mt-8 gap-4 rounded-sm px-6 py-3.5">Parler de votre projet <span aria-hidden="true">↗</span></Link>
            </div>
            <SeriesHeroGallery />
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-secondary-200 pt-4 text-[11px] font-medium tracking-[0.12em] text-secondary-500"><span>PIÈCES TECHNIQUES · OBJETS · ASSEMBLAGES</span><span>01 — 05</span></div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-custom grid items-end gap-8 lg:grid-cols-[1.05fr_.75fr] lg:gap-24">
          <div><p className="mb-5 text-xs font-semibold tracking-[0.16em] text-primary-700">UNE SÉRIE, PAS UNE SIMPLE RÉPÉTITION</p><h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-secondary-950 md:text-5xl">Chaque pièce doit être prête à être <span className="relative whitespace-nowrap"><span className="relative z-10">reproduite.</span><span className="absolute inset-x-0 bottom-1 h-3 bg-primary-200" aria-hidden="true" /></span></h2></div>
          <p className="text-lg leading-relaxed text-secondary-600">{service.description}</p>
        </div>
      </section>

      <section className="bg-secondary-950 py-20 text-white md:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div><p className="mb-5 text-xs font-semibold tracking-[0.16em] text-primary-200">CE QUE NOUS PROPOSONS</p><h2 className="text-3xl font-bold tracking-[-0.04em] md:text-4xl">Une production conçue pour votre série.</h2></div>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">{service.features.map((feature) => <article key={feature.title} className="border-t border-white/20 pt-4"><h3 className="font-semibold text-white">{feature.title}</h3><p className="mt-2 text-sm leading-relaxed text-secondary-300">{feature.description}</p></article>)}</div>
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
                  <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-primary-700">0{index + 1} / IMPRESSION 3D EN SÉRIE</p>
                  <h2 className="text-2xl font-bold tracking-[-0.035em] text-secondary-950 md:text-3xl">{section.title}</h2>
                  <div className="mt-5 space-y-4 leading-relaxed text-secondary-600">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </div>
                {visual && <figure className={reverse ? 'md:order-1' : ''}><SeriesInlineVisual image={visual} className={visual === seriesImages[3] ? 'aspect-[3/4]' : 'aspect-[4/3]'} /><figcaption className="mt-3 text-xs leading-relaxed text-secondary-500">{visual.caption}</figcaption></figure>}
              </section>
            )
          })}
        </div>
      </section>

      <section className="bg-secondary-50 py-20 md:py-24"><div className="container-custom"><div className="mx-auto max-w-4xl"><p className="mb-5 text-center text-xs font-semibold tracking-[0.16em] text-primary-700">REPÈRES DE PRODUCTION</p><h2 className="text-center text-3xl font-bold tracking-[-0.04em] text-secondary-950 md:text-4xl">Les caractéristiques de votre série</h2><div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{service.specs?.map((spec) => <div key={spec.label} className="border-t border-secondary-300 py-5"><p className="text-xs font-semibold tracking-[0.12em] text-primary-700">{spec.label}</p><p className="mt-2 font-semibold leading-snug text-secondary-900">{spec.value}</p></div>)}</div></div></div></section>

      {seriesImages.length > 5 && <section className="bg-[#dceaf1] py-20 md:py-24"><div className="container-custom"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-semibold tracking-[0.16em] text-primary-700">RÉALISATIONS</p><h2 className="text-3xl font-bold tracking-[-0.04em] text-secondary-950 md:text-4xl">Une galerie appelée à grandir.</h2></div><p className="max-w-md text-sm leading-relaxed text-secondary-600">De nouvelles séries pourront être ajoutées sans changer la structure de cette page.</p></div><SeriesExtraGallery /></div></section>}

      <section className="bg-white py-20 md:py-24"><div className="container-custom"><div className="mx-auto max-w-3xl"><h2 className="text-center text-3xl font-bold tracking-[-0.04em] text-secondary-950 md:text-4xl">Questions fréquentes</h2><div className="mt-10 space-y-3">{service.faqs.map((faq) => <details key={faq.question} className="group border border-secondary-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-semibold text-secondary-900"><span>{faq.question}</span><span className="text-xl transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="px-6 pb-6 leading-relaxed text-secondary-600">{faq.answer}</p></details>)}</div></div></div></section>

      {service.cta && <section className="bg-primary-700 py-20 text-white md:py-24"><div className="container-custom mx-auto max-w-3xl text-center"><p className="mb-5 text-xs font-semibold tracking-[0.16em] text-primary-100">VOTRE PROJET</p><h2 className="text-3xl font-bold tracking-[-0.04em] md:text-4xl">{service.cta.title}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-100">{service.cta.description}</p><Link href="/contact" className="mt-8 inline-flex items-center gap-4 bg-white px-6 py-3.5 font-semibold text-primary-800 transition hover:bg-primary-50">Nous contacter <span aria-hidden="true">↗</span></Link></div></section>}
    </>
  )
}
