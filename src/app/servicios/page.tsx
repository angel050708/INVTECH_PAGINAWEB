import type { Metadata } from 'next';
import { metadatosPagina } from '@/lib/metadatos';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { ListaEnlaces } from '@/components/secciones/comunes/ListaEnlaces';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { FlujoFacturas } from '@/components/ui/FlujoFacturas';
import { Confirmar } from '@/components/ui/Confirmar';
import { ESPECIALIDADES } from '@/data/honduras';
import { SERVICIOS_DYNAMICS } from '@/data/paginas';

export const metadata: Metadata = metadatosPagina(
  'Servicios de Business Central y Dynamics 365',
  'Business Central en Honduras, integración con punto de venta, implementación, desarrollo, auditoría y soporte de Microsoft Dynamics 365.',
  '/servicios/',
);

export default function PaginaServicios() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Servicios"
        titulo="Servicios de Business Central para empresas de Honduras"
        bajada="Implementamos Business Central, lo adaptamos a la operación local y le damos soporte después de salir en vivo."
      />
      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Para empresas de Honduras</p>
              <h2 className="titulo-seccion">Lo que adaptamos a la operación local</h2>
            </div>
          </div>
          <ListaEnlaces base="/servicios/" entradas={ESPECIALIDADES} />
        </div>
      </section>
      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Integración con punto de venta</p>
              <h2 className="titulo-seccion">Cada venta, registrada en Business Central</h2>
            </div>
            <p className="entrada" style={{ marginTop: 0, maxWidth: '46ch' }}>
              Las facturas que emite su punto de venta llegan como documentos de venta a Business Central, sin
              volver a digitarlas.
              <Confirmar />
            </p>
          </div>
          <div {...revelarAlScroll(1)}>
            <FlujoFacturas />
          </div>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Microsoft Dynamics 365</p>
              <h2 className="titulo-seccion">Implementación, desarrollo, auditoría y soporte</h2>
            </div>
          </div>
          <ListaEnlaces base="/servicios/" entradas={SERVICIOS_DYNAMICS} />
        </div>
      </section>
      <BandaLlamado />
    </>
  );
}
