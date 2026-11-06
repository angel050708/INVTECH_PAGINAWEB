'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icono, type NombreIcono } from '@/components/ui/Icono';
import styles from './SelectorNegocio.module.css';

const VISTAS: { href: string; etiqueta: string; detalle: string; icono: NombreIcono }[] = [
  {
    href: '/punto-de-venta/',
    etiqueta: 'General',
    detalle: 'Lo que ofrece BCPOS',
    icono: 'cajaRegistradora',
  },
  {
    href: '/punto-de-venta/combustible/',
    etiqueta: 'Combustible',
    detalle: 'Estaciones de servicio',
    icono: 'gasolinera',
  },
  {
    href: '/punto-de-venta/retail/',
    etiqueta: 'Retail',
    detalle: 'Tiendas y supermercados',
    icono: 'carrito',
  },
];

/** Selector fijo para cambiar entre las vistas de Punto de venta según el tipo de negocio. */
export function SelectorNegocio() {
  const ruta = usePathname();
  return (
    <nav className={styles.barra} aria-label="Punto de venta por tipo de negocio">
      <div className={`contenedor ${styles.fila}`}>
        <span className={styles.rotulo}>Elija su tipo de negocio</span>
        <ul className={styles.opciones}>
          {VISTAS.map((v) => (
            <li key={v.href}>
              <Link href={v.href} aria-current={ruta === v.href ? 'page' : undefined} scroll={false}>
                <span className={styles.icono}>
                  <Icono nombre={v.icono} tamano={18} />
                </span>
                <span className={styles.textos}>
                  <strong>{v.etiqueta}</strong>
                  <small>{v.detalle}</small>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
