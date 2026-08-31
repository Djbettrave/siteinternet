# Éditer un guide Inphenix

Chaque sujet possède son propre dossier. Cela permet de ranger l’article, la couverture et toutes les captures au même endroit.

```text
src/content/guides/fdm/warping-adhesion-plateau/article.mdx
public/images/guides/fdm/warping-adhesion-plateau/warping-adhesion-plateau.png
public/images/guides/fdm/warping-adhesion-plateau/capture-slicer-01.png
```

Les catégories disponibles sont `fdm`, `fichiers-3d` et `resine`. Les pages sont créées automatiquement à l’adresse `/guides/<categorie>/<slug>`.

## Ajouter une photo ou une capture

1. Ouvrez le dossier du sujet concerné dans `public/images/guides/<categorie>/<slug>/`.
2. La couverture doit porter exactement le même nom que le dossier du sujet, par exemple `warping-adhesion-plateau.png`.
3. Ajoutez vos captures complémentaires avec un nom explicite, par exemple `capture-orca-remplissage.png`.
4. Pour insérer une capture à un endroit précis de l’article, modifiez `article.mdx` et ajoutez :

```mdx
<GuideImage
  src="/images/guides/fdm/warping-adhesion-plateau/capture-slicer-01.png"
  alt="Réglage de la température du plateau PLA dans OrcaSlicer"
  caption="Pour du PLA sur plaque texturée, commencez généralement entre 50 et 55 °C."
/>
```

Le texte `alt` décrit précisément l’image pour l’accessibilité et le référencement. La `caption` est la légende visible.

## Blocs disponibles dans un guide

```mdx
<DiagnosticBlock symptoms={['Symptôme 1', 'Symptôme 2']} />

<CauseSolution number="01" title="La cause" solution="La solution">
  Votre explication.
</CauseSolution>

<ParameterBlock title="PLA" parameters={[
  ['Plateau', '55 °C'],
  ['Buse', '210 °C'],
]} />

<TipBlock>Votre conseil pratique.</TipBlock>
```

## Créer un nouveau guide

1. Dupliquez le dossier complet d’un sujet existant dans la bonne catégorie.
2. Renommez le dossier avec une URL courte, par exemple `temperature-buse`.
3. Mettez à jour `article.mdx` : titre, description, texte alternatif, légende, durée et ordre.
4. Remplacez ou ajoutez les images dans le dossier miroir sous `public/images/guides/`.

Conservez de préférence des images WebP ou JPEG optimisées, avec des noms descriptifs.
