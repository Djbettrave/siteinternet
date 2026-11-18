import { Metadata } from 'next'
import Link from 'next/link'
import { sectorsList } from '@/data/sectors'

export const metadata: Metadata = {
  title: 'Nos Secteurs d\'Expertise',
  description: 'Découvrez nos expertises sectorielles en impression 3D et électronique : Retail, Luxe, Événementiel, Architecture, Robotique.',
  alternates: {
    canonical: 'https://www.inphenix-system.fr/secteurs',
  },
}

export default function SecteursPage() {
  return (
    <>
      <section className="bg-white pb-10 pt-8 md:pb-12 md:pt-12">
        <div className="container-custom max-w-5xl">
          <header className="text-center">
            <h1 className="text-3xl font-bold leading-tight text-secondary-900 md:text-4xl">Nos secteurs d’expertise</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-secondary-600 md:text-lg">
              Chaque secteur a ses exigences. Nous adaptons l’impression 3D, la conception et la fabrication aux contraintes de votre projet.
            </p>
          </header>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectorsList.map((sector) => (
              <Link
                key={sector.slug}
                href={`/secteurs/${sector.slug}`}
                className="group card p-8 hover:border-primary-200 transition-all hover:-translate-y-1"
              >
                {sector.icon && <div className="text-5xl mb-4">{sector.icon}</div>}
                <h2 className="text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {sector.name}
                </h2>
                <p className="text-secondary-600 mb-6">
                  {sector.subheadline}
                </p>
                <div className="mt-5 flex items-center justify-end text-xs font-semibold uppercase tracking-[0.08em] text-primary-600">
                  Découvrir
                  <svg className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
