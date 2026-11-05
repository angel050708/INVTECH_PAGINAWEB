import type { NombreIcono } from '@/components/ui/Icono';

/** Servicios propios de InvTech para empresas de Honduras. */
export interface Especialidad {
  slug: string;
  /** Nombre corto para menús y enlaces */
  etiqueta: string;
  /** <title> de la página (la plantilla agrega "| InvTech Honduras") */
  tituloSeo: string;
  /** Meta descripción, hasta ~155 caracteres */
  descripcion: string;
  resumen: string;
  icono: NombreIcono;
  logos: string[];
  intro: string[];
  puntos: { titulo: string; texto: string }[];
  /** Otras páginas del sitio relacionadas (enlaces internos) */
  relacionadas: { href: string; etiqueta: string }[];
}

export const ESPECIALIDADES: Especialidad[] = [
  {
    slug: 'business-central-honduras',
    etiqueta: 'Business Central en Honduras',
    tituloSeo: 'Business Central en Honduras: facturación fiscal y localización',
    descripcion:
      'Business Central configurado para empresas de Honduras: facturación fiscal con CAI, rangos autorizados y reportes para la operación local.',
    resumen: 'Facturación fiscal',
    icono: 'sello',
    logos: ['dynamics-365-businesscentral'],
    intro: [
      'Business Central trae de fábrica finanzas, ventas, compras e inventario. Para facturar en Honduras necesita, además, manejar los requisitos fiscales locales dentro del mismo sistema.',
      'Configuramos esa parte para que su equipo emita, revise y reporte desde Business Central, sin hojas de cálculo aparte.',
    ],
    puntos: [
      {
        titulo: 'Facturación fiscal con CAI',
        texto: 'Control de CAI, rangos autorizados y fecha límite de emisión.',
      },
      {
        titulo: 'Documentos fiscales',
        texto: 'Facturas, notas de crédito y notas de débito con el formato requerido.',
      },
      {
        titulo: 'Retenciones',
        texto: 'Cálculo y registro de retenciones dentro de Business Central.',
      },
      {
        titulo: 'Reportes para declarar',
        texto: 'Información lista para preparar las declaraciones.',
      },
    ],
    relacionadas: [
      { href: '/servicios/business-central/', etiqueta: 'Implementación de Business Central' },
      { href: '/metodologia/', etiqueta: 'Implementación en seis fases' },
      { href: '/servicios/soporte-post-go-live/', etiqueta: 'Soporte post go-live' },
    ],
  },
  {
    slug: 'integracion-punto-de-venta',
    etiqueta: 'Integración con punto de venta',
    tituloSeo: 'Integración de punto de venta con Business Central para estaciones de servicio',
    descripcion:
      'Conectamos el punto de venta de estaciones de servicio con Business Central: ventas, facturas y clientes de crédito se registran sin volver a digitarlos.',
    resumen: 'Estaciones de servicio conectadas al ERP',
    icono: 'surtidor',
    logos: ['dynamics-365-businesscentral', 'dynamics-365-commerce'],
    intro: [
      'En una estación de servicio se emiten muchas facturas por turno. Pasarlas a mano al ERP genera atrasos y diferencias en los estados de cuenta.',
      'Integramos el punto de venta con Business Central para que cada venta llegue registrada sin volver a digitarla.',
    ],
    puntos: [
      {
        titulo: 'Sincronización de ventas',
        texto: 'Las facturas del punto de venta se envían a Business Central.',
      },
      {
        titulo: 'Clientes de crédito y contado',
        texto:
          'Cada venta queda registrada con su cliente, al crédito o al contado, y su estado de cuenta al día.',
      },
      {
        titulo: 'Productos y precios al día',
        texto: 'Los productos y precios que define en Business Central llegan al punto de venta.',
      },
      {
        titulo: 'Todas las estaciones en un lugar',
        texto: 'Contabilidad y gerencia consultan las ventas de cada estación desde Business Central.',
      },
    ],
    relacionadas: [
      { href: '/servicios/business-central-honduras/', etiqueta: 'Business Central en Honduras' },
      { href: '/servicios/desarrollo/', etiqueta: 'Desarrollo de aplicaciones' },
      { href: '/servicios/soporte-post-go-live/', etiqueta: 'Soporte post go-live' },
    ],
  },
  {
    slug: 'soporte-post-go-live',
    etiqueta: 'Soporte post go-live',
    tituloSeo: 'Soporte post go-live de Business Central',
    descripcion:
      'Acompañamiento después de salir en vivo con Business Central: atención a usuarios, ajustes y capacitación para que su equipo trabaje sin contratiempos.',
    resumen: 'Acompañamiento después de salir en vivo',
    icono: 'soporte',
    logos: ['dynamics-365-businesscentral', 'dynamics-365-customer-service'],
    intro: [
      'Una vez que la implementación entra en funcionamiento, brindamos servicios de asistencia como actividad de última milla del proceso.',
      'El objetivo es que su equipo realice sus tareas diarias en el nuevo sistema sin contratiempos ni problemas.',
    ],
    puntos: [
      { titulo: 'Atención a usuarios', texto: 'Respuesta a dudas e incidencias del día a día.' },
      { titulo: 'Ajustes', texto: 'Cambios en la configuración cuando el negocio lo necesita.' },
      { titulo: 'Capacitación', texto: 'Formación para usuarios nuevos y para nuevas funciones.' },
      { titulo: 'Mejora continua', texto: 'Actualización de su solución a medida que crece la empresa.' },
    ],
    relacionadas: [
      { href: '/servicios/soporte/', etiqueta: 'Soporte de Dynamics 365' },
      { href: '/metodologia/', etiqueta: 'Implementación en seis fases' },
      { href: '/servicios/business-central/', etiqueta: 'Implementación de Business Central' },
    ],
  },
];

export function buscarEspecialidad(slug: string): Especialidad | undefined {
  return ESPECIALIDADES.find((e) => e.slug === slug);
}
