import type { Metadata } from 'next';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { LineaFases } from '@/components/secciones/comunes/LineaFases';
import { CONCEPTOS } from '@/data/metodologia';
import styles from '../paginas.module.css';

export const metadata: Metadata = {
  title: 'Metodología de implementación',
  description:
    'Diagnosticar, Análisis, Diseño, Desarrollo, Despliegue y Operacional: así implementamos Business Central, con FRD, Gap-Fit, UAT y soporte post go-live.',
};

export default function PaginaMetodologia() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Metodología"
        titulo="Enfoque de implementación de Business Central"
        bajada="Seis fases con un entregable claro en cada una. Usted sabe en qué punto está el proyecto y qué sigue."
      />

      <section className="seccion">
        <div className="contenedor">
          <LineaFases detallada />
        </div>
      </section>

      <section className={`seccion ${styles.fondoAlterno}`}>
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Conceptos básicos</p>
              <h2 className="titulo-seccion">Documentos y etapas clave del proyecto</h2>
            </div>
          </div>
          <ul className={styles.tarjetas}>
            {CONCEPTOS.map((concepto, indice) => (
              <li key={concepto.titulo} className={styles.tarjeta} {...revelarAlScroll(indice)}>
                <span className={styles.sigla}>{concepto.sigla ?? `0${indice + 1}`}</span>
                <h3>{concepto.titulo}</h3>
                <p>{concepto.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BandaLlamado titulo="Empecemos por el diagnóstico" />
    </>
  );
}
