import { revelarAlScroll } from '@/components/efectos/revelar';
import { BENEFICIOS } from '@/data/empresa';
import styles from './Beneficios.module.css';

export function Beneficios() {
  return (
    <section className={`seccion grano ${styles.seccion}`}>
      <div className="contenedor">
        <div {...revelarAlScroll()}>
          <p className="etiqueta">Beneficios</p>
          <h2 className="titulo-seccion">Lo que le espera del otro lado de la implementación.</h2>
        </div>
        <ul className={styles.lista}>
          {BENEFICIOS.map((beneficio, indice) => (
            <li key={beneficio.titulo} {...revelarAlScroll(indice)}>
              <span className={styles.indice}>0{indice + 1}</span>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
