import styles from './Confirmar.module.css';

/** Se oculta en producción definiendo NEXT_PUBLIC_OCULTAR_PENDIENTES=1 una vez que el equipo confirme. */
const OCULTAR = process.env.NEXT_PUBLIC_OCULTAR_PENDIENTES === '1';

/** Marca un dato que el equipo de InvTech todavía debe confirmar. */
export function Confirmar() {
  if (OCULTAR) return null;
  return (
    <mark className={styles.confirmar} title="Dato pendiente de confirmar por el equipo de InvTech">
      [CONFIRMAR]
    </mark>
  );
}
