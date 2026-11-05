import { SERVICIOS_MENU, SOLUCIONES_MENU, type EntradaMenu } from './paginas';

export const NOMBRE_SITIO = 'InvTech';

export interface EnlaceNavegacion {
  href: string;
  etiqueta: string;
  /** Páginas del menú desplegable */
  submenu?: EntradaMenu[];
  base?: string;
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
  { href: '/soluciones/', etiqueta: 'Soluciones', submenu: SOLUCIONES_MENU, base: '/soluciones/' },
  { href: '/servicios/', etiqueta: 'Servicios', submenu: SERVICIOS_MENU, base: '/servicios/' },
  { href: '/punto-de-venta/', etiqueta: 'Punto de venta' },
  { href: '/combustible/', etiqueta: 'Combustible' },
  { href: '/retail/', etiqueta: 'Retail' },
  { href: '/venta-de-equipos/', etiqueta: 'Equipos' },
  { href: '/metodologia/', etiqueta: 'Metodología' },
  { href: '/quienes-somos/', etiqueta: 'Quiénes somos' },
];

export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
