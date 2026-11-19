import Image from 'next/image'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export type Print3DGalleryImage = {
  src: string
  alt: string
  fit?: 'cover' | 'contain'
  frame?: 'compact-landscape'
}

type Print3DHeroGalleryProps = {
  images?: Print3DGalleryImage[]
}

function GallerySlot({ image, className }: { image?: Print3DGalleryImage; className: string }) {
  if (!image) return <ImagePlaceholder ariaLabel="Emplacement image" className={className} />

  return (
    <div className={`relative overflow-hidden ${image.fit === 'contain' ? '' : 'rounded-2xl bg-secondary-100'} ${className}`}>
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className={image.fit === 'contain' ? 'object-contain' : 'object-cover'} />
    </div>
  )
}

/** Empty visual framework until the selected service images are added. */
export default function Print3DHeroGallery({ images = [] }: Print3DHeroGalleryProps) {
  if (images.length === 0) return <GallerySlot className="h-[280px] sm:h-[360px] lg:h-[min(54svh,520px)]" />

  if (images.length === 1) {
    const image = images[0]
    const frame = image.frame === 'compact-landscape'
      ? 'mx-auto aspect-[5/3] w-[92%]'
      : 'h-[280px] sm:h-[360px] lg:h-[min(54svh,520px)]'
    return <GallerySlot image={image} className={frame} />
  }

  if (images.length === 2) {
    return <div className="grid h-[360px] grid-cols-[1.45fr_1fr] gap-4 sm:h-[440px] lg:h-[min(54svh,520px)]"><GallerySlot image={images[0]} className="h-full" /><GallerySlot image={images[1]} className="h-full" /></div>
  }

  return (
    <div className="relative h-[280px] sm:h-[360px] lg:h-[min(54svh,520px)]" aria-label="Emplacements d’images">
      <div className="absolute left-0 top-[5%] h-[87%] w-[61%]"><GallerySlot image={images[0]} className="h-full w-full" /></div>
      <div className="absolute right-0 top-0 h-[45%] w-[35%]"><GallerySlot image={images[1]} className="h-full w-full" /></div>
      <div className="absolute bottom-0 right-0 h-[45%] w-[35%]"><GallerySlot image={images[2]} className="h-full w-full" /></div>
    </div>
  )
}
