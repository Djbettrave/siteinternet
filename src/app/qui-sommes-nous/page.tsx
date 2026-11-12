import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Inphenix System à Suresnes | Impression 3D et fabrication',
  description: 'Découvrez Inphenix System, atelier de fabrication à Suresnes, près de Paris, créé en 2022. Impression 3D, électronique, modélisation et finitions sur mesure en Île-de-France.',
  alternates: {
    canonical: 'https://www.inphenix-system.fr/qui-sommes-nous',
  },
}

const capabilities = [
  {
    category: 'Impression 3D',
    href: '/impression-3d',
    items: ['FDM multi-matériaux', 'Résine haute précision', 'Grand format jusqu\'à 85 cm', 'Post-traitement et finitions'],
  },
  {
    category: 'Électronique & motorisation',
    href: '/services/electronique',
    items: ['Conception de PCB', 'Motorisation', 'Systèmes embarqués', 'Programmation'],
  },
  {
    category: 'Conception & fabrication',
    href: '/conception-fabrication',
    items: ['Scan 3D', 'Modélisation CAO', 'Prototypage', 'Conseil technique'],
  },
]

export default function QuiSommesNousPage() {
  return (
    <>
      {/* Story */}
      <section className="pb-24 pt-12 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Notre histoire</h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  Inphenix System est un bureau d’études spécialisé dans la conception, le prototypage et la fabrication de pièces sur mesure. Nous réunissons création, ingénierie et fabrication pour accompagner un projet de l’idée à <span className="whitespace-nowrap">sa réalisation.</span>
                </p>
                <p>
                  Basé à Suresnes, aux portes de Paris, <strong className="text-secondary-900">Inphenix System</strong> accompagne les marques, agences et entreprises qui souhaitent transformer une idée, un objet ou un projet technique en une pièce concrète.
                </p>
                <p>
                  Impression 3D, électronique, modélisation et finitions se réunissent dans notre atelier d’Île-de-France pour concevoir, fabriquer et finaliser des prototypes, des installations et des productions sur mesure.
                </p>
                <p>
                  Créé en 2022, Inphenix System développe une approche directe : comprendre l’intention du projet, trouver la bonne solution de fabrication et livrer une pièce prête à être utilisée, présentée ou produite.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/atelier/atelier-imprimantes-3d-grand-format-suresnes.jpeg"
                alt="Parc d’imprimantes 3D grand format dans l’atelier Inphenix System à Suresnes, près de Paris"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl lg:order-2">
              <h2 className="section-title mb-6">Notre approche</h2>
              <div className="space-y-4 text-secondary-600">
                <p>Chaque projet part d’un usage réel, d’une intention et de contraintes précises. Nous prenons le temps de les comprendre avant de choisir une technologie, un matériau ou un procédé.</p>
                <p>Notre rôle est de réunir les compétences utiles au bon moment : conception, mise au point, fabrication et finitions. Cela permet d’avancer avec des choix techniques cohérents et une vision claire du résultat attendu.</p>
                <p>Nous privilégions un échange direct, des solutions adaptées et une fabrication maîtrisée, qu’il s’agisse d’une pièce unique, d’un prototype ou d’une production en série.</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-1">
              <Image
                src="/images/atelier/travail-2.jpeg"
                alt="Mise au point de pièces imprimées en 3D dans l’atelier Inphenix System"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">De l’idée à la pièce finie</h2>
            <p className="section-subtitle mx-auto">
              Une même équipe réunit les savoir-faire nécessaires pour concevoir, fabriquer et finaliser votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <Link key={cap.category} href={cap.href} className="group rounded-2xl border border-[#C9D5E3] bg-white p-8 shadow-[0_6px_18px_rgba(15,37,64,0.055)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-lg focus-visible:-translate-y-0.5 focus-visible:border-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">{cap.category}</h3>
                <ul className="space-y-3">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-secondary-600">
                      <span className="flex-shrink-0 text-primary-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="section-title mb-6">Travaillons ensemble</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Vous avez un projet ? Une idée ? Une question ?
              Nous sommes là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contactez-nous
              </Link>
              <Link href="/realisations" className="btn-outline">
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
