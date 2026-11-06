import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Beneficios } from '@/components/secciones/comunes/Beneficios';
import { DiagramaModulos } from '@/components/secciones/comunes/DiagramaModulos';
import { IntegradoMicrosoft365 } from '@/components/secciones/comunes/IntegradoMicrosoft365';
import { PaginaContenido } from '@/components/secciones/comunes/PaginaContenido';
import { paginaSolucion, SOLUCIONES } from '@/data/paginas';
import { metadatosPagina } from '@/lib/metadatos';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUCIONES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pagina = paginaSolucion(slug);
  if (!pagina) return {};
  const ruta = `/soluciones/${slug}/`;
  const descripcion = pagina.bajada.join(' ').slice(0, 155);
  return metadatosPagina(pagina.titulo, descripcion, ruta);
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
      reemplazos={
        esBusinessCentral
          ? { '¿Cómo Business Central puede marcar la diferencia?': <IntegradoMicrosoft365 /> }
          : undefined
      }
      extra={
        esBusinessCentral && (
          <>
            <section className="seccion seccion-pegada">
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
