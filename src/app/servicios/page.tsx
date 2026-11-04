import type { Metadata } from 'next';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { ListaEnlaces } from '@/components/secciones/comunes/ListaEnlaces';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { FlujoFacturas } from '@/components/ui/FlujoFacturas';
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
      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Business Central en acción</p>
              <h2 className="titulo-seccion">Cada venta, registrada en Business Central</h2>
            </div>
            <p className="entrada" style={{ marginTop: 0, maxWidth: '46ch' }}>
              Business Central ofrece aplicaciones comerciales conectadas, acceso a datos en tiempo real y una
              plataforma de colaboración centralizada.
            </p>
          </div>
          <div {...revelarAlScroll(1)}>
            <FlujoFacturas />
          </div>
        </div>
      </section>
      <BandaLlamado />
    </>
  );
}
