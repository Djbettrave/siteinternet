import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden min-h-[calc(100vh-5rem)]">
      <div className="container-custom relative">
        <div className="pt-16 pb-12 lg:pt-20 lg:pb-16">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 mt-8">
              Impression 3D &{' '}
              <br />
              Fabrication sur mesure
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-secondary-300 mb-8">
              Prototypes, pièces techniques et productions en série, depuis notre atelier en Île-de-France.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://impression3d.inphenix-system.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Devis d'impression 3D instantané
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link href="/realisations" className="btn-outline border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Voir nos réalisations
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold text-sm lg:text-base">5/5</span>
                <span className="text-secondary-400 text-xs lg:text-sm">avis Google</span>
              </div>
              <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-secondary-400 text-xs lg:text-sm">
                <span className="text-white font-semibold">+300</span> projets
              </div>
              <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-secondary-400 text-xs lg:text-sm">
                <span className="text-white font-semibold">5+</span> secteurs d'expertise
              </div>
              <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-secondary-400 text-xs lg:text-sm flex items-center gap-1.5">
                <svg className="h-4 w-4 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7-5.4 7-12a7 7 0 10-14 0c0 6.6 7 12 7 12z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                </svg>
                <span className="text-white font-semibold whitespace-nowrap">Atelier à Suresnes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}
