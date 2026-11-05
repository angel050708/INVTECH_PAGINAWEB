import type { CSSProperties } from 'react';
import { Contador } from './Contador';
import styles from './DashboardCombustible.module.css';

/** Cifras de ejemplo para ilustrar el dashboard del backoffice BCPOS. */
const PRODUCTOS = [
  { nombre: 'DIESEL', color: '#22c55e', monto: 128450.75, litros: 3168.4, despachos: 96 },
  { nombre: 'REGULAR', color: '#f97316', monto: 87312.6, litros: 2407.9, despachos: 254 },
  { nombre: 'SUPER', color: '#a855f7', monto: 99876.15, litros: 2483.25, despachos: 271 },
];

/** Barras de despachos por día (alturas relativas de ejemplo). */
const BARRAS = [42, 58, 51, 73, 66, 88, 61, 79, 95, 70, 84, 64, 90, 77];

export function DashboardCombustible() {
  const total = PRODUCTOS.reduce((s, p) => s + p.monto, 0);
  const litros = PRODUCTOS.reduce((s, p) => s + p.litros, 0);
  return (
    <figure className={styles.panel} aria-label="Ilustración: dashboard analítico de ventas de combustible">
      <div className={styles.encabezado}>
        <div>
          <strong>Dashboard analítico</strong>
          <small>Visualización de rendimiento y ventas de combustible</small>
        </div>
        <span className={styles.vivo}>En tiempo real</span>
      </div>

      <div className={styles.totales}>
        <span>
          <small>Monto total</small>
          <b>
            L <Contador valor={total} decimales={2} />
          </b>
        </span>
        <span>
          <small>Litros</small>
          <b>
            <Contador valor={litros} decimales={2} /> LT
          </b>
        </span>
        <span>
          <small>Despachos</small>
          <b className={styles.naranja}>
            <Contador valor={PRODUCTOS.reduce((s, p) => s + p.despachos, 0)} />
          </b>
        </span>
      </div>

      <div className={styles.productos}>
        {PRODUCTOS.map((p) => (
          <div key={p.nombre} className={styles.producto} style={{ '--color': p.color } as CSSProperties}>
            <small>
              <i /> {p.nombre}
            </small>
            <b>
              L <Contador valor={p.monto} decimales={2} />
            </b>
            <span>
              <Contador valor={p.litros} decimales={2} /> LT · {p.despachos} despachos
            </span>
          </div>
        ))}
      </div>

      <div className={styles.grafica} aria-hidden="true">
        {BARRAS.map((altura, i) => (
          <span key={i} style={{ '--h': `${altura}%`, '--i': i } as CSSProperties} />
        ))}
      </div>
    </figure>
  );
}
