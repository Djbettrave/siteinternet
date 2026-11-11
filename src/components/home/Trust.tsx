'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'

const brands = [
  { name: 'Dior', logo: '/images/logos/clients/dior.svg', width: 120 },
  { name: 'Chanel', logo: '/images/logos/clients/chanel.svg', width: 100 },
  { name: 'Guerlain', logo: '/images/logos/clients/guerlain.svg', width: 120 },
  { name: 'Hugo Boss', logo: '/images/logos/clients/hugo-boss.svg', width: 100 },
  { name: 'Cacharel', logo: '/images/logos/clients/cacharel.svg', width: 120 },
  { name: 'Coty', logo: '/images/logos/clients/coty.svg', width: 300 },
  { name: 'Kiehl\'s', logo: '/images/logos/clients/kiehls.svg', width: 90 },
  { name: 'Rimowa', logo: '/images/logos/clients/rimowa.svg', width: 100 },
  { name: 'Samsung', logo: '/images/logos/clients/samsung.svg', width: 100 },
  { name: 'Balmain', logo: '/images/logos/clients/balmain.svg', width: 110 },
  { name: 'Berluti', logo: '/images/logos/clients/berluti.svg', width: 110 },
  { name: 'Intersnack', logo: '/images/logos/clients/intersnack.png', width: 110 },
  { name: 'Byredo', logo: '/images/logos/clients/byredo.svg', width: 100 },
  { name: 'Polène', logo: '/images/logos/clients/polene.jpeg', width: 100 },
]

const partners = [
  { name: 'BPI France', logo: '/images/logos/partenaires/bpifrance.png' },
  { name: 'French Tech', logo: '/images/logos/partenaires/french-tech.png' },
  { name: 'CCI France', logo: '/images/logos/partenaires/cci-france.png' },
  { name: 'Made in 92', logo: '/images/logos/partenaires/made-in-92.jpg' },
  { name: 'Technowest', logo: '/images/logos/partenaires/technowest.png' },
]

function MissingLogo() {
  return (
    <svg className="h-8 w-8 text-secondary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2 1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

export default function Trust() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = useCallback((logoPath: string) => {
    setImageErrors((previous) => new Set(previous).add(logoPath))
  }, [])

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-custom">
        <section aria-labelledby="references-title">
          <h2 id="references-title" className="mb-8 text-center text-3xl font-semibold tracking-[-0.035em] text-secondary-900 md:mb-10 md:text-4xl">
            Références
          </h2>

          <div className="grid grid-cols-3 items-center gap-x-3 gap-y-5 sm:gap-x-6 lg:grid-cols-7 lg:gap-x-8">
            {brands.map((brand) => (
              <div key={brand.name} className="flex h-20 items-center justify-center px-3 sm:h-24">
                {imageErrors.has(brand.logo) ? (
                  <MissingLogo />
                ) : (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={brand.width}
                    height={48}
                    className="h-auto max-h-12 w-full max-w-[150px] object-contain opacity-75 transition-opacity duration-200 hover:opacity-100"
                    onError={() => handleImageError(brand.logo)}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-secondary-100 pt-14 md:mt-20 md:pt-16" aria-labelledby="partners-title">
          <h2 id="partners-title" className="mb-8 text-center text-3xl font-semibold tracking-[-0.035em] text-secondary-900 md:mb-10 md:text-4xl">
            Partenaires
          </h2>

          <div className="grid grid-cols-3 items-center gap-x-4 gap-y-6 sm:gap-x-7 lg:grid-cols-5">
            {partners.map((partner) => (
              <div key={partner.name} className="flex h-16 items-center justify-center px-3 sm:h-20">
                {imageErrors.has(partner.logo) ? (
                  <MissingLogo />
                ) : (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={48}
                    className="h-auto max-h-12 w-full max-w-[160px] object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
                    onError={() => handleImageError(partner.logo)}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <p className="mx-auto mt-14 max-w-3xl border-t border-secondary-100 pt-6 text-center text-[11px] leading-relaxed text-secondary-400 md:mt-16 md:text-xs">
          <span className="font-medium text-secondary-500">Note de transparence — </span>
          Certaines références présentées correspondent à des projets réalisés par Inphenix en sous-traitance ou en partenariat technique, pour le compte d'agences ou de prestataires intermédiaires.
        </p>
      </div>
    </section>
  )
}
