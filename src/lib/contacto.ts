import { SERVICIOS } from '@/data/servicios';

export interface DatosContacto {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  mensaje: string;
  intereses: string[];
}

export type ErroresContacto = Partial<Record<'nombre' | 'empresa' | 'correo' | 'mensaje', string>>;

const CORREO_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validarContacto(datos: DatosContacto): ErroresContacto {
  const errores: ErroresContacto = {};
  if (!datos.nombre.trim()) errores.nombre = 'Escriba su nombre.';
  if (!datos.empresa.trim()) errores.empresa = 'Escriba el nombre de su empresa.';
  if (!CORREO_VALIDO.test(datos.correo.trim())) errores.correo = 'Revise el correo: ejemplo@empresa.com';
  if (!datos.mensaje.trim()) errores.mensaje = 'Cuéntenos brevemente qué necesita.';
  return errores;
}

/** Convierte "a,b" (de la URL) en slugs de servicios que existen. */
export function leerIntereses(valor: string | null | undefined): string[] {
  if (!valor) return [];
  const validos = new Set(SERVICIOS.map((servicio) => servicio.slug));
  return [...new Set(valor.split(','))].filter((slug) => validos.has(slug));
}

/** Texto que se envía por correo o WhatsApp. */
export function armarMensaje(datos: DatosContacto): string {
  const intereses = datos.intereses
    .map((slug) => SERVICIOS.find((servicio) => servicio.slug === slug)?.titulo)
    .filter(Boolean);

  const datosLinea = [
    `Nombre: ${datos.nombre.trim()}`,
    `Empresa: ${datos.empresa.trim()}`,
    `Correo: ${datos.correo.trim()}`,
    datos.telefono.trim() ? `Teléfono: ${datos.telefono.trim()}` : '',
    intereses.length > 0 ? `Interés: ${intereses.join(', ')}` : '',
  ].filter(Boolean);

  return ['Solicitud de información — invtech.pro', datosLinea.join('\n'), datos.mensaje.trim()].join('\n\n');
}
