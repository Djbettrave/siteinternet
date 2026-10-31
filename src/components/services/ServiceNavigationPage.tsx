'use client'

import { useState } from 'react'
import Link from 'next/link'

type ServiceCard = {
  name: string
  href?: string
  alt: string
  featured?: boolean
}

type ComparisonRow = {
  technology: string
  material: string
  precision: string
  resistance: string
  flexibility: string
  finish: string
  cost: string
  applications: string
}

type Faq = {
  question: string
  answer: string
}

interface ServiceNavigationPageProps {
  eyebrow: string
  title: string
  intro: string
  cards: ServiceCard[]
  comparison?: ComparisonRow[]
  faqs?: Faq[]
  showCta?: boolean
  introPlacement?: 'hero' | 'after-cards'
}

function PhotoPlaceholder({ alt, featured = false }: { alt: string; featured?: boolean }) {
  return (
    <div
      className={`${featured ? 'aspect-[16/6]' : 'aspect-[4/5] md:aspect-[6/5]'} flex items-center justify-center rounded-xl border border-dashed border-secondary-300 bg-secondary-50 text-secondary-500`}
      role="img"
      aria-label={alt}
    >
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 16m-6-12h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  )
}

function ServiceCard({ card }: { card: ServiceCard }) {
  const isPrintingCard = card.name.startsWith('Impression 3D ')
  const label = isPrintingCard ? card.name.replace('Impression 3D ', '') : card.name
  const content = (
    <div className="relative overflow-hidden rounded-xl">
      <PhotoPlaceholder alt={card.alt} featured={card.featured} />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-secondary-900/90 via-secondary-900/55 to-transparent px-3 pb-3 pt-12 text-white">
        <h2 className="min-w-0 leading-tight">
          {isPrintingCard && <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-primary-100">Impression 3D</span>}
          <span className="block whitespace-nowrap text-[13px] font-semibold tracking-[-0.03em] md:text-lg">{label}</span>
        </h2>
        {card.href && (
          <svg className="mb-0.5 h-4 w-4 shrink-0 text-white transition-transform group-hover:translate-x-1 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  )

  const className = `group block transition-all ${card.href ? 'hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2' : 'cursor-default'} ${card.featured ? 'col-span-2' : ''}`

  return card.href ? <Link href={card.href} className={className}>{content}</Link> : <div className={className}>{content}</div>
}

export default function ServiceNavigationPage({ eyebrow, title, intro, cards, comparison, faqs, showCta = false, introPlacement = 'hero' }: ServiceNavigationPageProps) {
  const [tableHasScrolled, setTableHasScrolled] = useState(false)
  const firstColumnStyle = { left: '0px', width: '60px', minWidth: '60px', maxWidth: '60px' }
  const secondColumnStyle = { left: '60px', width: '78px', minWidth: '78px', maxWidth: '78px' }
  const stickyDivider = tableHasScrolled ? 'shadow-[5px_0_8px_-6px_rgba(15,23,42,0.7)]' : ''

  return (
    <>
      <section className={`bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 ${introPlacement === 'hero' ? 'py-16 md:py-24' : 'py-12 md:py-20'}`}>
        <div className="container-custom max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-300 mb-5">{eyebrow}</p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            {title.split('\n').map((line) => <span key={line} className="block">{line}</span>)}
          </h1>
          {introPlacement === 'hero' && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-secondary-200 md:text-xl">{intro}</p>}
        </div>
      </section>

      <section className="bg-white pb-12 pt-8 md:py-24">
        <div className="container-custom max-w-5xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-secondary-900 md:mb-10 md:text-4xl">Nos solutions</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {cards.map((card) => <ServiceCard key={card.name} card={card} />)}
          </div>
          {introPlacement === 'after-cards' && <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-secondary-600 md:mt-10 md:text-base">{intro}</p>}
        </div>
      </section>

      {comparison && (
        <section className="py-16 md:py-24 bg-secondary-50">
          <div className="container-custom">
            <div className="max-w-3xl mb-10">
              <h2 className="section-title">Quel matériau choisir ?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary-600 md:mt-4 md:text-lg">Comparez les principales caractéristiques de nos matériaux d’impression 3D pour identifier la solution adaptée à votre projet : prototype, pièce technique, élément décoratif ou fabrication en série.</p>
            </div>
            <div
              className="overflow-x-auto rounded-xl border border-secondary-200 bg-white"
              onScroll={(event) => setTableHasScrolled(event.currentTarget.scrollLeft > 0)}
            >
              <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left text-sm">
                <thead className="bg-secondary-100 text-secondary-900">
                  <tr>
                    {['Techno', 'Matériau', 'Précision', 'Résistance mécanique', 'Flexibilité', 'Finition', 'Coût relatif', 'Applications recommandées'].map((heading, index) => (
                      <th
                        key={heading}
                        style={index === 0 ? firstColumnStyle : index === 1 ? secondColumnStyle : undefined}
                        className={`px-2 py-4 font-semibold ${index === 0 ? 'sticky z-30 whitespace-nowrap bg-secondary-100 text-[11px]' : ''} ${index === 1 ? `sticky z-20 whitespace-nowrap bg-secondary-100 text-[11px] ${stickyDivider}` : ''}`}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary-200 text-secondary-700">
                  {comparison.map((row) => (
                    <tr key={`${row.technology}-${row.material}`}>
                      <td style={firstColumnStyle} className="sticky z-20 whitespace-nowrap bg-white px-2 py-4 font-semibold text-secondary-900">{row.technology}</td>
                      <td style={secondColumnStyle} className={`sticky z-10 whitespace-nowrap bg-white px-2 py-4 font-medium text-secondary-900 ${stickyDivider}`}>{row.material}</td>
                      <td className="px-4 py-4">{row.precision}</td>
                      <td className="px-4 py-4">{row.resistance}</td>
                      <td className="px-4 py-4">{row.flexibility}</td>
                      <td className="px-4 py-4">{row.finish}</td>
                      <td className="px-4 py-4">{row.cost}</td>
                      <td className="px-4 py-4">{row.applications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-secondary-500">Caractéristiques indicatives, variables selon les matériaux, les paramètres d’impression et les finitions.</p>
          </div>
        </section>
      )}

      {faqs && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="section-title text-center mb-10">Questions fréquentes sur l’impression 3D</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-secondary-200 bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-semibold text-secondary-900">
                    {faq.question}
                    <svg className="w-5 h-5 shrink-0 text-secondary-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-5 leading-relaxed text-secondary-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {showCta && (
        <section className="bg-primary-600 py-16 md:py-20">
          <div className="container-custom text-center">
            <Link href="/contact" className="inline-flex rounded-lg bg-white px-7 py-4 text-lg font-semibold text-primary-700 transition-colors hover:bg-primary-50">
              Demander un devis
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
