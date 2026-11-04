import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Beneficios } from '@/components/secciones/comunes/Beneficios';
import { DiagramaModulos } from '@/components/secciones/comunes/DiagramaModulos';
import { PaginaContenido } from '@/components/secciones/comunes/PaginaContenido';
import { paginaSolucion, SOLUCIONES } from '@/data/paginas';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUCIONES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pagina = paginaSolucion((await params).slug);
  return pagina ? { title: pagina.titulo, description: pagina.bajada.join(' ').slice(0, 160) } : {};
}

export default async function PaginaSolucion({ params }: Props) {
  const { slug } = await params;
  const pagina = paginaSolucion(slug);
  const entrada = SOLUCIONES.find((s) => s.slug === slug);
  if (!pagina || !entrada) notFound();

  const esBusinessCentral = slug === 'business-central';
  return (
    <PaginaContenido
      etiqueta="Solución"
      pagina={pagina}
      logos={entrada.logos}
      interes="implementacion"
      extra={
        esBusinessCentral && (
          <>
            <section className="seccion">
              <div className="contenedor">
                <DiagramaModulos />
              </div>
            </section>
            <Beneficios />
          </>
        )
      }
    />
  );
}
