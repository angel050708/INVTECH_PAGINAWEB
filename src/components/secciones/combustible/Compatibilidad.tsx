import Image from 'next/image';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { GASOLINERAS, PROVEEDORES, SISTEMAS_PISTA, type MarcaCompatible } from '@/data/verticales';
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
        <p>
          Sea de bandera o independiente, conectamos su estación con BCPOS y Business Central usando el
          equipo que ya tiene en pista.
        </p>
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

      <section aria-labelledby="t-proveedores" className={styles.proveedores}>
        <div {...revelarAlScroll()}>
          <h3 id="t-proveedores" className={styles.subtitulo}>
            Proveedores
          </h3>
          <p>Leemos cada despacho directo del surtidor, sea Gilbarco o Wayne.</p>
        </div>
        <div className={styles.logosGrandes}>
          {PROVEEDORES.map((m, i) => (
            <span key={m.nombre} {...revelarAlScroll(i + 1)}>
              <Placa marca={m} clase={styles.placaGrande} />
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="t-sistemas" className={styles.sistemas}>
        <div className={styles.sistemasTexto}>
          <h3 id="t-sistemas" className={styles.subtitulo}>
            Controladores y sondas
          </h3>
          {SISTEMAS_PISTA.map((s, i) => (
            <div key={s.titulo} className={styles.sistema} {...revelarAlScroll(i)}>
              <h4>{s.titulo}</h4>
              <p>{s.texto}</p>
              <ul>
                {s.nombres.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.espacioImagen} aria-hidden="true">
          <svg viewBox="0 0 48 48">
            <rect x="6" y="10" width="36" height="28" rx="4" />
            <circle cx="17" cy="20" r="3.5" />
            <path d="M6 33l10-9 8 7 6-5 12 10" />
          </svg>
        </div>
      </section>
    </div>
  );
}
