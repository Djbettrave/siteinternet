# Référentiel SEO — Inphenix System

Dernière mise à jour : 3 septembre 2026.

Ce document est la référence à appliquer lors de la création ou de la modification d’une page. Il complète l’ancien audit conservé dans `SEO.md`.

## Déjà en place

- Domaine canonique : `https://www.inphenix-system.fr`.
- Sitemap XML et `robots.txt` publics ; les moteurs peuvent explorer les pages publiques.
- IndexNow configuré.
- Un H1 descriptif par page, des titres SEO courts et des descriptions uniques.
- Images avec texte alternatif descriptif ; les visuels des Réalisations sont définis dans `public/images/projects/config.json`.
- Page Réalisations rendue côté serveur : projets, images et textes alternatifs sont présents dans le HTML initial.
- Navigation avec liens HTML vers les pages Services et Secteurs ; liens vers les sous-pages dans le footer.
- Données structurées : `Organization`, `LocalBusiness`, `WebSite` sur l’accueil et `BreadcrumbList` sur les Services, Secteurs, Guides et Réalisations.

## Méthode de création ou de modification d’une page

Cette méthode s’applique avant toute intégration et publication d’une page Service, Secteur, Guide ou Réalisation.

### 1. Cadrer l’offre et l’intention de recherche

- Définir ce que la page propose concrètement, à qui elle s’adresse et ce qui doit être compris dès le premier écran.
- Identifier l’expression principale recherchée par un prospect, puis les expressions secondaires réellement utiles. Ne pas partir d’un terme interne ou d’un vocabulaire technique si ce n’est pas ce que le client recherche.
- Vérifier les pages concurrentes pour comprendre les attentes du marché, sans reprendre leur texte, leur structure à l’identique, ni leurs promesses.
- Ne pas révéler le matériel, les procédés propriétaires, l’organisation interne ou les partenaires lorsque cette précision n’est pas utile au client.

### 2. Préparer le contenu avant intégration

- Rédiger et faire valider le texte avant de modifier le site lorsque le contenu ou la promesse commerciale reste à arbitrer.
- Donner une réponse précise dès l’introduction : prestation, supports ou cas d’usage, niveau de série, limites éventuelles et résultat attendu.
- Séparer les services : ne pas inclure conception, modélisation ou prototypage comme s’ils étaient compris dans une prestation de fabrication, sauf si cela est réellement le cas. Les citer uniquement comme interventions possibles en amont.
- Préférer les formulations concrètes aux phrases valorisantes sans information. Supprimer toute phrase qui n’explique ni une capacité, ni une condition, ni une application, ni une étape projet.
- Éviter les répétitions de structure, les enchaînements de généralités et les formulations impersonnelles qui donnent un rendu artificiel.

### 3. Contrôle SEO éditorial

- Faire apparaître l’expression principale dans le `title`, le H1, le premier paragraphe et au moins un H2, seulement lorsque la phrase reste naturelle.
- Employer les variantes de recherche dans les sections et la FAQ : singulier/pluriel, cas d’usage, types d’objet, niveaux de série, localisation si elle est pertinente.
- Ne pas forcer les mots-clés techniques. Une technologie ou une matière n’est citée que lorsqu’elle aide réellement le prospect à choisir ou à comprendre la prestation.
- Prévoir assez de contenu pour traiter les questions importantes, sans allonger une page par du texte de remplissage. Chaque section doit apporter une information distincte.
- Utiliser une FAQ lorsque les réponses correspondent à de vraies questions de devis ou de faisabilité. Ne pas ajouter une conclusion commerciale redondante après la FAQ si la structure de la page ne le justifie pas.

### 4. Lecture par un chef de projet ou un acheteur

Avant validation, vérifier qu’une personne qui arrive sur la page identifie rapidement :

- ce qui peut être fabriqué, personnalisé ou livré ;
- les objets, supports ou usages concernés ;
- les quantités possibles et les éventuelles conditions de faisabilité ;
- les informations à transmettre pour obtenir un devis exploitable ;
- les étapes qui restent nécessaires avant le lancement : validation, fichier, dimensions, quantité, délai ou finition.

Présenter les prérequis projet sous forme de checklist ou de lignes courtes. Un intitulé clair suivi de sa précision est préférable à un paragraphe dense ou à une mise en forme décorative qui nuit à la lecture mobile.

### 5. Direction visuelle et responsive

- Les visuels doivent accompagner les sections auxquelles ils se rapportent. Éviter de regrouper toutes les images à la fin d’une longue page de texte sans raison narrative.
- Avant disponibilité des photos réelles, utiliser des emplacements neutres et discrets, sans texte public du type « visuel à ajouter », « exemple à compléter » ou détail interne.
- Vérifier l’affichage sur mobile : taille des titres, retours à la ligne, longueur des paragraphes, listes, tableaux et cartes. Une information claire sur ordinateur peut devenir illisible si elle est enfermée dans des pastilles ou des encadrés trop larges sur téléphone.
- Utiliser le design system existant et ne pas créer de composant décoratif qui détourne l’attention de l’information utile.

### 6. Validation avant publication

- Vérifier que le texte semble écrit pour le sujet précis de la page, et non généré à partir d’un modèle générique.
- Relire chaque section avec cette question : « Cette phrase aide-t-elle un client à comprendre, décider ou préparer son projet ? » Si non, la supprimer ou la réécrire.
- Contrôler l’absence de promesse invérifiable, d’information technique imprécise et de contradiction avec les autres services.
- Vérifier la cohérence des liens internes, du menu, de la page Services, du sitemap, des métadonnées et de la FAQ structurée.
- Lancer la compilation, vérifier la page publiée sur ordinateur et mobile, puis confirmer la mise en ligne avec son URL.

## Checklist pour une nouvelle page

1. Créer une URL courte, en minuscules, avec des tirets et sans accent : `/secteurs/nouvelle-activite`.
2. Ajouter un `title` unique de moins de 70 caractères, une meta description unique de 25 à 160 caractères et un canonical en `www`.
3. Ajouter un seul H1 visible, précis et cohérent avec le premier paragraphe.
4. Structurer la page avec des H2 utiles, sans répétition artificielle de mots-clés.
5. Lier la page depuis sa page parente et vers au moins une page réellement associée avec une ancre claire : « Impression 3D FDM », pas « Cliquez ici ».
6. Pour chaque image utile, écrire un `alt` qui décrit réellement le visuel. Pour une nouvelle image, utiliser un nom descriptif sans accent, par exemple `maquette-architecture-impression-3d.webp`.
7. Ajouter `BreadcrumbSchema` si la page appartient à une hiérarchie : `Accueil > Secteurs > Nouvelle activité`.
8. Vérifier localement avec `npm run lint` puis `npx tsc --noEmit`.
9. Après déploiement, prévenir les moteurs pour les URL modifiées :

```bash
npm run indexnow -- /nouvelle-page /guides/fdm/nouveau-sujet
```

10. Contrôler ensuite l’indexation dans Bing Webmaster Tools et Google Search Console.

## Principes à conserver

- Ne pas publier de page très courte ou quasi identique à une page existante.
- Ne pas surcharger titres, H1, descriptions ou `alt` de mots-clés.
- Ne jamais déclarer des données structurées non vérifiables : avis, notes, prix, adresse ou services fictifs.
- Ne pas renommer une image déjà référencée sans nécessité forte : son URL peut être déjà indexée.
- Les liens annexes Google (sitelinks) sont automatiques. La structure interne, les vrais liens HTML et le contenu utile renforcent les signaux, sans pouvoir les forcer.
