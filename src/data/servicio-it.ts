import type { NombreIcono } from '@/components/ui/Icono';

/**
 * Contenido de la página Servicio IT.
 * Fuentes: PRESENTACION_FINAL (Infraestructura y servicios en la nube; Telecomunicaciones)
 * y la página de soporte publicada en invtech.pro.
 */

export interface ServicioIt {
  titulo: string;
  texto: string;
  icono: NombreIcono;
}

/** Soluciones de infraestructura tecnológica (presentación, pág. 21). */
export const SERVICIOS_IT: ServicioIt[] = [
  {
    titulo: 'Redes',
    texto: 'Diseño, cableado y configuración de la red de oficinas, cajas y sucursales.',
    icono: 'sincronizar',
  },
  {
    titulo: 'Servidores en la nube y locales',
    texto: 'Configuración de servidores en sitio o en la nube, según lo que necesite su operación.',
    icono: 'servidor',
  },
  {
    titulo: 'Correo corporativo',
    texto: 'Cuentas de correo con el dominio de su empresa, configuradas en todos sus equipos.',
    icono: 'correo',
  },
  {
    titulo: 'CCTV y control de accesos',
    texto: 'Cámaras de vigilancia y control de entrada para oficinas, bodegas y estaciones.',
    icono: 'camara',
  },
  {
    titulo: 'Instalación de fibra óptica',
    texto: 'Tendido e instalación de fibra para conexiones rápidas y estables.',
    icono: 'flecha',
  },
  {
    titulo: 'Enlaces inalámbricos',
    texto: 'Conexión entre edificios o sucursales donde no llega el cable.',
    icono: 'antena',
  },
];

/** Beneficios del soporte, tomados de la página de soporte de invtech.pro. */
export const SOPORTE_BENEFICIOS = [
  'Minimizar el tiempo de inactividad',
  'Mantenimiento proactivo',
  'Soluciones de soporte personalizadas',
  'Transición sin problemas',
  'Mejorar los procesos de negocio',
  'Incrementar las habilidades del usuario',
];

/** Modalidades de soporte publicadas en invtech.pro. */
export const SOPORTE_PLANES = [
  { titulo: 'Soporte ad hoc', texto: 'Atención cuando la necesite, por caso.' },
  { titulo: 'Horas prepagadas', texto: 'Un paquete de horas que su equipo usa según la demanda.' },
  { titulo: 'Soporte anual', texto: 'Cobertura continua durante todo el año.' },
];

/** Cómo trabajamos: cotizamos, instalamos y damos soporte y mantenimiento. */
export const PASOS_IT = [
  { titulo: 'Diagnóstico', texto: 'Revisamos su red, equipos y conexiones para entender qué necesita.' },
  { titulo: 'Propuesta', texto: 'Le enviamos por correo o WhatsApp la solución y la cotización.' },
  { titulo: 'Instalación', texto: 'Instalamos y configuramos los equipos y servicios en sitio.' },
  { titulo: 'Soporte', texto: 'Damos soporte técnico especializado y mantenimiento continuo.' },
];
