import { revelarAlScroll } from '@/components/efectos/revelar';
import { PREGUNTAS } from '@/data/empresa';
import styles from './PreguntasFrecuentes.module.css';

export function PreguntasFrecuentes() {
  return (
    <section className="seccion" id="preguntas-frecuentes">
      <div className={`contenedor ${styles.rejilla}`}>
        <div {...revelarAlScroll()}>
          <p className="etiqueta">Preguntas frecuentes</p>
          <h2 className="titulo-seccion">Antes de empezar.</h2>
        </div>
        <div className={styles.lista}>
          {PREGUNTAS.map((item, indice) => (
            <details key={item.pregunta} className={styles.item} {...revelarAlScroll(indice)}>
              <summary>{item.pregunta}</summary>
              <p>{item.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
