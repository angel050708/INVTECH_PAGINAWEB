'use client';

import Image from 'next/image';
import { useEffect, useRef, type ReactNode } from 'react';
import styles from './ExpansionImagen.module.css';

interface Props {
  /** Foto principal que se expande */
  src: string;
  alt: string;
  /** Foto de fondo que se desvanece mientras la principal crece */
  fondo: string;
  /** Primera y segunda parte del título: se separan al expandir */
  titulo: [string, string];
  etiqueta?: string;
  indicacion?: string;
  children?: ReactNode;
}

/**
 * Imagen que crece hasta ocupar la pantalla mientras se hace scroll.
 * Adaptación del "scroll expansion hero" sin bloquear el scroll de la página:
 * el progreso sale de la posición de la sección, así funciona en cualquier punto de la página.
 */
export function ExpansionImagen({ src, alt, fondo, titulo, etiqueta, indicacion, children }: Props) {
  const seccion = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = seccion.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', '1');
      return;
    }
    let cuadro = 0;
    const actualizar = () => {
      cuadro = 0;
      const caja = el.getBoundingClientRect();
      const recorrido = caja.height - window.innerHeight;
      const p = recorrido > 0 ? Math.min(Math.max(-caja.top / recorrido, 0), 1) : 1;
      el.style.setProperty('--p', p.toFixed(4));
    };
    const pedir = () => {
      if (!cuadro) cuadro = requestAnimationFrame(actualizar);
    };
    actualizar();
    window.addEventListener('scroll', pedir, { passive: true });
    window.addEventListener('resize', pedir);
    return () => {
      window.removeEventListener('scroll', pedir);
      window.removeEventListener('resize', pedir);
      cancelAnimationFrame(cuadro);
    };
  }, []);

  return (
    <div ref={seccion} className={styles.seccion}>
      <div className={styles.fijo}>
        <Image src={fondo} alt="" fill sizes="100vw" className={styles.fondo} aria-hidden="true" />
        <div className={styles.medio}>
          <Image src={src} alt={alt} fill sizes="100vw" className={styles.foto} />
          <span className={styles.velo} aria-hidden="true" />
        </div>
        <div className={styles.titulo}>
          {etiqueta && <p className={styles.etiqueta}>{etiqueta}</p>}
          <h2>
            <span className={styles.izquierda}>{titulo[0]}</span>{' '}
            <span className={styles.derecha}>{titulo[1]}</span>
          </h2>
          {indicacion && (
            <p className={styles.indicacion} aria-hidden="true">
              {indicacion}
            </p>
          )}
        </div>
        {children && <div className={styles.contenido}>{children}</div>}
      </div>
    </div>
  );
}
