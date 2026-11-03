import Link from 'next/link';
import styles from './Logo.module.css';

export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <Link
      href="/"
      className={claro ? `${styles.logo} ${styles.claro}` : styles.logo}
      aria-label="InvTech, inicio"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <rect width="32" height="32" rx="8" className={styles.fondo} />
        <path d="M8 24V9h4v15zM14 24V14h4v10zM20 24v-5h4v5z" className={styles.barras} />
      </svg>
      <span translate="no">
        Inv<b>Tech</b>
      </span>
    </Link>
  );
}
