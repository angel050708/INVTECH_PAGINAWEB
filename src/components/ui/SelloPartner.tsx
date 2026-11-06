import { unirClases } from '@/lib/clases';
import styles from './SelloPartner.module.css';

/** Sello de partner de Microsoft. `oscuro` es la versión para fondos oscuros. */
export function SelloPartner({ oscuro = false }: { oscuro?: boolean }) {
  return (
    <span className={unirClases(styles.sello, oscuro && styles.oscuro)}>
      <span className={styles.cuadros} aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>
        <small>Microsoft</small>
        <strong>Gold Partner</strong>
      </span>
    </span>
  );
}
