import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

/** Logo oficial de InvTech (vectorizado). `claro` es la versión para fondos oscuros. */
export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <Link href="/" className={styles.logo} aria-label="InvTech, inicio">
      <Image
        src={claro ? '/logo-invtech-claro.svg' : '/logo-invtech.svg'}
        alt=""
        width={120}
        height={40}
        priority
        unoptimized
      />
    </Link>
  );
}
