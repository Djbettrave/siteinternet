import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type TocItem = [string, string]

interface GuideLayoutProps {
  category: string
  title: string
  description: string
  readingTime: string
  updatedAt: string
  toc: TocItem[]
  children: ReactNode
}

function Arrow() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

export function GuideLayout({ category, title, description, readingTime, updatedAt, toc = [], children }: GuideLayoutProps) {
  return (
    <article className="bg-white">
      <header className="border-b border-[#E8E8E8]">
        <div className="mx-auto max-w-[1200px] px-5 py-6 sm:py-8 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0D7A5A]">{category} · Guide pratique</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-3xl">{title}</h1>
            <p className="mt-3 text-base leading-7 text-[#666]">{description}</p>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8A8A8A]"><span>Guide atelier</span><span>·</span><span>{readingTime} de lecture</span><span>·</span><span>Mis à jour le {updatedAt}</span></div>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-5 py-10 sm:py-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[190px_minmax(0,680px)_220px] lg:justify-between">
          <aside className="hidden self-start lg:sticky lg:top-24 lg:block">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#8A8A8A]">Sur cette page</p>
            <nav className="space-y-3">{toc.map(([id, label]) => <a key={id} href={`#${id}`} className="block border-l-2 border-transparent pl-3 text-sm text-[#666] transition-colors hover:border-[#18A77B] hover:text-[#0D7A5A]">{label}</a>)}</nav>
          </aside>
          <main className="guide-content min-w-0">{children}</main>
          <aside className="hidden lg:block"><div className="rounded-md border border-[#E1E4E3] bg-[#F7F8F8] p-5"><p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#0D7A5A]">Besoin d’aide ?</p><p className="mt-3 text-sm leading-6 text-[#666]">Une pièce, un fichier ou un réglage vous bloque ? Notre atelier peut vous orienter.</p><Link href="/contact" className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#171717] hover:text-[#0D7A5A]">Nous contacter <Arrow /></Link></div></aside>
        </div>
      </div>

      <section className="border-y border-[#E8E8E8] bg-[#F7F8F8]"><div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-5 py-14 sm:py-16 md:flex-row md:items-center md:justify-between lg:px-8"><div><h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#171717]">Un projet d’impression 3D ?</h2><p className="mt-3 max-w-2xl leading-7 text-[#666]">Notre bureau d’études vous accompagne de la conception jusqu’à la fabrication de vos pièces.</p></div><Link href="/contact" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#0D7A5A] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#09684C]">Parler de votre projet <Arrow /></Link></div></section>
    </article>
  )
}

export function GuideSection({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-24 pt-16"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0D7A5A]">{eyebrow}</p><h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#171717] sm:text-3xl">{title}</h2><div className="mt-5 space-y-5 text-sm leading-7 text-[#666]">{children}</div></section>
}

export function DiagnosticBlock({ symptoms = [] }: { symptoms?: string[] }) {
  return <aside className="my-10 rounded-md border border-[#DDE7E4] bg-[#F4F8F7] p-6"><h3 className="text-lg font-semibold text-[#171717]">Symptômes</h3><ul className="mt-4 space-y-3">{symptoms.map((item) => <li key={item} className="flex gap-3 text-[15px] text-[#47514E]"><span className="font-semibold text-[#0D7A5A]">✓</span>{item}</li>)}</ul></aside>
}

export function CauseSolution({ number, title, solution, children }: { number: string; title: string; solution: string; children: ReactNode }) {
  return <div className="my-6 grid gap-4 rounded-md border border-[#E8E8E8] p-6 sm:grid-cols-[40px_1fr]"><span className="font-mono text-sm text-[#0D7A5A]">{number}</span><div><h3 className="text-lg font-semibold text-[#171717]">{title}</h3><div className="mt-2 leading-7 text-[#666]">{children}</div><div className="mt-4 border-t border-[#E8E8E8] pt-4"><span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A8A8A]">Solution recommandée</span><p className="mt-2 text-[15px] leading-7 text-[#333]">{solution}</p></div></div></div>
}

export function TipBlock({ children }: { children: ReactNode }) {
  return <aside className="my-10 flex gap-4 border-l-2 border-[#18A77B] bg-[#F7F8F8] p-6"><svg className="mt-0.5 h-5 w-5 shrink-0 text-[#0D7A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 18h6m-5 3h4m-8.5-7.5A6.5 6.5 0 1118.5 13c-.94.94-1.5 1.7-1.5 3.5h-10c0-1.8-.56-2.56-1.5-3.5z" /></svg><div><h3 className="text-sm font-semibold text-[#171717]">Conseil Inphenix</h3><div className="mt-2 text-[15px] leading-7 text-[#666]">{children}</div></div></aside>
}

export function ParameterBlock({ title, parameters = [] }: { title: string; parameters?: [string, string][] }) {
  return <aside className="my-10 overflow-hidden rounded-md border border-[#E1E4E3] bg-[#F7F8F8]"><div className="border-b border-[#E1E4E3] px-6 py-4"><span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0D7A5A]">Réglage de départ</span><h3 className="mt-1 font-semibold text-[#171717]">{title}</h3></div><dl>{parameters.map(([label, value]) => <div key={label} className="flex justify-between border-b border-[#E8E8E8] px-6 py-3 last:border-0"><dt className="text-sm text-[#666]">{label}</dt><dd className="font-mono text-sm font-medium text-[#171717]">{value}</dd></div>)}</dl></aside>
}

export function GuideImage({ src, alt, caption, priority = false }: { src: string; alt: string; caption: string; priority?: boolean }) {
  return <figure className="mt-10 mb-16"><div className="relative aspect-[16/9] overflow-hidden rounded-md border border-[#E8E8E8] bg-[#F7F8F8]"><Image src={src} alt={alt} fill sizes="(min-width: 1024px) 680px, 100vw" className="object-cover" priority={priority} /></div><figcaption className="mt-4 text-center text-sm leading-6 text-[#8A8A8A]">{caption}</figcaption></figure>
}

export function GuidePhotoSlot({ path, alt, caption }: { path: string; alt: string; caption: string }) {
  return <figure className="my-10 overflow-hidden rounded-md border border-dashed border-[#B9D5CC] bg-[#F4F8F7]"><div className="flex aspect-[16/9] flex-col items-center justify-center p-8 text-center"><svg className="h-8 w-8 text-[#0D7A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.5-4.5a2 2 0 012.83 0L14 14.17m0 0 1.5-1.5a2 2 0 012.83 0L20 16m-4-8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><p className="mt-4 text-sm font-medium text-[#171717]">Photo ou capture à ajouter</p><code className="mt-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs text-[#0D7A5A]">{path}</code></div><figcaption className="border-t border-[#DDE7E4] px-5 py-3 text-sm leading-6 text-[#66716D]">Texte alternatif recommandé : {alt}<br />Légende : {caption}</figcaption></figure>
}

export function RelatedGuides() {
  return <section className="mt-20 border-t border-[#E8E8E8] pt-12"><h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#171717]">Guides associés</h2><div className="mt-6 divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]"><Link href="/guides" className="group flex items-center justify-between py-5 text-sm font-medium text-[#171717] hover:text-[#0D7A5A]">Explorer tous les guides <Arrow /></Link><Link href="/services/impression-3d/fdm" className="group flex items-center justify-between py-5 text-sm font-medium text-[#171717] hover:text-[#0D7A5A]">Service d’impression 3D FDM <Arrow /></Link></div></section>
}
