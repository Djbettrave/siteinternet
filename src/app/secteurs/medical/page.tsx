import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impression 3D santé et dentaire",
  description:
    "Maquettes, supports de formation, prototypes de présentation et projets d’aménagement pour les cabinets médicaux, le dentaire et la communication santé.",
  alternates: { canonical: "https://www.inphenix-system.fr/secteurs/medical" },
};

const audiences = [
  {
    title: "Dentaire",
    eyebrow: "Cabinets · pédagogie · présentation",
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
    eyebrow: "Aménagement · parcours · accueil",
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
    eyebrow: "Congrès · pédagogie · démonstration",
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

const steps = [
  [
    "01",
    "Décrivez votre besoin",
    "Partagez le contexte, le public, les dimensions souhaitées et vos échéances.",
  ],
  [
    "02",
    "Définissons la solution",
    "Nous cadrons l’échelle, le niveau de détail, le matériau et le format de présentation.",
  ],
  [
    "03",
    "Fabriquons votre support",
    "Votre maquette ou support de démonstration est préparé pour être présenté, expliqué ou exposé.",
  ],
];

export default function MedicalPage() {
  return (
    <main className="bg-white">
      <section className="bg-secondary-900 text-white">
        <div className="container-custom grid gap-10 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-300">
              Santé · dentaire · médical
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] md:text-5xl">
              Impression 3D pour la santé, le dentaire et les cabinets médicaux.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-300">
              Maquettes d’aménagement, supports de formation et prototypes de
              présentation pour rendre un projet médical plus lisible, concret
              et convaincant.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#votre-projet"
                className="rounded-lg bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-400"
              >
                Présenter mon besoin
              </Link>
              <Link
                href="#etapes"
                className="rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Notre méthode
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-secondary-800 shadow-2xl">
            <Image
              src="/images/secteurs/medical/Medical_2.jpg"
              alt="Modèle anatomique de cœur imprimé en 3D"
              fill
              priority
              quality={95}
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

    <section id="votre-projet" className="container-custom py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
            Trois besoins, une approche sur mesure
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-secondary-900 md:text-4xl">
            Concevoir un support qui aide vraiment à expliquer votre projet.
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary-600">
            Chaque projet santé a son public : patient, équipe, étudiant,
            partenaire ou décideur. Le support doit donc être adapté à l’usage
            réel.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="rounded-xl border border-secondary-200 p-7 hover:border-primary-200"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600">
                {audience.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-secondary-900">
                {audience.title}
              </h3>
              <p className="mt-4 leading-7 text-secondary-600">
                {audience.description}
              </p>
              <ul className="mt-6 space-y-3">
                {audience.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-secondary-700"
                  >
                    <span className="mt-0.5 text-primary-600">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
              >
                {audience.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

    <section className="bg-secondary-50 py-16 lg:py-20">
        <div className="container-custom grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-xl border border-secondary-200 bg-white p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
              Un cadre rassurant
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-secondary-900">
              Confidentialité et objectif de présentation.
            </h2>
            <p className="mt-4 leading-7 text-secondary-600">
              Vos fichiers et informations projet sont utilisés uniquement pour
              préparer votre demande. Cette offre est dédiée aux maquettes,
              prototypes et supports de présentation, de formation ou
              d’aménagement.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-secondary-200 bg-white p-6">
              <p className="text-sm font-semibold text-secondary-900">
                Présenter un espace
              </p>
              <p className="mt-3 text-sm leading-6 text-secondary-600">
                Maquette de cabinet, d’accueil, de parcours patient ou
                d’aménagement intérieur.
              </p>
            </div>
            <div className="rounded-xl border border-secondary-200 bg-white p-6">
              <p className="text-sm font-semibold text-secondary-900">
                Expliquer un concept
              </p>
              <p className="mt-3 text-sm leading-6 text-secondary-600">
                Support de présentation pour équipe, patient, étudiant, congrès
                ou rendez-vous professionnel.
              </p>
            </div>
            <div className="rounded-xl border border-secondary-200 bg-white p-6">
              <p className="text-sm font-semibold text-secondary-900">
                Préparer une formation
              </p>
              <p className="mt-3 text-sm leading-6 text-secondary-600">
                Modèles pédagogiques et éléments visuels destinés à faciliter la
                compréhension.
              </p>
            </div>
            <div className="rounded-xl border border-secondary-200 bg-white p-6">
              <p className="text-sm font-semibold text-secondary-900">
                Construire un prototype
              </p>
              <p className="mt-3 text-sm leading-6 text-secondary-600">
                Objet de démonstration, élément d’agencement, présentoir ou
                pièce de communication.
              </p>
            </div>
          </div>
        </div>
      </section>

    <section className="border-y border-secondary-200 bg-white py-16 lg:py-20">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-xl bg-secondary-100">
            <Image
              src="/images/secteurs/medical/Medical_1.jpg"
              alt="Maquette anatomique de bassin imprimée en 3D"
              fill
              quality={95}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-xl bg-secondary-100">
            <Image
              src="/images/secteurs/medical/Medical_3.jpg"
              alt="Modèle de dentition imprimé en 3D"
              fill
              quality={95}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-xl bg-secondary-100">
            <Image
              src="/images/secteurs/medical/Medical_4.jpg"
              alt="Support médical imprimé en 3D"
              fill
              quality={95}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

    <section id="etapes" className="container-custom py-16 lg:py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
            Un processus clair
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-secondary-900">
            Du besoin au support physique.
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <div key={number} className="border-t-2 border-primary-500 pt-5">
              <p className="font-mono text-sm text-primary-600">{number}</p>
              <h3 className="mt-3 text-xl font-bold text-secondary-900">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-secondary-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-600 py-16 text-white">
        <div className="container-custom flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.035em]">
              Parlons de votre projet santé.
            </h2>
            <p className="mt-3 max-w-2xl text-primary-100">
              Partagez une intention, un plan, un fichier ou un brief : nous
              vous aiderons à choisir un support adapté à votre usage.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-700 hover:bg-primary-50"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  );
}
