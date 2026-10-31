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
}

function PhotoPlaceholder({ alt, featured = false }: { alt: string; featured?: boolean }) {
  return (
    <div
      className={`${featured ? 'aspect-[16/5] md:aspect-[16/6]' : 'aspect-[4/3]'} flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-secondary-300 bg-secondary-50 text-secondary-500`}
      role="img"
      aria-label={alt}
    >
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 16m-6-12h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-[11px] font-medium text-center px-3">Emplacement photo</span>
    </div>
  )
}

function ServiceCard({ card }: { card: ServiceCard }) {
  const isPrintingCard = card.name.startsWith('Impression 3D ')
  const label = isPrintingCard ? card.name.replace('Impression 3D ', '') : card.name
  const content = (
    <div className="relative overflow-hidden rounded-xl">
      <PhotoPlaceholder alt={card.alt} featured={card.featured} />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-secondary-900/90 via-secondary-900/55 to-transparent px-3 pb-3 pt-10 text-white">
        <h2 className="min-w-0 leading-tight">
          {isPrintingCard && <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-primary-100">Impression 3D</span>}
          <span className="block text-base font-semibold md:text-xl">{label}</span>
        </h2>
        {card.href && (
          <svg className="mb-0.5 h-5 w-5 shrink-0 text-white transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  )

  const className = `group block transition-all ${card.href ? 'hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2' : 'cursor-default'} ${card.featured ? 'col-span-2' : ''}`

  return card.href ? <Link href={card.href} className={className}>{content}</Link> : <div className={className}>{content}</div>
}

export default function ServiceNavigationPage({ eyebrow, title, intro, cards, comparison, faqs, showCta = false }: ServiceNavigationPageProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-300 mb-5">{eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">{title}</h1>
          <p className="text-lg md:text-xl leading-relaxed text-secondary-200 max-w-3xl">{intro}</p>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="section-title text-center mb-6 md:mb-10">Nos solutions</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {cards.map((card) => <ServiceCard key={card.name} card={card} />)}
          </div>
        </div>
      </section>

      {comparison && (
        <section className="py-16 md:py-24 bg-secondary-50">
          <div className="container-custom">
            <div className="max-w-3xl mb-10">
              <h2 className="section-title">Quel matériau choisir pour votre impression 3D ?</h2>
              <p className="section-subtitle">Comparez les principales caractéristiques de nos matériaux d’impression 3D pour identifier la solution adaptée à votre projet : prototype, pièce technique, élément décoratif ou fabrication en série.</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-secondary-200 bg-white">
              <table className="w-full min-w-[860px] text-left text-sm">
                <thead className="bg-secondary-100 text-secondary-900">
                  <tr>
                    {['Techno', 'Matériau', 'Précision', 'Résistance mécanique', 'Flexibilité', 'Finition', 'Coût relatif', 'Applications recommandées'].map((heading, index) => (
                      <th key={heading} style={index === 1 ? { left: '72px', minWidth: '96px' } : index === 0 ? { minWidth: '72px' } : undefined} className={`px-3 py-4 font-semibold ${index < 2 ? 'sticky z-20 bg-secondary-100' : ''} ${index === 1 ? 'shadow-[4px_0_6px_-5px_rgba(15,23,42,0.45)]' : ''}`}>{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary-200 text-secondary-700">
                  {comparison.map((row) => (
                    <tr key={`${row.technology}-${row.material}`}>
                      <td style={{ minWidth: '72px' }} className="sticky left-0 z-10 bg-white px-3 py-4 font-semibold text-secondary-900">{row.technology}</td>
                      <td style={{ left: '72px', minWidth: '96px' }} className="sticky z-10 bg-white px-3 py-4 font-medium text-secondary-900 shadow-[4px_0_6px_-5px_rgba(15,23,42,0.45)]">{row.material}</td>
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
