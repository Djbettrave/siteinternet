import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { getAllGuides, getGuide, guideCategories, isGuideCategory } from '@/lib/guides'
import { CauseSolution, DiagnosticBlock, GuideImage, GuideLayout, GuidePhotoSlot, GuideSection, ParameterBlock, RelatedGuides, TipBlock } from '@/components/guides/GuideBlocks'

const components = { CauseSolution, DiagnosticBlock, GuideImage, GuidePhotoSlot, GuideSection, ParameterBlock, RelatedGuides, TipBlock }

export function generateStaticParams() {
  return getAllGuides().map((guide) => ({ category: guide.category, slug: guide.slug }))
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }): Metadata {
  if (!isGuideCategory(params.category)) return {}
  const guide = getGuide(params.category, params.slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.description, alternates: { canonical: `https://www.inphenix-system.fr/guides/${params.category}/${params.slug}` } }
}

export default function GuideArticlePage({ params }: { params: { category: string; slug: string } }) {
  if (!isGuideCategory(params.category)) notFound()
  const guide = getGuide(params.category, params.slug)
  if (!guide?.content) notFound()
  const category = guideCategories[params.category]
  const toc: [string, string][] = [['guide', 'Le guide']]
  const imageBase = `/images/guides/${params.category}/${params.slug}`

  return <GuideLayout category={category.shortName} title={guide.title} description={guide.description} readingTime={guide.readingTime ?? '5 min'} updatedAt={guide.updatedAt ?? '28 août 2026'} toc={toc}>{guide.image ? <GuideImage src={guide.image} alt={guide.imageAlt} caption={guide.imageCaption} priority /> : <GuidePhotoSlot path={`${imageBase}/${params.slug}.webp`} alt={guide.imageAlt} caption={guide.imageCaption} />}<div id="guide" className="scroll-mt-24"><MDXRemote source={guide.content} components={components} /></div></GuideLayout>
}
