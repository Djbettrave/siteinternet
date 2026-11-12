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
    description: 'Technologies FDM, résine, métal, grand format et série pour vos projets de fabrication additive.',
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
        name: 'Impression 3D Métal',
        description: 'Pièces métalliques techniques pour les applications nécessitant une forte résistance.',
        href: '/services/impression-3d/metal',
        features: ['Haute résistance', 'Pièces mécaniques', 'Alliages adaptés'],
      },
      {
        name: 'Impression Grand Format',
        description: 'Pièces jusqu\'à 85 cm en un seul bloc, sans limite par assemblage.',
        href: '/services/impression-3d/grand-format',
        features: ['85 cm monobloc', 'Événementiel', 'Maquettes XXL'],
      },
      {
        name: 'Impression 3D en série',
        description: 'Fabrication de pièces identiques, de la petite à la grande série.',
        href: '/services/impression-3d/en-serie',
        features: ['Petite et grande série', 'Sans moule', 'Tarifs dégressifs'],
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
      {
        name: 'Découpe laser',
        description: 'Découpe de pièces sur mesure à partir de vos fichiers, plans ou besoins de fabrication.',
        features: ['Pièces sur mesure', 'Découpe précise', 'Service à venir'],
      },
    ],
  },
  {
    title: 'Développement Produit',
    description: 'Accompagnement complet pour vos projets de développement.',
    services: [
      {
        name: 'Impression UV sur objet',
        description: 'Personnalisation de pièces, objets et supports compatibles.',
        href: '/services/impression-uv',
        features: ['Logos et visuels', 'Objets cylindriques', 'Petites et grandes séries'],
      },
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
      {/* Services */}
      <section className="bg-white pb-24 pt-10 md:pt-14">
        <div className="container-custom">
          <header className="mb-12 max-w-3xl md:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">Services</p>
            <h1 className="text-4xl font-bold tracking-[-0.04em] text-secondary-900 md:text-5xl">Les pôles d’expertise</h1>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">Impression 3D, conception, fabrication et développement produit : les expertises mobilisées selon votre projet.</p>
          </header>
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title} className={categoryIndex > 0 ? 'mt-20' : ''}>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">{category.title}</h2>
                <p className="text-secondary-600">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service) => {
                  const card = (
                    <>
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
                    {service.href ? (
                      <div className="flex items-center text-primary-600 font-medium">
                        En savoir plus
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    ) : (
                      <div className="text-secondary-500 font-medium">Service à venir</div>
                    )}
                    </>
                  )

                  const className = "group card p-8 transition-all hover:border-primary-200 hover:-translate-y-1"
                  return service.href ? (
                    <Link key={service.name} href={service.href} className={className}>{card}</Link>
                  ) : (
                    <div key={service.name} className={className}>{card}</div>
                  )
                })}
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
