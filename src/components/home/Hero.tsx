import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-[#fbfcfd]">
      <Image
        src="/images/atelier/atelier-imprimantes-3d-grand-format-suresnes.jpeg"
        alt="Atelier d’impression 3D Inphenix System à Suresnes"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.42] grayscale-[5%]"
      />
      <div className="absolute inset-0 bg-white/46" aria-hidden="true" />

      <div className="container-custom relative">
        <div className="pt-16 pb-12 lg:pt-20 lg:pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight text-secondary-950 md:text-5xl lg:mt-8 lg:text-6xl">
              Conception &amp; <br />
              fabrication sur mesure
            </h1>

            <p className="mb-8 mt-6 text-xl text-secondary-700">
              Bureau d’études et atelier de fabrication à Suresnes.
            </p>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
              <Link href="/realisations" className="inline-flex items-center gap-3 rounded-sm bg-secondary-950 px-6 py-3.5 text-[15px] font-medium tracking-[0.01em] text-white transition-colors hover:bg-primary-800">
                Voir les réalisations <span aria-hidden="true" className="text-base font-normal">↗</span>
              </Link>
              <Link href="/contact" className="group inline-flex items-center gap-2 border-b border-secondary-700 pb-1 text-[15px] font-medium text-secondary-900 transition-colors hover:border-primary-700 hover:text-primary-700">
                Nous contacter <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-1.5 border-t border-secondary-300/70 pt-7 text-sm text-secondary-600">
              <svg className="h-4 w-4 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7-5.4 7-12a7 7 0 10-14 0c0 6.6 7 12 7 12z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000-5 2.5 2.5 0 000 5z" />
              </svg>
              <span className="whitespace-nowrap font-semibold text-secondary-800">Atelier à Suresnes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
