import { SERVICIOS_MENU, SOLUCIONES_MENU, VERTICALES, type EntradaMenu } from './paginas';

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

/** General, Combustible y Retail: las tres vistas de Punto de venta. */
export const PUNTO_DE_VENTA_MENU: EntradaMenu[] = VERTICALES.filter((v) =>
  ['punto-de-venta', 'combustible', 'retail'].includes(v.slug),
);

export const NAVEGACION: EnlaceNavegacion[] = [
  { href: '/soluciones/', etiqueta: 'Soluciones', submenu: SOLUCIONES_MENU, base: '/soluciones/' },
  { href: '/servicios/', etiqueta: 'Servicios', submenu: SERVICIOS_MENU, base: '/servicios/' },
  {
    href: '/punto-de-venta/',
    etiqueta: 'Punto de venta',
    submenu: PUNTO_DE_VENTA_MENU,
    base: '/punto-de-venta/',
  },
  { href: '/venta-de-equipos/', etiqueta: 'Equipos' },
  { href: '/servicio-it/', etiqueta: 'Servicio IT' },
  { href: '/quienes-somos/', etiqueta: 'Quiénes somos' },
];

export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
