import Image from 'next/image';
import type { CSSProperties } from 'react';
import { APLICACIONES, rutaLogo } from '@/data/aplicaciones';
import styles from './CurvaApps.module.css';

/**
 * Fila curva de aplicaciones: las tarjetas giran por el interior de un cilindro.
 * El centro se ve plano, los extremos se curvan hacia quien mira y se desvanecen.
 * Solo CSS: un anillo con preserve-3d que gira sobre su eje.
 */
export function CurvaApps() {
  const total = APLICACIONES.length;
  return (
    <div className={styles.escena} aria-hidden="true">
      <div className={styles.anillo} style={{ '--total': total } as CSSProperties}>
        {APLICACIONES.map((app, indice) => (
          <div key={app.nombre} className={styles.tarjeta} style={{ '--i': indice } as CSSProperties}>
            <Image src={rutaLogo(app.logo)} alt="" width={56} height={56} unoptimized />
            <span>{app.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
