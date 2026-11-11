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
      <section className="rounded-xl border border-primary-100 bg-primary-50 p-5 sm:p-8">
        <h1 className="sr-only">Guides impression 3D</h1>
        <h2 className="text-2xl font-semibold tracking-[-0.035em] text-primary-900 sm:text-3xl">Explorer par catégorie</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-secondary-600">Choisissez le sujet qui correspond à votre besoin.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {categories.map((slug) => {
            const category = guideCategories[slug]
            const count = getGuidesByCategory(slug).length
            return <Link key={slug} href={`/guides/${slug}`} className="group rounded-lg border border-primary-100 bg-white p-6 transition-colors hover:border-primary-300 sm:p-7"><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold tracking-[-0.025em] text-secondary-900">{category.name}</h3><span className="text-primary-700">↗</span></div><p className="mt-3 text-[13px] leading-6 text-secondary-600">{category.description}</p><p className="mt-5 text-[13px] italic text-secondary-500">{count} guides disponibles</p></Link>
          })}
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <div className="mb-7"><h2 className="text-xl font-semibold tracking-[-0.025em] text-secondary-900 sm:text-2xl">À la une</h2><p className="mt-2 text-[13px] leading-6 text-secondary-600">Retrouvez ici nos articles les plus consultés pour résoudre rapidement les problèmes les plus courants en impression 3D.</p></div>
        <div className="mx-auto max-w-4xl divide-y divide-secondary-200 border-y border-secondary-200">{featuredArticles.map((article, index) => <Link key={article.slug} href={`/guides/${article.category}/${article.slug}`} className="group grid gap-4 py-5 sm:grid-cols-[44px_minmax(0,1fr)_auto] sm:items-center"><span className="font-mono text-sm text-primary-700">{String(index + 1).padStart(2, '0')}</span><div><h3 className="text-lg font-semibold tracking-[-0.02em] text-secondary-900 group-hover:text-primary-700">{article.title}</h3><p className="mt-1 text-sm leading-6 text-secondary-600">{article.description}</p></div><span className="inline-flex items-center gap-2 text-sm font-medium text-secondary-900 group-hover:text-primary-700">Lire <Arrow /></span></Link>)}</div>
      </section>

      <section className="mt-16 border-t border-secondary-200 pt-8"><h2 className="text-lg font-semibold text-secondary-900">À propos de ces guides</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-secondary-600">Retrouvez des conseils pour l’impression 3D FDM et résine, la préparation de fichiers 3D, le maillage, les réglages de slicer et la résolution des défauts d’impression les plus courants.</p></section>
    </main>
  </>
}
