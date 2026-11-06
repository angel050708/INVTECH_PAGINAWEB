import type { Metadata } from 'next';
import { metadatosPagina } from '@/lib/metadatos';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { ListaEnlaces } from '@/components/secciones/comunes/ListaEnlaces';
import { SOLUCIONES_MENU } from '@/data/paginas';

export const metadata: Metadata = metadatosPagina(
  'Soluciones',
  'Aplicaciones de Microsoft Dynamics 365 que implementamos: Business Central, Finance, Sales y más.',
  '/soluciones/',
);

export default function PaginaSoluciones() {
  return (
    <>
      <CabeceraPagina
        contacto="las soluciones"
        etiqueta="Soluciones"
        titulo="Aplicaciones de Microsoft Dynamics 365"
        bajada="Cada aplicación resuelve un área de su empresa y todas trabajan conectadas."
      />
      <section className="seccion">
        <div className="contenedor">
          <ListaEnlaces base="/soluciones/" entradas={SOLUCIONES_MENU} />
        </div>
      </section>
      <BandaLlamado />
    </>
  );
}
