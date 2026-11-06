import { revelarAlScroll } from '@/components/efectos/revelar';
import { CONCEPTOS } from '@/data/metodologia';
import styles from './ConceptosImplementacion.module.css';

/** Documentos y etapas clave de una implementación de Business Central (antes en Metodología). */
export function ConceptosImplementacion() {
  return (
    <section className="seccion fondo-alterno">
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
  );
}
