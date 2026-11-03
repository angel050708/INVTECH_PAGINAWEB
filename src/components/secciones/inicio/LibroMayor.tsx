import type { CSSProperties } from 'react';
import styles from './LibroMayor.module.css';

/** Movimientos de ejemplo: ilustran el tipo de documentos que se sincronizan. */
const MOVIMIENTOS = [
  { origen: 'Pista 2 · TPV', documento: 'FAC 000-001-01-00012840', monto: '1,248.00' },
  { origen: 'Crédito · Flota', documento: 'FAC 000-002-01-00004417', monto: '3,380.40' },
  { origen: 'Tienda · TPV', documento: 'FAC 000-001-01-00012841', monto: '96.50' },
  { origen: 'Retención', documento: 'CR 000-001-06-00000231', monto: '−12.48' },
  { origen: 'Pista 4 · TPV', documento: 'FAC 000-001-01-00012842', monto: '1,357.20' },
];

export function LibroMayor() {
  return (
    <figure
      className={styles.marco}
      aria-label="Ilustración: facturas del punto de venta sincronizándose con Business Central"
    >
      <div className={styles.ventana}>
        <div className={styles.barra}>
          <span className={styles.puntos} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>Business Central · Movimientos de ventas</span>
        </div>

        <div className={styles.encabezado}>
          <div>
            <small>CAI vigente</small>
            <strong>A1B2C3-D4E5F6-…-07</strong>
          </div>
          <div>
            <small>Rango</small>
            <strong>00012001 – 00015000</strong>
          </div>
        </div>

        <ol className={styles.filas}>
          {MOVIMIENTOS.map((fila, indice) => (
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
          <span className={styles.vivo}>Sincronizado</span>
          <span>
            Turno cerrado · <b>0</b> diferencias
          </span>
        </div>
      </div>

      <figcaption className={styles.nota}>
        <span>POS</span>
        <span className={styles.linea} aria-hidden="true" />
        <span>ERP</span>
      </figcaption>
    </figure>
  );
}
