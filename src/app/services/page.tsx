import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nos expertises | Inphenix System',
  description: 'Conception et fabrication, impression 3D, électronique et intégration : découvrez les expertises d’Inphenix System.',
  alternates: { canonical: 'https://www.inphenix-system.fr/services' },
}

type ExpertiseService = {
  name: string
  href?: string
  wide?: boolean
}

type ExpertiseCategory = {
  number: string
  title: string
  titleLines?: string[]
  href: string
  services: ExpertiseService[]
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    number: '01', title: 'Conception & fabrication', titleLines: ['Conception', '& fabrication'], href: '/conception-fabrication',
    services: [
      { name: 'Scan 3D', href: '/services/scan-3d' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Prototypage', href: '/services/prototypage' },
      { name: 'Découpe laser' },
      { name: 'Impression UV', href: '/services/impression-uv' },
    ],
  },
  {
    number: '02', title: 'Impression 3D', href: '/impression-3d',
    services: [
      { name: 'FDM', href: '/services/impression-3d/fdm' },
      { name: 'Résine', href: '/services/impression-3d/resine' },
      { name: 'Métal', href: '/services/impression-3d/metal' },
      { name: 'Grand format', href: '/services/impression-3d/grand-format' },
      { name: 'Impression en série', href: '/services/impression-3d/en-serie', wide: true },
    ],
  },
  {
    number: '03', title: 'Électronique & motorisation', titleLines: ['Électronique', '& motorisation'], href: '/services/electronique',
    services: [
      { name: 'Électronique', href: '/services/electronique' },
      { name: 'Motorisation', href: '/services/electronique' },
      { name: 'LED', href: '/services/electronique' },
      { name: 'Capteurs', href: '/services/electronique' },
    ],
  },
]

function PhotoPlaceholder({ alt }: { alt: string }) {
  return (
    <div
      className="flex aspect-[16/9] items-center justify-center border-b border-dashed border-secondary-300 bg-secondary-50 text-secondary-500"
      role="img"
      aria-label={alt}
    >
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 16m-6-12h.01M6 20h12a2 2 0 002-2V6a2 2 0 002 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-8 md:pb-24 md:pt-12">
        <div className="container-custom max-w-5xl">
          <header className="mb-6 text-center md:mb-10">
            <h1 className="text-3xl font-bold leading-tight text-secondary-900 md:text-4xl">Nos expertises</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-secondary-600 md:text-lg">De la conception à la fabrication, Inphenix System peut prendre en charge votre projet dans sa globalité. Basé à Suresnes, en Île-de-France, notre atelier réunit les savoir-faire nécessaires pour réaliser votre projet.</p>
          </header>

          <div className="grid gap-6 md:grid-cols-3 md:gap-6">
            {expertiseCategories.map((category) => (
              <section key={category.title} className="overflow-hidden rounded-xl border border-secondary-200 bg-white transition-transform duration-200 hover:-translate-y-1">
                <Link href={category.href} className="group block touch-manipulation transition-opacity hover:opacity-80 active:opacity-70" aria-label={`Voir ${category.title}`}>
                  <PhotoPlaceholder alt={`Photo à venir – ${category.title}`} />
                </Link>
                <div className="p-6 md:p-7">
                  <div className="flex min-h-[3.9rem] items-start justify-between gap-4">
                    <Link href={category.href} className="min-w-0 text-[clamp(1.05rem,4.4vw,1.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-secondary-900 transition-colors hover:text-primary-600 active:text-primary-600">
                      {category.titleLines ? category.titleLines.map((line) => <span key={line} className="block">{line}</span>) : category.title}
                    </Link>
                    <span className="shrink-0 font-mono text-sm text-primary-700">{category.number}</span>
                  </div>
                  <div className="mt-5 h-px w-full bg-secondary-400" />
                  <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm leading-5">
                  {category.services.map((service) => service.href ? (
                    <Link key={service.name} href={service.href} className={`flex min-h-11 items-center border-b border-secondary-100 px-1 text-secondary-700 transition-colors hover:border-primary-300 hover:text-primary-600 focus-visible:bg-primary-50 focus-visible:outline-none active:rounded-sm active:bg-primary-50 active:text-primary-600 ${service.wide ? 'col-span-2' : ''}`}>
                      {service.name}
                    </Link>
                  ) : (
                    <span key={service.name} className="flex min-h-11 items-center border-b border-secondary-100 px-1 text-secondary-500">{service.name}</span>
                  ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-20 md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Vous ne savez pas par où commencer ?</h2>
            <p className="mb-8 text-xl text-primary-100">Décrivez-nous votre projet. Nous vous orienterons vers les services adaptés à vos besoins.</p>
            <Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-600 transition-colors hover:bg-primary-50">Contactez-nous</Link>
          </div>
        </div>
      </section>
    </>
  )
}
