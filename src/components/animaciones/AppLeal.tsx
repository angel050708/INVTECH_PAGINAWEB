import Image from 'next/image';
import styles from './AppLeal.module.css';

/**
 * Compra en la caja BCPOS que suma puntos en la app de Leal del cliente.
 * Ciclo de 12 s: compra → notificación de puntos → promoción personalizada.
 */
export function AppLeal() {
  return (
    <figure
      className={styles.escena}
      aria-label="Ilustración: una compra en BCPOS suma puntos en la app de Leal del cliente"
    >
      <div className={styles.caja} aria-hidden="true">
        <div className={styles.cajaBarra}>BCPOS · Caja 1</div>
        <div className={styles.cajaCuerpo}>
          <span>Cliente</span>
          <b>María Fernanda López</b>
          <span>Total de la compra</span>
          <b className={styles.monto}>L 1,250.00</b>
          <span className={styles.cajaBoton}>Cobrar y acumular puntos</span>
        </div>
      </div>

      <div className={styles.conexion} aria-hidden="true">
        <span />
      </div>

      <div className={styles.telefono} aria-hidden="true">
        <div className={styles.isla} />
        <div className={styles.app}>
          <div className={styles.encabezado}>
            <Image src="/logos/leal.svg" alt="" width={30} height={30} unoptimized />
            <span>Hola, María</span>
          </div>

          <div className={styles.saldo}>
            <small>Tus puntos</small>
            <span className={styles.puntos}>
              <b className={styles.antes}>2,340</b>
              <b className={styles.despues}>2,465</b>
            </span>
            <small>Acumulas en todas las sucursales</small>
          </div>

          <div className={styles.notificacion}>
            <b>+125 puntos</b>
            <small>Por tu compra en Caja 1</small>
          </div>

          <div className={styles.promo}>
            <small>Promoción para ti</small>
            <b>Doble puntos en tu próxima compra</b>
            <span>Válida este fin de semana</span>
          </div>

          <div className={styles.qr}>
            <span />
            <small>Muestra tu código en caja</small>
          </div>
        </div>
      </div>
    </figure>
  );
}
