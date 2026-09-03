import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { getAllGuides, getGuide, guideCategories, isGuideCategory } from '@/lib/guides'
import { CauseSolution, DiagnosticBlock, GuideImage, GuideLayout, GuidePhotoSlot, GuideSection, ParameterBlock, RelatedGuides, TipBlock } from '@/components/guides/GuideBlocks'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

const components = { CauseSolution, DiagnosticBlock, GuideImage, GuideLayout, GuidePhotoSlot, GuideSection, ParameterBlock, RelatedGuides, TipBlock }

const businessLinksByCategory = {
  fdm: [{ href: '/services/impression-3d/fdm', label: 'Service d’impression 3D FDM', description: 'Confiez la fabrication de vos pièces fonctionnelles, prototypes et petites séries à notre atelier.' }],
  resine: [{ href: '/services/impression-3d/resine', label: 'Service d’impression 3D résine', description: 'Obtenez des pièces précises et détaillées avec une finition adaptée à votre projet.' }],
  'fichiers-3d': [{ href: '/services/modelisation-3d', label: 'Service de modélisation 3D', description: 'Nous pouvons préparer, corriger ou concevoir un fichier 3D prêt à fabriquer.' }],
} as const

const scan3dBusinessLink = { href: '/services/scan-3d', label: 'Service de scan 3D', description: 'Nous numérisons vos pièces et objets pour obtenir une base 3D exploitable et prête à être retravaillée.' }
const architectureBusinessLink = { href: '/secteurs/architecture', label: 'Impression 3D pour l’architecture', description: 'Pour une maquette, nous vous accompagnons de la préparation du fichier jusqu’à la fabrication.' }

const file3dBusinessLinks: Record<string, readonly { href: string; label: string; description: string }[]> = {
  'fichier-3d-trop-lourd': [...businessLinksByCategory['fichiers-3d'], scan3dBusinessLink],
  'maillage-3d': [...businessLinksByCategory['fichiers-3d'], scan3dBusinessLink],
  'nettoyer-reparer-fichier-3d': [...businessLinksByCategory['fichiers-3d'], scan3dBusinessLink],
  'logiciels-3d': [...businessLinksByCategory['fichiers-3d'], architectureBusinessLink],
}

const seoTitles: Record<string, string> = {
  'fdm/warping-adhesion-plateau': 'Warping : pièce 3D qui se décolle du plateau',
  'fdm/remplissage-patterns': 'Remplissage FDM : taux et motifs à choisir',
  'fdm/effet-escalier-pentes-spheres': 'Effet escalier : lisser pentes et sphères',
  'fdm/artefacts-surplombs-non-supportes': 'Artefacts surplombs : améliorer les zones non supportées',
  'fdm/supports-difficiles-a-retirer': 'Retirer des supports 3D sans abîmer la pièce',
  'fdm/sous-extrusion': 'Sous-extrusion : reconnaître et corriger le défaut',
  'fdm/stringing': 'Stringing : éviter les fils d’ange en impression 3D',
  'fichiers-3d/logiciels-3d': 'Créer un fichier 3D : quel logiciel choisir ?',
  'fichiers-3d/formats-stl-step-obj-3mf': 'STL, STEP, OBJ, 3MF : quel format 3D choisir ?',
  'fichiers-3d/aretes-non-fusionnees': 'Arêtes non fusionnées : réparer un maillage 3D',
  'fichiers-3d/tolerances-fdm': 'Tolérances FDM : assembler deux pièces imprimées',
  'resine/technologies-msla-dlp-sla': 'MSLA, DLP, SLA : choisir l’impression résine',
  'resine/calibrer-temps-exposition': 'Résine : calibrer le temps d’exposition',
  'resine/adhesion-plateau': 'Résine : résoudre l’adhérence au plateau',
  'resine/decrochage-en-cours-impression': 'Résine : éviter un décrochage en impression',
}

export function generateStaticParams() {
  return getAllGuides().map((guide) => ({ category: guide.category, slug: guide.slug }))
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }): Metadata {
  if (!isGuideCategory(params.category)) return {}
  const guide = getGuide(params.category, params.slug)
  if (!guide) return {}
  const seoTitle = seoTitles[`${params.category}/${params.slug}`] ?? guide.title
  return { title: seoTitle, description: guide.description, alternates: { canonical: `https://www.inphenix-system.fr/guides/${params.category}/${params.slug}` } }
}

export default function GuideArticlePage({ params }: { params: { category: string; slug: string } }) {
  if (!isGuideCategory(params.category)) notFound()
  const guide = getGuide(params.category, params.slug)
  if (!guide?.content) notFound()
  const category = guideCategories[params.category]
  const toc: [string, string][] = [['guide', 'Le guide']]
  const imageBase = `/images/guides/${params.category}/${params.slug}`
  const businessLinks = params.category === 'fichiers-3d' && params.slug === 'tolerances-fdm'
    ? businessLinksByCategory.fdm
    : params.category === 'fichiers-3d'
      ? file3dBusinessLinks[params.slug] ?? businessLinksByCategory['fichiers-3d']
      : businessLinksByCategory[params.category]

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Guides', path: '/guides' }, { name: category.name, path: `/guides/${params.category}` }, { name: guide.title, path: `/guides/${params.category}/${params.slug}` }]} />
      <GuideLayout category={category.shortName} title={guide.title} description={guide.description} readingTime={guide.readingTime ?? '5 min'} updatedAt={guide.updatedAt ?? '28 août 2026'} toc={toc} businessLinks={businessLinks}>
        {guide.image ? <GuideImage src={guide.image} alt={guide.imageAlt} caption={guide.imageCaption} priority /> : <GuidePhotoSlot path={`${imageBase}/${params.slug}.webp`} alt={guide.imageAlt} caption={guide.imageCaption} />}
        <div id="guide" className="scroll-mt-24"><MDXRemote source={guide.content} components={components} /></div>
      </GuideLayout>
    </>
  )
}
