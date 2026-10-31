import type { Metadata } from 'next'
import ServiceNavigationPage from '@/components/services/ServiceNavigationPage'

export const metadata: Metadata = {
  title: 'Conception & fabrication sur mesure à Paris | Inphenix',
  description: 'Scan 3D, modélisation 3D, découpe laser et prototypage sur mesure à Paris et en Île-de-France. Inphenix System accompagne vos projets de la conception à la fabrication.',
  alternates: { canonical: 'https://www.inphenix-system.fr/conception-fabrication' },
}

const cards = [
  { name: 'Scan 3D', href: '/services/scan-3d', alt: 'Photo de réalisation Inphenix – Scan 3D' },
  { name: 'Modélisation 3D', href: '/services/modelisation-3d', alt: 'Photo de réalisation Inphenix – Modélisation 3D' },
  { name: 'Découpe laser', alt: 'Photo de réalisation Inphenix – Découpe laser' },
  { name: 'Prototypage', href: '/services/prototypage', alt: 'Photo de réalisation Inphenix – Prototypage' },
]

export default function ConceptionFabricationPage() {
  return (
    <ServiceNavigationPage
      eyebrow="Conception & fabrication"
      title="Conception & fabrication sur mesure à Paris et en Île-de-France"
      intro="Inphenix System accompagne vos projets de conception et de fabrication sur mesure à Paris et en Île-de-France. Scan 3D, modélisation 3D, découpe laser et prototypage : nos équipes vous aident à transformer une idée, un fichier ou un objet existant en solution concrète."
      cards={cards}
    />
  )
}
