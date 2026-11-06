import Image from 'next/image';
import { revelarAlScroll } from '@/components/efectos/revelar';
import styles from './IntegradoMicrosoft365.module.css';

/** Texto de la presentación "Business Central Express" (diapositiva 3). */
const APPS = [
  { logo: 'outlook', texto: 'Trabajar desde Outlook: consultar, crear ofertas y más.' },
  { logo: 'word', texto: 'Crear y modificar informes desde Word.' },
  { logo: 'excel', texto: 'Exportar y actualizar datos desde Excel.' },
  {
    logo: 'teams',
    texto: 'Editar campos, iniciar flujos de trabajo y realizar acciones sin salir de Teams.',
  },
];

/** "¿En qué se diferencia de otros sistemas?": Business Central integrado con Microsoft 365. */
export function IntegradoMicrosoft365() {
  return (
    <section className={styles.seccion}>
      <div className={`contenedor ${styles.rejilla}`}>
        <div {...revelarAlScroll()}>
          <p className={styles.etiqueta}>¿En qué se diferencia de otros sistemas?</p>
          <h2 className={styles.titulo}>
            Integrado con toda la suite de <b>Microsoft 365</b>
          </h2>
          <ul className={styles.apps}>
            {APPS.map((app) => (
              <li key={app.logo}>
                <Image src={`/logos/${app.logo}.svg`} alt="" width={40} height={40} unoptimized />
                {app.texto}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.foto} {...revelarAlScroll(1)}>
          <Image
            src="/fotos/bc-outlook.png"
            alt="Panel de Business Central dentro de Outlook, junto a un correo de un cliente"
            width={804}
            height={454}
            sizes="(max-width: 960px) 100vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
