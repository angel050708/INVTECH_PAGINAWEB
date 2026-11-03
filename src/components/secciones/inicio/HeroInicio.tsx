import Link from 'next/link';
import { Icono } from '@/components/ui/Icono';
import { LibroMayor } from './LibroMayor';
import styles from './HeroInicio.module.css';

export function HeroInicio() {
  return (
    <section className={styles.hero}>
      <div className={styles.interior}>
        <div className={styles.texto}>
          <p className={styles.sello}>Microsoft Dynamics 365 Business Central</p>
          <h1>Implementación de Business Central para empresas en Honduras</h1>
          <p className={styles.bajada}>
            Configuramos el ERP de Microsoft con la facturación del SAR, lo conectamos a su punto de venta y
            preparamos los informes que su gerencia revisa cada semana.
          </p>
          <div className={styles.acciones}>
            <Link href="/contacto/" className="boton boton-acento boton-grande">
              Agendar diagnóstico <Icono nombre="flecha" tamano={18} />
            </Link>
            <Link href="/servicios/" className="boton boton-borde boton-grande">
              Ver servicios
            </Link>
          </div>
        </div>
        <LibroMayor />
      </div>
    </section>
  );
}
