import type { ReactNode } from 'react';
import styles from './CabeceraPagina.module.css';

interface Props {
  etiqueta: string;
  titulo: ReactNode;
  bajada: string;
  children?: ReactNode;
}

/** Encabezado de las páginas internas. */
export function CabeceraPagina({ etiqueta, titulo, bajada, children }: Props) {
  return (
    <section className={`${styles.cabecera}`}>
      <div className={styles.interior}>
        <p className="etiqueta">{etiqueta}</p>
        <h1>{titulo}</h1>
        <p className={styles.bajada}>{bajada}</p>
        {children}
      </div>
    </section>
  );
}
