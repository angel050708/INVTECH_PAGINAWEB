import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { DiagramaModulos } from '@/components/secciones/comunes/DiagramaModulos';
import { Icono } from '@/components/ui/Icono';
import { ESPECIALIDADES } from '@/data/honduras';
import { VERTICALES } from '@/data/paginas';
import styles from './QueEsBusinessCentral.module.css';

/** Lo propio de InvTech; cada punto enlaza a su página. */
const PUNTOS = [
  ...ESPECIALIDADES.filter((e) => e.slug === 'business-central-honduras').map((e) => ({
    href: `/servicios/${e.slug}/`,
    titulo: e.etiqueta,
    texto: e.resumen,
  })),
  ...VERTICALES.filter((v) => ['punto-de-venta', 'combustible'].includes(v.slug)).map((v) => ({
    href: v.href ?? `/${v.slug}/`,
    titulo: v.etiqueta,
    texto: v.resumen,
  })),
  {
    href: '/servicios/soporte-post-go-live/',
    titulo: 'Soporte post go-live',
    texto: 'Acompañamiento después de salir en vivo',
  },
];

export function QueEsBusinessCentral() {
  return (
    <section className="seccion">
      <div className={`contenedor ${styles.rejilla}`}>
        <div>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">Qué hacemos</p>
            <h2 className="titulo-seccion">Finanzas, ventas, compras e inventario en un solo sistema</h2>
            <p className="entrada">
              Business Central reúne la operación de su empresa. Nosotros lo implementamos en seis fases y le
              agregamos lo que una empresa en Honduras necesita para trabajar con él desde el primer día.
            </p>
          </div>
          <ul className={styles.senales}>
            {PUNTOS.map((punto, indice) => (
              <li key={punto.href} {...revelarAlScroll(indice + 1)}>
                <Icono nombre="check" tamano={18} />
                <span>
                  <Link href={punto.href} className={styles.enlacePunto}>
                    {punto.titulo}
                  </Link>
                  <small>{punto.texto}</small>
                </span>
              </li>
            ))}
          </ul>
          <Link href="/metodologia/" className="enlace-flecha">
            Ver la implementación en seis fases <Icono nombre="flecha" tamano={18} />
          </Link>
        </div>
        <div {...revelarAlScroll(1)}>
          <DiagramaModulos />
        </div>
      </div>
    </section>
  );
}
