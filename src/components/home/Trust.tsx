'use client'

import { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

// Marques pour lesquelles nous avons réalisé des projets
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

// Partenaires institutionnels
const partners = [
  { name: 'BPI France', logo: '/images/logos/partenaires/bpifrance.png' },
  { name: 'French Tech', logo: '/images/logos/partenaires/french-tech.png' },
  { name: 'CCI France', logo: '/images/logos/partenaires/cci-france.png' },
  { name: 'Made in 92', logo: '/images/logos/partenaires/made-in-92.jpg' },
  { name: 'Technowest', logo: '/images/logos/partenaires/technowest.png' },
]

export default function Trust() {
  const [brandsRef, brandsApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 3 },
    []
  )
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const scrollPrev = useCallback(() => brandsApi?.scrollPrev(), [brandsApi])
  const scrollNext = useCallback(() => brandsApi?.scrollNext(), [brandsApi])

  const handleImageError = useCallback((logoPath: string) => {
    console.error(`Failed to load image: ${logoPath}`)
    setImageErrors(prev => new Set(prev).add(logoPath))
  }, [])

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-custom">
        {/* Références */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-500">Inphenix System</p>
          <h2 className="section-title">Références</h2>
        </div>

        {/* Carousel marques */}
        <div className="relative border-y border-secondary-200 py-5">
          {/* Flèche gauche */}
          <button
            onClick={scrollPrev}
            className="absolute -left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-secondary-500 transition-colors hover:text-secondary-900"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            onClick={scrollNext}
            className="absolute -right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-secondary-500 transition-colors hover:text-secondary-900"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="mx-7 overflow-hidden" ref={brandsRef}>
            <div className="flex">
              {brands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-none w-1/4 md:w-1/5 lg:w-[11.11%] px-2"
                >
                  <div className="flex h-14 items-center justify-center px-3 grayscale opacity-60 transition-all duration-300 hover:opacity-100">
                    {imageErrors.has(brand.logo) ? (
                      <svg className="w-8 h-8 text-secondary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={brand.width}
                        height={32}
                        className="object-contain max-h-8"
                        onError={() => handleImageError(brand.logo)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-5 text-center text-xs leading-relaxed text-secondary-400">
          Certains projets ont été réalisés en tant que sous-traitant ou partenaire technique, pour le compte d'agences ou de prestataires intermédiaires.
        </p>

        {/* Section Partenaires */}
        <div className="mt-14 border-t border-secondary-100 pt-10">
          <div className="mb-6 text-center">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary-500">Partenaires</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-5">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-10 w-28 items-center justify-center grayscale opacity-55 transition-all duration-300 hover:opacity-100"
              >
                {imageErrors.has(partner.logo) ? (
                  <svg className="w-8 h-8 text-secondary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ) : (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={90}
                    height={32}
                    className="object-contain max-h-8"
                    onError={() => handleImageError(partner.logo)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
