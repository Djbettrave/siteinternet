'use client'

import Image from 'next/image'
import { useState } from 'react'
import { seriesImages, type SeriesImage } from '@/data/seriesImages'
export { seriesImages }

function Lightbox({ image, className = '', priority = false }: { image: SeriesImage; className?: string; priority?: boolean }) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = seriesImages[activeIndex]

  const openGallery = () => {
    setActiveIndex(Math.max(0, seriesImages.findIndex((item) => item.src === image.src)))
    setOpen(true)
  }

  return (
    <>
      <button type="button" onClick={openGallery} className={`group relative block h-full w-full overflow-hidden bg-secondary-100 text-left focus:outline-none focus:ring-4 focus:ring-primary-300 ${className}`} aria-label={`Agrandir : ${image.alt}`}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={priority} sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
      </button>
      {open && activeImage && (
        <div role="dialog" aria-modal="true" aria-label={activeImage.caption} className="fixed inset-0 z-[70] grid place-items-center bg-secondary-950/90 p-5 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="relative max-h-full w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setOpen(false)} className="absolute -right-1 -top-11 grid h-9 w-9 place-items-center rounded-full bg-white text-2xl leading-none text-secondary-900" aria-label="Fermer l’image">×</button>
            <div className="relative flex items-center justify-center">
              {activeIndex > 0 && <button type="button" onClick={() => setActiveIndex((index) => index - 1)} className="absolute left-0 z-10 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-white text-2xl text-secondary-900 shadow-lg" aria-label="Voir la réalisation précédente">‹</button>}
              <Image src={activeImage.src} alt={activeImage.alt} width={activeImage.width} height={activeImage.height} sizes="95vw" className="max-h-[82vh] w-auto max-w-full rounded-sm object-contain" />
              {activeIndex < seriesImages.length - 1 && <button type="button" onClick={() => setActiveIndex((index) => index + 1)} className="absolute right-0 z-10 grid h-11 w-11 translate-x-1/2 place-items-center rounded-full bg-white text-2xl text-secondary-900 shadow-lg" aria-label="Voir la réalisation suivante">›</button>}
            </div>
            <p className="pt-3 text-center text-sm text-white">{activeImage.caption}</p>
          </div>
        </div>
      )}
    </>
  )
}

export function SeriesHeroGallery() {
  return (
    <div className="relative h-[400px] sm:h-[510px] lg:h-[590px]" aria-label="Exemples de productions en série">
      <div className="absolute left-0 top-[5%] h-[87%] w-[61%]"><Lightbox image={seriesImages[0]} priority /></div>
      <div className="absolute right-0 top-0 h-[45%] w-[35%]"><Lightbox image={seriesImages[1]} /></div>
      <div className="absolute bottom-0 right-0 h-[45%] w-[35%]"><Lightbox image={seriesImages[2]} /></div>
    </div>
  )
}

export function SeriesInlineVisual({ image, className = '' }: { image: SeriesImage; className?: string }) {
  return <Lightbox image={image} className={className} />
}

export function SeriesExtraGallery() {
  const [showAll, setShowAll] = useState(false)
  const extraImages = seriesImages.slice(5)
  if (!extraImages.length) return null

  return (
    <section className="border-t border-secondary-200 pt-10">
      <div className={`grid gap-4 sm:grid-cols-2 ${showAll ? '' : 'max-h-[420px] overflow-hidden'}`}>
        {extraImages.map((image) => <Lightbox key={image.src} image={image} className="aspect-[4/3]" />)}
      </div>
      {!showAll && <button type="button" onClick={() => setShowAll(true)} className="mt-7 inline-flex items-center gap-4 border border-secondary-800 px-5 py-3 text-sm font-semibold text-secondary-900 transition hover:bg-secondary-900 hover:text-white">Voir toutes les réalisations <span aria-hidden="true">↓</span></button>}
    </section>
  )
}
