# 🔎 Synthèse Audit SEO – inphenix-system.fr

Source : Audit SEOptimer – 21 février 2026  

---

## 🏁 Score Global

- Score global : B
- Référencement : B
- Performance : B+
- Convivialité : B
- Réseaux sociaux : F
- 16 recommandations identifiées

---

# 🎯 Priorités d’Optimisation

## 1️⃣ SEO On-Page (Priorité Moyenne)

### 🔹 IndexNow activé

La clé IndexNow est publiée à la racine du site. Après la mise en ligne d’une page nouvelle ou modifiée, envoyer uniquement les URL concernées :

```bash
npm run indexnow -- /guides/fdm/stringing /secteurs/medical
```

IndexNow notifie Bing et les moteurs compatibles d’une modification ; il n’assure pas à lui seul l’indexation ou le positionnement.

### 🔹 Balise Title trop longue (61 caractères)
Objectif : 50–60 caractères.

Actuel :
Inphenix System | Bureau d'étude Impression 3D & Électronique

Action :
- Raccourcir.
- Intégrer les mots-clés principaux.
- Éviter les termes génériques inutiles.

---

### 🔹 Meta Description trop longue (168 caractères)
Objectif : 120–160 caractères.

Action :
- Condenser le texte.
- Conserver les mots-clés stratégiques :
  - impression 3D
  - FDM
  - résine
  - grand format
  - développement électronique
  - devis en ligne

---

### 🔹 Absence de balise Canonique

À ajouter dans le <head> :

<link rel="canonical" href="https://www.inphenix-system.fr/" />

---

### 🔹 Répartition des mots-clés insuffisante

Les mots-clés ne sont pas assez présents dans :
- Title
- Meta
- H1
- H2

Mots-clés prioritaires :
- impression 3D
- devis instantané
- sur mesure
- FDM
- grand format
- développement électronique

Action :
- Harmoniser leur présence dans Title + H1 + H2 + premier paragraphe.

---

### 🔹 Contenu texte insuffisant (386 mots)

Risque : Thin content.

Objectif :
- 800 à 1200 mots minimum sur la homepage.

À ajouter :
- Cas d’usage
- Process détaillé
- Avantages différenciants
- Détails techniques
- FAQ SEO

---

### 🔹 Aucun outil Analytics détecté

À installer :
- Google Analytics 4
- Google Search Console
- (Optionnel) Google Tag Manager

---

### 🔹 Fichier llms.txt absent

Action :
- Ajouter un fichier llms.txt à la racine du site.

---

## 2️⃣ Performance & Technique (Priorité Haute)

### 🔹 Erreur console JavaScript

ReferenceError: tarteaucitron is not defined

Action :
- Vérifier le chargement correct du script tarteaucitron.
- Contrôler l’ordre d’exécution.
- S’assurer qu’il n’est pas bloqué par un defer/async mal configuré.

---

### 🔹 Chaînes de requêtes critiques détectées

Action :
- Réduire la profondeur des dépendances.
- Précharger les ressources critiques.
- Implémenter preload / preconnect si nécessaire.

---

### 🔹 CSS bloquante

Fichier :
/css/8eea44835f28878a.css

Action :
- Extraire le critical CSS inline.
- Charger le reste en différé.
- Vérifier possibilité de découpage CSS.

---

### 🔹 Ancien JavaScript / polyfills inutiles (~12 KiB)

Action :
- Supprimer polyfills obsolètes.
- Vérifier configuration build (browserslist).
- Nettoyer dépendances inutilisées.

---

### 🔹 Image LCP potentiellement chargée en différé

Action :
- Supprimer lazy loading sur l’image LCP.
- Ajouter fetchpriority="high".
- Vérifier dimensionnement correct.

---

### 🔹 Mauvais score PageSpeed Mobile

Données labo :
- LCP : 3.5 s
- FCP : 2.9 s

Actions :
- Vérifier redirections (HTTP → HTTPS → www)
- Activer HTTP/2 ou HTTP/3
- Corriger erreurs JavaScript
- Supprimer styles inline

---

### 🔹 Protocole HTTP obsolète

Action :
- Activer HTTP/2+ (configuration Vercel).

---

### 🔹 Styles inline détectés

Action :
- Migrer vers fichiers CSS dédiés.
- Nettoyer le HTML.

---

### 🔹 Emails en texte brut

Action :
- Remplacer par formulaire.
- Ou obfuscation JavaScript.
- Ou conversion en image.

---

## 3️⃣ Sécurité & Headers (Priorité Moyenne)

### 🔹 Aucune Content Security Policy (CSP)

Action :
- Mettre en place un header CSP adapté.

---

### 🔹 Trusted Types non configuré

Action :
- Activer Trusted Types pour prévenir XSS DOM-based.

---

### 🔹 HSTS incomplet

Problème :
- includeSubDomains absent
- preload absent

Action :
- Configurer Strict-Transport-Security complet.

---

### 🔹 Aucun header COOP détecté

Action :
- Ajouter Cross-Origin-Opener-Policy.

---

## 4️⃣ Réseaux Sociaux (Score F)

Manquants :
- Page Facebook liée
- Profil X
- Chaîne YouTube
- Pixel Facebook

Déjà présents :
- Instagram
- LinkedIn
- Open Graph OK
- Twitter Cards OK

---

## 5️⃣ Backlinks

Constat :
- Aucun backlink détecté.

Actions :
- Articles invités sectoriels.
- Partenariats (architecture, robotique, retail…).
- Inscription annuaires pro.
- Communiqués de presse.

---

# 🟢 Points Positifs

- SSL actif
- Sitemap XML présent
- Robots.txt présent
- JSON-LD Schema OK (Organization + LocalBusiness)
- Images optimisées
- Fichiers minifiés
- Compression active (66%)
- Taille page légère (0.26 MB)
- AMP activé
- URLs propres

---

# 📋 Plan d’Action Priorisé

## 🔥 Phase 1 – Correctifs Critiques
- Corriger erreur tarteaucitron
- Optimiser LCP
- Corriger CSS bloquante
- Nettoyer polyfills inutiles
- Ajouter balise canonique

## ⚡ Phase 2 – SEO Structurel
- Optimiser Title
- Optimiser Meta
- Enrichir contenu (x2)
- Optimiser H1 / H2

## 🔐 Phase 3 – Sécurité & Autorité
- Configurer CSP
- Compléter HSTS
- Ajouter COOP
- Installer GA4
- Lancer stratégie backlinks
- Ajouter Facebook + X
- Créer chaîne YouTube

---

# 🎯 Objectif

Passer de B → A / A+ :
- SEO technique stabilisé
- Performance mobile optimisée
- Sécurité renforcée
- Contenu enrichi
- Autorité externe développée
