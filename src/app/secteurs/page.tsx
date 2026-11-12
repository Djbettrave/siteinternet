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
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos secteurs d'expertise
            </h1>
            <p className="text-xl text-secondary-300">
              Chaque secteur a ses exigences. Nous adaptons nos solutions
              d'impression 3D et d'électronique à vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-white">
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
                <div className="mt-6 flex items-center text-primary-600 font-medium">
                  Découvrir
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="section-title mb-6">Vous ne trouvez pas votre secteur ?</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Nous accompagnons tous types de projets. Contactez-nous pour discuter
              de vos besoins spécifiques.
            </p>
            <Link href="/contact" className="btn-primary">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
