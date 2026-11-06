'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SelectorNegocio.module.css';

const VISTAS = [
  { href: '/punto-de-venta/', etiqueta: 'General' },
  { href: '/punto-de-venta/combustible/', etiqueta: 'Combustible' },
  { href: '/punto-de-venta/retail/', etiqueta: 'Retail' },
];

/** Selector fijo para cambiar entre las vistas de Punto de venta según el tipo de negocio. */
export function SelectorNegocio() {
  const ruta = usePathname();
  return (
    <nav className={styles.barra} aria-label="Punto de venta por tipo de negocio">
      <div className={`contenedor ${styles.fila}`}>
        <span className={styles.rotulo}>Su negocio</span>
        <ul className={styles.opciones}>
          {VISTAS.map((v) => (
            <li key={v.href}>
              <Link href={v.href} aria-current={ruta === v.href ? 'page' : undefined} scroll={false}>
                {v.etiqueta}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
