import type { Metadata } from 'next';
import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { Elementos } from '@/components/secciones/comunes/Elementos';
import { JsonLd } from '@/components/seo/JsonLd';
import { Icono } from '@/components/ui/Icono';
import { LineasCircuito } from '@/components/ui/LineasCircuito';
import { EQUIPOS, INFRAESTRUCTURA, TELECOMUNICACIONES } from '@/data/verticales';
import { datosServicio } from '@/lib/datos-estructurados';
import { metadatosPagina } from '@/lib/metadatos';

const TITULO = 'Venta de equipos tecnológicos, infraestructura y telecomunicaciones';
const DESCRIPCION =
  'Puntos de venta, servidores, controladores y sondas, redes, CCTV, fibra óptica y conexión Starlink para empresas en Honduras.';

export const metadata: Metadata = metadatosPagina(TITULO, DESCRIPCION, '/venta-de-equipos/');

export default function PaginaVentaDeEquipos() {
  return (
    <>
      <JsonLd datos={datosServicio(TITULO, DESCRIPCION, '/venta-de-equipos/')} />
      <CabeceraPagina
        etiqueta="Venta de equipos"
        titulo="Equipos tecnológicos y periféricos"
        bajada="Suministramos tecnología de punta para cualquier tipo de empresa, junto con la infraestructura y la conexión que la hacen funcionar."
        visual={<LineasCircuito />}
      >
        <p style={{ marginTop: 32 }}>
          <Link href="/contacto/?interes=venta-de-equipos" className="boton boton-acento boton-grande">
            Solicitar cotización <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <h2 className="titulo-seccion">Equipos</h2>
          </div>
          <Elementos elementos={EQUIPOS} columnas={4} />
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Infraestructura y servicios en la nube</p>
              <h2 className="titulo-seccion">Soluciones de infraestructura tecnológica</h2>
            </div>
          </div>
          <Elementos elementos={INFRAESTRUCTURA} columnas={4} variante="lista" />
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <h2 className="titulo-seccion">Servicios de telecomunicaciones</h2>
          </div>
          <Elementos elementos={TELECOMUNICACIONES} columnas={2} />
        </div>
      </section>

      <BandaLlamado titulo="Cotice sus equipos con InvTech" />
    </>
  );
}
