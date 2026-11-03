import type { CSSProperties } from 'react';
import styles from './LibroMayor.module.css';

/** Ventas de ejemplo: ilustran cómo llegan las facturas del punto de venta. */
const VENTAS = [
  { origen: 'Estación Norte', documento: 'FAC 000-001-01-00012840', monto: '1,248.00' },
  { origen: 'Estación Centro', documento: 'FAC 000-002-01-00004417', monto: '3,380.40' },
  { origen: 'Tienda', documento: 'FAC 000-001-01-00012841', monto: '96.50' },
  { origen: 'Estación Norte', documento: 'FAC 000-001-01-00012842', monto: '1,357.20' },
];

export function LibroMayor() {
  return (
    <figure
      className={styles.marco}
      aria-label="Ilustración: ventas del punto de venta registradas en Business Central"
    >
      <div className={styles.ventana}>
        <div className={styles.barra}>
          <span className={styles.puntos} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>Business Central · Facturas de venta</span>
        </div>

        <ol className={styles.filas}>
          {VENTAS.map((fila, indice) => (
            <li key={fila.documento} style={{ '--i': indice } as CSSProperties}>
              <span className={styles.origen}>{fila.origen}</span>
              <span className={styles.documento}>{fila.documento}</span>
              <span className={styles.monto}>L {fila.monto}</span>
              <span className={styles.estado} aria-hidden="true">
                ✓
              </span>
            </li>
          ))}
        </ol>

        <div className={styles.pie}>
          <span className={styles.vivo}>Registrado en contabilidad</span>
          <span>Hoy, 18:00</span>
        </div>
      </div>
    </figure>
  );
}
