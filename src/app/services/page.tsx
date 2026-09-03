import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services d’impression 3D sur mesure',
  description: 'Impression 3D FDM, résine, grand format XXL, scan 3D, modélisation et prototypage sur mesure. Devis instantané gratuit.',
  alternates: {
    canonical: 'https://www.inphenix-system.fr/services',
  },
}

const serviceCategories = [
  {
    title: 'Impression 3D',
    description: 'Technologies FDM, résine et grand format pour tous vos besoins de fabrication additive.',
    services: [
      {
        name: 'Impression 3D FDM',
        description: 'Pièces résistantes et fonctionnelles en filament thermoplastique.',
        href: '/services/impression-3d/fdm',
        features: ['Résistance mécanique', 'Large choix matériaux', 'Économique'],
      },
      {
        name: 'Impression 3D Résine',
        description: 'Précision extrême et surfaces lisses pour détails fins.',
        href: '/services/impression-3d/resine',
        features: ['Précision 0.025mm', 'Joaillerie', 'Moules cire perdue'],
      },
      {
        name: 'Impression Grand Format',
        description: 'Pièces jusqu\'à 85 cm en un seul bloc, sans limite par assemblage.',
        href: '/services/impression-3d/grand-format',
        features: ['85 cm monobloc', 'Événementiel', 'Maquettes XXL'],
      },
    ],
  },
  {
    title: 'Numérisation & Conception',
    description: 'De l\'objet physique au fichier 3D, et de l\'idée au modèle.',
    services: [
      {
        name: 'Scan 3D',
        description: 'Numérisation haute précision d\'objets existants.',
        href: '/services/scan-3d',
        features: ['Rétro-ingénierie', 'Reproduction', 'Archivage'],
      },
      {
        name: 'Modélisation 3D',
        description: 'Création de modèles 3D sur mesure, prêts pour l\'impression.',
        href: '/services/modelisation-3d',
        features: ['De l\'idée au fichier', 'CAO pro', 'Multi-formats'],
      },
    ],
  },
  {
    title: 'Développement Produit',
    description: 'Accompagnement complet pour vos projets de développement.',
    services: [
      {
        name: 'Prototypage',
        description: 'Du concept au prototype fonctionnel, itérations rapides.',
        href: '/services/prototypage',
        features: ['Validation rapide', 'Multi-technologies', 'Conseil'],
      },
      {
        name: 'Électronique & Motorisation',
        description: 'Solutions électroniques et électromécaniques sur mesure.',
        href: '/services/electronique',
        features: ['PCB sur mesure', 'Motorisation', 'Systèmes embarqués'],
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Impression 3D & fabrication sur mesure
            </h1>
            <p className="text-xl text-secondary-300">
              FDM, résine, grand format XXL, scan 3D et prototypage — une expertise complète pour donner vie à vos projets les plus ambitieux.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title} className={categoryIndex > 0 ? 'mt-20' : ''}>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">{category.title}</h2>
                <p className="text-secondary-600">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group card p-8 hover:border-primary-200 transition-all hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs font-medium text-secondary-500 bg-secondary-100 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-primary-600 font-medium">
                      En savoir plus
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-600">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vous ne savez pas par où commencer ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Décrivez-nous votre projet. Nous vous orienterons vers
              les services adaptés à vos besoins.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
