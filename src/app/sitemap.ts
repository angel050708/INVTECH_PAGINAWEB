import type { MetadataRoute } from 'next';
import { SERVICIOS_DYNAMICS, SOLUCIONES } from '@/data/paginas';
import { SITIO_URL } from '@/lib/sitio-url';

/** Páginas que Google debe conocer. Al crear una página nueva, agregarla aquí. */
export const PAGINAS: { ruta: string; prioridad: number }[] = [
  { ruta: '/', prioridad: 1 },
  { ruta: '/soluciones/', prioridad: 0.9 },
  ...SOLUCIONES.map(({ slug }) => ({ ruta: `/soluciones/${slug}/`, prioridad: 0.8 })),
  { ruta: '/servicios/', prioridad: 0.9 },
  ...SERVICIOS_DYNAMICS.map(({ slug }) => ({ ruta: `/servicios/${slug}/`, prioridad: 0.8 })),
  { ruta: '/metodologia/', prioridad: 0.7 },
  { ruta: '/quienes-somos/', prioridad: 0.6 },
  { ruta: '/contacto/', prioridad: 0.8 },
  { ruta: '/privacidad/', prioridad: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const fechaDelBuild = new Date();
  return PAGINAS.map(({ ruta, prioridad }) => ({
    url: `${SITIO_URL}${ruta}`,
    lastModified: fechaDelBuild,
    changeFrequency: 'monthly',
    priority: prioridad,
  }));
}
