import type { Metadata } from 'next'
import Link from 'next/link'
import { getGuidesByCategory, guideCategories, type GuideCategorySlug } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Guides impression 3D & fichiers 3D',
  description: 'Guides pratiques Inphenix : résoudre les problèmes fréquents en impression 3D FDM et résine, préparer et réparer vos fichiers 3D.',
  alternates: { canonical: 'https://www.inphenix-system.fr/guides' },
}

function Arrow() {
  return <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6 6 6-6 6" /></svg>
}

export default function GuidesPage() {
  const categories = Object.keys(guideCategories) as GuideCategorySlug[]
  const featuredArticles = getGuidesByCategory('fdm')

  return <>
    <main className="mx-auto max-w-[1200px] px-5 py-10 sm:py-14 lg:px-8">
      <section>
        <h1 className="sr-only">Guides impression 3D</h1>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0D7A5A]">Explorer par catégorie</p>
        <div className="mx-auto mt-4 grid max-w-5xl gap-4 md:grid-cols-3">
          {categories.map((slug) => {
            const category = guideCategories[slug]
            const count = getGuidesByCategory(slug).length
            return <Link key={slug} href={`/guides/${slug}`} className="group rounded-md border border-[#E1E4E3] bg-white p-7 transition-colors hover:border-[#CADCD5] sm:p-8"><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold tracking-[-0.025em] text-[#171717]">{category.name}</h3><span className="text-[#0D7A5A]">↗</span></div><p className="mt-3 text-sm leading-6 text-[#666]">{category.description}</p><p className="mt-5 text-center text-sm italic text-[#8A8A8A]">{count} guides disponibles</p></Link>
          })}
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <div className="mb-7"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0D7A5A]">À la une</p><p className="mt-3 text-sm leading-6 text-[#666]">Retrouvez ici nos articles les plus consultés pour résoudre rapidement les problèmes les plus courants en impression 3D.</p></div>
        <div className="mx-auto max-w-4xl divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">{featuredArticles.map((article, index) => <Link key={article.slug} href={`/guides/${article.category}/${article.slug}`} className="group grid gap-4 py-5 sm:grid-cols-[44px_minmax(0,1fr)_auto] sm:items-center"><span className="font-mono text-sm text-[#0D7A5A]">{String(index + 1).padStart(2, '0')}</span><div><h3 className="text-lg font-semibold tracking-[-0.02em] text-[#171717] group-hover:text-[#0D7A5A]">{article.title}</h3><p className="mt-1 text-sm leading-6 text-[#666]">{article.description}</p></div><span className="inline-flex items-center gap-2 text-sm font-medium text-[#171717] group-hover:text-[#0D7A5A]">Lire <Arrow /></span></Link>)}</div>
      </section>

      <section className="mt-16 border-t border-[#E8E8E8] pt-8"><h2 className="text-lg font-semibold text-[#171717]">À propos de ces guides</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-[#666]">Retrouvez des conseils pour l’impression 3D FDM et résine, la préparation de fichiers 3D, le maillage, les réglages de slicer et la résolution des défauts d’impression les plus courants.</p></section>
    </main>
  </>
}
