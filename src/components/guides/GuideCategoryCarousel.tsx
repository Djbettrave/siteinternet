'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { GuideArticle } from '@/lib/guides'

function Arrow({ direction = 'right' }: { direction?: 'left' | 'right' }) {
  return <svg className={`h-4 w-4 ${direction === 'left' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6 6 6-6 6" /></svg>
}

function ImageFallback() {
  return <div className="flex h-full w-full items-end bg-[linear-gradient(140deg,#15251f_0%,#254f42_48%,#dce4df_48%,#f7f8f8_100%)] p-6"><span className="font-mono text-xs tracking-[0.16em] text-white/80">VISUEL À AJOUTER</span></div>
}

const carouselLabels: Record<string, string> = {
  'warping-adhesion-plateau': 'Warping',
  'remplissage-patterns': 'Remplissage',
  'effet-escalier-pentes-spheres': 'Effet escalier',
  'artefacts-surplombs-non-supportes': 'Surplombs',
  'supports-difficiles-a-retirer': 'Supports',
  'sous-extrusion': 'Sous-extrusion',
  stringing: 'Stringing',
  'logiciels-3d': 'Logiciels 3D',
  'formats-stl-step-obj-3mf': 'Formats 3D',
  'fichier-3d-trop-lourd': 'Fichier trop lourd',
  'maillage-3d': 'Maillage 3D',
  'aretes-non-fusionnees': 'Arêtes ouvertes',
  'nettoyer-reparer-fichier-3d': 'Réparer un fichier',
  'tolerances-fdm': 'Tolérances FDM',
  'technologies-msla-dlp-sla': 'Technologies résine',
  'calibrer-temps-exposition': 'Temps d’exposition',
  'adhesion-plateau': 'Adhérence plateau',
  'decrochage-en-cours-impression': 'Décrochage',
}

export function GuideCategoryCarousel({ category, categoryName, articles }: { category: string; categoryName: string; articles: GuideArticle[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<number[]>([])
  if (!articles.length) return null

  const active = articles[activeIndex]
  const hasImageError = imageErrors.includes(activeIndex)
  const goTo = (index: number) => setActiveIndex((index + articles.length) % articles.length)
  const markImageError = (index: number) => setImageErrors((current) => current.includes(index) ? current : [...current, index])

  return <section aria-label={`Guides ${categoryName}`} className="border border-[#E1E4E3] bg-white">
    <div className="flex gap-3 overflow-x-auto border-b border-[#E1E4E3] p-4 [scrollbar-width:thin]">
      {articles.map((article, index) => {
        const selected = index === activeIndex
        const failed = imageErrors.includes(index)
        return <button key={article.slug} type="button" onClick={() => goTo(index)} aria-label={`Afficher : ${article.title}`} aria-current={selected ? 'true' : undefined} className={`group w-28 shrink-0 text-center sm:w-36 ${selected ? 'text-[#0D7A5A]' : 'text-[#171717]'}`}>
          <span className={`relative block h-20 overflow-hidden rounded-sm border transition-all sm:h-24 ${selected ? 'border-2 border-[#0D7A5A] ring-2 ring-[#0D7A5A]/25 ring-offset-2' : 'border-[#DDE4E0] group-hover:border-[#0D7A5A]'}`}>
            {article.image && !failed ? <Image src={article.image} alt="" fill sizes="144px" className="object-cover" onError={() => markImageError(index)} /> : <ImageFallback />}
            <span className={`absolute left-0 top-0 px-2 py-1 font-mono text-[10px] font-semibold text-white ${selected ? 'bg-[#0D7A5A]/90' : 'bg-[#171717]/75'}`}>{String(index + 1).padStart(2, '0')}</span>
            {selected && <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#0D7A5A] text-xs font-bold text-white shadow-sm" aria-hidden="true">✓</span>}
          </span>
          <span className="mt-2 block w-full truncate text-center text-xs font-semibold">{carouselLabels[article.slug] ?? article.title}</span>
        </button>
      })}
    </div>
    <div className="mt-10 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[#E1E4E3] bg-[#F2F5F3] lg:h-full lg:min-h-[440px] lg:aspect-auto lg:border-b-0 lg:border-r">
        {active.image && !hasImageError ? <Image src={active.image} alt={active.imageAlt} fill priority sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" onError={() => markImageError(activeIndex)} /> : <ImageFallback />}
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.13em] text-[#0D7A5A] backdrop-blur">{categoryName} · {String(activeIndex + 1).padStart(2, '0')}</div>
      </div>
      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0D7A5A]">Guide pratique</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">{active.title}</h2>
        <p className="mt-4 text-sm leading-6 text-[#666]">{active.description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap items-center gap-4 text-sm text-[#8A8A8A]"><span>{active.readingTime ?? 'Guide pratique'}</span><span aria-hidden="true">·</span><span>{String(activeIndex + 1).padStart(2, '0')} / {String(articles.length).padStart(2, '0')}</span></div><div className="flex gap-2"><button type="button" onClick={() => goTo(activeIndex - 1)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#D6DEDA] text-[#171717] transition-colors hover:border-[#0D7A5A] hover:text-[#0D7A5A]" aria-label="Guide précédent"><Arrow direction="left" /></button><button type="button" onClick={() => goTo(activeIndex + 1)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#D6DEDA] text-[#171717] transition-colors hover:border-[#0D7A5A] hover:text-[#0D7A5A]" aria-label="Guide suivant"><Arrow /></button></div></div>
        <div className="mt-auto flex justify-center pt-10"><Link href={`/guides/${category}/${active.slug}`} className="group inline-flex items-center gap-2 rounded-md bg-[#0D7A5A] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#09684C]">Voir la solution <Arrow /></Link></div>
      </div>
    </div>
  </section>
}
