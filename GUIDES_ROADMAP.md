# Feuille de route — Guides impression 3D

Dernière mise à jour : 2 septembre 2026.

## Terminé

- [x] Hub `/guides` avec catégories FDM, Fichiers 3D et Résine.
- [x] Pages catégories avec sélecteur permettant de passer directement d’une rubrique à l’autre.
- [x] Carrousel visuel par catégorie : miniatures, guide actif, navigation précédent/suivant et lien vers l’article détaillé.
- [x] 18 articles créés : 7 FDM, 7 Fichiers 3D et 4 Résine.
- [x] Contenu global réuni dans `GUIDE_IMPRESSION_COMPLET.md`.
- [x] Pages structurées pour le SEO : URL par sujet, titre, description, texte alternatif et sitemap.
- [x] Organisation par sujet : `article.mdx` et dossier image miroir.
- [x] Couvertures associées aux 18 sujets et nommées selon leur slug.
- [x] Interface harmonisée : entrées principales compactes, cartes catégories distinctes et hiérarchie typographique simplifiée.
- [x] Titres de sections du hub Guides renforcés et textes descriptifs allégés pour une hiérarchie visuelle plus lisible.

## À enrichir

- [ ] Ajouter des captures de slicer, Blender, Netfabb et autres logiciels directement dans les dossiers de sujets.
- [ ] Intégrer ces captures au bon endroit dans chaque `article.mdx` avec `GuideImage`.
- [ ] Relire puis enrichir progressivement les textes techniques avec exemples, réglages et retours atelier.
- [ ] Ajouter des liens croisés entre articles proches (par exemple warping, supports et effet escalier).
- [ ] Préparer des questions/réponses FAQ par article lorsque les questions récurrentes sont identifiées.

## Convention à conserver

```text
src/content/guides/<categorie>/<slug>/article.mdx
public/images/guides/<categorie>/<slug>/<slug>.png
```

Les captures complémentaires peuvent être ajoutées dans le même dossier image avec un nom explicite : `capture-orca-01.png`, `capture-blender-maillage.png`, etc.
