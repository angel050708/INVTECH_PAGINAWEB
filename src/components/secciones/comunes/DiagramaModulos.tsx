import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Icono, type NombreIcono } from '@/components/ui/Icono';
import styles from './DiagramaModulos.module.css';

/** Cada área con un color propio, en tonos que combinan con el morado de la marca. */
const MODULOS: { titulo: string; icono: NombreIcono; color: string }[] = [
  { titulo: 'Gestión de proyectos', icono: 'calendario', color: '#7c5cff' },
  { titulo: 'Operaciones', icono: 'engranaje', color: '#0ea5a4' },
  { titulo: 'Informes y análisis', icono: 'grafica', color: '#f59e0b' },
  { titulo: 'Cadena de suministro', icono: 'caja', color: '#2563eb' },
  { titulo: 'Ventas y servicio', icono: 'persona', color: '#db2777' },
  { titulo: 'Finanzas', icono: 'billete', color: '#16a34a' },
];

/** Áreas que cubre Business Central, alrededor del nombre del producto. */
export function DiagramaModulos() {
  return (
    <figure className={styles.diagrama} aria-label="Áreas que cubre Microsoft Dynamics 365 Business Central">
      <span className={styles.anillo} aria-hidden="true" />
      <div className={styles.centro}>
        <span className={styles.disco}>
          <Image src="/logos/dynamics-365-businesscentral.svg" alt="" width={56} height={56} unoptimized />
          <small>Microsoft Dynamics 365</small>
          <strong>Business Central</strong>
        </span>
      </div>
      <ul className={styles.modulos}>
        {MODULOS.map((modulo, indice) => (
          <li key={modulo.titulo} style={{ '--i': indice, '--color': modulo.color } as CSSProperties}>
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
