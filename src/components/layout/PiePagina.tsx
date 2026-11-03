import Link from 'next/link';
import { CONTACTO, NAVEGACION } from '@/data/sitio';
import { SERVICIOS } from '@/data/servicios';
import { AnioActual } from './AnioActual';
import { Logo } from './Logo';
import styles from './PiePagina.module.css';

export function PiePagina() {
  return (
    <footer className={styles.pie}>
      <div className={styles.rejilla}>
        <div className={styles.marca}>
          <Logo claro />
          <p>
            Implementamos y adaptamos Microsoft Dynamics 365 Business Central para empresas en {CONTACTO.pais}
            .
          </p>
        </div>

        <nav aria-label="Compañía">
          <h2>Compañía</h2>
          <ul>
            {NAVEGACION.map((enlace) => (
              <li key={enlace.href}>
                <Link href={enlace.href}>{enlace.etiqueta}</Link>
              </li>
            ))}
            <li>
              <Link href="/contacto/">Contacto</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Servicios">
          <h2>Servicios</h2>
          <ul>
            {SERVICIOS.map((servicio) => (
              <li key={servicio.slug}>
                <Link href={`/servicios/${servicio.slug}/`}>{servicio.titulo}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2>Contacto</h2>
          <ul>
            <li>
              <a href={CONTACTO.telefonoEnlace}>{CONTACTO.telefono}</a>
            </li>
            <li>
              <a href={`mailto:${CONTACTO.correo}`}>{CONTACTO.correo}</a>
            </li>
            <li>{CONTACTO.pais}</li>
          </ul>
        </div>
      </div>

      <div className={styles.legal}>
        <span>
          © <AnioActual /> InvTech. Todos los derechos reservados.
        </span>
        <span>
          Microsoft, Dynamics 365 y Business Central son marcas de Microsoft Corporation.{' '}
          <Link href="/privacidad/">Privacidad</Link>
        </span>
      </div>
    </footer>
  );
}
