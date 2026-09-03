import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Viewer3D from '@/components/home/Viewer3D'
import Trust from '@/components/home/Trust'
import FAQ from '@/components/home/FAQ'

export const metadata: Metadata = {
  title: 'Impression 3D Grand Format Paris & Île-de-France | Inphenix',
  description: 'Impression 3D grand format et sur mesure en Île-de-France : FDM, résine et pièces monobloc. Atelier à Suresnes (92), devis gratuit.',
  alternates: {
    canonical: 'https://www.inphenix-system.fr',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Viewer3D />
      <Trust />
      <FAQ />
    </>
  )
}
