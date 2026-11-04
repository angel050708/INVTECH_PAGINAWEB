import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PaginaContenido } from '@/components/secciones/comunes/PaginaContenido';
import { paginaServicio, SERVICIOS_DYNAMICS } from '@/data/paginas';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICIOS_DYNAMICS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pagina = paginaServicio((await params).slug);
  return pagina ? { title: pagina.titulo, description: pagina.bajada.join(' ').slice(0, 160) } : {};
}

export default async function PaginaServicio({ params }: Props) {
  const { slug } = await params;
  const pagina = paginaServicio(slug);
  const entrada = SERVICIOS_DYNAMICS.find((s) => s.slug === slug);
  if (!pagina || !entrada) notFound();

  return <PaginaContenido etiqueta="Servicio" pagina={pagina} logos={entrada.logos} interes={slug} />;
}
