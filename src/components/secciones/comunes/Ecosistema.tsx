import Image from 'next/image';
import styles from './Ecosistema.module.css';

const APLICACIONES = [
  { nombre: 'Excel', archivo: 'excel.svg' },
  { nombre: 'Outlook', archivo: 'outlook.svg' },
  { nombre: 'Teams', archivo: 'teams.svg' },
  { nombre: 'Power BI', archivo: 'power-bi.svg' },
  { nombre: 'Power Automate', archivo: 'power-automate.svg' },
  { nombre: 'Azure', archivo: 'azure.svg' },
];

/** Aplicaciones de Microsoft que se integran con Business Central. */
export function Ecosistema() {
  return (
    <section className={styles.ecosistema} aria-labelledby="titulo-ecosistema">
      <div className={`contenedor ${styles.interior}`}>
        <p id="titulo-ecosistema" className={styles.titulo}>
          Business Central trabaja junto a las herramientas de Microsoft que su equipo ya usa
        </p>
        <ul className={styles.logos}>
          {APLICACIONES.map((app) => (
            <li key={app.nombre}>
              <Image src={`/logos/${app.archivo}`} alt="" width={36} height={36} unoptimized />
              <span>{app.nombre}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
