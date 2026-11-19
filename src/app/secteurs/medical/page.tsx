import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import SectorHero from '@/components/templates/SectorHero';

export const metadata: Metadata = {
  title: "Impression 3D santé et dentaire",
  description:
    "Maquettes, supports de formation, prototypes de présentation et projets d’aménagement pour les cabinets médicaux, le dentaire et la communication santé.",
  alternates: { canonical: "https://www.inphenix-system.fr/secteurs/medical" },
};

const audiences = [
  {
    title: "Dentaire",
    description:
      "Modèles de démonstration, éléments de présentation de cabinet et supports physiques pour expliquer un projet ou un protocole.",
    points: [
      "Modèles et supports de présentation non cliniques",
      "Maquettes de cabinet dentaire et d’aménagement",
      "Pièces de démonstration pour rendez-vous et salons",
    ],
    cta: "Projet dentaire",
  },
  {
    title: "Cabinets et cliniques",
    description:
      "Visualisez un espace de soins, un accueil, une signalétique ou un agencement avant la réalisation grâce à une maquette claire et tangible.",
    points: [
      "Maquettes d’agencement et d’implantation",
      "Signalétique, présentoirs et éléments sur mesure",
      "Supports de concertation pour équipes et décideurs",
    ],
    cta: "Projet de cabinet",
  },
  {
    title: "Formation et communication",
    description:
      "Donnez une forme physique à un concept anatomique, un parcours de soin ou une présentation destinée à la formation et à la communication.",
    points: [
      "Modèles anatomiques pédagogiques",
      "Supports pour congrès et démonstrations",
      "Maquettes de communication santé",
    ],
    cta: "Projet de formation",
  },
];

export default function MedicalPage() {
  return (
    <main className="bg-white">
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Secteurs', path: '/secteurs' }, { name: 'Santé et médical', path: '/secteurs/medical' }]} />
      <SectorHero
        headline={(
          <span className="block lg:max-xl:text-[clamp(2.5rem,4vw,3rem)] lg:max-xl:leading-tight">
            Impression 3D pour la santé, le dentaire et les cabinets&nbsp;médicaux.
          </span>
        )}
        centerText
        subheadline="Maquettes d’aménagement, supports de formation et prototypes de présentation pour rendre un projet médical plus lisible, concret et convaincant. Les pièces sont imprimées dans notre atelier à Suresnes."
        image={{
          src: '/images/secteurs/medical/modele-dentaire-detoure.webp',
          alt: 'Modèle dentaire imprimé en 3D sur articulateur',
          variant: 'cutout',
        }}
      />

      <section id="votre-projet" className="container-custom py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="rounded-xl border border-secondary-200 p-7 hover:border-primary-200"
            >
              <h2 className="text-2xl font-bold tracking-[-0.025em] text-secondary-900">
                {audience.title}
              </h2>
              <p className="mt-4 leading-7 text-secondary-600">
                {audience.description}
              </p>
              <ul className="mt-6 space-y-3">
                {audience.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-secondary-700">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 font-medium text-primary-600">–</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="ml-auto mt-8 flex w-fit items-center gap-2 text-[13px] font-semibold italic leading-5 text-primary-600 hover:text-primary-700"
              >
                {audience.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-custom grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary-100">
            <Image
              src="/images/secteurs/medical/Medical_1.jpg"
              alt="Maquette anatomique de bassin imprimée en 3D"
              fill
              sizes="(min-width: 1280px) 390px, (min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-[-0.035em] text-secondary-900">
              Des modèles anatomiques pour expliquer et former
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-secondary-600">
              <p>
                Pour une formation, une présentation ou une démonstration, un modèle physique permet parfois de mieux comprendre ce qu’une image ne suffit pas à montrer. Nous réalisons des représentations anatomiques imprimées en 3D pour illustrer le fonctionnement d’une articulation, la structure d’un squelette ou les effets d’une pathologie comme l’arthrose.
              </p>
              <p>
                Ces modèles peuvent être fabriqués à taille réelle ou à une échelle adaptée, avec certains éléments mis en évidence pour faciliter la compréhension. Ils s’adressent notamment aux organismes de formation, aux professionnels de santé et aux entreprises qui souhaitent disposer d’un support pédagogique concret, destiné à être manipulé, présenté ou exposé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom grid gap-8 py-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:py-16">
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-[-0.035em] text-secondary-900">
            Des maquettes pour présenter vos équipements et vos espaces
          </h2>
          <div className="mt-5 space-y-5 leading-7 text-secondary-600">
            <p>
              Pour présenter un nouveau fauteuil dentaire, un équipement médical ou l’aménagement d’un cabinet, une maquette permet de visualiser un projet avant sa réalisation. Elle aide à comprendre les proportions, l’organisation d’un espace ou l’apparence d’un produit, sans avoir besoin de fabriquer immédiatement un exemplaire à taille réelle.
            </p>
            <p>
              À partir de plans, de fichiers 3D ou de références visuelles, nous réalisons des modèles réduits et des prototypes de présentation. L’impression 3D résine permet notamment de reproduire les détails de petits équipements ou de pièces miniatures. Ces maquettes peuvent être utilisées lors d’un salon professionnel, d’une présentation commerciale ou d’un échange entre concepteurs, fabricants et clients.
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="aspect-[4/3] overflow-hidden rounded-xl bg-secondary-100" />
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-custom text-left">
          <h2 className="text-3xl font-bold tracking-[-0.035em] text-secondary-900">
            Un accompagnement adapté à chaque projet
          </h2>
          <div className="mt-5 space-y-5 leading-7 text-secondary-600">
            <p>
              Nous commençons par voir ce que le modèle doit montrer et dans quelles conditions il sera utilisé. Pour expliquer une articulation en formation, on peut agrandir le modèle ou séparer certains éléments pour mieux voir comment ils s’emboîtent. Pour une maquette de cabinet, on s’attache surtout à garder les bonnes proportions entre le mobilier, les équipements et les espaces de circulation. À partir de vos plans, d’un fichier 3D ou de quelques visuels de référence, nous déterminons avec vous la taille du modèle et les détails à faire ressortir.
            </p>
            <p>
              Nous pouvons créer le modèle 3D ou adapter un fichier existant pour l’impression. Nous le préparons en fonction de l’usage prévu. Si la pièce doit être manipulée régulièrement, il peut être utile d’épaissir un détail fragile ou de revoir un assemblage. Pour une maquette d’aménagement, nous pouvons imprimer certains équipements séparément afin de les déplacer et de comparer plusieurs implantations. Selon le projet, nous réalisons aussi les finitions nécessaires. Sur un modèle anatomique, la couleur peut servir à distinguer les structures. Sur une maquette de présentation, elle peut aider à identifier les équipements ou les différentes zones du cabinet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
