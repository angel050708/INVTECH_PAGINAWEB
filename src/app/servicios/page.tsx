import type { Metadata } from 'next';
import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { Icono } from '@/components/ui/Icono';
import { SERVICIOS } from '@/data/servicios';
import styles from '../paginas.module.css';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Localización fiscal hondureña, integración POS para estaciones de servicio, validación de facturas, importación desde Excel, informes y soporte para Business Central.',
};

export default function PaginaServicios() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Servicios"
        titulo="Servicios sobre Business Central"
        bajada="Además de implementar, construimos lo que el estándar no trae: la parte fiscal de Honduras, la conexión con su punto de venta y los informes de su negocio."
      />
      <section className="seccion">
        <div className="contenedor">
          <ul className={styles.listaServicios}>
            {SERVICIOS.map((servicio, indice) => (
              <li key={servicio.slug} {...revelarAlScroll(indice)}>
                <Link href={`/servicios/${servicio.slug}/`} className={styles.filaServicio}>
                  <span className={styles.iconoFila}>
                    <Icono nombre={servicio.icono} tamano={26} />
                  </span>
                  <h2>{servicio.titulo}</h2>
                  <p>{servicio.resumen}</p>
                  <span className={styles.flechaFila}>
                    <Icono nombre="flecha" tamano={18} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <BandaLlamado />
    </>
  );
}
