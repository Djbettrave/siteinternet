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

function CategoryIcon({ category }: { category: GuideCategorySlug }) {
  const paths = {
    fdm: <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="m4 12 8 4 8-4" /><path d="m4 17 8 4 8-4" /></>,
    'fichiers-3d': <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5" /><path d="m8.5 15 3.5-2 3.5 2v3L12 20l-3.5-2v-3Z" /></>,
    resine: <><path d="M12 3s-4 4.3-4 7a4 4 0 0 0 8 0c0-2.7-4-7-4-7Z" /><path d="M5 19h14" /><path d="M8 16.5v2.5m8-2.5v2.5" /></>,
  } as const

  return <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700"><svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[category]}</svg></span>
}

export default function GuidesPage() {
  const categories = Object.keys(guideCategories) as GuideCategorySlug[]
  const featuredArticles = getGuidesByCategory('fdm')
  const categoryPreviews: Record<GuideCategorySlug, string> = {
    fdm: 'Adhérence, remplissage, qualité de surface…',
    'fichiers-3d': 'Formats, maillage, réparation de fichier…',
    resine: 'Exposition, supports, adhérence…',
  }

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
            return <Link key={slug} href={`/guides/${slug}`} className="group flex min-h-[306px] flex-col rounded-xl border border-primary-200 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50/50 hover:shadow-[0_8px_20px_rgba(15,37,64,0.10)] focus-visible:-translate-y-0.5 focus-visible:border-primary-300 focus-visible:bg-primary-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 sm:min-h-[334px] sm:p-7"><div className="mt-2 flex items-center gap-4"><CategoryIcon category={slug} /><h3 className="text-xl font-semibold tracking-[-0.025em] text-secondary-900">{category.name}</h3></div><p className="mt-7 text-[13px] leading-6 text-secondary-600">{category.description}</p><p className="mt-5 text-[12px] italic leading-5 text-secondary-500">{categoryPreviews[slug]}</p><div className="mt-auto flex justify-center pt-6"><span className="inline-flex items-center gap-1.5 text-[13px] italic text-secondary-500">{count} guides disponibles <span className="text-lg leading-none text-primary-700 transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></span></div></Link>
          })}
        </div>
        <div className="mt-7 pt-5">
          <h2 className="text-base font-semibold text-secondary-900">Ce que vous trouverez dans ces guides</h2>
          <p className="mt-2 text-sm leading-7 text-secondary-600">Retrouvez des conseils pratiques sur l’impression 3D FDM et résine, la préparation des fichiers 3D, le maillage, les réglages de slicer et la résolution des défauts d’impression les plus courants.</p>
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <div className="mb-7"><h2 className="text-xl font-semibold tracking-[-0.025em] text-secondary-900 sm:text-2xl">À la une</h2><p className="mt-2 text-[13px] leading-6 text-secondary-600">Retrouvez ici nos articles les plus consultés :</p></div>
        <div className="mx-auto max-w-4xl divide-y divide-secondary-200 border-y border-secondary-200">{featuredArticles.map((article, index) => <Link key={article.slug} href={`/guides/${article.category}/${article.slug}`} className="group grid gap-4 py-5 sm:grid-cols-[44px_minmax(0,1fr)_auto] sm:items-center"><span className="font-mono text-sm text-primary-700">{String(index + 1).padStart(2, '0')}</span><div><h3 className="text-lg font-semibold tracking-[-0.02em] text-secondary-900 group-hover:text-primary-700">{article.title}</h3><p className="mt-1 text-sm leading-6 text-secondary-600">{article.description}</p></div><span className="inline-flex items-center gap-2 text-sm font-medium text-secondary-900 group-hover:text-primary-700">Lire <Arrow /></span></Link>)}</div>
      </section>
    </main>
  </>
}
