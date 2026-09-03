'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ProjectImage } from '@/types/project'

type FilterStatus = 'all' | 'completed' | 'process'

// Mapping des services vers leurs URLs
const serviceUrlMap: Record<string, string> = {
  'Impression 3D FDM': '/services/impression-3d/fdm',
  'Impression 3D Résine': '/services/impression-3d/resine',
  'Impression Grand Format': '/services/impression-3d/grand-format',
  'Scan 3D': '/services/scan-3d',
  'Modélisation 3D': '/services/modelisation-3d',
  'Prototypage': '/services/prototypage',
  'Électronique & Motorisation': '/services/electronique',
}

export default function RealisationsPage() {
  const [projects, setProjects] = useState<ProjectImage[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>('completed')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    // Charger les projets depuis l'API avec timeout
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000) // 10s timeout

    fetch('/api/projects', { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects || [])
        setLoading(false)
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.error('Timeout lors du chargement des projets')
        } else {
          console.error('Erreur lors du chargement des projets:', error)
        }
        setLoading(false)
      })
      .finally(() => clearTimeout(timeout))

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [])

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

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const filteredProjects = projects.filter((project) => {
    if (selectedStatus === 'all') return true
    return project.status === selectedStatus
  })

  // Scroll vers le haut quand le filtre change
  useEffect(() => {
    // Ne pas scroller au premier chargement
    if (projects.length === 0) return

    // Scroller vers le haut de la page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedStatus, projects.length])

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

    const filteredLength = projects.filter((project) => {
      if (selectedStatus === 'all') return true
      return project.status === selectedStatus
    }).length

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
  }, [lightboxOpen, projects, selectedStatus, closeLightbox])

  return (
    <>
      <section className="bg-white pt-10 sm:pt-14">
        <div className="container-custom">
          <h1 className="text-3xl font-bold tracking-[-0.035em] text-secondary-900 sm:text-4xl">Réalisations en impression 3D</h1>
          <p className="mt-3 max-w-2xl text-secondary-600">Découvrez nos projets d’impression 3D, de prototypage, de modélisation et de fabrication sur mesure.</p>
        </div>
      </section>

      {/* Filters */}
      <section className={`bg-white border-b border-secondary-200 sticky z-40 transition-all duration-300 ${
        isHeaderVisible ? 'top-20' : 'top-0'
      }`}>
        <div className="container-custom">
          <nav className="flex items-center justify-center gap-8 py-4" aria-label="Filtres des projets">
            <button
              onClick={() => setSelectedStatus('completed')}
              className={`text-sm font-semibold transition-colors pb-1.5 border-b-2 ${
                selectedStatus === 'completed'
                  ? 'text-primary-600 border-primary-600'
                  : 'text-secondary-700 border-transparent hover:text-primary-600 hover:border-primary-300'
              }`}
            >
              Projets clients
            </button>
            <button
              onClick={() => setSelectedStatus('process')}
              className={`text-sm font-semibold transition-colors pb-1.5 border-b-2 ${
                selectedStatus === 'process'
                  ? 'text-primary-600 border-primary-600'
                  : 'text-secondary-700 border-transparent hover:text-primary-600 hover:border-primary-300'
              }`}
            >
              Notre atelier
            </button>
            <button
              onClick={() => setSelectedStatus('all')}
              className={`text-sm font-semibold transition-colors pb-1.5 border-b-2 ${
                selectedStatus === 'all'
                  ? 'text-primary-600 border-primary-600'
                  : 'text-secondary-700 border-transparent hover:text-primary-600 hover:border-primary-300'
              }`}
            >
              Toutes les photos
            </button>
          </nav>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects-section" className="py-2 bg-white">
        <div className="container-custom px-2">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-900"></div>
              <p className="text-secondary-600 mt-4">Chargement des projets...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-secondary-600">
                Aucun projet ne correspond à ce filtre.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                {filteredProjects.map((project, index) => (
                  <article key={project.id} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Image avec aspect ratio 4:3 */}
                    <div
                      className="aspect-[4/3] relative overflow-hidden bg-secondary-100 cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={project.path}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: project.objectPosition || 'center' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Overlay au hover avec badges services */}
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/95 via-secondary-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        {/* Badges services avec liens */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          {(project.services.length > 0 ? project.services : ['Prototypage']).map((service, idx) => {
                            const serviceUrl = serviceUrlMap[service]
                            if (!serviceUrl) return (
                              <span key={idx} className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                                {service}
                              </span>
                            )
                            return (
                              <Link
                                key={idx}
                                href={serviceUrl}
                                onClick={(e) => e.stopPropagation()}
                                className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-3 py-1.5 rounded-full border border-white/30 transition-colors"
                              >
                                {service}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
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
            <div className="relative w-full h-full flex items-center justify-center mb-4">
              <Image
                src={filteredProjects[currentImageIndex].path}
                alt={filteredProjects[currentImageIndex].title}
                width={1920}
                height={1080}
                className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
                priority
              />
            </div>

            {/* Badges de services */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {(filteredProjects[currentImageIndex].services.length > 0
                ? filteredProjects[currentImageIndex].services
                : ['Prototypage']
              ).map((service, idx) => {
                const serviceUrl = serviceUrlMap[service]
                if (!serviceUrl) return (
                  <span key={idx} className="text-sm font-medium text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    {service}
                  </span>
                )
                return (
                  <Link
                    key={idx}
                    href={serviceUrl}
                    className="text-sm font-medium text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full border border-white/30 transition-colors"
                  >
                    {service}
                  </Link>
                )
              })}
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
