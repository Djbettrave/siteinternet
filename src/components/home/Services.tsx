import Link from 'next/link'

const services = [
  {
    title: 'Impression 3D',
    description: 'FDM, résine et grand format. Pièces fonctionnelles ou esthétiques, du prototype à la petite série.',
    href: '/services/impression-3d/fdm',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    features: ['FDM haute résistance', 'Résine haute précision', 'Grand format jusqu\'à 1m'],
  },
  {
    title: 'Scan & Modélisation 3D',
    description: 'Numérisation d\'objets existants et création de modèles 3D sur mesure pour tous vos besoins.',
    href: '/services/scan-3d',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    features: ['Scan haute définition', 'Rétro-ingénierie', 'Modélisation CAO'],
  },
  {
    title: 'Prototypage',
    description: 'Du concept au prototype fonctionnel. Itérations rapides pour valider vos idées avant production.',
    href: '/services/prototypage',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ['Délais courts', 'Multi-matériaux', 'Tests fonctionnels'],
  },
  {
    title: 'Électronique & Motorisation',
    description: 'Développement sur mesure de solutions électroniques et électromécaniques pour vos projets.',
    href: '/services/electronique',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    features: ['Circuits imprimés', 'Motorisation', 'Systèmes embarqués'],
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Nos expertises</h2>
          <p className="section-subtitle mx-auto">
            De la conception à la fabrication, pour des projets conçus sur mesure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group card p-8 hover:border-primary-200"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-xs font-medium text-secondary-500 bg-secondary-100 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex items-center text-primary-600 font-medium">
                En savoir plus
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary">
            Discutons de votre projet
          </Link>
        </div>
      </div>
    </section>
  )
}
