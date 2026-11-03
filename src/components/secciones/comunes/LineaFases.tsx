import { revelarAlScroll } from '@/components/efectos/revelar';
import { FASES } from '@/data/metodologia';
import styles from './LineaFases.module.css';

export function LineaFases({ detallada = false }: { detallada?: boolean }) {
  return (
    <ol className={styles.fases}>
      {FASES.map((fase, indice) => (
        <li key={fase.numero} className={styles.fase} {...revelarAlScroll(indice)}>
          <span className={styles.numero}>{fase.numero}</span>
          <h3>{fase.titulo}</h3>
          <p>{fase.descripcion}</p>
          {detallada && (
            <p className={styles.entregable}>
              <small>Entregable</small> {fase.entregable}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
