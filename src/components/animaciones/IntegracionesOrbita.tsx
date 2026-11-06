import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Icono, type NombreIcono } from '@/components/ui/Icono';
import styles from './IntegracionesOrbita.module.css';

/** Logos de la presentación de InvTech ("Nuestras integraciones"). */
const LOGOS = [
  { archivo: 'business-central', nombre: 'Microsoft Dynamics 365 Business Central' },
  { archivo: 'banco-azul', nombre: 'Banco integrado' },
  { archivo: 'gilbarco-veeder-root', nombre: 'Gilbarco Veeder-Root' },
  { archivo: 'dover', nombre: 'Dover' },
  { archivo: 'sap-business-one', nombre: 'SAP Business One' },
  { archivo: 'banco-rojo', nombre: 'Banco integrado' },
  { archivo: 'leal', nombre: 'Leal' },
];

const SISTEMAS: { texto: string; icono: NombreIcono }[] = [
  { texto: 'Equipo de control de dispensación de combustible', icono: 'surtidor' },
  { texto: 'Sistema electrónico de pago', icono: 'tarjeta' },
  { texto: 'Sistema de flota', icono: 'ubicacion' },
  { texto: 'Medición automática de tanques', icono: 'grafica' },
  { texto: 'Manejo de inventario físico', icono: 'tabla' },
];

/** Logos que giran alrededor de "Nuestras integraciones" y los sistemas que se conectan. */
export function IntegracionesOrbita() {
  return (
    <figure className={styles.escena} aria-label="Nuestras integraciones">
      <div className={styles.orbita}>
        <div className={styles.centro}>
          <strong>Nuestras integraciones</strong>
          <small>BCPOS · Business Central</small>
        </div>
        <ul className={styles.anillo} style={{ '--total': LOGOS.length } as CSSProperties}>
          {LOGOS.map((logo, i) => (
            <li key={logo.archivo} style={{ '--i': i } as CSSProperties}>
              <span className={styles.logo}>
                <Image src={`/integraciones/${logo.archivo}.jpg`} alt={logo.nombre} width={64} height={64} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className={styles.sistemas}>
        {SISTEMAS.map((s, i) => (
          <li key={s.texto} style={{ '--i': i } as CSSProperties}>
            <span className={styles.icono}>
              <Icono nombre={s.icono} tamano={20} />
            </span>
            {s.texto}
          </li>
        ))}
      </ul>
    </figure>
  );
}
