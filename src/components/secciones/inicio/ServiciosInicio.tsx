import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { Icono } from '@/components/ui/Icono';
import { SERVICIOS } from '@/data/servicios';
import styles from './ServiciosInicio.module.css';

export function ServiciosInicio() {
  return (
    <section className={`seccion ${styles.seccion}`}>
      <div className="contenedor">
        <div className={styles.cabeza}>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">Servicios</p>
            <h2 className="titulo-seccion">Lo que construimos sobre Business Central</h2>
          </div>
          <Link href="/servicios/" className="enlace-flecha" {...revelarAlScroll(1)}>
            Ver todos los servicios <Icono nombre="flecha" tamano={18} />
          </Link>
        </div>

        <ul className={styles.bento}>
          {SERVICIOS.map((servicio, indice) => (
            <li key={servicio.slug} className={styles.celda} {...revelarAlScroll(indice)}>
              <Link href={`/servicios/${servicio.slug}/`} className={styles.tarjeta}>
                <span className={styles.icono}>
                  <Icono nombre={servicio.icono} tamano={indice < 2 ? 28 : 22} />
                </span>
                <h3>{servicio.titulo}</h3>
                <p>{indice < 2 ? servicio.resumen : servicio.corto}</p>
                <span className={styles.mas}>
                  Ver detalle <Icono nombre="flecha" tamano={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
