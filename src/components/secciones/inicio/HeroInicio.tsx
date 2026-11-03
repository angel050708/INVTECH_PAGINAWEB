import Link from 'next/link';
import { Icono } from '@/components/ui/Icono';
import { LibroMayor } from './LibroMayor';
import styles from './HeroInicio.module.css';

export function HeroInicio() {
  return (
    <section className={`${styles.hero} grano`}>
      <div className={styles.interior}>
        <div className={styles.texto}>
          <p className={styles.sello}>
            <span className={styles.punto} aria-hidden="true" /> Microsoft Dynamics 365 Business Central ·
            Honduras
          </p>
          <h1>
            Toda su empresa, <em>cuadrada</em> en un solo sistema.
          </h1>
          <p className={styles.bajada}>
            Implementamos Business Central adaptado a Honduras: facturación con CAI, retenciones, integración
            con su punto de venta e informes que su gerencia sí usa.
          </p>
          <div className={styles.acciones}>
            <Link href="/contacto/" className="boton boton-acento boton-grande">
              Agendar diagnóstico <Icono nombre="flecha" tamano={18} />
            </Link>
            <Link href="/metodologia/" className="boton boton-borde boton-grande">
              Cómo trabajamos
            </Link>
          </div>
          <ul className={styles.pruebas}>
            <li>
              <strong>6 fases</strong> con entregables claros
            </li>
            <li>
              <strong>Localización</strong> fiscal SAR
            </li>
            <li>
              <strong>Nube</strong>, local o híbrido
            </li>
          </ul>
        </div>
        <LibroMayor />
      </div>
    </section>
  );
}
