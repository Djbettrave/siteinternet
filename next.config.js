const createMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Supprime les trailing slashes (/services/ → /services)
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'impression3d.inphenix-system.fr',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/guides/impression-3d-fdm',
        destination: '/guides/fdm',
        permanent: true,
      },
      // Anciennes URLs WooCommerce (WordPress) → redirection 301
      {
        source: '/produit/:slug*',
        destination: '/realisations',
        permanent: true,
      },
      // Ancienne URL portfolio WordPress
      {
        source: '/works/:slug*',
        destination: '/realisations',
        permanent: true,
      },
      // Ancien paramètre WordPress MailPoet
      {
        source: '/',
        has: [{ type: 'query', key: 'mailpoet_page' }],
        destination: '/',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' challenges.cloudflare.com www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: www.google-analytics.com",
              "font-src 'self'",
              "frame-src challenges.cloudflare.com",
              "connect-src 'self' challenges.cloudflare.com www.google-analytics.com analytics.google.com region1.google-analytics.com",
              "object-src 'none'",
              "base-uri 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = createMDX(nextConfig)
