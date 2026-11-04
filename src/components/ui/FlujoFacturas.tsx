import type { CSSProperties } from 'react';
import styles from './FlujoFacturas.module.css';

/** Documentos de ejemplo que ilustran el registro automático en Business Central. */
const DOCUMENTOS = [
  { numero: 'FV-10482', cliente: 'Distribuidora Valle Alto', monto: '12,480.00' },
  { numero: 'FV-10483', cliente: 'Ferretería La Esquina', monto: '3,217.50' },
  { numero: 'FV-10484', cliente: 'Grupo Comercial Lempa', monto: '28,905.10' },
  { numero: 'FV-10485', cliente: 'Hotel Bahía Azul', monto: '7,642.80' },
];

/**
 * Facturas que salen de la operación y aparecen registradas en una ventana de Business Central.
 * Cada documento recorre la conexión y entra al ERP unos instantes después de emitirse.
 */
export function FlujoFacturas() {
  return (
    <figure
      className={styles.flujo}
      aria-label="Ilustración: facturas de venta registrándose en Business Central"
    >
      <div className={`${styles.ventana} ${styles.origen}`}>
        <div className={styles.barra}>
          <span className={styles.puntos} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          Facturas emitidas
        </div>
        <ol className={styles.filas}>
          {DOCUMENTOS.map((doc, i) => (
            <li key={doc.numero} style={{ '--i': i } as CSSProperties} className={styles.emitida}>
              <span className={styles.icono} aria-hidden="true" />
              <span>
                <strong>{doc.numero}</strong>
                <small>{doc.cliente}</small>
              </span>
              <span className={styles.monto}>L {doc.monto}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.conexion} aria-hidden="true">
        {DOCUMENTOS.map((doc, i) => (
          <span key={doc.numero} className={styles.paquete} style={{ '--i': i } as CSSProperties} />
        ))}
      </div>

      <div className={`${styles.ventana} ${styles.destino}`}>
        <div className={`${styles.barra} ${styles.barraBc}`}>
          <span className={styles.puntos} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          Business Central · Movimientos contables
        </div>
        <div className={styles.cabecera} aria-hidden="true">
          <span>Documento</span>
          <span>Importe</span>
          <span>Estado</span>
        </div>
        <ol className={styles.filas}>
          {DOCUMENTOS.map((doc, i) => (
            <li key={doc.numero} style={{ '--i': i } as CSSProperties} className={styles.registrada}>
              <span>
                <strong>{doc.numero}</strong>
                <small>Ventas · {doc.cliente}</small>
              </span>
              <span className={styles.monto}>L {doc.monto}</span>
              <span className={styles.estado}>Registrado</span>
            </li>
          ))}
        </ol>
        <div className={styles.total}>
          <span>Total del día</span>
          <strong>L 52,245.40</strong>
        </div>
      </div>
    </figure>
  );
}
