import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GuideCategoryCarousel } from '@/components/guides/GuideCategoryCarousel'
import { getGuidesByCategory, guideCategories, isGuideCategory, type GuideCategorySlug } from '@/lib/guides'

export function generateStaticParams() {
  return Object.keys(guideCategories).map((category) => ({ category }))
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  if (!isGuideCategory(params.category)) return {}
  const category = guideCategories[params.category]
  return {
    title: `${category.name} : guides et problèmes fréquents`,
    description: category.description,
    alternates: { canonical: `https://www.inphenix-system.fr/guides/${params.category}` },
  }
}

export default function GuideCategoryPage({ params }: { params: { category: string } }) {
  if (!isGuideCategory(params.category)) notFound()
  const categorySlug = params.category as GuideCategorySlug
  const category = guideCategories[categorySlug]
  const articles = getGuidesByCategory(categorySlug)
  const selectorTitle = categorySlug === 'fichiers-3d' ? 'Choisissez le sujet que vous souhaitez préparer' : 'Choisissez le problème que vous observez'
  const selectorDescription = categorySlug === 'fichiers-3d' ? 'Faites défiler les sujets les plus courants et ouvrez le guide correspondant pour préparer, nettoyer ou optimiser votre fichier.' : 'Faites défiler les situations les plus courantes et ouvrez le guide correspondant pour accéder aux réglages et aux solutions.'

  return <main className="mx-auto max-w-[1200px] px-5 py-8 sm:py-10 lg:px-8">
      <>
        <h1 className="sr-only">{category.name}</h1>
        <nav className="flex flex-wrap gap-2" aria-label="Changer de catégorie de guide">{(Object.keys(guideCategories) as GuideCategorySlug[]).map((slug) => <Link key={slug} href={`/guides/${slug}`} aria-current={slug === categorySlug ? 'page' : undefined} className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${slug === categorySlug ? 'border-[#0D7A5A] bg-[#0D7A5A] text-white' : 'border-[#E1E4E3] text-[#666] hover:border-[#CADCD5] hover:text-[#171717]'}`}>{guideCategories[slug].shortName}</Link>)}</nav>
        <div>
          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.035em] text-[#171717] sm:text-3xl lg:whitespace-nowrap">{selectorTitle}</h2>
          <p className="mt-4 leading-7 text-[#666]">{selectorDescription}</p>
        </div>
        <div className="mt-10"><GuideCategoryCarousel category={categorySlug} categoryName={category.shortName} articles={articles} /></div>
        <section className="mt-16 border-t border-[#E8E8E8] pt-8"><h2 className="text-lg font-semibold text-[#171717]">À propos des guides {category.shortName}</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-[#666]">{category.description} Retrouvez des explications pratiques, des réglages de départ et des conseils pour préparer vos fichiers ou améliorer vos impressions.</p></section>
      </>
    </main>
}
