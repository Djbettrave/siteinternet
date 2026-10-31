import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité du site Inphenix System - Protection des données personnelles et RGPD.',
  alternates: {
    canonical: 'https://www.inphenix-system.fr/politique-confidentialite',
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Politique de confidentialité
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:text-secondary-900 prose-headings:font-bold prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-secondary-900">

            <p className="lead">
              SAS Inphenix System s'engage à protéger la vie privée des utilisateurs de son site
              inphenix-system.fr. Cette politique de confidentialité explique comment nous collectons,
              utilisons et protégeons vos données personnelles, conformément au Règlement Général sur
              la Protection des Données (RGPD).
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
              <strong>SAS Inphenix System</strong><br />
              23 rue Édouard-Nieuport<br />
              92150 Suresnes, France<br />
              Email : <a href="mailto:contact@inphenix-system.fr">contact@inphenix-system.fr</a>
            </p>

            <h2>2. Données collectées</h2>
            <p>Nous pouvons collecter les données suivantes :</p>

            <h3>Données fournies volontairement</h3>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l'entreprise</li>
              <li>Description du projet</li>
              <li>Fichiers 3D transmis pour devis</li>
            </ul>

            <h3>Données collectées automatiquement</h3>
            <ul>
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Pages visitées</li>
              <li>Durée de visite</li>
              <li>Données de navigation (via cookies)</li>
            </ul>

            <h2>3. Finalités du traitement</h2>
            <p>Vos données sont collectées pour les finalités suivantes :</p>
            <ul>
              <li>Répondre à vos demandes de devis et de contact</li>
              <li>Assurer le suivi de vos projets</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Établir des statistiques de fréquentation anonymes</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2>4. Base légale du traitement</h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul>
              <li><strong>Votre consentement</strong> : pour l'utilisation de cookies non essentiels et l'envoi de communications commerciales</li>
              <li><strong>L'exécution d'un contrat</strong> : pour le traitement de vos demandes de devis et commandes</li>
              <li><strong>Notre intérêt légitime</strong> : pour l'amélioration de nos services et la sécurité du site</li>
            </ul>

            <h2>5. Durée de conservation</h2>
            <p>Vos données sont conservées pendant :</p>
            <ul>
              <li><strong>Données de contact et projets</strong> : 3 ans après le dernier contact</li>
              <li><strong>Données de facturation</strong> : 10 ans (obligation légale)</li>
              <li><strong>Cookies</strong> : 13 mois maximum</li>
            </ul>

            <h2>6. Destinataires des données</h2>
            <p>
              Vos données peuvent être transmises aux destinataires suivants :
            </p>
            <ul>
              <li>Notre équipe interne (commercial, technique, direction)</li>
              <li>Nos sous-traitants techniques (hébergement, emailing)</li>
              <li>Les autorités compétentes en cas d'obligation légale</li>
            </ul>
            <p>
              Nous ne vendons jamais vos données à des tiers.
            </p>

            <h2>7. Transferts hors UE</h2>
            <p>
              Certaines données peuvent être traitées par des sous-traitants situés hors de l'Union
              Européenne (notamment l'hébergeur Vercel aux États-Unis). Ces transferts sont encadrés
              par les garanties appropriées (clauses contractuelles types, décision d'adéquation).
            </p>

            <h2>8. Cookies</h2>
            <p>
              Notre site utilise des cookies pour son fonctionnement et pour améliorer votre expérience.
            </p>

            <h3>Cookies essentiels</h3>
            <p>
              Nécessaires au fonctionnement du site, ils ne peuvent pas être désactivés.
            </p>

            <h3>Cookies analytiques</h3>
            <p>
              Nous permettent de comprendre comment les visiteurs utilisent notre site (Google Analytics
              ou équivalent). Vous pouvez les refuser via notre panneau de gestion des cookies.
            </p>

            <p>
              Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien
              "Gérer les cookies" en bas de page.
            </p>

            <h2>9. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : supprimer vos données (dans les limites légales)</li>
              <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement</strong> : à tout moment</li>
            </ul>
            <p>
              Pour exercer vos droits, contactez-nous par email à{' '}
              <a href="mailto:contact@inphenix-system.fr">contact@inphenix-system.fr</a> ou par courrier
              à l'adresse indiquée ci-dessus.
            </p>
            <p>
              Vous disposez également du droit d'introduire une réclamation auprès de la CNIL
              (Commission Nationale de l'Informatique et des Libertés) :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>

            <h2>10. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation :
            </p>
            <ul>
              <li>Chiffrement des données en transit (HTTPS)</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Sauvegarde régulière des données</li>
              <li>Mise à jour des systèmes de sécurité</li>
            </ul>

            <h2>11. Modification de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Les modifications entrent en vigueur dès leur publication sur le site. Nous vous
              encourageons à consulter régulièrement cette page.
            </p>

            <h2>12. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou le traitement
              de vos données personnelles :
            </p>
            <ul>
              <li>Email : <a href="mailto:contact@inphenix-system.fr">contact@inphenix-system.fr</a></li>
              <li>Courrier : SAS Inphenix System, 23 rue Édouard-Nieuport, 92150 Suresnes, France</li>
            </ul>

            <p className="text-sm text-secondary-500 mt-12">
              Dernière mise à jour : Janvier 2026
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
