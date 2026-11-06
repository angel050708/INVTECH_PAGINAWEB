import type { Metadata } from 'next';
import Link from 'next/link';
import { DashboardCombustible } from '@/components/animaciones/DashboardCombustible';
import { TerminalBcpos } from '@/components/animaciones/TerminalBcpos';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { Compatibilidad } from '@/components/secciones/combustible/Compatibilidad';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { Elementos } from '@/components/secciones/comunes/Elementos';
import { JsonLd } from '@/components/seo/JsonLd';
import { Icono } from '@/components/ui/Icono';
import { COMBUSTIBLE_INTRO, MODULOS_COMBUSTIBLE, PROBLEMA_SOLUCION, TERMINAL_MOVIL } from '@/data/verticales';
import { datosServicio } from '@/lib/datos-estructurados';
import { metadatosPagina } from '@/lib/metadatos';
import styles from '../verticales.module.css';

const TITULO = 'Sistema para estaciones de servicio con BCPOS y Business Central';
const DESCRIPCION =
  'Ventas, turnos, conciliación de POS y control de combustible en un solo sistema para estaciones de servicio, conectado a Business Central.';

const DASHBOARD = [
  {
    titulo: 'Decisiones más rápidas',
    texto:
      'Cifras consolidadas de ventas, litros y despachos por rango de fecha, sin esperar reportes de cada turno.',
    icono: 'grafica' as const,
  },
  {
    titulo: 'Comparativas automáticas',
    texto: 'Variación entre periodos: contado contra crédito, por combustible y por estación.',
    icono: 'sincronizar' as const,
  },
  {
    titulo: 'Control de desempeño',
    texto: 'Despachos, volumen y venta total por empleado y por turno.',
    icono: 'persona' as const,
  },
  {
    titulo: 'Vista consolidada',
    texto: 'Top de clientes por volumen, resumen por combustible y análisis contado/crédito en una pantalla.',
    icono: 'tabla' as const,
  },
];

export const metadata: Metadata = metadatosPagina(TITULO, DESCRIPCION, '/combustible/');

export default function PaginaCombustible() {
  return (
    <>
      <JsonLd datos={datosServicio(TITULO, DESCRIPCION, '/combustible/')} />
      <CabeceraPagina
        etiqueta="Combustible"
        titulo="Gestión integral para estaciones de servicio"
        bajada={COMBUSTIBLE_INTRO}
        fondo={{
          src: '/fotos/estacion-noche-hd.jpg',
          alt: 'Estación de servicio iluminada al anochecer, con bombas de combustible bajo el techo',
        }}
      >
        <p style={{ marginTop: 32 }}>
          <Link href="/contacto/?interes=combustible" className="boton boton-acento boton-grande">
            Hablar con un consultor <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>

      <section className="seccion fondo-alterno seccion-compacta">
        <div className="contenedor">
          <TerminalBcpos
            encabezado={
              <>
                <p className="etiqueta">Punto de venta en terminal móvil</p>
                <h2 className="titulo-seccion">BCPOS dentro de la terminal bancaria de BAC</h2>
                <p className="entrada" style={{ marginTop: 12, marginBottom: 24 }}>
                  El bombero consulta el crédito del cliente, autoriza la bomba y suma puntos Leal desde la
                  misma terminal con la que cobra.
                </p>
              </>
            }
          />
          <div style={{ marginTop: 56 }}>
            <Elementos elementos={TERMINAL_MOVIL} columnas={3} />
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Dashboard en tiempo real</p>
              <h2 className="titulo-seccion">La gerencia ve el desempeño sin esperar cierres manuales</h2>
            </div>
          </div>
          <div {...revelarAlScroll(1)}>
            <DashboardCombustible />
          </div>
          <div style={{ marginTop: 40 }}>
            <Elementos elementos={DASHBOARD} columnas={4} variante="tarjetas" />
          </div>
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Ocho módulos, una operación</p>
              <h2 className="titulo-seccion">Del despacho en el surtidor a la declaración mensual</h2>
            </div>
          </div>
          <Elementos elementos={MODULOS_COMBUSTIBLE} columnas={4} />
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <h2 className="titulo-seccion">Problema frecuente y solución</h2>
          </div>
          <div className={styles.comparacion} {...revelarAlScroll(1)}>
            <div className={styles.titulos} aria-hidden="true">
              <span>Problema frecuente</span>
              <span>Solución</span>
            </div>
            {PROBLEMA_SOLUCION.map((fila) => (
              <div key={fila.problema}>
                <span>{fila.problema}</span>
                <span>{fila.solucion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <Compatibilidad />
        </div>
      </section>

      <BandaLlamado titulo="Transformamos su estación de servicio" />
    </>
  );
}
