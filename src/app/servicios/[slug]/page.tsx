import { ConceptosImplementacion } from '@/components/secciones/comunes/ConceptosImplementacion';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PaginaContenido } from '@/components/secciones/comunes/PaginaContenido';
import { PaginaEspecialidad } from '@/components/secciones/comunes/PaginaEspecialidad';
import { JsonLd } from '@/components/seo/JsonLd';
import { buscarEspecialidad, ESPECIALIDADES } from '@/data/honduras';
import { paginaServicio, SERVICIOS_DYNAMICS } from '@/data/paginas';
import { datosServicio } from '@/lib/datos-estructurados';
import { metadatosPagina } from '@/lib/metadatos';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [...ESPECIALIDADES, ...SERVICIOS_DYNAMICS].map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ruta = `/servicios/${slug}/`;
  const especialidad = buscarEspecialidad(slug);
  if (especialidad) {
    return metadatosPagina(especialidad.tituloSeo, especialidad.descripcion, ruta);
  }
  const pagina = paginaServicio(slug);
  if (!pagina) return {};
  const descripcion = pagina.bajada.join(' ').slice(0, 155);
  return metadatosPagina(pagina.titulo, descripcion, ruta);
}

export default async function PaginaServicio({ params }: Props) {
  const { slug } = await params;
  const especialidad = buscarEspecialidad(slug);
  if (especialidad) return <PaginaEspecialidad especialidad={especialidad} />;

  const pagina = paginaServicio(slug);
  const entrada = SERVICIOS_DYNAMICS.find((s) => s.slug === slug);
  if (!pagina || !entrada) notFound();

  return (
    <>
      <JsonLd datos={datosServicio(pagina.titulo, pagina.bajada[0] ?? '', `/servicios/${slug}/`)} />
      <PaginaContenido
        etiqueta="Servicio"
        pagina={pagina}
        logos={entrada.logos}
        interes={slug}
        extra={slug === 'implementacion' ? <ConceptosImplementacion /> : undefined}
      />
    </>
  );
}
