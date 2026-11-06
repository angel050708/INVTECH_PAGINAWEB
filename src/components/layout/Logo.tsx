import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

/**
 * Logo oficial de InvTech (vectorizado). `claro` es la versión para fondos oscuros.
 * La versión normal cambia sola a la clara cuando la página está en modo oscuro.
 */
export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <Link href="/" className={styles.logo} aria-label="InvTech, inicio">
      {claro ? (
        <Image src="/logo-invtech-claro.svg" alt="" width={120} height={40} unoptimized />
      ) : (
        <>
          <Image
            src="/logo-invtech.svg"
            alt=""
            width={120}
            height={40}
            priority
            unoptimized
            className={styles.paraClaro}
          />
          <Image
            src="/logo-invtech-claro.svg"
            alt=""
            width={120}
            height={40}
            unoptimized
            className={styles.paraOscuro}
          />
        </>
      )}
    </Link>
  );
}
