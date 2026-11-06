import Image from 'next/image';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { EQUIPO_PISTA, GASOLINERAS, type MarcaCompatible } from '@/data/verticales';
import styles from './Compatibilidad.module.css';

const ICONOS = [
  // Surtidor
  <svg key="s" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M7 27V7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v20M5 27h17M10 9h7v5h-7zM20 13h3a2 2 0 0 1 2 2v7a1.5 1.5 0 0 0 3 0V11l-3-3" />
  </svg>,
  // Controlador
  <svg key="c" viewBox="0 0 32 32" aria-hidden="true">
    <rect x="8" y="8" width="16" height="16" rx="2" />
    <path d="M13 13h6v6h-6zM12 4v4M20 4v4M12 24v4M20 24v4M4 12h4M4 20h4M24 12h4M24 20h4" />
  </svg>,
  // Sonda en tanque
  <svg key="t" viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 3v20M13 23h6" />
    <rect x="4" y="11" width="24" height="16" rx="8" />
    <path d="M6 21c3 1.6 6-1.6 10 0s7 1.6 10 0" />
  </svg>,
];

function Placa({ marca, grande }: { marca: MarcaCompatible; grande?: boolean }) {
  return (
    <span className={`${styles.placa} ${grande ? styles.placaGrande : ''}`}>
      {marca.logo ? (
        <Image src={marca.logo} alt={marca.nombre} width={160} height={64} className={styles.logo} />
      ) : (
        <span className={styles.palabra}>
          <strong>{marca.nombre}</strong>
          {(marca.de || marca.nota) && <small>{marca.de ? `de ${marca.de}` : marca.nota}</small>}
        </span>
      )}
    </span>
  );
}

/** Banderas y equipo de pista con los que se integra la solución de combustible. */
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
            <li key={g.nombre}>{g.nota ? `${g.nombre} (${g.nota}), bandera blanca` : g.nombre}</li>
          ))}
        </ul>
        <div className={styles.cinta} aria-hidden="true">
          <div className={styles.pista}>
            {cinta.map((g, i) => (
              <Placa key={i} marca={g} grande />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="t-equipo" className={styles.parte}>
        <h3 id="t-equipo" className={styles.subtitulo}>
          Del surtidor al tanque
        </h3>
        <ol className={styles.ruta}>
          {EQUIPO_PISTA.map((etapa, i) => (
            <li key={etapa.titulo} className={styles.etapa} {...revelarAlScroll(i)}>
              <span className={styles.nodo}>{ICONOS[i]}</span>
              <h4>{etapa.titulo}</h4>
              <p>{etapa.texto}</p>
              <div className={styles.marcas}>
                {etapa.marcas.map((m) => (
                  <Placa key={m.nombre} marca={m} />
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
