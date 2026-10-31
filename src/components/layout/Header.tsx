'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const serviceGroups = [
  {
    name: 'Conception & Fabrication',
    href: '/conception-fabrication',
    items: [
      { name: 'Scan 3D', href: '/services/scan-3d' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Découpe laser' },
      { name: 'Prototypage', href: '/services/prototypage' },
    ],
  },
  {
    name: 'Impression 3D',
    href: '/impression-3d',
    items: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Impression 3D Métal', href: '/services/impression-3d/metal' },
      { name: 'Impression 3D Grand Format', href: '/services/impression-3d/grand-format' },
      { name: 'Impression 3D en série', href: '/services/impression-3d/en-serie' },
    ],
  },
]

const directServices = [
  { name: 'Impression UV sur objet', href: '/services/impression-uv' },
  { name: 'Électronique & Motorisation', href: '/services/electronique' },
]

const secteurs = [
  { name: 'Architecture', href: '/secteurs/architecture' },
  { name: 'Événementiel', href: '/secteurs/evenementiel' },
  { name: 'Luxe', href: '/secteurs/luxe' },
  { name: 'Retail', href: '/secteurs/retail' },
  { name: 'Robotique', href: '/secteurs/robotique' },
  { name: 'Santé & médical', href: '/secteurs/medical' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [desktopServiceCategory, setDesktopServiceCategory] = useState<string | null>(null)
  const [secteursOpen, setSecteursOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileServiceCategory, setMobileServiceCategory] = useState<string | null>(null)
  const [mobileSecteursOpen, setMobileSecteursOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const galleryNavigationRef = useRef(false)
  const pathname = usePathname()

  const resetMobileMenu = () => {
    setMobileServicesOpen(false)
    setMobileServiceCategory(null)
    setMobileSecteursOpen(false)
  }

  const openMobileMenu = () => {
    resetMobileMenu()
    setMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    resetMobileMenu()
  }

  useEffect(() => {
    const hideForGalleryNavigation = () => {
      galleryNavigationRef.current = true
      setIsVisible(false)
    }
    const restoreAfterGalleryNavigation = () => {
      galleryNavigationRef.current = false
    }

    window.addEventListener('inphenix-gallery-navigation-start', hideForGalleryNavigation)
    window.addEventListener('inphenix-gallery-navigation-end', restoreAfterGalleryNavigation)

    return () => {
      window.removeEventListener('inphenix-gallery-navigation-start', hideForGalleryNavigation)
      window.removeEventListener('inphenix-gallery-navigation-end', restoreAfterGalleryNavigation)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Auto-hide uniquement sur la page réalisations
      if (pathname !== '/realisations') {
        setIsVisible(true)
        return
      }

      const currentScrollY = window.scrollY

      if (galleryNavigationRef.current) {
        setIsVisible(false)
        setLastScrollY(currentScrollY)
        return
      }

      if (currentScrollY < 50) {
        // Toujours visible en haut de page
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scroll vers le bas - cacher
        setIsVisible(false)
      } else {
        // Scroll vers le haut - montrer
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, pathname])

  return (
    <header className={`z-50 bg-white ${
      mobileMenuOpen
        ? 'fixed inset-0 flex min-h-[100dvh] flex-col overflow-y-auto animate-mobile-menu-in'
        : `sticky top-0 border-b border-secondary-200 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`
    }`}>
      <nav className={mobileMenuOpen ? 'flex w-full flex-1 flex-col px-6 sm:px-8' : 'container-custom'} aria-label="Navigation principale">
        <div className={`flex items-center ${mobileMenuOpen ? 'h-24 justify-end pt-[env(safe-area-inset-top)]' : 'h-20 justify-between'}`}>
          {/* Logo */}
          {!mobileMenuOpen && <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2.5">
              <Image
                src="/images/logos/inphenix/icon-only.svg"
                alt="Inphenix System"
                width={32}
                height={32}
                className="w-8 h-8"
                priority
              />
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold text-gradient">Inphenix</span>
                <span className="text-xl font-light text-secondary-600">System</span>
              </div>
            </Link>
          </div>}

          {/* Desktop Navigation */}
          {!mobileMenuOpen && <div className="hidden lg:flex items-center space-x-0.5">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3 py-1.5 text-sm font-medium flex items-center gap-1 transition-colors ${pathname.startsWith('/services') || pathname === '/impression-3d' || pathname === '/conception-fabrication' ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute left-0 mt-0 w-80 bg-white rounded-xl shadow-lg border border-secondary-100 py-2 z-50">
                  {serviceGroups.map((group) => {
                    const expanded = desktopServiceCategory === group.name
                    return (
                      <div key={group.name} className="mx-2 border-b border-secondary-100 last:border-b-0">
                        <div className="flex items-center justify-between gap-2 py-2">
                          <Link href={group.href} className="flex-1 rounded-lg px-2 py-2 text-sm font-semibold text-secondary-900 transition-colors hover:bg-primary-50 hover:text-primary-700">
                            {group.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setDesktopServiceCategory(expanded ? null : group.name)}
                            className="rounded-lg p-2 text-secondary-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
                            aria-label={`Afficher ${group.name}`}
                            aria-expanded={expanded}
                          >
                            <svg className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                        {expanded && (
                          <div className="pb-2">
                            {group.items.map((item) => item.href ? (
                              <Link key={item.name} href={item.href} className="block rounded-lg px-4 py-2 text-sm text-secondary-600 transition-colors hover:bg-primary-50 hover:text-primary-700">
                                {item.name}
                              </Link>
                            ) : (
                              <span key={item.name} className="block px-4 py-2 text-sm text-secondary-500">{item.name}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                  <div className="mx-2 pt-1">
                    {directServices.map((service) => (
                      <Link key={service.href} href={service.href} className="block rounded-lg px-2 py-3 text-sm font-semibold text-secondary-900 transition-colors hover:bg-primary-50 hover:text-primary-700">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Secteurs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSecteursOpen(true)}
              onMouseLeave={() => setSecteursOpen(false)}
            >
              <Link
                href="/secteurs"
                className={`px-3 py-1.5 text-sm font-medium flex items-center gap-1 transition-colors ${pathname.startsWith('/secteurs') ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}
              >
                Secteurs
                <svg className={`w-4 h-4 transition-transform ${secteursOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {secteursOpen && (
                <div
                  className="absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-lg border border-secondary-100 py-2 z-50"
                >
                  {secteurs.map((secteur) => (
                    <Link
                      key={secteur.href}
                      href={secteur.href}
                      className="block px-4 py-3 mx-2 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-secondary-900">{secteur.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/realisations"
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${pathname === '/realisations' ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}
            >
              Réalisations
            </Link>

            <Link
              href="/guides"
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${pathname.startsWith('/guides') ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}
            >
              Guides
            </Link>

            <Link
              href="/qui-sommes-nous"
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${pathname === '/qui-sommes-nous' ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}
            >
              À propos
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${pathname === '/contact' ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}
            >
              Contact
            </Link>
          </div>}

          {/* CTA Button */}
          {!mobileMenuOpen && <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://impression3d.inphenix-system.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              Devis instantané
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={mobileMenuOpen ? closeMobileMenu : openMobileMenu}
              className="p-2 text-secondary-800 transition-colors hover:text-primary-600"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span className="relative block h-6 w-7" aria-hidden="true">
                <span className={`absolute left-0 top-1/2 h-[1.5px] w-7 -translate-y-1/2 rounded-full bg-current transition-all duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? 'rotate-45' : '-translate-y-[7px]'}`} />
                <span className={`absolute left-0 top-1/2 h-[1.5px] w-7 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${mobileMenuOpen ? 'scale-x-0 opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 top-1/2 h-[1.5px] w-7 -translate-y-1/2 rounded-full bg-current transition-all duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] ${mobileMenuOpen ? '-rotate-45' : 'translate-y-[7px]'}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="flex flex-1 flex-col lg:hidden">
            <div className="flex flex-1 flex-col pb-8 pt-4">
              <div className="flex-1">
                <div className="mobile-menu-item">
                  <div className="flex min-h-[72px] items-center justify-between border-b border-secondary-100">
                    <Link
                      href="/services"
                      onClick={closeMobileMenu}
                      className="flex flex-1 items-center py-4 text-2xl font-semibold tracking-[-0.035em] text-secondary-900 transition-colors hover:text-primary-600"
                    >
                      Services
                    </Link>
                    <button
                    type="button"
                    onClick={() => {
                      const nextOpen = !mobileServicesOpen
                      setMobileServicesOpen(nextOpen)
                      setMobileServiceCategory(null)
                      if (nextOpen) setMobileSecteursOpen(false)
                    }}
                    className="p-3 text-secondary-900 transition-colors hover:text-primary-600"
                    aria-label="Afficher les services"
                    aria-expanded={mobileServicesOpen}
                  >
                    <svg className={`h-6 w-6 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="ml-3 border-l border-secondary-200 pb-2 pt-1">
                      {serviceGroups.map((group) => {
                        const expanded = mobileServiceCategory === group.name
                        return (
                          <div key={group.name} className="border-b border-secondary-100">
                            <div className="flex min-h-[46px] items-center justify-between gap-2 pl-5">
                              <Link
                                href={group.href}
                                onClick={closeMobileMenu}
                                className="flex-1 py-2 text-[15px] font-medium tracking-[-0.015em] text-secondary-700 transition-colors hover:text-primary-600"
                              >
                                {group.name}
                              </Link>
                              <button
                                type="button"
                                onClick={() => setMobileServiceCategory(expanded ? null : group.name)}
                                className="p-2.5 text-secondary-700 transition-colors hover:text-primary-600"
                                aria-label={`Afficher ${group.name}`}
                                aria-expanded={expanded}
                              >
                                <svg className={`h-5 w-5 transition-transform ${expanded ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            </div>
                            {expanded && (
                              <div className="border-t border-secondary-100 py-1">
                                {group.items.map((item) => item.href ? (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="block py-1.5 pl-9 text-[13px] text-secondary-500 transition-colors hover:text-primary-700"
                                  >
                                    {item.name}
                                  </Link>
                                ) : (
                                  <span key={item.name} className="block py-1.5 pl-9 text-[13px] text-secondary-400">{item.name}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
                      {directServices.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={closeMobileMenu}
                          className="flex min-h-[46px] items-center border-b border-secondary-100 py-2 pl-5 text-[15px] font-medium tracking-[-0.015em] text-secondary-700 transition-colors hover:text-primary-700"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mobile-menu-item">
                  <div className="flex min-h-[72px] items-center justify-between border-b border-secondary-100">
                    <Link
                      href="/secteurs"
                      onClick={closeMobileMenu}
                      className="flex flex-1 items-center py-4 text-2xl font-semibold tracking-[-0.035em] text-secondary-900 transition-colors hover:text-primary-600"
                    >
                      Secteurs
                    </Link>
                    <button
                    type="button"
                    onClick={() => {
                      const nextOpen = !mobileSecteursOpen
                      setMobileSecteursOpen(nextOpen)
                      if (nextOpen) {
                        setMobileServicesOpen(false)
                        setMobileServiceCategory(null)
                      }
                    }}
                    className="p-3 text-secondary-900 transition-colors hover:text-primary-600"
                    aria-label="Afficher les secteurs"
                    aria-expanded={mobileSecteursOpen}
                  >
                    <svg className={`h-6 w-6 transition-transform ${mobileSecteursOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  </div>
                  {mobileSecteursOpen && (
                    <div className="ml-3 border-l border-secondary-200 pb-2 pt-1">
                      {secteurs.map((secteur) => (
                        <Link
                          key={secteur.href}
                          href={secteur.href}
                          onClick={closeMobileMenu}
                          className="flex min-h-[46px] items-center border-b border-secondary-100 py-2 pl-5 text-[15px] font-medium tracking-[-0.015em] text-secondary-700 transition-colors hover:text-primary-700"
                        >
                          {secteur.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mobile-menu-item">
                  <Link
                    href="/guides"
                    onClick={closeMobileMenu}
                    className="flex min-h-[72px] items-center border-b border-secondary-100 text-2xl font-semibold tracking-[-0.035em] text-secondary-900 transition-colors hover:text-primary-600"
                  >
                    Guides
                  </Link>
                  <Link
                    href="/realisations"
                    onClick={closeMobileMenu}
                    className="flex min-h-[72px] items-center border-b border-secondary-100 text-2xl font-semibold tracking-[-0.035em] text-secondary-900 transition-colors hover:text-primary-600"
                  >
                    Réalisations
                  </Link>
                  <Link
                    href="/qui-sommes-nous"
                    onClick={closeMobileMenu}
                    className="flex min-h-[72px] items-center border-b border-secondary-100 text-2xl font-semibold tracking-[-0.035em] text-secondary-900 transition-colors hover:text-primary-600"
                  >
                    À propos
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="flex min-h-[72px] items-center border-b border-secondary-100 text-2xl font-semibold tracking-[-0.035em] text-secondary-900 transition-colors hover:text-primary-600"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href="https://impression3d.inphenix-system.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="btn-primary w-full text-center flex items-center justify-center gap-2 py-4 text-lg"
                >
                  Devis instantané
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
