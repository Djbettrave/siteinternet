import Image from 'next/image'
import type { ReactNode } from 'react'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

interface SectorHeroProps {
  headline: ReactNode
  subheadline: ReactNode
  image?: {
    src: string
    alt: string
    variant?: 'landscape' | 'cutout' | 'wide-cutout'
    focus?: 'upper'
  }
  imageOnLeft?: boolean
  centerText?: boolean
  placeholderLabel?: string
}

export default function SectorHero({
  headline,
  subheadline,
  image,
  imageOnLeft = false,
  centerText = false,
  placeholderLabel = 'Photo de couverture du secteur',
}: SectorHeroProps) {
  const layout = imageOnLeft
    ? 'lg:grid-cols-[28rem_minmax(0,1fr)]'
    : 'lg:grid-cols-[minmax(0,1fr)_28rem]'
  const framedImage = 'overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(24,31,42,0.14)]'
  const imageFrames = {
    cutout: 'aspect-[720/593] max-w-[320px]',
    'wide-cutout': 'aspect-[4/3]',
    landscape: `aspect-[11/6] max-w-[400px] ${framedImage}`,
  }
  const imageFrame = image?.variant ? imageFrames[image.variant] : `aspect-[4/5] ${framedImage}`
  const imageFit = image?.variant
    ? 'object-contain'
    : image?.focus === 'upper'
      ? 'object-cover object-[center_45%]'
      : 'object-cover object-center'
  const imageWidth = image?.variant === 'cutout' ? 320 : image?.variant === 'landscape' ? 400 : 448

  return (
    <section className="relative overflow-hidden bg-[#f6f6f4]">
      <div className={`container-custom grid gap-10 py-12 lg:items-center lg:py-16 ${layout}`}>
        <div className={`min-w-0 max-w-3xl [overflow-wrap:anywhere] ${imageOnLeft ? 'lg:order-2' : ''} ${centerText ? 'mx-auto text-center' : ''}`}>
          <h1 className={`mb-6 text-3xl font-bold leading-tight text-secondary-950 sm:text-4xl md:text-5xl ${centerText ? 'text-balance' : ''}`}>
            {headline}
          </h1>
          <p className={`mb-8 text-lg text-secondary-600 sm:max-w-2xl sm:text-xl ${centerText ? 'mx-auto' : ''}`}>
            {subheadline}
          </p>
        </div>
        <div className={`mx-auto flex w-full max-w-md items-center justify-center lg:aspect-[4/5] ${imageOnLeft ? 'lg:order-1' : ''}`}>
          {image ? (
            <div className={`relative w-full ${imageFrame}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes={`(min-width: ${imageWidth + 48}px) ${imageWidth}px, calc(100vw - 32px)`}
                className={imageFit}
              />
            </div>
          ) : (
            <ImagePlaceholder ariaLabel={placeholderLabel} className="aspect-[4/5] w-full shadow-lg" />
          )}
        </div>
      </div>
    </section>
  )
}
