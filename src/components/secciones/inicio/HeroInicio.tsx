import Link from 'next/link';
import { Icono } from '@/components/ui/Icono';
import { SelloPartner } from '@/components/ui/SelloPartner';
import { CurvaApps } from '@/components/ui/CurvaApps';
import { LineasCircuito } from '@/components/ui/LineasCircuito';
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
          <div className={styles.lineas}>
            <LineasCircuito />
          </div>
          <p className={styles.bajada}>
            Implementamos Business Central para su empresa en Honduras y desarrollamos soluciones tecnológicas
            únicas para su negocio.
          </p>
          <div className={styles.acciones}>
            <Link href="/contacto/" className="boton boton-acento boton-grande">
              Empieza ahora <Icono nombre="flecha" tamano={18} />
            </Link>
            <Link href="/servicios/" className="boton boton-borde boton-grande">
              Ver servicios
            </Link>
          </div>
          <div className={styles.sello}>
            <SelloPartner />
          </div>
        </div>
      </div>
      <CurvaApps />
    </section>
  );
}
