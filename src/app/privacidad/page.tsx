import type { Metadata } from 'next';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { CONTACTO } from '@/data/sitio';
import styles from '../paginas.module.css';

export const metadata: Metadata = { title: 'Aviso de privacidad' };

export default function PaginaPrivacidad() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Legal"
        titulo="Aviso de privacidad"
        bajada="Cómo tratamos los datos que nos comparte al contactarnos."
      />
      <section className="seccion">
        <div className={`contenedor ${styles.legal}`}>
          <p>
            Este sitio no guarda sus datos. Al enviar el formulario de contacto, la información se abre en su
            propia aplicación de WhatsApp o de correo, y solo nos llega si usted decide enviarla.
          </p>
          <h2>Para qué usamos sus datos</h2>
          <p>
            Usamos su nombre, empresa, correo, teléfono y mensaje únicamente para responder su solicitud y
            preparar una propuesta. No los vendemos ni los compartimos con terceros.
          </p>
          <h2>Sus derechos</h2>
          <p>
            Puede pedirnos en cualquier momento que corrijamos o eliminemos sus datos escribiendo a{' '}
            <a href={`mailto:${CONTACTO.correo}`}>{CONTACTO.correo}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
