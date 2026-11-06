import { ESPECIALIDADES } from './honduras';
import type { NombreIcono } from '@/components/ui/Icono';
import contenido from './contenido-original.json';

export interface ItemContenido {
  titulo: string;
  texto: string[];
}

export interface SeccionContenido {
  titulo: string;
  intro: string[];
  items: ItemContenido[];
}

export interface PaginaContenido {
  titulo: string;
  bajada: string[];
  secciones: SeccionContenido[];
}

export interface EntradaMenu {
  slug: string;
  etiqueta: string;
  /** Archivos en /public/logos; con varios se muestran superpuestos */
  logos: string[];
  /** Frase corta para menús y listados */
  resumen: string;
  /** Dirección propia cuando la página vive en otra sección */
  href?: string;
  /** Icono propio en lugar del logo de la aplicación */
  icono?: NombreIcono;
}

/** Contenido de las páginas de Soluciones y Servicios tomado de invtech.pro. */
const ORIGINAL = contenido as Record<'soluciones' | 'servicios', Record<string, PaginaContenido>>;

/** Soluciones clave publicadas en invtech.pro/soluciones. */
export const SOLUCIONES: EntradaMenu[] = [
  {
    slug: 'business-central',
    etiqueta: 'Business Central',
    logos: ['dynamics-365-businesscentral'],
    resumen: 'ERP para empresas en crecimiento',
  },
  {
    slug: 'dynamics-365',
    etiqueta: 'Microsoft Dynamics 365',
    logos: ['dynamics-365-sales', 'dynamics-365-finance', 'dynamics-365-customer-service'],
    resumen: 'Aplicaciones de negocio conectadas',
  },
  {
    slug: 'finanzas',
    etiqueta: 'Dynamics 365 Finance',
    logos: ['dynamics-365-finance'],
    resumen: 'Transparencia financiera',
  },
  {
    slug: 'gestion-suministros',
    etiqueta: 'Supply Chain Management',
    logos: ['dynamics-365-supply-chain-management'],
    resumen: 'Cadena de suministro ágil',
  },
  {
    slug: 'ventas',
    etiqueta: 'Dynamics 365 Sales',
    logos: ['dynamics-365-sales'],
    resumen: 'Procesos de venta y CRM',
  },
  {
    slug: 'servicio-cliente',
    etiqueta: 'Customer Service',
    logos: ['dynamics-365-customer-service'],
    resumen: 'Atención al cliente',
  },
];

/** Servicios clave publicados en invtech.pro/servicios. */
export const SERVICIOS_DYNAMICS: EntradaMenu[] = [
  {
    slug: 'implementacion',
    etiqueta: 'Implementación de Dynamics 365',
    logos: ['dynamics-365-businesscentral', 'dynamics-365-finance', 'dynamics-365-sales'],
    resumen: 'Puesta en marcha de la solución',
  },
  {
    slug: 'business-central',
    etiqueta: 'Implementación de Business Central',
    logos: ['dynamics-365-businesscentral'],
    resumen: 'Seis fases, con entregables',
  },
  {
    slug: 'power-bi',
    etiqueta: 'Implementación de Power BI',
    logos: ['power-bi'],
    resumen: 'Informes y análisis',
  },
  {
    slug: 'desarrollo',
    etiqueta: 'Desarrollo de aplicaciones',
    logos: ['power-apps'],
    resumen: 'Soluciones a la medida',
  },
  {
    slug: 'auditoria',
    etiqueta: 'Auditoría de Dynamics 365',
    logos: ['dynamics-365-businesscentral', 'power-bi', 'sharepoint'],
    resumen: 'Revisión de su solución actual',
  },
  {
    slug: 'soporte',
    etiqueta: 'Soporte de Dynamics 365',
    logos: ['dynamics-nav', 'dynamics-ax', 'dynamics-365-businesscentral'],
    resumen: 'Asistencia después del go-live',
  },
];

export function paginaSolucion(slug: string): PaginaContenido | undefined {
  return ORIGINAL.soluciones[slug];
}

export function paginaServicio(slug: string): PaginaContenido | undefined {
  return ORIGINAL.servicios[slug];
}

const enServicios = (slugs: string[]): EntradaMenu[] =>
  [...ESPECIALIDADES, ...SERVICIOS_DYNAMICS]
    .filter((s) => slugs.includes(s.slug))
    .sort((a, b) => slugs.indexOf(a.slug) - slugs.indexOf(b.slug))
    .map(({ slug, etiqueta, logos, resumen }) => ({
      slug,
      etiqueta,
      logos,
      resumen,
      href: `/servicios/${slug}/`,
    }));

/** Menú de Soluciones: las aplicaciones y las soluciones propias para Honduras. */
export const SOLUCIONES_MENU: EntradaMenu[] = [
  ...SOLUCIONES,
  ...enServicios(['business-central-honduras', 'power-bi']),
];

/** Menú de Servicios: implementación, desarrollo, auditoría y soporte. */
export const SERVICIOS_MENU: EntradaMenu[] = enServicios([
  'implementacion',
  'business-central',
  'desarrollo',
  'auditoria',
  'soporte',
  'soporte-post-go-live',
]);

/** Páginas propias de la barra de navegación (punto de venta, combustible, retail y equipos). */
export const VERTICALES: EntradaMenu[] = [
  {
    slug: 'punto-de-venta',
    icono: 'cajaRegistradora',
    etiqueta: 'Punto de venta BCPOS',
    logos: ['dynamics-365-commerce'],
    resumen: 'La caja conectada a Business Central',
    href: '/punto-de-venta/',
  },
  {
    slug: 'combustible',
    icono: 'gasolinera',
    etiqueta: 'Combustible',
    logos: ['dynamics-365-businesscentral'],
    resumen: 'Estaciones de servicio',
    href: '/punto-de-venta/combustible/',
  },
  {
    slug: 'retail',
    icono: 'carrito',
    etiqueta: 'Retail',
    logos: ['dynamics-365-commerce'],
    resumen: 'Ferreterías, farmacias y supermercados',
    href: '/punto-de-venta/retail/',
  },
  {
    slug: 'venta-de-equipos',
    icono: 'servidor',
    etiqueta: 'Venta de equipos',
    logos: ['office-365'],
    resumen: 'Equipos, infraestructura y telecomunicaciones',
    href: '/venta-de-equipos/',
  },
];

/** Opciones de interés que aparecen en el formulario de contacto. */
export const INTERESES: EntradaMenu[] = [
  ...VERTICALES,
  {
    slug: 'servicio-it',
    icono: 'soporte',
    etiqueta: 'Servicio IT',
    logos: ['office-365'],
    resumen: 'Redes, servidores y soporte técnico',
    href: '/servicio-it/',
  },
  ...ESPECIALIDADES.map(({ slug, etiqueta, logos, resumen }) => ({ slug, etiqueta, logos, resumen })),
  ...SERVICIOS_DYNAMICS,
];

export function etiquetaInteres(slug: string): string | undefined {
  return INTERESES.find((interes) => interes.slug === slug)?.etiqueta;
}
