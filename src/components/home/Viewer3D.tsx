import Image from 'next/image'

export default function Viewer3D() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Outil gratuit
            </div>
            <h2 className="section-title mb-6">
              Devis instantané pour votre fichier 3D
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Téléchargez votre fichier 3D et recevez un devis en quelques secondes.
              Notre outil calcule automatiquement le prix de votre impression 3D
              (FDM ou Résine) avec les différentes options disponibles.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Devis automatique en quelques secondes',
                'Visualisation 3D de votre fichier',
                'Choix du matériau et des finitions',
                'Commande en ligne simplifiée',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-secondary-700">
                  <span className="flex-shrink-0 text-primary-600">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://impression3d.inphenix-system.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Obtenir mon devis instantané
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Viewer Embed Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                {/* Browser Chrome */}
                <div className="bg-secondary-100 px-4 py-3 flex items-center gap-2.5">
                  <Image
                    src="/images/logos/inphenix/icon-only.svg"
                    alt="Inphenix System"
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] flex-none"
                  />
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-secondary-500">
                    impression3d.inphenix-system.fr
                  </div>
                </div>
                {/* Viewer Content Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary-800 to-secondary-900 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary-400 rounded-lg transform rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary-400 rounded-lg transform rotate-12"></div>
                  </div>
                  <div className="text-center z-10">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary-600/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                    </div>
                    <p className="text-white/80 font-medium">Outil de devis automatique</p>
                    <p className="text-white/50 text-sm mt-1">Téléchargez votre fichier 3D</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
