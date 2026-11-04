import type { Metadata } from 'next';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { ListaEnlaces } from '@/components/secciones/comunes/ListaEnlaces';
import { SERVICIOS_DYNAMICS } from '@/data/paginas';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Implementación, desarrollo, auditoría y soporte de Microsoft Dynamics 365 y Power BI.',
};

export default function PaginaServicios() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Servicios"
        titulo="Servicios de Dynamics 365"
        bajada="Implementamos, desarrollamos, auditamos y damos soporte a sus aplicaciones de negocio de Microsoft."
      />
      <section className="seccion">
        <div className="contenedor">
          <ListaEnlaces base="/servicios/" entradas={SERVICIOS_DYNAMICS} />
        </div>
      </section>
      <BandaLlamado />
    </>
  );
}
