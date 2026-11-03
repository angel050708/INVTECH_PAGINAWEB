import type { Metadata } from 'next';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { ListaEnlaces } from '@/components/secciones/comunes/ListaEnlaces';
import { paginaServicio, SERVICIOS_DYNAMICS } from '@/data/paginas';
import { SERVICIOS } from '@/data/servicios';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Implementación, desarrollo, auditoría, actualización y soporte de Dynamics 365, más localización fiscal hondureña e integración POS.',
};

export default function PaginaServicios() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Servicios"
        titulo="Servicios de Dynamics 365"
        bajada="Implementamos, desarrollamos, auditamos y damos soporte a soluciones de Microsoft. Además construimos lo que el estándar no trae para Honduras."
      />
      <section className="seccion">
        <div className="contenedor">
          <p className="etiqueta">Dynamics 365</p>
          <ListaEnlaces
            enlaces={SERVICIOS_DYNAMICS.map((s) => ({
              href: `/servicios/${s.slug}/`,
              titulo: s.etiqueta,
              texto: paginaServicio(s.slug)?.bajada[0] ?? '',
            }))}
          />
          <p className="etiqueta" style={{ marginTop: 72 }}>
            Especialidades para Honduras
          </p>
          <ListaEnlaces
            enlaces={SERVICIOS.map((s) => ({
              href: `/servicios/${s.slug}/`,
              titulo: s.titulo,
              texto: s.corto,
            }))}
          />
        </div>
      </section>
      <BandaLlamado />
    </>
  );
}
