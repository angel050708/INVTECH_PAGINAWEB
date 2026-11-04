import type { ReactNode } from 'react';
import styles from './CabeceraPagina.module.css';

interface Props {
  etiqueta: string;
  titulo: ReactNode;
  bajada: string;
  children?: ReactNode;
  /** Ilustración a la derecha del título */
  visual?: ReactNode;
}

/** Encabezado de las páginas internas. */
export function CabeceraPagina({ etiqueta, titulo, bajada, children, visual }: Props) {
  return (
    <section className={styles.cabecera}>
      <div className={visual ? `${styles.interior} ${styles.conVisual}` : styles.interior}>
        <div className={styles.texto}>
          <p className="etiqueta">{etiqueta}</p>
          <h1>{titulo}</h1>
          <p className={styles.bajada}>{bajada}</p>
          {children}
        </div>
        {visual && <div className={styles.visual}>{visual}</div>}
      </div>
    </section>
  );
}
