import type { ServiceData } from '@/components/templates/ServicePage'

export const servicesData: Record<string, ServiceData> = {
  'impression-uv': {
    slug: 'impression-uv',
    name: 'Impression UV sur objet',
    category: 'Finitions & personnalisation',
    metaTitle: 'Impression UV sur objet | Personnalisation UV sur mesure',
    metaDescription: 'Impression UV sur objets, pièces imprimées en 3D et supports rigides. Logos et visuels, de la pièce unique aux petites et grandes séries.',
    keywords: [
      'impression UV sur objet',
      'impression UV',
      'impression UV directe',
      'personnalisation UV',
      'impression UV pièce imprimée en 3D',
      'impression UV objet cylindrique',
      'impression UV petite série',
      'impression UV grande série',
      'impression UV Île-de-France',
    ],
    headline: 'Impression UV\nobjets & pièces sur mesure',
    subheadline: 'Logos, textes et visuels imprimés directement sur vos objets, pièces imprimées en 3D et supports compatibles.',
    description: 'Une finition visuelle pour personnaliser un objet, une pièce technique, un support de présentation ou une série destinée au retail, à la PLV et à l’événementiel.',
    features: [
      {
        title: 'Logos, textes et visuels',
        description: 'Impression d’éléments graphiques adaptés à votre charte, à votre fichier et à votre support.',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      },
      {
        title: 'Objets cylindriques',
        description: 'Personnalisation possible sur certains objets ronds ou cylindriques, après vérification de leurs dimensions et de leur zone imprimable.',
        icon: 'M5 4v16M19 4v16M5 4h14M5 20h14M8 4v16m8-16v16',
      },
      {
        title: 'Pièces imprimées en 3D',
        description: 'Ajout d’un décor, d’un logo ou d’un repère visuel sur des pièces produites par impression 3D.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10l8 4',
      },
      {
        title: 'Pièce unique et séries',
        description: 'De la pièce unique aux petites et grandes séries, selon le support, le visuel et le planning de production.',
        icon: 'M4 6h16M4 12h16M4 18h16',
      },
      {
        title: 'Faisabilité vérifiée',
        description: 'Le support, son état de surface, sa forme et le fichier sont vérifiés avant le lancement.',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      },
      {
        title: 'Production et finition',
        description: 'Une solution intégrée à la fabrication d’une pièce, à son assemblage ou à sa préparation pour une opération de marque.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      },
    ],
    contentSections: [
      {
        title: 'Impression UV sur objets et pièces imprimées en 3D',
        paragraphs: [
          'L’impression UV permet d’ajouter un logo, un texte, un motif ou un visuel directement sur un objet ou une pièce. Elle s’utilise notamment pour personnaliser une pièce imprimée en 3D, un support de présentation, un élément de PLV, un objet promotionnel ou un prototype destiné à être présenté.',
          'Le service peut intervenir comme une finition seule sur un objet déjà fabriqué, ou s’intégrer à une production complète réalisée par Inphenix. Cette continuité évite de multiplier les interlocuteurs lorsqu’une pièce doit être imprimée en 3D, préparée, assemblée puis personnalisée.',
        ],
      },
      {
        title: 'Personnalisation UV adaptée à votre support',
        paragraphs: [
          'Chaque projet est étudié selon l’objet réel : matière, état de surface, dimensions, zones à imprimer et rendu attendu. Certains supports rigides conviennent directement. D’autres nécessitent une validation préalable, en particulier lorsqu’ils présentent une forme irrégulière, une texture marquée ou une surface courbe.',
          'Les objets cylindriques peuvent également être personnalisés. Leur diamètre, leur hauteur et la zone graphique utile sont vérifiés avant production afin de définir un visuel adapté à la géométrie de l’objet.',
        ],
      },
      {
        title: 'De la pièce unique aux petites et grandes séries',
        paragraphs: [
          'Nous réalisons des impressions UV pour une pièce unique, une présérie, une petite série ou une grande série. Le chiffrage dépend du nombre d’objets identiques, du format du visuel, de la préparation nécessaire, des contraintes de calage et du délai souhaité.',
          'Pour les productions en quantité, le tarif est ajusté selon le volume. Un fichier graphique bien préparé et un support homogène facilitent le lancement et permettent d’optimiser le coût unitaire.',
        ],
      },
      {
        title: 'Applications pour le retail, la PLV et l’événementiel',
        paragraphs: [
          'L’impression UV est adaptée aux objets de marque, aux maquettes de présentation, aux éléments de PLV, aux prototypes visuels, aux pièces de décor et aux supports personnalisés pour une activation ou un point de vente. Elle permet d’intégrer une identité graphique sans recourir à une étiquette ou à un adhésif rapporté.',
          'Lorsque le projet comprend une pièce imprimée en 3D, la personnalisation peut être prévue dès la fabrication afin que les zones graphiques, l’orientation et le niveau de finition soient cohérents avec le résultat attendu.',
        ],
      },
    ],
    inlineVisuals: [
      { afterSection: 1, position: 'right', alt: 'Exemple d’impression UV sur un objet cylindrique' },
      { afterSection: 3, position: 'left', alt: 'Exemple de pièce imprimée en 3D personnalisée par impression UV' },
    ],
    specsTitle: 'Préparer un projet d’impression UV',
    specsDescription: 'Pour étudier votre demande, transmettez les éléments suivants.',
    specsLayout: 'project',
    specs: [
      { label: 'Objet ou support', value: 'une photo, un échantillon ou l’objet à personnaliser.' },
      { label: 'Dimensions et zone à imprimer', value: 'les dimensions de l’objet et la surface concernée par le visuel.' },
      { label: 'Quantité souhaitée', value: 'pièce unique, petite série ou grande série.' },
      { label: 'Fichier graphique', value: 'logo, texte ou visuel. Un fichier vectoriel est préférable pour les logos et les textes ; une image haute définition convient pour un visuel.' },
      { label: 'Matière et état de surface', value: 'le type de support, sa finition et les éventuelles zones courbes ou irrégulières.' },
      { label: 'Délai souhaité', value: 'la date de livraison ou d’installation attendue.' },
    ],
    specsNote: 'Avant lancement, nous validons la compatibilité du support, le positionnement du visuel et le rendu attendu.',
    faqs: [
      {
        question: 'Sur quels objets peut-on réaliser une impression UV ?',
        answer: 'L’impression UV peut être envisagée sur de nombreux objets et supports rigides. La compatibilité dépend de la matière, de l’état de surface, de la forme et de la zone à imprimer. Une vérification est réalisée avant le lancement.',
      },
      {
        question: 'Peut-on imprimer sur un objet cylindrique ?',
        answer: 'Oui, pour des objets cylindriques compatibles. Le diamètre, la hauteur et la zone de personnalisation sont vérifiés afin d’adapter le visuel et le positionnement.',
      },
      {
        question: 'Peut-on personnaliser une pièce imprimée en 3D ?',
        answer: 'Oui. Un logo, un texte ou un visuel peut être ajouté sur une pièce imprimée en 3D, après validation de la matière, de la surface et de la zone d’impression.',
      },
      {
        question: 'Réalisez-vous des petites et grandes séries ?',
        answer: 'Oui. Nous réalisons des pièces uniques, des petites séries et des grandes séries. Le coût unitaire évolue selon la quantité, le support, le visuel et les contraintes de production.',
      },
      {
        question: 'Quel fichier faut-il fournir pour une impression UV ?',
        answer: 'Pour un logo ou un texte, un fichier vectoriel est préférable. Pour une image ou une création graphique, fournissez un fichier de bonne définition à la taille d’impression souhaitée.',
      },
    ],
    relatedServices: [
      { name: 'Impression 3D en série', href: '/services/impression-3d/en-serie' },
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Prototypage', href: '/services/prototypage' },
    ],
  },
  'impression-3d-en-serie': {
    slug: 'impression-3d-en-serie',
    name: 'Impression 3D en série',
    category: 'Impression 3D',
    metaTitle: 'Impression 3D en série | Petite et grande série',
    metaDescription: 'Impression 3D en série pour petites et grandes quantités. Fabrication de pièces sur mesure, finitions et tarifs dégressifs.',
    keywords: [
      'impression 3D en série',
      'impression 3D petite série',
      'impression 3D grande série',
      'fabrication de pièces en série',
      'fabrication additive en série',
      'production en série impression 3D',
    ],
    headline: 'Impression 3D en série\nDe la petite à la grande série',
    subheadline: 'Fabrication de pièces identiques, avec des tarifs dégressifs selon les quantités et des finitions adaptées à votre projet.',
    description: 'Nous réalisons des productions en impression 3D en série pour le retail, la PLV, l’événementiel, l’industrie, l’architecture et les projets sur mesure.',
    features: [
      {
        title: 'Petite et grande série',
        description: 'Production de pièces identiques, de quelques dizaines d’exemplaires à des volumes importants.',
        icon: 'M4 6h16M4 12h16M4 18h16',
      },
      {
        title: 'Sans moule',
        description: 'Lancement direct à partir du fichier 3D, sans investissement initial dans un outillage.',
        icon: 'M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z',
      },
      {
        title: 'Tarifs dégressifs',
        description: 'Le coût unitaire est optimisé selon la quantité, la matière, les dimensions et le délai.',
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      },
      {
        title: 'Finitions à la demande',
        description: 'Pièces brutes, apprêtées, peintes, assemblées ou personnalisées par impression UV.',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      },
      {
        title: 'Pièces adaptées à l’usage',
        description: 'Choix du procédé, du matériau et du niveau de finition selon la destination finale de la pièce.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      },
      {
        title: 'Délais définis au devis',
        description: 'Un calendrier de fabrication est établi en fonction du volume, de la pièce et des contraintes de livraison.',
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      },
    ],
    contentSections: [
      {
        title: 'Fabrication de pièces en série par impression 3D',
        paragraphs: [
          'Inphenix réalise des productions de pièces identiques par impression 3D, pour une petite série comme pour une grande série. Une fois le fichier 3D validé, la fabrication est organisée selon la quantité à produire, les contraintes d’usage, le matériau souhaité et le rendu final attendu.',
          'Cette solution convient aux entreprises qui doivent lancer un produit, compléter une installation, produire une référence en quantité ou renouveler une pièce sans immobiliser un budget d’outillage. La fabrication est construite autour de la pièce réelle et de son usage, pas autour d’une quantité théorique.',
        ],
      },
      {
        title: 'De la petite série aux grandes quantités',
        paragraphs: [
          'L’impression 3D en série est pertinente pour produire quelques dizaines, plusieurs centaines, plusieurs milliers de pièces ou des volumes plus importants. Le bon volume ne se définit pas seulement par un chiffre : il dépend de la taille de la pièce, de son temps de fabrication, du matériau, de la finition et du calendrier de livraison.',
          'Pour chaque demande, nous chiffrons une solution adaptée. Le prix unitaire évolue avec le volume de pièces identiques. Cette logique de tarifs dégressifs permet d’optimiser la production sans imposer de minimum de commande artificiel.',
        ],
      },
      {
        title: 'Une solution de fabrication additive sans moule',
        paragraphs: [
          'L’impression 3D, également appelée fabrication additive, produit directement la pièce à partir d’un fichier numérique. Il n’est donc pas nécessaire de fabriquer un moule avant de lancer la série. Le démarrage est plus souple et les évolutions de forme restent possibles entre deux productions.',
          'Cette approche est particulièrement utile lorsqu’un modèle doit être ajusté, personnalisé ou décliné. Elle permet aussi de commander les quantités nécessaires, puis de relancer une fabrication lorsque le besoin revient.',
        ],
      },
      {
        title: 'Technologies et matériaux adaptés à chaque série',
        paragraphs: [
          'Les technologies FDM et résine font partie des solutions envisageables pour une impression 3D en série. Le FDM convient notamment aux pièces fonctionnelles, aux supports, aux boîtiers et aux éléments de grand format. La résine est choisie lorsque la précision, les détails fins ou la qualité de surface sont déterminants.',
          'Le procédé et la matière sont sélectionnés selon les contraintes réelles de la pièce : résistance, usage intérieur ou extérieur, rendu visuel, dimensions, montage et finition. Les pages dédiées à l’impression 3D FDM et à l’impression 3D résine détaillent ces technologies.',
        ],
      },
      {
        title: 'Des finitions selon le projet',
        paragraphs: [
          'Selon le besoin, les pièces peuvent être livrées brutes ou recevoir une préparation complémentaire : ponçage, apprêt, peinture, assemblage ou impression UV. Ces opérations sont définies avec vous lorsque le rendu final ou l’intégration à une installation le nécessite.',
          'Nous réalisons notamment des séries pour la PLV, le retail, l’événementiel, l’architecture, les objets promotionnels, les supports techniques, les maquettes et les pièces de remplacement.',
        ],
      },
    ],
    specs: [
      { label: 'Quantités', value: 'De la petite à la grande série' },
      { label: 'Technologies', value: 'FDM et résine' },
      { label: 'Production', value: 'À partir d’un fichier 3D validé' },
      { label: 'Finitions', value: 'Brut, apprêt, peinture, UV, assemblage' },
      { label: 'Tarification', value: 'Dégressive selon les quantités' },
      { label: 'Délai', value: 'Défini selon la série' },
    ],
    faqs: [
      {
        question: 'Quelle quantité peut-on produire en impression 3D série ?',
        answer: 'Nous réalisons des petites séries comme des grandes quantités. La capacité de production dépend de la taille de la pièce, de la technologie retenue, de la matière, des finitions et du délai demandé.',
      },
      {
        question: 'Peut-on fabriquer une série sans moule ?',
        answer: 'Oui. L’impression 3D fabrique directement à partir du fichier 3D, sans moule ni outillage initial. Cela permet de lancer une série rapidement et de modifier une pièce entre deux productions.',
      },
      {
        question: 'Les tarifs sont-ils dégressifs selon la quantité ?',
        answer: 'Oui. Le prix unitaire est calculé selon le nombre de pièces identiques, leurs dimensions, la matière, le procédé d’impression, les finitions et le délai. Plus le volume augmente, plus le coût unitaire peut être optimisé.',
      },
      {
        question: 'FDM ou résine : quelle technologie choisir pour une série ?',
        answer: 'Le FDM est souvent adapté aux pièces fonctionnelles et résistantes. La résine est plus pertinente pour des pièces précises, détaillées ou destinées à une présentation visuelle. Le choix dépend de l’usage final de la pièce.',
      },
      {
        question: 'Peut-on ajouter une finition aux pièces imprimées ?',
        answer: 'Oui. Les pièces peuvent être livrées brutes, préparées pour la peinture, apprêtées, peintes, assemblées ou personnalisées par impression UV selon le projet.',
      },
      {
        question: 'Faut-il déjà disposer d’un fichier 3D ?',
        answer: 'Pour lancer une série, un fichier 3D validé est nécessaire. Si votre pièce est encore au stade de l’idée ou doit être ajustée, nos services de modélisation et de prototypage peuvent intervenir en amont.',
      },
    ],
    cta: {
      title: 'Un projet d’impression 3D en série ?',
      description: 'Envoyez votre fichier 3D, la quantité souhaitée et les finitions attendues. Nous établissons un devis adapté à votre série.',
    },
    relatedServices: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Impression Grand Format', href: '/services/impression-3d/grand-format' },
      { name: 'Prototypage', href: '/services/prototypage' },
    ],
  },
  'impression-3d-metal': {
    slug: 'impression-3d-metal',
    name: 'Impression 3D Métal',
    category: 'Impression 3D',
    metaTitle: 'Impression 3D métal à Paris | Pièces techniques sur mesure',
    metaDescription: 'Impression 3D métal pour pièces techniques, composants mécaniques et prototypes fonctionnels. Étude de faisabilité et fabrication sur mesure à Paris et en Île-de-France.',
    keywords: [
      'impression 3D métal Paris',
      'fabrication additive métal',
      'pièce métallique sur mesure',
      'prototype métal',
      'impression 3D pièce mécanique',
    ],
    headline: 'Impression 3D Métal -\nPièces techniques sur mesure',
    subheadline: 'Une solution de fabrication additive adaptée aux composants mécaniques, prototypes fonctionnels et pièces techniques, selon les contraintes de votre projet.',
    description: 'L’impression 3D métal permet de fabriquer des pièces complexes sans outillage traditionnel. Chaque demande est étudiée selon l’alliage, les efforts mécaniques, les tolérances, la finition et la quantité recherchée.',
    features: [
      {
        title: 'Géométries complexes',
        description: 'Production de formes techniques difficiles à obtenir par des procédés conventionnels, selon leur faisabilité.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      },
      {
        title: 'Pièces mécaniques',
        description: 'Solutions adaptées aux composants fonctionnels, pièces de remplacement et prototypes soumis à des contraintes mécaniques.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c.94-.94 2.706.827 1.766 1.767a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94.94-.826 2.706-1.766 1.766a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-.94.94-2.706-.826-1.766-1.766a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-.94.826-2.707 1.766-1.767a1.724 1.724 0 002.573-1.066z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      },
      {
        title: 'Alliage adapté',
        description: 'Le matériau est déterminé selon l’usage, l’environnement, la résistance attendue et les contraintes de poids.',
        icon: 'M19.428 15.428a2 2 0 01-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 01-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      },
      {
        title: 'Étude de faisabilité',
        description: 'Analyse du fichier, des zones critiques, des tolérances et des besoins de post-traitement avant fabrication.',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      },
      {
        title: 'Petites et moyennes séries',
        description: 'Fabrication de prototypes, pièces unitaires et séries lorsque la géométrie ou la flexibilité le justifie.',
        icon: 'M4 6h16M4 12h16M4 18h16',
      },
      {
        title: 'Finitions sur demande',
        description: 'Les opérations de finition, usinage ou traitement sont définies selon le résultat attendu et la fonction finale de la pièce.',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      },
    ],
    specs: [
      { label: 'Procédé', value: 'Défini selon le projet' },
      { label: 'Alliage', value: 'Sélectionné selon les contraintes' },
      { label: 'Tolérances', value: 'À valider selon la géométrie' },
      { label: 'Finitions', value: 'Sur étude' },
      { label: 'Quantités', value: 'Pièce unitaire à moyenne série' },
      { label: 'Délai', value: 'Défini après étude' },
    ],
    materials: [
      { name: 'Acier inoxydable', properties: 'À étudier selon l’environnement, la résistance mécanique et la finition recherchée.' },
      { name: 'Aluminium', properties: 'À étudier pour les projets recherchant un compromis entre poids, résistance et géométrie.' },
      { name: 'Titane', properties: 'À étudier pour des besoins spécifiques de résistance, légèreté ou performance.' },
    ],
    process: [
      { step: 1, title: 'Analyse du besoin', description: 'Partagez votre fichier 3D, les dimensions, la fonction de la pièce et les contraintes d’usage.' },
      { step: 2, title: 'Étude de faisabilité', description: 'Nous vérifions la géométrie, l’alliage envisageable, les tolérances et les finitions nécessaires.' },
      { step: 3, title: 'Proposition technique', description: 'Une solution de fabrication et un devis sont définis selon les éléments validés.' },
      { step: 4, title: 'Fabrication et contrôle', description: 'La pièce est produite puis contrôlée selon les critères prévus pour votre projet.' },
      { step: 5, title: 'Livraison', description: 'La pièce est livrée avec le niveau de finition convenu.' },
    ],
    faqs: [
      {
        question: 'Quelles pièces sont adaptées à l’impression 3D métal ?',
        answer: 'L’impression 3D métal est particulièrement pertinente pour les pièces techniques, les géométries complexes, les composants mécaniques et les prototypes fonctionnels. La faisabilité dépend de la taille, de l’alliage, des tolérances et de l’usage prévu.',
      },
      {
        question: 'Quel alliage choisir pour une pièce imprimée en 3D ?',
        answer: 'Le choix de l’alliage dépend des efforts mécaniques, du poids, de l’environnement d’utilisation, de la corrosion, de la température et de la finition attendue. Il est défini au cas par cas.',
      },
      {
        question: 'Peut-on produire une petite série de pièces métalliques ?',
        answer: 'Oui. L’impression 3D métal peut convenir à des pièces unitaires, des prototypes et certaines petites ou moyennes séries, notamment lorsqu’un outillage classique serait disproportionné ou trop contraignant.',
      },
    ],
    cta: {
      title: 'Un projet de pièce métallique ?',
      description: 'Transmettez votre fichier ou décrivez vos contraintes. Nous étudions la solution de fabrication adaptée.',
    },
    relatedServices: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Prototypage', href: '/services/prototypage' },
    ],
  },
  'impression-3d-fdm': {
    slug: 'impression-3d-fdm',
    name: 'Impression 3D FDM',
    category: 'Impression 3D',
    headline: 'Impression 3D FDM -\nPièces résistantes et fonctionnelles',
    subheadline: 'La technologie FDM (Fused Deposition Modeling) pour des pièces solides, fonctionnelles et économiques. Idéale pour le prototypage et les petites séries.',
    description: 'L\'impression 3D FDM utilise des filaments thermoplastiques pour créer des pièces couche par couche. Cette technologie offre un excellent rapport qualité-prix pour les prototypes fonctionnels et les pièces de production.',
    features: [
      {
        title: 'Résistance mécanique',
        description: 'Pièces solides capables de supporter des contraintes mécaniques. Idéales pour des prototypes fonctionnels et pièces d\'usage.',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      },
      {
        title: 'Large choix de matériaux',
        description: 'PLA, PETG, ABS, Nylon, PC, matériaux chargés fibres... Un matériau adapté à chaque application.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      },
      {
        title: 'Grandes dimensions',
        description: 'Volume d\'impression jusqu\'à 30x30x40 cm sur nos machines standard. Grand format disponible.',
        icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
      },
      {
        title: 'Coût maîtrisé',
        description: 'Technologie économique, particulièrement avantageuse pour les pièces de volume important.',
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      },
      {
        title: 'Rapidité d\'exécution',
        description: 'Pièces livrables en 24-48h pour les urgences. Parc machines important pour absorber les volumes.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      },
      {
        title: 'Post-traitement',
        description: 'Ponçage, peinture, assemblage, inserts filetés... Finitions adaptées à vos besoins.',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      },
    ],
    specs: [
      { label: 'Volume max standard', value: '300 x 300 x 400 mm' },
      { label: 'Volume max grand format', value: '850 mm hauteur (sans limite par assemblage)' },
      { label: 'Épaisseur de couche', value: '0.1 - 0.3 mm' },
      { label: 'Précision', value: '± 0.2 mm' },
      { label: 'Remplissage', value: '10% à 100%' },
      { label: 'Délai standard', value: '2-5 jours' },
    ],
    materials: [
      { name: 'PLA', properties: 'Économique, biodégradable. Usage intérieur, prototypes visuels.' },
      { name: 'PETG', properties: 'Résistant, flexible. Usage général, pièces fonctionnelles.' },
      { name: 'ABS', properties: 'Résistant aux chocs et chaleur. Pièces mécaniques.' },
      { name: 'ASA', properties: 'Résistant UV, usage extérieur. Signalétique, automobile.' },
      { name: 'Nylon PA12', properties: 'Haute résistance, flexibilité. Engrenages, pièces mécaniques.' },
      { name: 'PA12-CF', properties: 'Nylon chargé carbone. Rigidité et légèreté maximales.' },
      { name: 'PC', properties: 'Polycarbonate transparent. Résistance aux chocs.' },
    ],
    process: [
      { step: 1, title: 'Envoi du fichier', description: 'Transmettez votre fichier 3D (STL, OBJ, STEP) ou décrivez votre besoin pour une modélisation.' },
      { step: 2, title: 'Devis sous 24h', description: 'Analyse de votre projet, choix du matériau et du process, devis détaillé.' },
      { step: 3, title: 'Validation et lancement', description: 'Après validation, lancement de la production. Suivi en temps réel possible.' },
      { step: 4, title: 'Impression et contrôle', description: 'Impression sur nos machines, contrôle qualité de chaque pièce.' },
      { step: 5, title: 'Livraison', description: 'Expédition sécurisée ou retrait en atelier selon vos préférences.' },
    ],
    faqs: [
      {
        question: 'Quelle est la différence entre FDM et résine ?',
        answer: 'Le FDM utilise des filaments et produit des pièces plus résistantes mécaniquement, idéales pour l\'usage fonctionnel. La résine offre plus de détails et des surfaces plus lisses, idéale pour les pièces visuelles et la joaillerie.',
      },
      {
        question: 'Quels formats de fichiers acceptez-vous ?',
        answer: 'Nous acceptons STL, OBJ, STEP, 3MF, et la plupart des formats CAO. Si vous n\'avez pas de fichier 3D, nous pouvons modéliser votre pièce.',
      },
      {
        question: 'Les pièces FDM sont-elles étanches ?',
        answer: 'Avec les bons paramètres (100% remplissage, bon matériau), les pièces peuvent être étanches. Nous vous conseillons selon votre application.',
      },
      {
        question: 'Peut-on peindre les pièces FDM ?',
        answer: 'Oui, avec une préparation adaptée (ponçage, apprêt), les pièces FDM se peignent très bien. Nous proposons ce service de finition.',
      },
    ],
    cta: {
      title: 'Un projet à imprimer en FDM ?',
      description: 'Envoyez-nous votre fichier ou décrivez votre besoin. Devis gratuit sous 24h.',
    },
    relatedServices: [
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Impression Grand Format', href: '/services/impression-3d/grand-format' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
    ],
  },

  'impression-3d-resine': {
    slug: 'impression-3d-resine',
    name: 'Impression 3D Résine',
    category: 'Impression 3D',
    headline: 'Impression 3D Résine -\nPrécision et haute résolution',
    subheadline: 'La technologie SLA/DLP pour des pièces ultra-détaillées avec des surfaces lisses. Idéale pour la joaillerie, les prototypes visuels et les moules.',
    description: 'L\'impression résine (SLA/DLP) offre une précision au centième de millimètre et des surfaces parfaitement lisses. Technologie de choix pour les applications nécessitant des détails fins.',
    features: [
      {
        title: 'Précision extrême',
        description: 'Résolution jusqu\'à 0.025mm pour capturer les plus fins détails. Idéal pour joaillerie et maquettes.',
        icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
      },
      {
        title: 'Surface lisse',
        description: 'Finition de surface comparable à l\'injection. Pas de stries de couches visibles.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      },
      {
        title: 'Résines spécialisées',
        description: 'Résines calcinables pour fonderie, flexibles, haute température, dentaires...',
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      },
      {
        title: 'Détails complexes',
        description: 'Gravures, textures, microreliefs parfaitement reproduits.',
        icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      },
      {
        title: 'Moules et masters',
        description: 'Création de masters pour moules silicone ou résines calcinables pour fonte.',
        icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5',
      },
      {
        title: 'Finitions premium',
        description: 'Peinture, métallisation, vernis. Résultat professionnel garanti.',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      },
    ],
    specs: [
      { label: 'Volume max', value: '190 x 120 x 200 mm' },
      { label: 'Résolution XY', value: '0.025 - 0.05 mm' },
      { label: 'Épaisseur de couche', value: '0.025 - 0.1 mm' },
      { label: 'Précision', value: '± 0.05 mm' },
      { label: 'Délai standard', value: '2-5 jours' },
    ],
    materials: [
      { name: 'Résine standard', properties: 'Polyvalente, bon niveau de détail. Prototypes visuels.' },
      { name: 'Résine calcinable', properties: 'Pour fonte à cire perdue. Bijouterie, fonderie.' },
      { name: 'Résine dentaire', properties: 'Certifiée biocompatible. Applications dentaires.' },
      { name: 'Résine flexible', properties: 'Souplesse contrôlée. Joints, pièces souples.' },
      { name: 'Résine haute température', properties: 'Résiste jusqu\'à 200°C. Outillage, moules.' },
      { name: 'Résine transparente', properties: 'Optiquement claire après polissage. Optique, design.' },
    ],
    process: [
      { step: 1, title: 'Envoi du fichier', description: 'Fichier 3D haute résolution (STL, OBJ). Pour la joaillerie, formats 3DM acceptés.' },
      { step: 2, title: 'Analyse et devis', description: 'Vérification de l\'imprimabilité, choix de la résine adaptée, devis détaillé.' },
      { step: 3, title: 'Impression', description: 'Impression couche par couche avec contrôle qualité continu.' },
      { step: 4, title: 'Post-traitement', description: 'Lavage, séchage UV, retrait des supports. Finitions sur demande.' },
      { step: 5, title: 'Livraison', description: 'Emballage protecteur, expédition sécurisée.' },
    ],
    faqs: [
      {
        question: 'La résine est-elle adaptée pour la fonte à cire perdue ?',
        answer: 'Oui, nous utilisons des résines calcinables spécifiquement formulées qui brûlent sans laisser de résidus. Résultat équivalent à la cire traditionnelle.',
      },
      {
        question: 'Quelle précision pour les détails de bijoux ?',
        answer: 'Notre résolution de 0.025mm permet de reproduire les gravures et textures les plus fines. Idéal pour la joaillerie de précision.',
      },
      {
        question: 'Les pièces en résine sont-elles résistantes ?',
        answer: 'Les résines standard sont plus fragiles que le FDM. Pour des pièces fonctionnelles, nous utilisons des résines techniques renforcées.',
      },
      {
        question: 'Peut-on obtenir des pièces transparentes ?',
        answer: 'Oui, avec notre résine transparente et un polissage adapté, nous obtenons des pièces optiquement claires.',
      },
    ],
    cta: {
      title: 'Besoin de précision ultime ?',
      description: 'L\'impression résine est votre solution. Devis gratuit sous 24h.',
    },
    relatedServices: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Scan 3D', href: '/services/scan-3d' },
    ],
  },

  'impression-3d-grand-format': {
    slug: 'impression-3d-grand-format',
    name: 'Impression Grand Format',
    category: 'Impression 3D',
    headline: 'Impression 3D Grand Format -\nPièces jusqu\'à 85 cm en un seul bloc',
    subheadline: 'Imprimez des pièces de grande taille d\'un seul tenant, sans limite de taille par assemblage. Idéal pour l\'événementiel, les maquettes architecturales et les installations artistiques.',
    description: 'Notre imprimante grand format permet de créer des pièces jusqu\'à 85 cm de haut en un seul bloc. Pour les pièces plus grandes, nous assemblons plusieurs éléments avec des finitions invisibles - sans limite de taille.',
    features: [
      {
        title: 'Dimensions XXL',
        description: 'Pièces jusqu\'à 85 cm de haut en un seul bloc. Sans limite de taille par assemblage multi-pièces.',
        icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
      },
      {
        title: 'Pièces monobloc',
        description: 'Évitez les assemblages quand possible. Solidité et esthétique maximales.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      },
      {
        title: 'Événementiel',
        description: 'Sculptures, décors, installations. Impact visuel garanti.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      },
      {
        title: 'Maquettes XXL',
        description: 'Maquettes architecturales grande échelle, prototypes grandeur nature.',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      },
      {
        title: 'Matériaux techniques',
        description: 'PETG, ABS, ASA pour usage extérieur. Résistance garantie.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      },
      {
        title: 'Assemblage invisible',
        description: 'Pour les pièces plus grandes, assemblage avec finitions parfaites.',
        icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      },
    ],
    specs: [
      { label: 'Volume max monobloc', value: '850 mm de hauteur' },
      { label: 'Taille max avec assemblage', value: 'Sans limite' },
      { label: 'Épaisseur de couche', value: '0.2 - 0.8 mm' },
      { label: 'Buse', value: '0.8 - 1.2 mm' },
      { label: 'Délai standard', value: '5-10 jours' },
    ],
    faqs: [
      {
        question: 'Quelle taille maximale en une seule pièce ?',
        answer: '85 cm de haut maximum en un seul bloc. Pour les pièces plus grandes, nous assemblons plusieurs éléments avec des joints invisibles après finition - sans limite de taille.',
      },
      {
        question: 'Les grandes pièces résistent-elles en extérieur ?',
        answer: 'Oui, avec l\'ASA et un traitement adapté (vernis UV). Nous conseillons selon la durée d\'exposition prévue.',
      },
      {
        question: 'Quel budget pour une pièce grand format ?',
        answer: 'Le prix dépend des dimensions, du matériau et des finitions. Comptez à partir de quelques centaines d\'euros. Devis précis sur demande.',
      },
      {
        question: 'Livrez-vous et installez-vous sur site ?',
        answer: 'Oui, nous proposons la livraison et l\'installation pour les projets d\'envergure. Coordination avec vos équipes techniques.',
      },
    ],
    cta: {
      title: 'Un projet grand format ?',
      description: 'Sculptures, installations, maquettes XXL... Discutons de vos dimensions.',
    },
    relatedServices: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Prototypage', href: '/services/prototypage' },
    ],
  },

  'scan-3d': {
    slug: 'scan-3d',
    name: 'Scan 3D',
    headline: 'Scan 3D -\nNumérisez la réalité',
    subheadline: 'Transformez des objets physiques en fichiers 3D exploitables. Rétro-ingénierie, reproduction, archivage digital.',
    description: 'Le scan 3D capture la géométrie exacte d\'objets existants. Idéal pour reproduire des pièces, créer des bases de travail ou archiver numériquement.',
    features: [
      {
        title: 'Haute précision',
        description: 'Capture au dixième de millimètre. Fidélité parfaite à l\'original.',
        icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
      },
      {
        title: 'Tous types d\'objets',
        description: 'Du petit bijou à la carrosserie automobile. Adaptation selon le sujet.',
        icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
      },
      {
        title: 'Rétro-ingénierie',
        description: 'Recréez des pièces sans plans. Conversion en fichiers CAO exploitables.',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      },
      {
        title: 'Reproduction',
        description: 'Dupliquez des objets existants, avec ou sans modifications.',
        icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
      },
      {
        title: 'Archivage digital',
        description: 'Conservez numériquement des objets patrimoniaux ou de collection.',
        icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
      },
      {
        title: 'Export multi-formats',
        description: 'STL, OBJ, STEP selon vos besoins. Compatible tous logiciels CAO.',
        icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
      },
    ],
    specs: [
      { label: 'Précision', value: '± 0.05 mm' },
      { label: 'Taille min objet', value: '5 mm' },
      { label: 'Taille max objet', value: '2000 mm' },
      { label: 'Formats export', value: 'STL, OBJ, PLY, STEP' },
    ],
    process: [
      { step: 1, title: 'Réception de l\'objet', description: 'Envoi ou dépôt de l\'objet à scanner. Évaluation des contraintes.' },
      { step: 2, title: 'Préparation', description: 'Nettoyage, application de spray mat si nécessaire (surfaces brillantes).' },
      { step: 3, title: 'Scan', description: 'Capture 360° avec notre scanner structuré. Plusieurs passes si nécessaire.' },
      { step: 4, title: 'Traitement', description: 'Nettoyage du maillage, rebouchage des trous, optimisation.' },
      { step: 5, title: 'Livraison', description: 'Fichier 3D dans le format souhaité. Retour de l\'objet original.' },
    ],
    faqs: [
      {
        question: 'Peut-on scanner des objets brillants ou transparents ?',
        answer: 'Les surfaces brillantes ou transparentes nécessitent un spray mat temporaire qui s\'évapore naturellement. Le résultat est excellent après cette préparation.',
      },
      {
        question: 'Le scan est-il destructif pour l\'objet ?',
        answer: 'Non, le scan est totalement non-invasif. Votre objet est retourné intact.',
      },
      {
        question: 'Peut-on modifier le fichier scanné ?',
        answer: 'Oui, le fichier peut être modifié dans un logiciel CAO. Nous pouvons aussi réaliser les modifications pour vous.',
      },
      {
        question: 'Quelle différence entre scan et modélisation ?',
        answer: 'Le scan capture un objet existant. La modélisation crée un objet à partir de zéro (croquis, plans, idée).',
      },
    ],
    cta: {
      title: 'Un objet à numériser ?',
      description: 'Reproduisez, archivez ou modifiez vos pièces existantes grâce au scan 3D.',
    },
    relatedServices: [
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Prototypage', href: '/services/prototypage' },
    ],
  },

  'modelisation-3d': {
    slug: 'modelisation-3d',
    name: 'Modélisation 3D',
    headline: 'Modélisation 3D -\nDe l\'idée au fichier',
    subheadline: 'Création de modèles 3D sur mesure à partir de vos croquis, plans ou idées. Prêts pour l\'impression ou la production.',
    description: 'Notre équipe crée des modèles 3D optimisés pour l\'impression. Du simple croquis au fichier prêt à imprimer, nous donnons forme à vos projets.',
    features: [
      {
        title: 'À partir de rien',
        description: 'Une idée, un croquis, une photo ? Nous créons le modèle 3D complet.',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      },
      {
        title: 'Optimisé impression',
        description: 'Modèles conçus pour l\'impression 3D : supports, orientations, tolérances.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      },
      {
        title: 'Expertise CAO',
        description: 'Logiciels professionnels (Fusion 360, SolidWorks, Rhino) pour tous types de projets.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      },
      {
        title: 'Itérations rapides',
        description: 'Modifications et ajustements inclus jusqu\'à validation.',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      },
      {
        title: 'Multi-formats',
        description: 'Livraison dans le format de votre choix : STL, STEP, OBJ, 3DM...',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      },
      {
        title: 'Rendus visuels',
        description: 'Rendus photoréalistes pour validation avant production si besoin.',
        icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
      },
    ],
    process: [
      { step: 1, title: 'Brief', description: 'Partagez votre besoin : croquis, photos, dimensions, contraintes d\'usage.' },
      { step: 2, title: 'Proposition', description: 'Nous proposons une approche et un devis. Échanges pour affiner.' },
      { step: 3, title: 'Modélisation', description: 'Création du modèle 3D avec points de validation intermédiaires.' },
      { step: 4, title: 'Validation', description: 'Révisions jusqu\'à votre validation. Rendus 3D fournis.' },
      { step: 5, title: 'Livraison', description: 'Fichier final dans le format souhaité, prêt pour impression.' },
    ],
    faqs: [
      {
        question: 'Je n\'ai qu\'une idée vague, est-ce suffisant ?',
        answer: 'Oui ! Nous partons régulièrement de simples descriptions verbales. Nous vous proposons des croquis et itérons ensemble.',
      },
      {
        question: 'Combien de révisions sont incluses ?',
        answer: 'Nous incluons généralement 2-3 cycles de révisions dans nos devis. Les modifications mineures sont toujours incluses.',
      },
      {
        question: 'Le fichier m\'appartient-il après livraison ?',
        answer: 'Oui, vous êtes propriétaire du fichier 3D final. Nous ne le réutilisons pas sans votre accord.',
      },
      {
        question: 'Pouvez-vous modifier un fichier existant ?',
        answer: 'Oui, nous modifions des fichiers existants : corrections, adaptations, ajout de fonctionnalités.',
      },
    ],
    cta: {
      title: 'Une idée à modéliser ?',
      description: 'De l\'esquisse au fichier 3D, nous concrétisons vos projets.',
    },
    relatedServices: [
      { name: 'Scan 3D', href: '/services/scan-3d' },
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Prototypage', href: '/services/prototypage' },
    ],
  },

  'prototypage': {
    slug: 'prototypage',
    name: 'Prototypage',
    headline: 'Prototypage -\nDu concept au prototype',
    subheadline: 'Validez vos idées rapidement avec des prototypes fonctionnels. Itérations rapides, tests utilisateurs, validation avant production.',
    description: 'Le prototypage rapide permet de tester vos concepts avant investissement lourd. Prototypes visuels ou fonctionnels, nous adaptons l\'approche à vos objectifs.',
    features: [
      {
        title: 'Prototypes fonctionnels',
        description: 'Testez la résistance, l\'ergonomie, les mécanismes. Validation technique complète.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      },
      {
        title: 'Prototypes visuels',
        description: 'Validez l\'esthétique, les proportions, l\'aspect. Présentations clients.',
        icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      },
      {
        title: 'Itérations rapides',
        description: 'Modification et nouvelle version en quelques jours. Cycle court garanti.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      },
      {
        title: 'Multi-technologies',
        description: 'FDM, résine, usinage... La bonne technologie pour chaque usage.',
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      },
      {
        title: 'Assemblages complexes',
        description: 'Prototypes multi-pièces, mécanismes, intégration électronique.',
        icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      },
      {
        title: 'Conseil matériaux',
        description: 'Orientation vers les matériaux et process adaptés à la production future.',
        icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      },
    ],
    process: [
      { step: 1, title: 'Analyse du besoin', description: 'Compréhension de vos objectifs : validation technique, esthétique, tests utilisateurs...' },
      { step: 2, title: 'Proposition technique', description: 'Choix de la technologie et du matériau adaptés. Devis détaillé.' },
      { step: 3, title: 'Réalisation', description: 'Fabrication du prototype avec contrôle qualité.' },
      { step: 4, title: 'Tests et retours', description: 'Vous testez, nous ajustons. Itérations rapides.' },
      { step: 5, title: 'Validation', description: 'Prototype final validé, prêt pour la production.' },
    ],
    faqs: [
      {
        question: 'Quelle différence entre prototype visuel et fonctionnel ?',
        answer: 'Le prototype visuel valide l\'esthétique et les proportions. Le fonctionnel permet de tester les mécanismes et la résistance. Les matériaux et process diffèrent.',
      },
      {
        question: 'Combien d\'itérations prévoir ?',
        answer: 'En moyenne 2-3 itérations suffisent pour valider un produit. Nous optimisons chaque version pour converger rapidement.',
      },
      {
        question: 'Le prototype peut-il servir de base pour la production ?',
        answer: 'Oui, nous concevons en pensant à la production. Le prototype validé peut servir de référence pour l\'outillage injection ou autre.',
      },
      {
        question: 'Proposez-vous un accompagnement jusqu\'à la production ?',
        answer: 'Nous accompagnons jusqu\'au prototype validé et réalisons également les productions en série nous-mêmes.',
      },
    ],
    cta: {
      title: 'Un produit à valider ?',
      description: 'Réduisez les risques avec le prototypage rapide avant investissement.',
    },
    relatedServices: [
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Électronique', href: '/services/electronique' },
    ],
  },

  'electronique': {
    slug: 'electronique',
    name: 'Électronique & Motorisation',
    headline: 'Électronique & Motorisation sur mesure',
    subheadline: 'Développement de solutions électroniques et électromécaniques intégrées. Notre différenciateur : combiner impression 3D et électronique.',
    description: 'Nous concevons et fabriquons des solutions électroniques sur mesure : cartes de contrôle, motorisation, capteurs, systèmes embarqués. Parfaitement intégrées à vos boîtiers imprimés en 3D.',
    features: [
      {
        title: 'Cartes sur mesure',
        description: 'Conception de PCB adaptés à vos besoins. Du schéma à la carte assemblée.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      },
      {
        title: 'Motorisation',
        description: 'Intégration de moteurs, servos, actionneurs. Mécanismes complets.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      },
      {
        title: 'Capteurs',
        description: 'Acquisition de données : température, mouvement, présence, luminosité...',
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      },
      {
        title: 'Systèmes embarqués',
        description: 'Programmation de microcontrôleurs, systèmes autonomes, IoT.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      },
      {
        title: 'Éclairage LED',
        description: 'Intégration d\'éclairages : rubans LED, spots, effets lumineux.',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      },
      {
        title: 'Boîtiers intégrés',
        description: 'Boîtiers imprimés 3D optimisés pour vos cartes. Ensemble cohérent.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      },
    ],
    process: [
      { step: 1, title: 'Cahier des charges', description: 'Définition des fonctionnalités, contraintes d\'encombrement, alimentation...' },
      { step: 2, title: 'Conception', description: 'Schéma électronique, choix des composants, routage PCB.' },
      { step: 3, title: 'Prototype', description: 'Fabrication et assemblage du prototype. Tests fonctionnels.' },
      { step: 4, title: 'Validation', description: 'Tests en conditions réelles. Ajustements si nécessaire.' },
      { step: 5, title: 'Production', description: 'Petite série ou orientation vers production industrielle.' },
    ],
    faqs: [
      {
        question: 'Quel type de projets électroniques réalisez-vous ?',
        answer: 'Nous réalisons des projets variés : displays interactifs, automates, capteurs connectés, systèmes de contrôle, robotique. Du prototype à la petite série.',
      },
      {
        question: 'Pouvez-vous reprendre un projet existant ?',
        answer: 'Oui, nous pouvons reprendre et améliorer un projet existant : correction de bugs, ajout de fonctionnalités, optimisation.',
      },
      {
        question: 'Produisez-vous les cartes en série ?',
        answer: 'Oui, nous réalisons nous-mêmes les productions en série, des petites séries aux volumes plus importants selon vos besoins.',
      },
    ],
    cta: {
      title: 'Un projet mécatronique ?',
      description: 'Mécanique + électronique en un seul partenaire. Discutons de votre projet.',
    },
    relatedServices: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Prototypage', href: '/services/prototypage' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
    ],
  },
}

export const servicesList = Object.values(servicesData)
