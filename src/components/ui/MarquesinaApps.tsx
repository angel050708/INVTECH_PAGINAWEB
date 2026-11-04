import Image from 'next/image';
import { APLICACIONES, rutaLogo } from '@/data/aplicaciones';
import styles from './MarquesinaApps.module.css';

/** Dos filas de logos de aplicaciones que se desplazan en sentidos opuestos. */
export function MarquesinaApps() {
  const mitad = Math.ceil(APLICACIONES.length / 2);
  const filas = [APLICACIONES.slice(0, mitad), APLICACIONES.slice(mitad)];

  return (
    <div className={styles.marquesina}>
      {filas.map((fila, indice) => (
        <div key={indice} className={styles.fila} data-sentido={indice % 2 ? 'inverso' : undefined}>
          {[0, 1].map((copia) => (
            <ul key={copia} className={styles.pista} aria-hidden={copia === 1 || undefined}>
              {fila.map((app) => (
                <li key={app.nombre}>
                  <Image src={rutaLogo(app.logo)} alt="" width={30} height={30} unoptimized />
                  {app.nombre}
                </li>
              ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}
