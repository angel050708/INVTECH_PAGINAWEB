import type { Metadata } from 'next';

/** Título, descripción, URL canónica y Open Graph (con imagen) de una página. */
export function metadatosPagina(titulo: string, descripcion: string, ruta: string): Metadata {
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: ruta },
    openGraph: {
      type: 'website',
      locale: 'es_HN',
      siteName: 'InvTech',
      title: titulo,
      description: descripcion,
      url: ruta,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
  };
}
