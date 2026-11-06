import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Icono, type NombreIcono } from '@/components/ui/Icono';
import styles from './DiagramaModulos.module.css';

/** Cada área con un tono de la misma familia: morados de la marca, azules y verde azulado. */
const MODULOS: { titulo: string; icono: NombreIcono; color: string }[] = [
  { titulo: 'Gestión de proyectos', icono: 'calendario', color: '#4c3bd1' },
  { titulo: 'Operaciones', icono: 'engranaje', color: '#0f766e' },
  { titulo: 'Informes y análisis', icono: 'grafica', color: '#1d4ed8' },
  { titulo: 'Cadena de suministro', icono: 'caja', color: '#0369a1' },
  { titulo: 'Ventas y servicio', icono: 'persona', color: '#6d28d9' },
  { titulo: 'Finanzas', icono: 'billete', color: '#2a1499' },
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
