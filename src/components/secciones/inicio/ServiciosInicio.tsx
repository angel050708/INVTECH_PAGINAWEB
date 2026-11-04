import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { Icono } from '@/components/ui/Icono';
import { LogosApp } from '@/components/ui/LogosApp';
import { SERVICIOS_DYNAMICS, SOLUCIONES } from '@/data/paginas';
import styles from './ServiciosInicio.module.css';

export function SolucionesInicio() {
  return (
    <section className={`seccion ${styles.seccion}`}>
      <div className="contenedor">
        <div className="cabeza-seccion" {...revelarAlScroll()}>
          <div>
            <p className="etiqueta">Soluciones</p>
            <h2 className="titulo-seccion">Aplicaciones de Microsoft Dynamics 365 que implementamos</h2>
          </div>
          <Link href="/soluciones/" className="enlace-flecha">
            Ver soluciones <Icono nombre="flecha" tamano={18} />
          </Link>
        </div>
        <ul className={styles.bento}>
          {SOLUCIONES.map((solucion, indice) => (
            <li key={solucion.slug} className={styles.celda} {...revelarAlScroll(indice)}>
              <Link href={`/soluciones/${solucion.slug}/`} className={styles.tarjeta}>
                <LogosApp logos={solucion.logos} tamano={indice === 0 ? 44 : 34} className={styles.logos} />
                <h3>{solucion.etiqueta}</h3>
                <p>{solucion.resumen}</p>
                <span className={styles.flecha}>
                  <Icono nombre="flecha" tamano={18} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiciosInicio() {
  return (
    <section className="seccion">
      <div className={`contenedor ${styles.servicios}`}>
        <div className={styles.fijo} {...revelarAlScroll()}>
          <p className="etiqueta">Servicios</p>
          <h2 className="titulo-seccion">De la implementación al soporte</h2>
          <p className="entrada">
            Implementamos, desarrollamos, auditamos y damos soporte a sus aplicaciones de Microsoft.
          </p>
          <Link href="/servicios/" className="enlace-flecha" style={{ marginTop: 28 }}>
            Ver servicios <Icono nombre="flecha" tamano={18} />
          </Link>
        </div>
        <ul className={styles.lista}>
          {SERVICIOS_DYNAMICS.map((servicio, indice) => (
            <li key={servicio.slug} {...revelarAlScroll(indice)}>
              <Link href={`/servicios/${servicio.slug}/`} className={styles.fila}>
                <LogosApp logos={servicio.logos.slice(0, 1)} tamano={26} />
                <span>
                  <strong>{servicio.etiqueta}</strong>
                  <small>{servicio.resumen}</small>
                </span>
                <Icono nombre="flecha" tamano={18} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
