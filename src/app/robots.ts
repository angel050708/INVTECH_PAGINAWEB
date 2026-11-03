import type { MetadataRoute } from 'next';
import { SITIO_INDEXABLE, SITIO_URL } from '@/lib/sitio-url';

export default function robots(): MetadataRoute.Robots {
  if (!SITIO_INDEXABLE) {
    // Versión de prueba: que ningún buscador la recorra
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITIO_URL}/sitemap.xml`,
  };
}
