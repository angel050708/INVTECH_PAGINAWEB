import type { Metadata } from 'next';
import Link from 'next/link';
import { TicketRetail } from '@/components/animaciones/TicketRetail';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { SelectorNegocio } from '@/components/secciones/punto-de-venta/SelectorNegocio';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { Elementos } from '@/components/secciones/comunes/Elementos';
import { JsonLd } from '@/components/seo/JsonLd';
import { Icono } from '@/components/ui/Icono';
import { LogosApp } from '@/components/ui/LogosApp';
import { RETAIL_BENEFICIOS, RETAIL_RUBROS } from '@/data/verticales';
import { datosServicio } from '@/lib/datos-estructurados';
import { metadatosPagina } from '@/lib/metadatos';

const TITULO = 'Punto de venta y ERP para retail: ferreterías, farmacias y supermercados';
const DESCRIPCION =
  'BCPOS y Business Central para ferreterías, farmacias, tiendas de conveniencia y supermercados: caja, inventario y contabilidad conectados.';

export const metadata: Metadata = metadatosPagina(TITULO, DESCRIPCION, '/punto-de-venta/retail/');

export default function PaginaRetail() {
  return (
    <>
      <JsonLd datos={datosServicio(TITULO, DESCRIPCION, '/punto-de-venta/retail/')} />
      <CabeceraPagina
        etiqueta="Retail"
        titulo="Caja, inventario y contabilidad en un solo sistema"
        bajada="Para ferreterías, farmacias, tiendas de conveniencia y supermercados: BCPOS en la caja y Business Central en la administración, también para empresas con varias sucursales."
        visual={
          <LogosApp
            logos={['dynamics-365-commerce', 'dynamics-365-businesscentral', 'power-bi']}
            tamano={64}
          />
        }
      >
        <p style={{ marginTop: 32 }}>
          <Link href="/contacto/?interes=retail" className="boton boton-acento boton-grande">
            Hablar con un consultor <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>
      <SelectorNegocio />

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <h2 className="titulo-seccion">Para cada tipo de comercio</h2>
          </div>
          <Elementos elementos={RETAIL_RUBROS} columnas={4} />
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">BCPOS + Business Central</p>
              <h2 className="titulo-seccion">Cada venta descuenta el inventario</h2>
            </div>
            <p className="entrada" style={{ marginTop: 0, maxWidth: '46ch' }}>
              El cliente compra en la caja y Business Central actualiza existencias, cuentas y reportes sin
              doble digitación.
            </p>
          </div>
          <div {...revelarAlScroll(1)}>
            <TicketRetail />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <h2 className="titulo-seccion">Lo que incluye</h2>
          </div>
          <Elementos elementos={RETAIL_BENEFICIOS} columnas={3} />
        </div>
      </section>

      <BandaLlamado />
    </>
  );
}
