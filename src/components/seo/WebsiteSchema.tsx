export default function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Inphenix System',
    alternateName: 'Inphenix',
    url: 'https://www.inphenix-system.fr/',
    inLanguage: 'fr-FR',
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
