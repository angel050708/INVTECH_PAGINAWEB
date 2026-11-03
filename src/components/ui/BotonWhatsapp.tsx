import { enlaceWhatsapp } from '@/data/sitio';
import { Icono } from './Icono';
import styles from './BotonWhatsapp.module.css';

export function BotonWhatsapp() {
  return (
    <a
      className={styles.boton}
      href={enlaceWhatsapp('Hola InvTech, quiero información sobre Business Central.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a InvTech por WhatsApp"
    >
      <Icono nombre="whatsapp" tamano={26} />
    </a>
  );
}
