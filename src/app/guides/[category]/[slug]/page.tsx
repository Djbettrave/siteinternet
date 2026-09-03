import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { getAllGuides, getGuide, guideCategories, isGuideCategory } from '@/lib/guides'
import { CauseSolution, DiagnosticBlock, GuideImage, GuideLayout, GuidePhotoSlot, GuideSection, ParameterBlock, RelatedGuides, TipBlock } from '@/components/guides/GuideBlocks'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

const components = { CauseSolution, DiagnosticBlock, GuideImage, GuideLayout, GuidePhotoSlot, GuideSection, ParameterBlock, RelatedGuides, TipBlock }

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

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Guides', path: '/guides' }, { name: category.name, path: `/guides/${params.category}` }, { name: guide.title, path: `/guides/${params.category}/${params.slug}` }]} />
      <GuideLayout category={category.shortName} title={guide.title} description={guide.description} readingTime={guide.readingTime ?? '5 min'} updatedAt={guide.updatedAt ?? '28 août 2026'} toc={toc}>
        {guide.image ? <GuideImage src={guide.image} alt={guide.imageAlt} caption={guide.imageCaption} priority /> : <GuidePhotoSlot path={`${imageBase}/${params.slug}.webp`} alt={guide.imageAlt} caption={guide.imageCaption} />}
        <div id="guide" className="scroll-mt-24"><MDXRemote source={guide.content} components={components} /></div>
      </GuideLayout>
    </>
  )
}
