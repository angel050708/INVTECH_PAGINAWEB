import Link from 'next/link';
import { Icono } from '@/components/ui/Icono';
import { CurvaApps } from '@/components/ui/CurvaApps';
import styles from './HeroInicio.module.css';

export function HeroInicio() {
  return (
    <section className={styles.hero}>
      <div className={styles.texto}>
        <div className={styles.titular}>
          <p className={styles.sello}>Microsoft Dynamics 365 Business Central</p>
          <h1>Implementación de Dynamics 365 Business Central</h1>
        </div>
        <div className={styles.lateral}>
          <p className={styles.bajada}>
            Aproveche las oportunidades de crecimiento, eficiencia e innovación que ofrece Business Central
            para prosperar en el competitivo panorama empresarial actual.
          </p>
          <div className={styles.acciones}>
            <Link href="/contacto/" className="boton boton-acento boton-grande">
              Empieza ahora <Icono nombre="flecha" tamano={18} />
            </Link>
            <Link href="/soluciones/" className="boton boton-borde boton-grande">
              Ver soluciones
            </Link>
          </div>
        </div>
      </div>
      <CurvaApps />
    </section>
  );
}
