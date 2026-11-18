import type { Metadata } from 'next'
import ServiceNavigationPage from '@/components/services/ServiceNavigationPage'

export const metadata: Metadata = {
  title: 'Impression 3D Paris & Île-de-France',
  description: 'Impression 3D professionnelle à Paris et en Île-de-France : FDM, résine, métal, grand format et fabrication en série. Découvrez nos solutions.',
  alternates: { canonical: 'https://www.inphenix-system.fr/impression-3d' },
}

const cards = [
  { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm', alt: 'Photo de réalisation Inphenix – Impression 3D FDM' },
  { name: 'Impression 3D Résine', href: '/services/impression-3d/resine', alt: 'Photo de réalisation Inphenix – Impression 3D Résine' },
  { name: 'Impression 3D Métal', href: '/services/impression-3d/metal', alt: 'Photo de réalisation Inphenix – Impression 3D Métal' },
  { name: 'Impression 3D Grand Format', href: '/services/impression-3d/grand-format', alt: 'Photo de réalisation Inphenix – Impression 3D Grand Format' },
  { name: 'Impression 3D en série', href: '/services/impression-3d/en-serie', alt: 'Photo de réalisation Inphenix – Impression 3D en série' },
]

const comparison = [
  { technology: 'FDM', material: 'PLA', precision: 'Bonne', resistance: 'Moyenne', flexibility: 'Faible', finish: 'Bonne', cost: '€', applications: 'Maquettes, prototypes visuels, décoration' },
  { technology: 'FDM', material: 'PETG', precision: 'Bonne', resistance: 'Bonne', flexibility: 'Modérée', finish: 'Bonne', cost: '€', applications: 'Pièces fonctionnelles, boîtiers, supports' },
  { technology: 'FDM', material: 'ABS', precision: 'Bonne', resistance: 'Bonne', flexibility: 'Faible', finish: 'Bonne', cost: '€€', applications: 'Boîtiers, pièces techniques, prototypes fonctionnels' },
  { technology: 'FDM', material: 'TPU', precision: 'Bonne', resistance: 'Bonne aux déformations', flexibility: 'Très élevée', finish: 'Moyenne', cost: '€€', applications: 'Joints, protections, pièces souples' },
  { technology: 'Résine', material: 'Standard', precision: 'Excellente', resistance: 'Variable', flexibility: 'Faible', finish: 'Excellente', cost: '€€', applications: 'Pièces détaillées, prototypes esthétiques' },
  { technology: 'Résine', material: 'Flexible', precision: 'Élevée', resistance: 'Bonne aux déformations', flexibility: 'Élevée', finish: 'Bonne', cost: '€€€', applications: 'Pièces souples, protections, joints et prototypes fonctionnels' },
  { technology: 'Métal', material: 'Métal', precision: 'Élevée', resistance: 'Très élevée selon alliage', flexibility: 'Faible', finish: 'Variable', cost: '€€€', applications: 'Pièces mécaniques, composants techniques' },
]

export default function Impression3DPage() {
  return (
    <ServiceNavigationPage
      title={'Les technologies\nd’impression 3D'}
      intro="Basé à Suresnes, Inphenix System accompagne vos projets d’impression 3D, du prototype à la production en série, à Paris, en Île-de-France et partout en France."
      cards={cards}
      afterCards={{
        title: 'Du fichier à la pièce',
        description: 'À partir d’un fichier 3D, d’un dessin ou d’un objet existant, nous choisissons la technique d’impression 3D adaptée à son usage : prototype, pièce décorative, maquette, petite série ou pièce fonctionnelle. Selon le projet, la pièce peut ensuite être poncée, peinte, assemblée ou intégrée à son environnement.',
      }}
      comparison={comparison}
      showCta
    />
  )
}
