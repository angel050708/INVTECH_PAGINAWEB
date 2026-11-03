/**
 * Dirección pública del sitio, para el sitemap, robots.txt y los enlaces al compartir.
 * Se define con NEXT_PUBLIC_SITIO_URL cuando exista el dominio definitivo
 * (por ejemplo https://invtech.pro).
 */
const DOMINIO = process.env.NEXT_PUBLIC_SITIO_URL?.replace(/\/+$/, '');

/** En Vercel, mientras no hay dominio, se usa el link *.vercel.app que Vercel informa solo. */
const URL_VERCEL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const SITIO_URL = DOMINIO ?? URL_VERCEL ?? 'http://localhost:3000';

/**
 * Solo se permite que Google indexe el sitio cuando tiene su dominio definitivo.
 * Así las versiones de prueba (*.vercel.app, localhost) no aparecen en buscadores.
 */
export const SITIO_INDEXABLE = Boolean(DOMINIO);
