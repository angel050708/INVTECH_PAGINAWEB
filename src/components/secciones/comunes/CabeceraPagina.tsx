import Image from 'next/image';
import type { ReactNode } from 'react';
import styles from './CabeceraPagina.module.css';

interface Props {
  etiqueta: string;
  titulo: ReactNode;
  bajada: string;
  children?: ReactNode;
  /** Ilustración a la derecha del título */
  visual?: ReactNode;
  /** Foto de fondo a todo lo ancho, oscurecida hacia el lado del texto */
  fondo?: { src: string; alt: string };
}

/** Encabezado de las páginas internas. */
export function CabeceraPagina({ etiqueta, titulo, bajada, children, visual, fondo }: Props) {
  return (
    <section className={fondo ? `${styles.cabecera} ${styles.conFondo}` : styles.cabecera}>
      {fondo && (
        <Image src={fondo.src} alt={fondo.alt} fill priority sizes="100vw" className={styles.fotoFondo} />
      )}
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
