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
  { name: 'Impression 3D en série', href: '/services/impression-3d/en-serie', alt: 'Photo de réalisation Inphenix – Impression 3D en série', featured: true },
]

const comparison = [
  { technology: 'FDM', material: 'PLA', precision: 'Bonne', resistance: 'Moyenne', flexibility: 'Faible', finish: 'Bonne', cost: '€', applications: 'Maquettes, prototypes visuels, décoration' },
  { technology: 'FDM', material: 'PETG', precision: 'Bonne', resistance: 'Bonne', flexibility: 'Modérée', finish: 'Bonne', cost: '€', applications: 'Pièces fonctionnelles, boîtiers, supports' },
  { technology: 'FDM', material: 'TPU', precision: 'Bonne', resistance: 'Bonne aux déformations', flexibility: 'Très élevée', finish: 'Moyenne', cost: '€€', applications: 'Joints, protections, pièces souples' },
  { technology: 'Résine', material: 'Résine standard', precision: 'Excellente', resistance: 'Variable', flexibility: 'Faible', finish: 'Excellente', cost: '€€', applications: 'Pièces détaillées, prototypes esthétiques' },
  { technology: 'Métal', material: 'Métal', precision: 'Élevée', resistance: 'Très élevée selon alliage', flexibility: 'Faible', finish: 'Variable', cost: '€€€', applications: 'Pièces mécaniques, composants techniques' },
]

const faqs = [
  {
    question: 'Quelle technologie d’impression 3D choisir pour une pièce résistante ?',
    answer: 'Le choix dépend des contraintes mécaniques, de l’environnement d’utilisation et de la géométrie. Le PETG convient à de nombreuses pièces fonctionnelles, le TPU aux pièces souples et certains alliages métalliques aux applications fortement sollicitées.',
  },
  {
    question: 'Quelle différence entre l’impression 3D FDM et résine ?',
    answer: 'L’impression 3D FDM dépose des couches successives de filament thermoplastique. L’impression résine utilise une photopolymérisation permettant généralement d’obtenir des détails plus fins et des surfaces plus lisses. Le choix dépend des dimensions, de la précision recherchée et de l’utilisation finale.',
  },
  {
    question: 'Peut-on fabriquer des pièces en série par impression 3D ?',
    answer: 'Oui. L’impression 3D permet de produire des petites et moyennes séries sans moule de fabrication traditionnel. Elle est particulièrement intéressante pour les pièces personnalisées, les géométries complexes et les productions nécessitant une certaine flexibilité.',
  },
]

export default function Impression3DPage() {
  return (
    <ServiceNavigationPage
      eyebrow="Impression 3D"
      title="Impression 3D professionnelle à Paris et en Île-de-France"
      intro="Inphenix System vous accompagne dans vos projets d’impression 3D à Paris et en Île-de-France. Du prototypage à la production en série, découvrez nos solutions d’impression 3D FDM, résine, métal et grand format, adaptées aux besoins des professionnels."
      cards={cards}
      comparison={comparison}
      faqs={faqs}
      showCta
    />
  )
}
