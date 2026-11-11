import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Inphenix System à Suresnes | Impression 3D et fabrication',
  description: 'Découvrez Inphenix System, atelier de fabrication à Suresnes, près de Paris, créé en 2022. Impression 3D, électronique, modélisation et finitions sur mesure en Île-de-France.',
  alternates: {
    canonical: 'https://www.inphenix-system.fr/qui-sommes-nous',
  },
}

const values = [
  {
    title: 'Expertise technique',
    description: 'Une maîtrise approfondie de l\'impression 3D et de l\'électronique, constamment mise à jour avec les dernières technologies.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', // Ampoule (idée/expertise)
  },
  {
    title: 'Réactivité',
    description: 'Réponse sous 24h garantie. Nous comprenons l\'importance des délais dans vos projets.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z', // Éclair (rapidité)
  },
  {
    title: 'Sur mesure',
    description: 'Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4', // Sliders (personnalisation)
  },
  {
    title: 'Qualité',
    description: 'Contrôle qualité rigoureux sur chaque pièce. Nous ne livrons que ce dont nous sommes fiers.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Badge check (qualité)
  },
]

const stats = [
  { value: '+300', label: 'Projets réalisés' },
  { value: '5+', label: 'Secteurs d\'expertise' },
  { value: '24h', label: 'Délai de réponse' },
  { value: '5/5', label: 'Avis Google' },
]

const capabilities = [
  {
    category: 'Impression 3D',
    items: ['FDM multi-matériaux', 'Résine haute précision', 'Grand format jusqu\'à 85 cm', 'Post-traitement et finitions'],
  },
  {
    category: 'Électronique',
    items: ['Conception de PCB', 'Motorisation', 'Systèmes embarqués', 'Programmation'],
  },
  {
    category: 'Conception & fabrication',
    items: ['Scan 3D', 'Modélisation CAO', 'Prototypage', 'Conseil technique'],
  },
]

export default function QuiSommesNousPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Qui sommes-nous ?
            </h1>
            <p className="text-xl text-secondary-300">
              Un bureau d'étude passionné par la fabrication et l'innovation,
              au service de vos projets les plus ambitieux.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Notre histoire</h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  Basé à Suresnes, aux portes de Paris, <strong className="text-secondary-900">Inphenix System</strong> accompagne les marques, agences et entreprises qui souhaitent transformer une idée, un objet ou un projet technique en une pièce concrète.
                </p>
                <p>
                  Impression 3D, électronique, modélisation et finitions se réunissent dans notre atelier d’Île-de-France pour concevoir, fabriquer et finaliser des prototypes, des installations et des productions sur mesure.
                </p>
                <p>
                  Créé en 2022, Inphenix System développe une approche directe : comprendre l’intention du projet, trouver la bonne solution de fabrication et livrer une pièce prête à être utilisée, présentée ou produite.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/atelier/atelier-imprimantes-3d-grand-format-suresnes.jpeg"
                alt="Parc d’imprimantes 3D grand format dans l’atelier Inphenix System à Suresnes, près de Paris"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos valeurs</h2>
            <p className="section-subtitle mx-auto">
              Ce qui guide notre travail au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 text-center border border-secondary-200 hover:border-primary-300 transition-colors">
                {value.icon && (
                  <svg className="w-12 h-12 mx-auto mb-4 text-secondary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                )}
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">De l’idée à la pièce finie</h2>
            <p className="section-subtitle mx-auto">
              Une même équipe réunit les savoir-faire nécessaires pour concevoir, fabriquer et finaliser votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.category} className="rounded-2xl border border-[#C9D5E3] bg-white p-8 shadow-[0_6px_18px_rgba(15,37,64,0.055)] transition-all duration-200 hover:border-primary-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">{cap.category}</h3>
                <ul className="space-y-3">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-secondary-600">
                      <span className="flex-shrink-0 text-primary-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-primary-600 py-12 sm:py-14">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-200 sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="section-title mb-6">Travaillons ensemble</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Vous avez un projet ? Une idée ? Une question ?
              Nous sommes là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contactez-nous
              </Link>
              <Link href="/realisations" className="btn-outline">
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
