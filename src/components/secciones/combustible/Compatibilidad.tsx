import Image from 'next/image';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { GASOLINERAS, PROVEEDORES, type MarcaCompatible } from '@/data/verticales';
import styles from './Compatibilidad.module.css';

function Placa({ marca, clase }: { marca: MarcaCompatible; clase: string }) {
  return (
    <span className={clase}>
      {marca.logo ? (
        <Image src={marca.logo} alt={marca.nombre} width={320} height={120} className={styles.logo} />
      ) : (
        <strong className={styles.palabra}>{marca.nombre}</strong>
      )}
    </span>
  );
}

/** Banderas, proveedores y sistemas de pista con los que se integra la solución de combustible. */
export function Compatibilidad() {
  const cinta = [...GASOLINERAS, ...GASOLINERAS, ...GASOLINERAS, ...GASOLINERAS];
  return (
    <div className={styles.envoltura}>
      <div className={styles.cabeza} {...revelarAlScroll()}>
        <h2 className="titulo-seccion">Trabajamos con todas las marcas y proveedores</h2>
        <p>Sin importar su marca, conectamos su estación con BCPOS y Business Central.</p>
      </div>

      <section aria-labelledby="t-gasolineras" className={styles.parte}>
        <h3 id="t-gasolineras" className={styles.subtitulo}>
          Gasolineras con las que trabajamos
        </h3>
        <ul className={styles.oculto}>
          {GASOLINERAS.map((g) => (
            <li key={g.nombre}>{g.nota ? `${g.nombre} (${g.nota})` : g.nombre}</li>
          ))}
        </ul>
        <div className={styles.cinta} aria-hidden="true">
          <div className={styles.pista}>
            {cinta.map((g, i) => (
              <Placa key={i} marca={g} clase={styles.placa} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="t-proveedores" className={styles.parte}>
        <h3 id="t-proveedores" className={styles.subtitulo} {...revelarAlScroll()}>
          Trabajamos con estos proveedores
        </h3>
        <div className={styles.logosGrandes}>
          {PROVEEDORES.map((m, i) => (
            <span key={m.nombre} {...revelarAlScroll(i + 1)}>
              <Placa marca={m} clase={styles.placaGrande} />
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
