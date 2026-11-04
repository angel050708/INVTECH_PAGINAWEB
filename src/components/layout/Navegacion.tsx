'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type CSSProperties } from 'react';
import { Icono } from '@/components/ui/Icono';
import { LogosApp } from '@/components/ui/LogosApp';
import { unirClases } from '@/lib/clases';
import { CONTACTO, NAVEGACION } from '@/data/sitio';
import { Logo } from './Logo';
import styles from './Navegacion.module.css';

export function Navegacion() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);
  const [conSombra, setConSombra] = useState(false);

  const [rutaMenu, setRutaMenu] = useState(ruta);

  // Al cambiar de página se cierra el menú móvil
  if (rutaMenu !== ruta) {
    setRutaMenu(ruta);
    setAbierto(false);
  }

  useEffect(() => {
    const alDesplazar = () => setConSombra(window.scrollY > 8);
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    return () => window.removeEventListener('scroll', alDesplazar);
  }, []);

  const esActual = (href: string) => ruta.startsWith(href);

  return (
    <header className={unirClases(styles.cabecera, conSombra && styles.conSombra)}>
      <div className={styles.franja}>
        <span>Implementación de Microsoft Dynamics 365 Business Central en {CONTACTO.pais}</span>
        <span className={styles.franjaContacto}>
          <a href={CONTACTO.telefonoEnlace}>{CONTACTO.telefono}</a>
          <a href={`mailto:${CONTACTO.correo}`}>{CONTACTO.correo}</a>
        </span>
      </div>

      <nav className={styles.barra} aria-label="Principal">
        <Logo />

        <ul id="menu-principal" className={unirClases(styles.menu, abierto && styles.abierto)}>
          {NAVEGACION.map((enlace) => (
            <li key={enlace.href} className={enlace.submenu ? styles.conSubmenu : undefined}>
              <Link
                href={enlace.href}
                className={styles.enlace}
                aria-current={esActual(enlace.href) ? 'page' : undefined}
              >
                {enlace.etiqueta}
              </Link>
              {enlace.submenu && (
                <div className={styles.submenu}>
                  <ul>
                    {enlace.submenu.map((sub, indice) => (
                      <li key={sub.slug} style={{ '--i': indice } as CSSProperties}>
                        <Link href={`${enlace.base}${sub.slug}/`}>
                          <LogosApp logos={sub.logos.slice(0, 1)} tamano={22} />
                          <span>
                            <strong>{sub.etiqueta}</strong>
                            <small>{sub.resumen}</small>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={enlace.href} className={styles.verTodo}>
                    Ver {enlace.etiqueta.toLowerCase()} <Icono nombre="flecha" tamano={16} />
                  </Link>
                </div>
              )}
            </li>
          ))}
          <li className={styles.soloMovil}>
            <Link href="/contacto/" className={styles.enlace}>
              Contacto
            </Link>
          </li>
        </ul>

        <div className={styles.acciones}>
          <a
            href={CONTACTO.telefonoEnlace}
            className={styles.telefono}
            aria-label={`Llamar al ${CONTACTO.telefono}`}
          >
            <Icono nombre="telefono" tamano={18} />
          </a>
          <Link href="/contacto/" className="boton boton-acento">
            Agendar diagnóstico
          </Link>
          <button
            type="button"
            className={styles.hamburguesa}
            aria-expanded={abierto}
            aria-controls="menu-principal"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setAbierto((valor) => !valor)}
          >
            <Icono nombre={abierto ? 'cerrar' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  );
}
