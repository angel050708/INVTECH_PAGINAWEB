import { etiquetaInteres, INTERESES } from '@/data/paginas';

export interface DatosContacto {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  mensaje: string;
  intereses: string[];
}

export type ErroresContacto = Partial<
  Record<'nombre' | 'empresa' | 'correo' | 'telefono' | 'mensaje', string>
>;

const CORREO_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validarContacto(datos: DatosContacto): ErroresContacto {
  const errores: ErroresContacto = {};
  if (!datos.nombre.trim()) errores.nombre = 'Escriba su nombre.';
  if (!datos.empresa.trim()) errores.empresa = 'Escriba el nombre de su empresa.';
  if (!CORREO_VALIDO.test(datos.correo.trim())) errores.correo = 'Revise el correo: ejemplo@empresa.com';
  const digitos = soloDigitosHonduras(datos.telefono);
  if (digitos && digitos.length !== 8)
    errores.telefono = 'Escriba los 8 dígitos del número, por ejemplo 9824-3334.';
  if (!datos.mensaje.trim()) errores.mensaje = 'Cuéntenos brevemente qué necesita.';
  return errores;
}

/** Convierte "a,b" (de la URL) en slugs de servicios que existen. */
export function leerIntereses(valor: string | null | undefined): string[] {
  if (!valor) return [];
  const validos = new Set(INTERESES.map((interes) => interes.slug));
  return [...new Set(valor.split(','))].filter((slug) => validos.has(slug));
}

/** Texto que se envía por correo o WhatsApp. */
export function armarMensaje(datos: DatosContacto): string {
  const intereses = datos.intereses.map(etiquetaInteres).filter(Boolean);

  const datosLinea = [
    `Nombre: ${datos.nombre.trim()}`,
    `Empresa: ${datos.empresa.trim()}`,
    `Correo: ${datos.correo.trim()}`,
    soloDigitosHonduras(datos.telefono) ? `Teléfono: ${formatearTelefono(datos.telefono)}` : '',
    intereses.length > 0 ? `Interés: ${intereses.join(', ')}` : '',
  ].filter(Boolean);

  return ['Solicitud de información desde invtech.pro', datosLinea.join('\n'), datos.mensaje.trim()].join(
    '\n\n',
  );
}

/** Dígitos del número sin el código de país +504. */
export function soloDigitosHonduras(telefono: string): string {
  const digitos = telefono.replace(/\D/g, '');
  return digitos.startsWith('504') && digitos.length > 8 ? digitos.slice(3) : digitos;
}

/** "98243334" → "+504 9824-3334". */
export function formatearTelefono(telefono: string): string {
  const d = soloDigitosHonduras(telefono);
  return d.length === 8 ? `+504 ${d.slice(0, 4)}-${d.slice(4)}` : `+504 ${d}`;
}

/** Enlaces para enviar la solicitud por correo desde Gmail, Outlook o la aplicación del equipo. */
export function enlacesCorreo(destino: string, asunto: string, cuerpo: string) {
  const a = encodeURIComponent(asunto);
  const c = encodeURIComponent(cuerpo);
  const para = encodeURIComponent(destino);
  return {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${para}&su=${a}&body=${c}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${para}&subject=${a}&body=${c}`,
    aplicacion: `mailto:${destino}?subject=${a}&body=${c}`,
  };
}
