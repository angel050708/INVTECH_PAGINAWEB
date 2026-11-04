import Image from 'next/image';
import type { CSSProperties } from 'react';
import { FechaHoy } from './FechaHoy';
import styles from './FlujoFacturas.module.css';

/** Documentos de ejemplo que ilustran el registro en Business Central. */
const DOCUMENTOS = [
  { numero: 'FV-10482', pedido: 'SO004728541', cliente: 'Distribuidora Valle Alto', monto: '12,480.00' },
  { numero: 'FV-10483', pedido: 'SO004728542', cliente: 'Ferretería La Esquina', monto: '3,217.50' },
  { numero: 'FV-10484', pedido: 'SO004728543', cliente: 'Grupo Comercial Lempa', monto: '28,905.10' },
  { numero: 'FV-10485', pedido: 'SO004728544', cliente: 'Hotel Bahía Azul', monto: '7,642.80' },
];

const ACCIONES = ['Nuevo', 'Procesar', 'Registro', 'Imprimir y enviar'];

/**
 * Facturas emitidas que llegan, una por una, a la lista de pedidos de venta de Business Central.
 * La ventana imita la interfaz de BC: barra de acciones, columnas y enlaces en turquesa.
 */
export function FlujoFacturas() {
  return (
    <figure className={styles.flujo} aria-label="Ilustración: facturas de venta llegando a Business Central">
      <div className={`${styles.ventana} ${styles.origen}`}>
        <div className={styles.barra}>
          <span className={styles.puntos} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          Facturas emitidas
        </div>
        <ol className={styles.filas}>
          {DOCUMENTOS.map((doc, i) => (
            <li key={doc.numero} style={{ '--i': i } as CSSProperties} className={styles.emitida}>
              <span className={styles.icono} aria-hidden="true" />
              <span>
                <strong>{doc.numero}</strong>
                <small>
                  {doc.cliente} · <FechaHoy />
                </small>
              </span>
              <span className={styles.monto}>L {doc.monto}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.conexion} aria-hidden="true">
        {DOCUMENTOS.map((doc, i) => (
          <span key={doc.numero} className={styles.paquete} style={{ '--i': i } as CSSProperties} />
        ))}
      </div>

      <div className={`${styles.ventana} ${styles.bc}`}>
        <div className={styles.encabezadoBc}>
          <Image src="/logos/dynamics-365-businesscentral.svg" alt="" width={22} height={22} unoptimized />
          <span>Dynamics 365 Business Central</span>
        </div>
        <div className={styles.herramientas} aria-hidden="true">
          <strong>Pedidos venta:</strong>
          <span className={styles.vista}>Todo</span>
          {ACCIONES.map((accion) => (
            <span key={accion}>{accion}</span>
          ))}
        </div>
        <div className={styles.tabla} role="presentation">
          <div className={styles.columnas} aria-hidden="true">
            <span>Fecha emisión</span>
            <span>Nº</span>
            <span>Venta a-Nombre</span>
            <span>Nº documento externo</span>
            <span>Estado</span>
          </div>
          <ol>
            {DOCUMENTOS.map((doc, i) => (
              <li key={doc.numero} style={{ '--i': i } as CSSProperties} className={styles.registrada}>
                <span className={styles.enlace}>
                  <FechaHoy />
                </span>
                <span>{doc.pedido}</span>
                <span className={styles.nombre}>{doc.cliente.toUpperCase()}</span>
                <span>{doc.numero}</span>
                <span className={styles.estado}>Registrado</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </figure>
  );
}
