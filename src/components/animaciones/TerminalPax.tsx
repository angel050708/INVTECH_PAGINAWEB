import type { CSSProperties } from 'react';
import styles from './TerminalPax.module.css';

const PASOS = [
  {
    titulo: 'El pistero ingresa el código del cliente',
    texto: 'Desde la terminal bancaria, junto a la bomba.',
  },
  { titulo: 'BCPOS consulta la cuenta', texto: 'Saldo, límite y estado del cliente de crédito.' },
  {
    titulo: 'Respuesta al instante',
    texto: 'Si la cuenta está activa, factura al crédito. Si está bloqueada, no se despacha.',
  },
];

const TECLAS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', '⌫'];

/**
 * Terminal bancaria PAX A920 (POS BAC) con BCPOS: consulta del saldo de un cliente de crédito.
 * Ciclo de 16 s con dos clientes de ejemplo: uno activo y uno bloqueado.
 */
export function TerminalPax() {
  return (
    <figure
      className={styles.escena}
      aria-label="Ilustración: terminal bancaria con BCPOS consultando el saldo de un cliente de crédito"
    >
      <ol className={styles.pasos}>
        {PASOS.map((paso, i) => (
          <li key={paso.titulo} style={{ '--p': i } as CSSProperties}>
            <span className={styles.numero}>{i + 1}</span>
            <span>
              <strong>{paso.titulo}</strong>
              <small>{paso.texto}</small>
            </span>
          </li>
        ))}
      </ol>

      <div className={styles.terminal} aria-hidden="true">
        <div className={styles.impresora}>
          <span className={styles.comprobante}>
            <b>BCPOS</b>
            <small>Venta al crédito</small>
            <small>Transportes del Valle</small>
            <i />
            <b>L 1,248.00</b>
          </span>
        </div>
        <div className={styles.cuerpo}>
          <div className={styles.sensor} />
          <div className={styles.pantalla}>
            <div className={styles.barraApp}>
              <span>BCPOS</span>
              <span>POS BAC · Bomba 3</span>
            </div>

            {/* Ingreso del código, con teclado en pantalla */}
            <div className={`${styles.vista} ${styles.vistaCodigo}`}>
              <small>Consulta de crédito</small>
              <span className={styles.etiqueta}>Código de cliente</span>
              <span className={styles.campo}>
                <span className={styles.escrito}>0801-1999-04521</span>
              </span>
              <span className={styles.tecladoPantalla}>
                {TECLAS.map((tecla, i) => (
                  <span key={i}>{tecla}</span>
                ))}
              </span>
              <span className={styles.botonApp}>Consultar</span>
            </div>

            <div className={`${styles.vista} ${styles.vistaBuscando}`}>
              <span className={styles.giro} />
              <small>Consultando Business Central…</small>
            </div>

            <div className={`${styles.vista} ${styles.vistaActivo}`}>
              <small>Transportes del Valle</small>
              <span className={`${styles.estado} ${styles.activo}`}>ACTIVO</span>
              <dl>
                <dt>Límite</dt>
                <dd>L 150,000.00</dd>
                <dt>Saldo</dt>
                <dd>L 112,579.50</dd>
              </dl>
              <span className={styles.disponible}>
                Disponible <b>L 37,420.50</b>
              </span>
              <span className={styles.medidor}>
                <i />
              </span>
              <span className={`${styles.botonApp} ${styles.botonVerde}`}>Facturar al crédito</span>
            </div>

            <div className={`${styles.vista} ${styles.vistaBloqueado}`}>
              <small>Ferretería Los Andes</small>
              <span className={`${styles.estado} ${styles.bloqueado}`}>BLOQUEADO</span>
              <p>Cuenta bloqueada por límite de crédito. No se autoriza el despacho.</p>
              <span className={`${styles.botonApp} ${styles.botonRojo}`}>Volver</span>
            </div>

            <div className={styles.navegacionAndroid}>
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className={styles.marca}>PAX</div>
        </div>
        <div className={styles.lector} />
      </div>
    </figure>
  );
}
