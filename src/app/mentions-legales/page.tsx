import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site Inphenix System - Informations juridiques et légales.',
  alternates: {
    canonical: 'https://www.inphenix-system.fr/mentions-legales',
  },
}

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Mentions légales
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-secondary">

            <h2>1. Informations légales</h2>

            <h3>Éditeur du site</h3>
            <p>
              <strong>SAS Inphenix System</strong><br />
              23 rue Édouard-Nieuport<br />
              92150 Suresnes, France<br />
              <br />
              SIRET : 914 886 239 00013<br />
              RCS : 914 886 239 R.C.S. Nanterre<br />
              Capital social : 10 000 €<br />
              <br />
              Email : <a href="mailto:contact@inphenix-system.fr">contact@inphenix-system.fr</a>
            </p>

            <h3>Directeur de la publication</h3>
            <p>
              Le directeur de la publication est le représentant légal de la SAS Inphenix System.
            </p>

            <h3>Hébergeur</h3>
            <p>
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
            </p>

            <h2>2. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, icônes, etc.)
              est la propriété exclusive de SAS Inphenix System ou de ses partenaires, et est protégé
              par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, transmission, dénaturation,
              totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur
              quelque support que ce soit est interdite sans l'autorisation écrite préalable de
              SAS Inphenix System.
            </p>

            <h2>3. Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est
              périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions
              ou des lacunes.
            </p>
            <p>
              SAS Inphenix System ne pourra être tenue responsable des dommages directs et indirects
              causés au matériel de l'utilisateur, lors de l'accès au site inphenix-system.fr.
            </p>

            <h2>4. Cookies</h2>
            <p>
              Le site inphenix-system.fr peut utiliser des cookies pour améliorer l'expérience
              utilisateur et réaliser des statistiques de visite. Vous pouvez configurer vos
              préférences concernant les cookies via le panneau de gestion des cookies.
            </p>
            <p>
              Pour plus d'informations sur l'utilisation des cookies, consultez notre{' '}
              <Link href="/politique-confidentialite">politique de confidentialité</Link>.
            </p>

            <h2>5. Liens hypertextes</h2>
            <p>
              Le site inphenix-system.fr peut contenir des liens hypertextes vers d'autres sites.
              Cependant, SAS Inphenix System n'a pas la possibilité de vérifier le contenu des sites
              ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
            </p>

            <h2>6. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              et après tentative de recherche d'une solution amiable, compétence est attribuée aux
              tribunaux français compétents.
            </p>

            <h2>7. Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
            </p>
            <ul>
              <li>Par email : <a href="mailto:contact@inphenix-system.fr">contact@inphenix-system.fr</a></li>
              <li>Par courrier : SAS Inphenix System, 23 rue Édouard-Nieuport, 92150 Suresnes, France</li>
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
