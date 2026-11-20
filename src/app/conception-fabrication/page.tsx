import type { Metadata } from 'next'
import ServiceNavigationPage from '@/components/services/ServiceNavigationPage'

export const metadata: Metadata = {
  title: 'Conception & fabrication sur mesure à Paris',
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
      title={'Nos expertises en\nconception & fabrication'}
      intro="À Paris et en Île-de-France, Inphenix System accompagne vos projets sur mesure : scan 3D, modélisation, découpe laser et prototypage. Votre projet, de l’idée à sa fabrication."
      cards={cards}
      afterCards={{
        description: 'Nos activités de conception et de fabrication couvrent des besoins très différents, depuis la création d’une pièce entièrement nouvelle jusqu’à la reproduction ou la modification d’un objet existant. Nous travaillons aussi bien sur des éléments techniques, des mécanismes et des assemblages que sur des formes plus complexes ou des réalisations créatives. Selon la nature du projet, nous pouvons réaliser une modélisation 3D, numériser une pièce, effectuer des découpes précises dans différents matériaux ou fabriquer un prototype destiné à tester une solution concrète. Chaque intervention tient compte des dimensions, des matériaux et de l’utilisation prévue.',
      }}
    />
  )
}
