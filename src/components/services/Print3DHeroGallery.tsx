import Image from 'next/image'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export type Print3DGalleryImage = {
  src: string
  alt: string
}

type Print3DHeroGalleryProps = {
  images?: Print3DGalleryImage[]
}

function GallerySlot({ image, className }: { image?: Print3DGalleryImage; className: string }) {
  if (!image) return <ImagePlaceholder ariaLabel="Emplacement image" className={className} />

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-secondary-100 ${className}`}>
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
    </div>
  )
}

/** Empty visual framework until the selected service images are added. */
export default function Print3DHeroGallery({ images = [] }: Print3DHeroGalleryProps) {
  if (images.length === 1) return <GallerySlot image={images[0]} className="h-[400px] sm:h-[510px] lg:h-[590px]" />

  if (images.length === 2) {
    return <div className="grid h-[400px] grid-cols-[1.45fr_1fr] gap-4 sm:h-[510px] lg:h-[590px]"><GallerySlot image={images[0]} className="h-full" /><GallerySlot image={images[1]} className="h-full" /></div>
  }

  return (
    <div className="relative h-[400px] sm:h-[510px] lg:h-[590px]" aria-label="Emplacements d’images">
      <div className="absolute left-0 top-[5%] h-[87%] w-[61%]"><GallerySlot image={images[0]} className="h-full w-full" /></div>
      <div className="absolute right-0 top-0 h-[45%] w-[35%]"><GallerySlot image={images[1]} className="h-full w-full" /></div>
      <div className="absolute bottom-0 right-0 h-[45%] w-[35%]"><GallerySlot image={images[2]} className="h-full w-full" /></div>
    </div>
  )
}
