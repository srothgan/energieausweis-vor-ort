import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/static/',
        '*.pdf',
        '/private/',
      ],
    },
    sitemap: 'https://energieausweis-vor-ort.nrw/sitemap.xml',
    host: 'https://energieausweis-vor-ort.nrw',
  }
}
