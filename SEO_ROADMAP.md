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
