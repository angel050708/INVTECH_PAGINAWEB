import type { CSSProperties } from 'react';
import { Icono, type NombreIcono } from '@/components/ui/Icono';
import styles from './DiagramaModulos.module.css';

const MODULOS: { titulo: string; icono: NombreIcono }[] = [
  { titulo: 'Gestión de proyectos', icono: 'calendario' },
  { titulo: 'Operaciones', icono: 'engranaje' },
  { titulo: 'Informes y análisis', icono: 'grafica' },
  { titulo: 'Cadena de suministro', icono: 'caja' },
  { titulo: 'Ventas y servicio', icono: 'persona' },
  { titulo: 'Finanzas', icono: 'billete' },
];

/** Áreas que cubre Business Central, alrededor del nombre del producto. */
export function DiagramaModulos() {
  return (
    <figure className={styles.diagrama} aria-label="Áreas que cubre Microsoft Dynamics 365 Business Central">
      <div className={styles.centro}>
        <small>Microsoft Dynamics 365</small>
        <strong>Business Central</strong>
      </div>
      <ul className={styles.modulos}>
        {MODULOS.map((modulo, indice) => (
          <li key={modulo.titulo} style={{ '--i': indice } as CSSProperties}>
            <span className={styles.icono}>
              <Icono nombre={modulo.icono} tamano={26} />
            </span>
            {modulo.titulo}
          </li>
        ))}
      </ul>
    </figure>
  );
}
