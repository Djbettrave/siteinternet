'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ProjectCategory, ProjectImage } from '@/types/project'

type RealisationsGalleryProps = {
  initialProjects: ProjectImage[]
}

export default function RealisationsGallery({ initialProjects }: RealisationsGalleryProps) {
  const projects = initialProjects
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('realisations')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isNavigatingCategory, setIsNavigatingCategory] = useState(false)
  const [hasPassedTitle, setHasPassedTitle] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const titleSectionRef = useRef<HTMLElement>(null)
  const filtersSectionRef = useRef<HTMLElement>(null)
  const projectsSectionRef = useRef<HTMLElement>(null)

  // Détecter la direction du scroll pour ajuster la position de la barre de filtres
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }

      const titleBottom = titleSectionRef.current?.getBoundingClientRect().bottom ?? Infinity
      setHasPassedTitle(titleBottom <= 80)

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const filteredProjects = projects.filter((project) => project.category === selectedCategory)

  const selectCategory = (category: ProjectCategory) => {
    if (category === selectedCategory) return

    setIsNavigatingCategory(true)
    window.dispatchEvent(new Event('inphenix-gallery-navigation-start'))
    setSelectedCategory(category)

    requestAnimationFrame(() => {
      const projectsTop = projectsSectionRef.current?.getBoundingClientRect().top
      const filtersHeight = filtersSectionRef.current?.getBoundingClientRect().height ?? 0

      if (projectsTop === undefined) return

      window.scrollTo({
        top: Math.max(0, window.scrollY + projectsTop - filtersHeight),
        behavior: 'smooth',
      })

      window.setTimeout(() => {
        setIsNavigatingCategory(false)
        setIsHeaderVisible(false)
        window.dispatchEvent(new Event('inphenix-gallery-navigation-end'))
      }, 850)
    })
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  // Cleanup scroll on unmount or lightbox close
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

  // Gestion du clavier pour le lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const filteredLength = projects.filter((project) => project.category === selectedCategory).length

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + filteredLength) % filteredLength)
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % filteredLength)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, projects, selectedCategory, closeLightbox])

  return (
    <>
      <section ref={titleSectionRef} className="bg-white pt-10 sm:pt-14">
        <div className="container-custom">
          <h1 className="text-3xl font-bold tracking-[-0.035em] text-secondary-900 sm:text-4xl">Nos réalisations</h1>
        </div>
      </section>

      {/* Filters */}
      <section ref={filtersSectionRef} className={`bg-white border-b border-secondary-200 sticky z-40 transition-all duration-300 ${
        isNavigatingCategory || !isHeaderVisible ? 'top-0' : 'top-20'
      }`}>
        <div className="container-custom">
          {hasPassedTitle && <p className="pt-5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary-500">Explorer par univers</p>}
          <nav className={`grid grid-cols-3 items-end gap-1 ${isHeaderVisible ? 'py-4' : 'py-3'}`} aria-label="Explorer les réalisations par univers">
            {([
              ['realisations', 'Réalisations'],
              ['fabrication', 'Fabrication'],
              ['atelier', 'L’atelier'],
            ] as const).map(([category, label]) => (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`border-b pb-3 text-center text-[11px] font-semibold tracking-[-0.01em] transition-colors sm:text-sm ${
                  selectedCategory === category
                    ? 'border-secondary-900 text-secondary-900'
                    : 'border-transparent text-secondary-400 hover:text-secondary-700'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsSectionRef} id="projects-section" className="bg-white py-2">
        <div className="container-custom px-2">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-secondary-600">
                Aucun projet ne correspond à ce filtre.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {filteredProjects.map((project, index) => (
                  <article key={project.id} className="group relative overflow-hidden bg-secondary-100">
                    <div
                      className="aspect-[4/3] relative overflow-hidden bg-secondary-100 cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={project.path}
                        alt={project.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: project.objectPosition || 'center' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                    </div>
                  </article>
                ))}
              </div>

              {/* CTA vers contact */}
              <div className="text-center mt-8 bg-secondary-100 rounded-2xl py-12 px-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Vous avez un projet similaire ?
                </h3>
                <p className="text-lg text-secondary-600 mb-6">
                  Nous vous accompagnons de la conception à la production.
                </p>
                <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                  Échanger avec un expert
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && filteredProjects[currentImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => closeLightbox()}
        >
          {/* Bouton fermer */}
          <button
            onClick={() => closeLightbox()}
            className="absolute top-4 right-4 text-white hover:text-secondary-300 transition-colors z-10"
            aria-label="Fermer"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Bouton précédent */}
          {filteredProjects.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentImageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
              aria-label="Image précédente"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Bouton suivant */}
          {filteredProjects.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentImageIndex((prev) => (prev + 1) % filteredProjects.length)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
              aria-label="Image suivante"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Contenu du lightbox */}
          <div
            className="relative max-w-7xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={filteredProjects[currentImageIndex].path}
                alt={filteredProjects[currentImageIndex].alt}
                width={1920}
                height={1080}
                className="h-auto max-h-[80vh] w-auto max-w-full object-contain"
                priority
              />
            </div>

            {/* Compteur */}
            {filteredProjects.length > 1 && (
              <div className="text-white/70 text-sm mt-4">
                {currentImageIndex + 1} / {filteredProjects.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
