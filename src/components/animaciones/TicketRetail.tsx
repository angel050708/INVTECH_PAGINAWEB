import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './TicketRetail.module.css';

/** Productos de ejemplo de una ferretería. */
const PRODUCTOS = [
  { nombre: 'Cemento gris 42.5 kg', cantidad: 4, precio: '1,140.00', antes: 186, despues: 182 },
  { nombre: 'Tubo PVC 1/2" x 6 m', cantidad: 10, precio: '890.00', antes: 412, despues: 402 },
  { nombre: 'Pintura látex blanco 1 gal', cantidad: 2, precio: '1,060.00', antes: 58, despues: 56 },
  { nombre: 'Brocha 3"', cantidad: 3, precio: '255.00', antes: 97, despues: 94 },
];

/**
 * Ticket de caja de BCPOS que se arma producto por producto, mientras Business Central
 * descuenta las existencias de cada artículo.
 */
export function TicketRetail() {
  return (
    <figure
      className={styles.escena}
      aria-label="Ilustración: venta en caja que descuenta inventario en Business Central"
    >
      <div className={styles.ticket}>
        <div className={styles.cabecera}>
          <strong>BCPOS · Caja 2</strong>
          <small>Sucursal Centro</small>
        </div>
        <ol>
          {PRODUCTOS.map((p, i) => (
            <li key={p.nombre} style={{ '--i': i } as CSSProperties}>
              <span>
                {p.cantidad} × {p.nombre}
              </span>
              <b>L {p.precio}</b>
            </li>
          ))}
        </ol>
        <div className={styles.total}>
          <span>Total</span>
          <b>L 3,345.00</b>
        </div>
        <span className={styles.cobrado}>Venta registrada</span>
      </div>

      <div className={styles.bc}>
        <div className={styles.encabezadoBc}>
          <Image src="/logos/dynamics-365-businesscentral.svg" alt="" width={20} height={20} unoptimized />
          <span>Business Central · Productos</span>
        </div>
        <div className={styles.columnas} aria-hidden="true">
          <span>Descripción</span>
          <span>Existencias</span>
        </div>
        <ol>
          {PRODUCTOS.map((p, i) => (
            <li key={p.nombre} style={{ '--i': i } as CSSProperties}>
              <span>{p.nombre}</span>
              <span className={styles.existencias}>
                <span className={styles.antes}>{p.antes}</span>
                <span className={styles.despues}>{p.despues}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
