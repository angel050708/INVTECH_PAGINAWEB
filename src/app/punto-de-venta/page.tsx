import type { Metadata } from 'next';
import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { Elementos } from '@/components/secciones/comunes/Elementos';
import { JsonLd } from '@/components/seo/JsonLd';
import { FlujoFacturas } from '@/components/ui/FlujoFacturas';
import { Icono } from '@/components/ui/Icono';
import { LogosApp } from '@/components/ui/LogosApp';
import { BCPOS_FLUJO, BCPOS_INTEGRACIONES, BCPOS_QUE_ES, BCPOS_RUBROS } from '@/data/verticales';
import { datosServicio } from '@/lib/datos-estructurados';
import { metadatosPagina } from '@/lib/metadatos';
import paginas from '../paginas.module.css';
import styles from '../verticales.module.css';

const TITULO = 'Punto de venta BCPOS integrado con Business Central';
const DESCRIPCION =
  'BCPOS, el punto de venta de InvTech conectado con Business Central: cada venta de la caja llega al ERP en segundos, sin doble digitación.';

export const metadata: Metadata = metadatosPagina(TITULO, DESCRIPCION, '/punto-de-venta/');

export default function PaginaPuntoDeVenta() {
  return (
    <>
      <JsonLd datos={datosServicio(TITULO, DESCRIPCION, '/punto-de-venta/')} />
      <CabeceraPagina
        etiqueta="Punto de venta"
        titulo="BCPOS: la caja de su negocio, conectada a Business Central"
        bajada="La venta que se hace frente al cliente llega al ERP en cuestión de segundos. Inventario, cuentas y reportes se actualizan sin doble digitación."
        visual={<LogosApp logos={['dynamics-365-businesscentral', 'dynamics-365-commerce']} tamano={64} />}
      >
        <p style={{ marginTop: 32 }}>
          <Link href="/contacto/?interes=punto-de-venta" className="boton boton-acento boton-grande">
            Hablar con un consultor <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>

      <section className="seccion">
        <div className={`contenedor ${paginas.dosColumnas}`}>
          <h2 className="titulo-seccion" {...revelarAlScroll()}>
            ¿Qué es BCPOS?
          </h2>
          <div className={paginas.texto} {...revelarAlScroll(1)}>
            {BCPOS_QUE_ES.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
            <ul className={styles.chips} aria-label="Dónde se usa">
              {BCPOS_RUBROS.map((rubro) => (
                <li key={rubro}>{rubro}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Business Central + BCPOS</p>
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

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <h2 className="titulo-seccion">Cómo trabajan juntos</h2>
          </div>
          <Elementos elementos={BCPOS_FLUJO} columnas={4} />
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <h2 className="titulo-seccion">Integraciones</h2>
          </div>
          <Elementos elementos={BCPOS_INTEGRACIONES} columnas={3} />
          <div className={styles.siguientes} style={{ marginTop: 48 }}>
            <Link href="/combustible/" className="enlace-flecha">
              BCPOS para estaciones de servicio <Icono nombre="flecha" tamano={18} />
            </Link>
            <Link href="/retail/" className="enlace-flecha">
              BCPOS para retail <Icono nombre="flecha" tamano={18} />
            </Link>
          </div>
        </div>
      </section>

      <BandaLlamado />
    </>
  );
}
