import { revelarAlScroll } from '@/components/efectos/revelar';
import { Icono } from '@/components/ui/Icono';
import type { Elemento } from '@/data/verticales';
import { unirClases } from '@/lib/clases';
import styles from './Elementos.module.css';

interface Props {
  elementos: Elemento[];
  /** Columnas en escritorio */
  columnas?: 2 | 3 | 4;
  /** "tarjetas" con borde o "lista" compacta */
  variante?: 'tarjetas' | 'lista';
}

/** Rejilla de elementos con ícono, título y texto. */
export function Elementos({ elementos, columnas = 3, variante = 'tarjetas' }: Props) {
  return (
    <ul className={unirClases(styles.rejilla, styles[`c${columnas}`], styles[variante])}>
      {elementos.map((e, i) => (
        <li key={e.titulo} className={styles.elemento} {...revelarAlScroll(i % 6)}>
          {e.icono && (
            <span className={styles.icono}>
              <Icono nombre={e.icono} tamano={22} />
            </span>
          )}
          <div>
            <h3>{e.titulo}</h3>
            {e.texto && <p>{e.texto}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
