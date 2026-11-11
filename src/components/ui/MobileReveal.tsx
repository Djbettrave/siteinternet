'use client'

import { useEffect, useRef, type CSSProperties } from 'react'

interface MobileRevealProps {
  children: React.ReactNode
  delay?: number
}

export default function MobileReveal({ children, delay = 0 }: MobileRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        element.classList.add('is-revealed')
        observer.disconnect()
      },
      { threshold: 0.08 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className="mobile-reveal" style={{ '--mobile-reveal-delay': `${delay}ms` } as CSSProperties}>{children}</div>
}
