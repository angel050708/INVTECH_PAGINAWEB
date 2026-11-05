import type { Metadata } from 'next';
import { metadatosPagina } from '@/lib/metadatos';
import { Suspense } from 'react';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { FormularioContacto } from '@/components/secciones/contacto/FormularioContacto';
import { Icono } from '@/components/ui/Icono';
import { CONTACTO, enlaceWhatsapp } from '@/data/sitio';
import styles from '../paginas.module.css';

export const metadata: Metadata = metadatosPagina(
  'Contacto',
  `Hable con un consultor de InvTech: ${CONTACTO.telefono} · ${CONTACTO.correo}.`,
  '/contacto/',
);

export default function PaginaContacto() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Contáctenos"
        titulo="Hable con un consultor"
        bajada="Creemos en conversar personalmente con cada cliente para entender sus requisitos. Escríbanos o llámenos y un consultor le responde."
      />
      <section className="seccion">
        <div className={`contenedor ${styles.dosColumnas}`}>
          <div className={styles.contacto}>
            <a href={CONTACTO.telefonoEnlace} className={styles.datoContacto}>
              <span>
                <Icono nombre="telefono" />
              </span>
              <span>
                <small>Llámenos</small>
                <strong>{CONTACTO.telefono}</strong>
              </span>
            </a>
            <a
              href={enlaceWhatsapp('Hola InvTech, quiero información.')}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.datoContacto}
            >
              <span>
                <Icono nombre="whatsapp" />
              </span>
              <span>
                <small>WhatsApp</small>
                <strong>Escribir ahora</strong>
              </span>
            </a>
            <a href={`mailto:${CONTACTO.correo}`} className={styles.datoContacto}>
              <span>
                <Icono nombre="correo" />
              </span>
              <span>
                <small>Correo</small>
                <strong>{CONTACTO.correo}</strong>
              </span>
            </a>
            <div className={styles.datoContacto}>
              <span>
                <Icono nombre="ubicacion" />
              </span>
              <span>
                <small>Atendemos desde</small>
                <strong>{CONTACTO.pais}</strong>
              </span>
            </div>
          </div>
          <Suspense>
            <FormularioContacto />
          </Suspense>
        </div>
      </section>
    </>
  );
}
