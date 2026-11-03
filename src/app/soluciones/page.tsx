import type { Metadata } from 'next';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { ListaEnlaces } from '@/components/secciones/comunes/ListaEnlaces';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { paginaSolucion, SOLUCIONES } from '@/data/paginas';

export const metadata: Metadata = {
  title: 'Soluciones',
  description:
    'Aplicaciones de Microsoft Dynamics 365 que implementamos: Business Central, Finance, Sales y más.',
};

export default function PaginaSoluciones() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Soluciones"
        titulo="Aplicaciones de Microsoft Dynamics 365"
        bajada="Elija el área de su empresa que quiere ordenar. Cada aplicación funciona sola o conectada con las demás."
      />
      <section className="seccion">
        <div className="contenedor">
          <ListaEnlaces
            enlaces={SOLUCIONES.map((s) => ({
              href: `/soluciones/${s.slug}/`,
              titulo: s.etiqueta,
              texto: paginaSolucion(s.slug)?.bajada[0] ?? '',
            }))}
          />
        </div>
      </section>
      <BandaLlamado />
    </>
  );
}
