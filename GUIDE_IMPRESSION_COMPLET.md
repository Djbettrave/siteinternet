# Guide impression 3D — contenu éditorial complet

Ce document centralise le contenu des guides publiés sur le site. Les articles individuels restent dans `src/content/guides/` ; ce fichier sert de version de travail globale pour enrichir les textes, préparer les captures et garder une vision d’ensemble SEO/GEO.

## Impression 3D FDM

### 1. Adhérence au plateau et warping

Le warping correspond au relèvement des bords d’une pièce pendant l’impression. Le plastique se rétracte en refroidissant et tire sur les premières couches. Si l’adhérence au plateau est insuffisante, les coins se soulèvent progressivement, surtout sur les grands objets plats et les angles vifs.

Pour une plaque texturée, laver régulièrement le plateau à l’eau chaude et au liquide vaisselle, puis retirer les traces de doigts avec de l’alcool isopropylique et une microfibre. Pour du PLA, un plateau entre 50 et 55 °C constitue un bon point de départ. Si la surface de contact est faible, ajouter une colle adaptée à l’impression 3D et un brim de 5 à 8 mm. La première couche doit être homogène, sans zones écrasées ni manques de matière.

### 2. Taux et motifs de remplissage

Le remplissage influence le temps d’impression, le poids, la quantité de matière et la résistance mécanique. Une pièce décorative en PLA, sans contrainte particulière, peut généralement utiliser 10 à 12 % de remplissage. Les motifs rectilignes, grille ou cubiques sont alors adaptés selon le rendu recherché.

Pour une pièce technique, augmenter le taux à 15–25 % selon les efforts prévus. Le gyroid est souvent un excellent compromis : il répartit bien les efforts dans plusieurs directions, tout en offrant une progression de résistance régulière. Pour une pièce translucide contenant une source lumineuse, le remplissage peut être de 0 % afin de ne pas voir de motif interne ; le mode vase permet aussi de créer un objet avec une seule paroi. À l’inverse, un motif de remplissage volontairement visible peut devenir un élément décoratif dans une lampe ou un diffuseur.

### 3. Effet escalier sur les pentes et objets sphériques

L’impression FDM est un dépôt de filament couche par couche. Une pente, un dôme ou une sphère est donc approché par une succession de petits paliers : c’est l’effet escalier. Il devient plus visible lorsque les couches sont épaisses ou lorsque les détails importants sont placés parallèlement au plateau.

La première solution consiste à orienter la pièce : les pentes et détails importants doivent être aussi verticaux que possible. Pour les sphères et formes organiques, activer la hauteur de couche adaptative dans OrcaSlicer ou Bambu Studio. Le slicer peut conserver des couches épaisses dans les zones simples, par exemple 0,28 mm, puis réduire à 0,20 ou 0,08 mm dans les zones courbes. Le temps d’impression augmente, mais les strates deviennent moins visibles.

### 4. Artefacts sur des zones sphériques ou surplombs non supportés

Sous une sphère, un dôme ou un fort surplomb, le filament est déposé avec peu ou pas de matière sous lui. Avant de refroidir, il peut s’affaisser et former des bavures, ondulations ou surfaces irrégulières.

Dans le slicer, augmenter le nombre de parois, par exemple de deux à trois, et privilégier l’ordre de paroi extérieure puis intérieure lorsque cela améliore le rendu de la surface. Réduire la vitesse et la hauteur de couche dans les zones difficiles, tout en conservant un refroidissement adapté. Si la géométrie dépasse les capacités d’impression sans support, ajouter des supports avec une interface support/pièce : une bonne interface limite les défauts sur la surface soutenue.

### 5. Supports difficiles à retirer

Un support doit maintenir la pièce pendant l’impression sans fusionner excessivement avec elle. Le compromis se fait entre la qualité de surface et la facilité de retrait. Les supports arborescents sont souvent préférables pour les géométries complexes ou organiques ; les supports classiques conviennent bien aux grandes surfaces planes.

La distance entre le support et la pièce est déterminante. Pour une hauteur de couche de 0,20 mm, une distance d’environ 0,20 mm est un bon point de départ. Une distance plus faible améliore la surface soutenue mais rend le retrait plus difficile. Une interface de support correctement réglée améliore fortement la finition. Les supports arborescents hybrides peuvent donner une très bonne qualité de surface, au prix d’un retrait plus exigeant. Avec une imprimante multimatériaux, une interface PETG sous une pièce PLA peut limiter l’adhérence entre les matériaux et donner une surface propre.

### 6. Sous-extrusion

La sous-extrusion apparaît lorsque l’imprimante dépose moins de matière que prévu : lignes espacées, parois incomplètes, couches peu liées ou trous localisés. Les causes les plus fréquentes sont une buse partiellement bouchée, un filament humide, une bobine qui se déroule mal, une température trop basse ou une vitesse trop élevée.

Vérifier d’abord le chemin du filament, l’état de la buse et la liberté de rotation de la bobine. Ensuite, contrôler le débit, la température et la vitesse, un paramètre à la fois. Modifier plusieurs réglages simultanément rend le diagnostic difficile.

### 7. Stringing ou fils d’ange

Le stringing correspond à de fins fils de plastique entre deux parties de la pièce. Pendant un déplacement, le matériau continue légèrement à s’écouler par la buse. Le phénomène est particulièrement fréquent avec le TPU et les matériaux très fluides.

Les deux réglages principaux sont la température de buse et la rétraction. Réduire légèrement la température, sans sortir de la plage recommandée par le fabricant, limite l’écoulement. La rétraction tire le filament vers l’arrière avant un déplacement, puis le réamorce au début de la zone suivante. Ajuster sa distance et sa vitesse progressivement, un seul paramètre à la fois.

## Fichiers 3D

### 1. Logiciels de modélisation 3D

Les logiciels paramétriques, tels que Fusion 360, Onshape et SolidWorks, sont adaptés aux pièces techniques, aux dimensions précises, aux assemblages et aux mécanismes. Ils fonctionnent souvent à partir d’esquisses 2D transformées en volumes 3D. Fusion 360 et Onshape proposent des accès gratuits ou accessibles selon les usages ; SolidWorks est principalement une solution payante.

Rhino et SketchUp sont courants en design et architecture. Rhino peut convenir à l’impression 3D lorsqu’il est bien maîtrisé. SketchUp demande davantage de vigilance : certaines arêtes ou faces peuvent ne pas être fusionnées à l’export, ce qui crée des problèmes de maillage. Blender est très polyvalent : modélisation, sculpture, animation, rendu et préparation de modèles imprimables. ZBrush, Blender en mode sculpture et Nomad Sculpt sont particulièrement adaptés aux formes artistiques et organiques.

### 2. Formats STL, STEP, OBJ et 3MF

Le STL est le format le plus courant en impression 3D. Il représente principalement une surface sous forme de triangles et convient à une pièce simple prête à être slicée. Il contient peu d’informations sur les couleurs, matériaux, groupes d’objets ou historique de conception ; il est donc difficile à modifier précisément après export.

Le STEP est préférable pour retravailler une pièce technique dans Fusion 360, Onshape ou SolidWorks, car il conserve mieux la logique géométrique de conception. OBJ et FBX sont utiles dans les workflows de modélisation, Blender ou sculpture ; ils peuvent conserver davantage d’informations de matériaux, couleurs ou groupes. Le 3MF est particulièrement intéressant pour les projets multicolores ou multi-matériaux lorsqu’il est pris en charge par le slicer et la machine.

### 3. Fichier 3D trop lourd : simplifier et optimiser

Les scans 3D, sculptures numériques et modèles générés automatiquement peuvent contenir des centaines de milliers, voire des millions de polygones. Un tel niveau de détail ralentit les logiciels et le slicer sans améliorer nécessairement l’impression finale.

Dans Blender, inspecter le maillage en mode édition, puis utiliser Decimate pour réduire progressivement le nombre de faces. Le modificateur Remesh peut reconstruire un maillage plus homogène ; il faut l’ajuster avec soin pour conserver les détails utiles. Toujours garder une copie de l’original avant une simplification.

### 4. Comprendre le maillage 3D

Un maillage est la structure qui décrit la surface d’un objet 3D. Il est composé de sommets (vertices), d’arêtes et de faces. Dans un STL, les faces sont le plus souvent triangulaires. Pour être imprimable, le maillage doit former un volume fermé, cohérent et suffisamment détaillé pour la taille réelle de la pièce.

Un maillage très dense n’est pas automatiquement meilleur. Le bon compromis dépend de la résolution de l’impression, de la taille de l’objet et des détails réellement visibles. Un maillage propre permet au slicer d’interpréter correctement les parois, les volumes et les zones à remplir.

### 5. Arêtes non fusionnées, trous et non-manifold

Un modèle peut paraître correct à l’écran tout en étant non imprimable. Des faces ouvertes, arêtes non fusionnées, volumes qui s’interpénètrent ou faces inversées rendent le volume ambigu pour le slicer. Cela peut produire des parois manquantes, des couches incohérentes ou un échec de tranchage.

Dans Blender, utiliser les sélections Non-Manifold et Loose Geometry pour localiser les trous, éléments isolés et arêtes problématiques. Fusionner les sommets proches, supprimer les géométries inutiles et reconstruire les zones ouvertes avant export.

### 6. Nettoyer et réparer un fichier 3D

Blender est un très bon outil pour observer et corriger manuellement un maillage : supprimer les éléments isolés, simplifier, fusionner, corriger une zone précise ou refaire une partie de la topologie. Autodesk Netfabb est très efficace pour les réparations automatisées : fermeture de trous, suppression de triangles dupliqués, correction de certaines intersections et analyse de la fabricabilité.

Combiner Blender pour le contrôle manuel et Netfabb pour la réparation technique automatisée est un workflow robuste. Après toute réparation, comparer le résultat au fichier original et vérifier le modèle dans le slicer.

### 7. Tolérances en FDM

Une pièce imprimée n’a pas exactement les dimensions du modèle numérique. Le matériau, l’imprimante, l’orientation, la buse et les réglages ont une influence sur le résultat final. Deux pièces destinées à s’emboîter doivent donc prévoir un jeu fonctionnel.

Pour des assemblages critiques — axe, clip, glissière, emboîtement — imprimer un petit test de tolérance avant la pièce complète est la méthode la plus fiable. Ajuster ensuite les dimensions du modèle selon le comportement observé sur la machine et le matériau utilisés.

## Impression 3D résine

### 1. Technologies MSLA, DLP et SLA

Les imprimantes résine solidifient une résine photosensible couche par couche grâce aux UV. Les machines MSLA/LCD utilisent le plus souvent un écran monochrome qui masque une source UV. Les imprimantes DLP utilisent un projecteur. Les machines SLA utilisent un laser qui trace chaque couche.

La résine offre de très fines hauteurs de couche et des surfaces lisses, avec moins de strates visibles qu’en FDM. En contrepartie, elle demande un post-traitement : lavage, séchage, post-polymérisation, ventilation et manipulation soigneuse de la résine non polymérisée. Les machines SLA laser sont généralement plus coûteuses et destinées à des usages plus exigeants ; les imprimantes MSLA sont les plus courantes pour le grand public.

### 2. Calibrer le temps d’exposition

Le temps d’exposition correspond à la durée pendant laquelle chaque couche reçoit les UV nécessaires à sa polymérisation. Il dépend de la machine, de la puissance lumineuse, du type de résine, de sa couleur, de la hauteur de couche et de la température ambiante.

Chaque changement de résine ou de couleur mérite un test de calibration. Les résines standard, ABS-like, flexibles, transparentes ou très pigmentées ne réagissent pas de la même façon. Une exposition trop faible donne des couches fragiles ; une exposition trop forte réduit les détails et peut compliquer le retrait des supports. Partir du profil du fabricant puis ajuster progressivement après un test est la méthode la plus fiable.

### 3. Aucune pièce sur le plateau : adhérence en résine

Si l’impression se termine sans pièce sur le plateau et qu’une fine couche solidifiée reste au fond du bac, les premières couches ont adhéré au film FEP plutôt qu’au plateau. La première vérification est le bed leveling : le plateau doit être correctement parallèle au fond du bac afin de former des couches de base régulières.

Les premières couches sont volontairement surexposées pour créer une base solide. Selon la machine et la résine, 15 à 25 secondes et environ six couches de base constituent un point de départ à calibrer. Vérifier également l’état du film FEP, la propreté du plateau et le profil de résine utilisé.

### 4. Décrochage en cours d’impression

Une impression peut démarrer correctement puis se séparer en cours de fabrication : une partie remonte avec le plateau, une autre reste sur le film FEP. Cela indique souvent que les forces de décollement sont plus importantes que la liaison entre les couches ou les supports.

Revoir en priorité le temps d’exposition normal, car des couches trop peu polymérisées peuvent céder à chaque soulèvement. Vérifier ensuite les supports : quantité, taille, position sur les premières zones imprimées, orientation de la pièce et poids des îlots. Des tests de calibration disponibles sur les plateformes de modèles 3D permettent de définir un profil fiable pour chaque résine.

## Préparation des visuels

Pour chaque article, prévoir une image de couverture, une ou plusieurs captures du slicer ou du logiciel concerné, puis si possible une photo avant/après. Les images sont associées aux articles par leur nom dans `public/images/guides/<categorie>/`. Remplacer un visuel existant en conservant son nom de fichier met automatiquement à jour la page correspondante.
