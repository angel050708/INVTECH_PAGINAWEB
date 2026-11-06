import Image from 'next/image';
import { unirClases } from '@/lib/clases';
import styles from './SelloPartner.module.css';

/** Logo "Gold Microsoft Partner" tomado de la presentación de InvTech. */
export function SelloPartner({ oscuro = false }: { oscuro?: boolean }) {
  return (
    <span className={unirClases(styles.sello, oscuro && styles.oscuro)}>
      <Image src="/logos/microsoft-gold-partner.png" alt="Gold Microsoft Partner" width={140} height={56} />
    </span>
  );
}
