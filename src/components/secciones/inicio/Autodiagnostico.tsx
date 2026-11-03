'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icono } from '@/components/ui/Icono';
import { buscarServicio } from '@/data/servicios';
import { unirClases } from '@/lib/clases';
import styles from './Autodiagnostico.module.css';

const SITUACIONES = [
  {
    id: 'fiscal',
    texto: 'Llevo la facturación con CAI fuera del sistema contable',
    servicio: 'localizacion-honduras',
  },
  {
    id: 'pos',
    texto: 'Tengo estaciones de servicio o tiendas con punto de venta',
    servicio: 'integracion-pos-gasolineras',
  },
  {
    id: 'turnos',
    texto: 'Descubro diferencias de facturas días después del cierre',
    servicio: 'validacion-facturas',
  },
  { id: 'excel', texto: 'Paso horas digitando datos que ya están en Excel', servicio: 'importacion-excel' },
  {
    id: 'informes',
    texto: 'Armo los reportes de gerencia a mano cada mes',
    servicio: 'informes-personalizados',
  },
  { id: 'soporte', texto: 'Ya tengo Business Central, pero necesito ayuda', servicio: 'soporte' },
];

export function Autodiagnostico() {
  const [elegidas, setElegidas] = useState<string[]>([]);

  const alternar = (id: string) =>
    setElegidas((actual) => (actual.includes(id) ? actual.filter((x) => x !== id) : [...actual, id]));

  const servicios = SITUACIONES.filter((s) => elegidas.includes(s.id)).map((s) => s.servicio);
  const destino = `/contacto/?interes=${servicios.join(',')}`;

  return (
    <section className={`seccion ${styles.seccion}`}>
      <div className={`contenedor ${styles.rejilla}`}>
        <div>
          <p className="etiqueta">Diagnóstico de 30 segundos</p>
          <h2 className="titulo-seccion">¿Qué le está costando tiempo hoy?</h2>
          <p className="entrada">
            Marque lo que le suena familiar. Le mostramos qué parte de nuestro trabajo resuelve cada punto y
            llega al formulario con todo listo.
          </p>
        </div>

        <div className={styles.panel}>
          <fieldset className={styles.opciones}>
            <legend className={styles.oculto}>Situaciones de su empresa</legend>
            {SITUACIONES.map((situacion) => {
              const activa = elegidas.includes(situacion.id);
              return (
                <label key={situacion.id} className={unirClases(styles.opcion, activa && styles.activa)}>
                  <input type="checkbox" checked={activa} onChange={() => alternar(situacion.id)} />
                  <span className={styles.caja} aria-hidden="true">
                    <Icono nombre="check" tamano={14} />
                  </span>
                  {situacion.texto}
                </label>
              );
            })}
          </fieldset>

          <div className={styles.resultado} aria-live="polite">
            {servicios.length === 0 ? (
              <p className={styles.vacio}>Marque al menos una situación.</p>
            ) : (
              <>
                <p className={styles.cuenta}>
                  <b>{servicios.length}</b>{' '}
                  {servicios.length === 1 ? 'servicio le ayuda' : 'servicios le ayudan'}:
                </p>
                <ul className={styles.recomendados}>
                  {servicios.map((slug) => (
                    <li key={slug}>
                      <Link href={`/servicios/${slug}/`}>{buscarServicio(slug)?.titulo}</Link>
                    </li>
                  ))}
                </ul>
                <Link href={destino} className="boton boton-acento boton-grande">
                  Hablar con un consultor <Icono nombre="flecha" tamano={18} />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
