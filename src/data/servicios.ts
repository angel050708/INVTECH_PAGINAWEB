import type { NombreIcono } from '@/components/ui/Icono';

export interface Servicio {
  slug: string;
  titulo: string;
  corto: string;
  resumen: string;
  icono: NombreIcono;
  problema: string;
  incluye: string[];
  resultado: string;
}

/** Servicios que InvTech ya entrega sobre Business Central. */
export const SERVICIOS: Servicio[] = [
  {
    slug: 'localizacion-honduras',
    titulo: 'Localización fiscal para Honduras',
    corto: 'CAI, retenciones y declaraciones dentro de Business Central.',
    resumen:
      'Business Central adaptado a las reglas del SAR: correlativos con CAI, facturación fiscal, retenciones y la información lista para declarar.',
    icono: 'sello',
    problema:
      'Business Central viene preparado para muchos países, pero no trae de fábrica los requisitos fiscales hondureños. Sin localización, la facturación y las retenciones terminan en hojas de cálculo aparte.',
    incluye: [
      'Control de CAI, rangos autorizados y fechas límite de emisión',
      'Facturas, notas de crédito y débito con el formato fiscal requerido',
      'Cálculo y registro de retenciones',
      'Reportes de apoyo para las declaraciones',
    ],
    resultado: 'Factura y declara desde el mismo sistema donde lleva su contabilidad.',
  },
  {
    slug: 'integracion-pos-gasolineras',
    titulo: 'Integración POS para estaciones de servicio',
    corto: 'Las ventas de cada pista llegan solas a Business Central.',
    resumen:
      'Conectamos el punto de venta de sus estaciones con Business Central: despachos, facturas y clientes de crédito se sincronizan sin digitar dos veces.',
    icono: 'surtidor',
    problema:
      'En una estación de servicio se emiten cientos de facturas por turno. Pasarlas a mano al ERP genera atrasos, diferencias de inventario de combustible y estados de cuenta que no cuadran.',
    incluye: [
      'Servicio de sincronización entre el TPV y Business Central',
      'Creación automática de pedidos y facturas por estación',
      'Clientes de crédito, flotas y placas con su estado de cuenta',
      'Registro de errores para corregir sin perder ventas',
    ],
    resultado: 'Cierre de turno y estados de cuenta al día, sin recaptura.',
  },
  {
    slug: 'validacion-facturas',
    titulo: 'Validación y revisión de facturas por turno',
    corto: 'Detecte faltantes, duplicados y errores antes de cerrar.',
    resumen:
      'Herramientas para revisar lo facturado en cada turno contra lo registrado en Business Central, antes de que un error llegue a contabilidad.',
    icono: 'lupa',
    problema:
      'Un correlativo saltado o una factura duplicada se descubre semanas después, cuando el cliente reclama o el SAR pregunta.',
    incluye: [
      'Revisión de correlativos por punto de emisión',
      'Comparación entre lo vendido en el POS y lo registrado en el ERP',
      'Avisos de faltantes y diferencias por turno',
      'Historial de revisiones por usuario',
    ],
    resultado: 'Cada turno se cierra revisado y con respaldo.',
  },
  {
    slug: 'importacion-excel',
    titulo: 'Importación de datos desde Excel',
    corto: 'Cargue cientos de registros en minutos, no en días.',
    resumen:
      'Plantillas y herramientas para cargar clientes, productos, pedidos o saldos iniciales en Business Central desde Excel, con validación previa.',
    icono: 'tabla',
    problema:
      'Migrar datos o cargar movimientos masivos registro por registro consume días y deja errores difíciles de rastrear.',
    incluye: [
      'Plantillas de Excel preparadas para cada tipo de dato',
      'Validación antes de importar: nada entra a medias',
      'Carga de pedidos y documentos de venta en lote',
      'Apoyo en la migración de datos al salir en vivo',
    ],
    resultado: 'Datos completos y limpios desde el primer día.',
  },
  {
    slug: 'informes-personalizados',
    titulo: 'Informes personalizados',
    corto: 'Los reportes que su gerencia sí usa, dentro del ERP.',
    resumen:
      'Diseñamos los informes y documentos que su operación necesita, como estados de cuenta, ventas por estación o cartera, con los datos en tiempo real de Business Central.',
    icono: 'grafica',
    problema:
      'Los reportes estándar no siempre responden las preguntas del negocio, y armar cada informe en Excel cada mes no escala.',
    incluye: [
      'Estados de cuenta por cliente, flota o placa',
      'Formatos de factura y documentos con su marca',
      'Informes de ventas, cartera e inventario',
      'Exportación a Excel y PDF',
    ],
    resultado: 'Decisiones con datos actualizados, sin armar reportes a mano.',
  },
  {
    slug: 'soporte',
    titulo: 'Soporte y mejora continua',
    corto: 'Un equipo que conoce su sistema, después del go-live.',
    resumen:
      'Acompañamiento después de salir en vivo: atención de incidencias, ajustes, nuevas extensiones y capacitación para su equipo.',
    icono: 'soporte',
    problema:
      'Después de la implementación aparecen dudas, cambios en el negocio y nuevos requisitos. Sin soporte cercano, el sistema se queda atrás.',
    incluye: [
      'Atención de incidencias y consultas de usuarios',
      'Ajustes y nuevas extensiones en AL',
      'Actualizaciones de las extensiones al cambiar de versión',
      'Capacitación a nuevos usuarios',
    ],
    resultado: 'Un sistema que crece al ritmo de su empresa.',
  },
];

export function buscarServicio(slug: string): Servicio | undefined {
  return SERVICIOS.find((servicio) => servicio.slug === slug);
}
