import { SERVICIOS_DYNAMICS, SOLUCIONES } from './paginas';
import { SERVICIOS } from './servicios';

export const NOMBRE_SITIO = 'InvTech';

export interface EnlaceNavegacion {
  href: string;
  etiqueta: string;
  /** Columnas del menú desplegable */
  submenu?: { titulo: string; enlaces: { href: string; etiqueta: string }[] }[];
}

/** Datos de contacto publicados en invtech.pro/contacto. */
export const CONTACTO = {
  telefono: '+504 3210-7325',
  telefonoEnlace: 'tel:+50432107325',
  whatsapp: '50432107325',
  correo: 'info@invtech.pro',
  pais: 'Honduras',
} as const;

export const NAVEGACION: EnlaceNavegacion[] = [
  {
    href: '/soluciones/',
    etiqueta: 'Soluciones',
    submenu: [
      {
        titulo: 'Microsoft Dynamics 365',
        enlaces: SOLUCIONES.map((s) => ({ href: `/soluciones/${s.slug}/`, etiqueta: s.etiqueta })),
      },
    ],
  },
  {
    href: '/servicios/',
    etiqueta: 'Servicios',
    submenu: [
      {
        titulo: 'Dynamics 365',
        enlaces: SERVICIOS_DYNAMICS.map((s) => ({ href: `/servicios/${s.slug}/`, etiqueta: s.etiqueta })),
      },
      {
        titulo: 'Especialidades para Honduras',
        enlaces: SERVICIOS.map((s) => ({ href: `/servicios/${s.slug}/`, etiqueta: s.titulo })),
      },
    ],
  },
  { href: '/metodologia/', etiqueta: 'Metodología' },
  { href: '/quienes-somos/', etiqueta: 'Quiénes somos' },
];

export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
