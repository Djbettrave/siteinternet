interface ImagePlaceholderProps {
  ariaLabel: string
  className?: string
  dark?: boolean
}

/** Public image slots never expose internal placement labels. */
export default function ImagePlaceholder({ ariaLabel, className = '', dark = false }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`flex items-center justify-center rounded-2xl border border-dashed ${dark ? 'border-white/25 bg-white/5' : 'border-secondary-300 bg-secondary-50'} ${className}`}
    >
      <svg className={dark ? 'h-11 w-11 text-secondary-300' : 'h-10 w-10 text-secondary-400'} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 16m-6-12h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  )
}
