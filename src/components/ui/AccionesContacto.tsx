import { CONTACTO, enlaceWhatsapp } from '@/data/sitio';
import { Icono } from './Icono';
import styles from './AccionesContacto.module.css';

interface Props {
  /** Tema de la consulta: se usa en el mensaje de WhatsApp y el asunto del correo */
  tema: string;
  /** Texto claro cuando va sobre una foto oscura */
  sobreFoto?: boolean;
}

/** Botones de contacto del encabezado: WhatsApp con mensaje listo y correo. */
export function AccionesContacto({ tema, sobreFoto }: Props) {
  const mensaje = `Hola, me interesa ${tema} de InvTech.`;
  const asunto = encodeURIComponent(`Consulta: ${tema}`);
  return (
    <div className={`${styles.acciones} ${sobreFoto ? styles.sobreFoto : ''}`}>
      <a
        href={enlaceWhatsapp(mensaje)}
        target="_blank"
        rel="noopener noreferrer"
        className="boton boton-acento boton-grande"
      >
        <Icono nombre="whatsapp" tamano={20} /> Escribir por WhatsApp
      </a>
      <a href={`mailto:${CONTACTO.correo}?subject=${asunto}`} className={styles.correo}>
        <Icono nombre="correo" tamano={20} /> {CONTACTO.correo}
      </a>
    </div>
  );
}
