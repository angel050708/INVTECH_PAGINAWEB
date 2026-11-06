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

        <figure
          className={styles.pantalla}
          aria-label="Ilustración: Business Central dentro de Outlook"
          {...revelarAlScroll(1)}
        >
          <div className={styles.barra}>
            <Image src="/logos/outlook.svg" alt="" width={18} height={18} unoptimized />
            Outlook
          </div>
          <div className={styles.cuerpo}>
            <ul className={styles.bandeja} aria-hidden="true">
              {[
                'Solicitud de presupuesto',
                'Pedido de la semana',
                'Estado de cuenta',
                'Factura pendiente',
              ].map((asunto, i) => (
                <li key={asunto} className={i === 0 ? styles.leido : undefined}>
                  <b>
                    {
                      [
                        'Distribuidora Valle Alto',
                        'Grupo Comercial Lempa',
                        'Hotel Bahía Azul',
                        'Ferretería La Esquina',
                      ][i]
                    }
                  </b>
                  <small>{asunto}</small>
                </li>
              ))}
            </ul>
            <div className={styles.correo}>
              <b>Solicitud de presupuesto</b>
              <p>Buenas tardes, ¿me puede enviar una oferta de 104 unidades del producto 001739?</p>
              <div className={styles.panel}>
                <div className={styles.panelCabeza}>
                  <Image
                    src="/logos/dynamics-365-businesscentral.svg"
                    alt=""
                    width={18}
                    height={18}
                    unoptimized
                  />
                  Business Central · Distribuidora Valle Alto
                </div>
                <dl>
                  <div>
                    <dt>Saldo</dt>
                    <dd>L 12,480.00</dd>
                  </div>
                  <div>
                    <dt>Vencido</dt>
                    <dd>L 0.00</dd>
                  </div>
                  <div>
                    <dt>Ventas del año</dt>
                    <dd>L 248,905.10</dd>
                  </div>
                </dl>
                <span className={styles.boton}>Crear oferta</span>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
