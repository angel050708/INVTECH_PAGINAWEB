import contenido from './contenido-original.json';
import { SERVICIOS } from './servicios';

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
}

/** Contenido de las páginas de Soluciones y Servicios tomado de invtech.pro. */
const ORIGINAL = contenido as Record<'soluciones' | 'servicios', Record<string, PaginaContenido>>;

export const SOLUCIONES: EntradaMenu[] = [
  { slug: 'dynamics-365', etiqueta: 'Microsoft Dynamics 365' },
  { slug: 'business-central', etiqueta: 'Business Central' },
  { slug: 'finanzas', etiqueta: 'Finance' },
  { slug: 'gestion-suministros', etiqueta: 'Supply Chain Management' },
  { slug: 'ventas', etiqueta: 'Sales' },
  { slug: 'servicio-cliente', etiqueta: 'Customer Service' },
  { slug: 'servicio-campo', etiqueta: 'Field Service' },
  { slug: 'marketing', etiqueta: 'Marketing' },
  { slug: 'comercio', etiqueta: 'Commerce' },
  { slug: 'recursos-humanos', etiqueta: 'Human Resources' },
  { slug: 'operaciones-proyecto', etiqueta: 'Project Operations' },
];

export const SERVICIOS_DYNAMICS: EntradaMenu[] = [
  { slug: 'implementacion', etiqueta: 'Implementación de Dynamics 365' },
  { slug: 'business-central', etiqueta: 'Implementación de Business Central' },
  { slug: 'finanzas-scm', etiqueta: 'Implementación de Finanzas y SCM' },
  { slug: 'compromiso-cliente', etiqueta: 'Compromiso con el cliente' },
  { slug: 'power-bi', etiqueta: 'Implementación de Power BI' },
  { slug: 'sharepoint', etiqueta: 'Implementación de SharePoint' },
  { slug: 'desarrollo', etiqueta: 'Desarrollo de aplicaciones' },
  { slug: 'auditoria', etiqueta: 'Auditoría de Dynamics 365' },
  { slug: 'mejora', etiqueta: 'Actualización de Dynamics 365' },
  { slug: 'soporte', etiqueta: 'Soporte de Dynamics 365' },
];

export function paginaSolucion(slug: string): PaginaContenido | undefined {
  return ORIGINAL.soluciones[slug];
}

export function paginaServicio(slug: string): PaginaContenido | undefined {
  return ORIGINAL.servicios[slug];
}

/** Opciones de interés que aparecen en el formulario de contacto. */
export const INTERESES: EntradaMenu[] = [
  { slug: 'implementacion', etiqueta: 'Implementación de Dynamics 365' },
  ...SERVICIOS.map((servicio) => ({ slug: servicio.slug, etiqueta: servicio.titulo })),
  { slug: 'power-bi', etiqueta: 'Power BI' },
  { slug: 'soporte', etiqueta: 'Soporte de Dynamics 365' },
];

export function etiquetaInteres(slug: string): string | undefined {
  return INTERESES.find((interes) => interes.slug === slug)?.etiqueta;
}
