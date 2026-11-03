export const NOMBRE_SITIO = 'InvTech';

export interface EnlaceNavegacion {
  href: string;
  etiqueta: string;
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
  { href: '/business-central/', etiqueta: 'Business Central' },
  { href: '/servicios/', etiqueta: 'Servicios' },
  { href: '/metodologia/', etiqueta: 'Metodología' },
  { href: '/quienes-somos/', etiqueta: 'Quiénes somos' },
];

export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
