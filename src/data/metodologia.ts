export interface Fase {
  numero: string;
  titulo: string;
  descripcion: string;
  entregable: string;
}

/** Enfoque de implementación publicado en invtech.pro. */
export const FASES: Fase[] = [
  {
    numero: '01',
    titulo: 'Diagnosticar',
    descripcion:
      'Entendemos los requisitos de la organización y el ajuste del producto, y presentamos una declaración de trabajo basada en ellos.',
    entregable: 'Declaración de trabajo',
  },
  {
    numero: '02',
    titulo: 'Análisis',
    descripcion:
      'Marca el inicio de la implementación: definimos las actividades, responsables y calendario.',
    entregable: 'Plan del proyecto',
  },
  {
    numero: '03',
    titulo: 'Diseño',
    descripcion:
      'Identificamos los requisitos del negocio y elaboramos el Documento de Requerimientos Funcionales.',
    entregable: 'FRD y Gap-Fit',
  },
  {
    numero: '04',
    titulo: 'Desarrollo',
    descripcion:
      'Construimos y probamos los componentes del sistema definidos y aprobados en las especificaciones de diseño.',
    entregable: 'Sistema configurado',
  },
  {
    numero: '05',
    titulo: 'Despliegue',
    descripcion:
      'Capacitación de usuarios clave, pruebas de aceptación (UAT) e incorporación de los comentarios de esas sesiones.',
    entregable: 'UAT aprobado y go-live',
  },
  {
    numero: '06',
    titulo: 'Operacional',
    descripcion: 'Completamos las actividades del proyecto y brindamos soporte de postproducción.',
    entregable: 'Soporte post go-live',
  },
];

export interface Concepto {
  titulo: string;
  sigla?: string;
  texto: string;
}

export const CONCEPTOS: Concepto[] = [
  {
    titulo: 'Documento de requisitos funcionales',
    sigla: 'FRD',
    texto:
      'Al inicio preparamos el FRD a partir de una comprensión detallada de sus procesos diarios: cómo funcionan hoy y qué espera del nuevo sistema.',
  },
  {
    titulo: 'Documentación de ajuste',
    sigla: 'Gap-Fit',
    texto:
      'Con el FRD separamos lo que resuelve la solución estándar de lo que necesita personalización, y documentamos la configuración requerida.',
  },
  {
    titulo: 'Capacitación de usuarios clave',
    texto:
      'Sus usuarios aprenden a trabajar con el sistema ya personalizado, de la mano de nuestro equipo, hasta sentirse cómodos.',
  },
  {
    titulo: 'Pruebas de aceptación',
    sigla: 'UAT',
    texto:
      'Se completan cuando sus usuarios dan el visto bueno: la señal de que el sistema funciona según lo acordado en el FRD y el Gap-Fit.',
  },
  {
    titulo: 'Go-live',
    texto:
      'Business Central entra en operación para todo su equipo. La información y los procesos pasan a realizarse desde el nuevo sistema.',
  },
  {
    titulo: 'Soporte post go-live',
    texto: 'Acompañamos la última milla para que su equipo trabaje en el sistema nuevo sin contratiempos.',
  },
];
