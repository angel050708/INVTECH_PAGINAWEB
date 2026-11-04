import styles from './LineasCircuito.module.css';

/** Líneas de circuito tomadas del logo de InvTech, que se dibujan solas. */
export function LineasCircuito() {
  return (
    <svg className={styles.lineas} viewBox="0 0 520 260" fill="none" aria-hidden="true">
      <path d="M20 70H210L250 100H500" />
      <path d="M60 130H230L300 90H470" style={{ animationDelay: '0.2s' }} />
      <path d="M10 180H260L300 150H420" style={{ animationDelay: '0.4s' }} />
      <path d="M90 220H330L380 190H510" style={{ animationDelay: '0.6s' }} />
      <circle cx="500" cy="100" r="7" />
      <circle cx="10" cy="180" r="7" style={{ animationDelay: '0.4s' }} />
      <circle cx="90" cy="220" r="7" style={{ animationDelay: '0.6s' }} />
      <circle cx="470" cy="90" r="7" style={{ animationDelay: '0.2s' }} />
    </svg>
  );
}
