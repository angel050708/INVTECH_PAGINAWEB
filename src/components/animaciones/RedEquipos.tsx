import type { CSSProperties } from 'react';
import styles from './RedEquipos.module.css';

/**
 * Servidor torre, switch y computadora conectados: luces de actividad y datos que viajan por la red.
 * Ilustración genérica, sin marcas.
 */
export function RedEquipos() {
  return (
    <figure
      className={styles.escena}
      aria-label="Ilustración: servidor, switch y computadora conectados en red"
    >
      <div className={styles.servidor} aria-hidden="true">
        <div className={styles.servidorFrente}>
          <span className={styles.boton} />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={styles.disco} style={{ '--i': i } as CSSProperties}>
              <i />
            </span>
          ))}
          <span className={styles.rejilla} />
        </div>
        <small>Servidor</small>
      </div>

      <div className={styles.cable} aria-hidden="true">
        <span />
        <span style={{ animationDelay: '1.2s' }} />
      </div>

      <div className={styles.switch} aria-hidden="true">
        <div className={styles.switchFrente}>
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className={styles.puerto} style={{ '--i': i } as CSSProperties}>
              <i />
            </span>
          ))}
        </div>
        <small>Switch</small>
      </div>

      <div className={styles.cable} aria-hidden="true">
        <span style={{ animationDelay: '0.6s' }} />
        <span style={{ animationDelay: '1.8s' }} />
      </div>

      <div className={styles.pc} aria-hidden="true">
        <div className={styles.monitor}>
          <span className={styles.barraMonitor} />
          <span className={styles.lineaMonitor} />
          <span className={styles.lineaMonitor} />
          <span className={styles.graficaMonitor} />
        </div>
        <span className={styles.base} />
        <small>Computadora</small>
      </div>
    </figure>
  );
}
