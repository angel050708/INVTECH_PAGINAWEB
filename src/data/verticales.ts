import type { NombreIcono } from '@/components/ui/Icono';

/**
 * Contenido de las páginas Punto de venta, Combustible, Retail y Venta de equipos.
 * Fuente: presentaciones de InvTech (PRESENTACION_FINAL y Business Central Express).
 */

export interface Elemento {
  titulo: string;
  texto: string;
  icono?: NombreIcono;
}

/* ---------- Punto de venta (BCPOS) ---------- */

export const BCPOS_QUE_ES = [
  'BCPOS es un sistema de punto de venta conectado directamente con Microsoft Dynamics 365 Business Central o con SAP Business One.',
  'Funciona como la caja registradora moderna donde se realizan las ventas al cliente final: es la caja y la tienda frente al cliente, totalmente integrada con la parte contable y administrativa en Business Central.',
];

export const BCPOS_FLUJO: Elemento[] = [
  { titulo: 'El cliente compra en la caja', texto: 'La venta se registra en BCPOS.', icono: 'tarjeta' },
  {
    titulo: 'La venta llega a Business Central',
    texto: 'Se refleja automáticamente en el ERP en cuestión de segundos.',
    icono: 'sincronizar',
  },
  {
    titulo: 'Todo se actualiza solo',
    texto: 'Inventario, cuentas y reportes, sin doble digitación.',
    icono: 'tabla',
  },
  {
    titulo: 'Gerencia con visión 360°',
    texto: 'Desde la venta en la caja hasta el balance financiero.',
    icono: 'grafica',
  },
];

export const BCPOS_RUBROS = [
  'Gasolineras',
  'Tiendas de conveniencia',
  'Restaurantes',
  'Farmacias',
  'Supermercados',
];

export const BCPOS_INTEGRACIONES: Elemento[] = [
  {
    titulo: 'Integraciones bancarias',
    texto: 'Conexión segura y certificada con entidades financieras para pagos y conciliaciones automáticas.',
    icono: 'banco',
  },
  {
    titulo: 'Integración con Leal',
    texto:
      'Partners oficiales de Leal en Centroamérica: programa de puntos, promociones personalizadas y app para sus clientes.',
    icono: 'persona',
  },
  {
    titulo: 'Cumplimiento fiscal',
    texto: 'Un sistema confiable y transparente, con declaración de ventas y desglose de impuestos.',
    icono: 'sello',
  },
];

/* ---------- Combustible ---------- */

export const COMBUSTIBLE_INTRO =
  'Un sistema integral que centraliza ventas, turnos, conciliación de POS y control de combustible, diseñado específicamente para las exigencias operativas de una red de estaciones de servicio.';

export const COMBUSTIBLE_PARA =
  'Cadenas y operadores de estaciones de servicio que necesitan visibilidad centralizada, control de pérdidas por diferencias de turno y cumplimiento normativo automatizado, desde una hasta cientos de estaciones.';

export const COMBUSTIBLE_INTEGRACION =
  'Integración completa de dispensadores, sondas, puntos de venta, pasarela de pago y ERP.';

export const BCHUB_CONEXIONES: Elemento[] = [
  {
    titulo: 'Control de bomba',
    texto: 'Administración del surtidor, con un punto de venta por cada cara.',
    icono: 'surtidor',
  },
  { titulo: 'Sonda de tanques', texto: 'Medición precisa del inventario de combustible.', icono: 'grafica' },
  {
    titulo: 'Terminal bancaria',
    texto: 'Cada transacción se procesa en el momento del despacho.',
    icono: 'tarjeta',
  },
  {
    titulo: 'Fidelización Leal',
    texto: 'Puntos y promociones para los clientes de la estación.',
    icono: 'persona',
  },
  { titulo: 'ERP en la nube', texto: 'Conexión con Microsoft Dynamics 365 Business Central.', icono: 'nube' },
];

export const TERMINAL_MOVIL: Elemento[] = [
  {
    titulo: 'Punto de venta dentro de la terminal bancaria',
    texto:
      'El sistema se ejecuta directamente en la terminal del banco (POS BAC): ya no es necesaria una computadora en el punto de despacho.',
    icono: 'banco',
  },
  {
    titulo: 'Facturación desde cualquier bomba',
    texto:
      'El bombero factura desde cualquier surtidor, sin estar atado a una posición fija. Agiliza el despacho y reduce la espera.',
    icono: 'surtidor',
  },
  {
    titulo: 'Terminal exclusiva para ventas autorizadas',
    texto:
      'La terminal queda restringida a las ventas registradas en el sistema, sin transacciones no autorizadas.',
    icono: 'cerrar',
  },
  {
    titulo: 'Restricción de despacho no autorizado',
    texto: 'El combustible no se despacha sin una autorización previa registrada en el sistema.',
    icono: 'escudo',
  },
  {
    titulo: 'Conciliación integrada con el backoffice',
    texto:
      'Cada transacción se concilia automáticamente contra el backoffice de BCPOS, sin procesos manuales.',
    icono: 'sincronizar',
  },
];

export const MODULOS_COMBUSTIBLE: Elemento[] = [
  {
    titulo: 'Dashboard analítico',
    texto: 'KPIs de ventas, litros y despachos en tiempo real, con comparativas por periodo y producto.',
    icono: 'grafica',
  },
  {
    titulo: 'Conciliación de turnos',
    texto:
      'Cuadre integral: controlador contra POS contra presentado, con detección automática de diferencias.',
    icono: 'sincronizar',
  },
  {
    titulo: 'Estado de cuenta',
    texto: 'Cuentas por cobrar, crédito y notas de crédito por cliente y periodo.',
    icono: 'documento',
  },
  {
    titulo: 'Declaración de ventas',
    texto: 'Facturación con desglose de impuestos, exportable resumida o detallada.',
    icono: 'sello',
  },
  {
    titulo: 'Monitor CTRL',
    texto: 'Auditoría de las ventas reales del surtidor, con filtros por ID, turno y volumen.',
    icono: 'escudo',
  },
  {
    titulo: 'Monitor de documentos',
    texto: 'Trazabilidad de facturas, notas de crédito y tickets por turno, cajero y punto de venta.',
    icono: 'lupa',
  },
  {
    titulo: 'Gestión de clientes',
    texto: 'Cuentas de crédito con RTN, estado y tipo de cuenta.',
    icono: 'persona',
  },
  {
    titulo: 'Integración POS',
    texto: 'Sincronización directa con las cajas: cada venta se refleja sin doble digitación.',
    icono: 'tarjeta',
  },
];

export const PROBLEMA_SOLUCION: { problema: string; solucion: string }[] = [
  {
    problema: 'Diferencias de dinero entre lo cobrado y lo presentado al cierre de turno.',
    solucion: 'Conciliación automática por bloque: medición, ajustes, combustible y otros.',
  },
  {
    problema: 'Reportes de ventas y declaraciones fiscales armados a mano.',
    solucion: 'Declaración de ventas con desglose de impuestos generada automáticamente.',
  },
  {
    problema: 'Sin visibilidad del desempeño por turno o punto de venta.',
    solucion: 'Desglose por pistero, turno y método de pago: efectivo, tarjetas y crédito.',
  },
  {
    problema: 'Clientes de crédito sin control centralizado de saldos y límites.',
    solucion:
      'Módulo de clientes con estado de cuenta, total de crédito, notas de crédito y bloqueo automático.',
  },
];

export const OTRAS_INTEGRACIONES: Elemento[] = [
  {
    titulo: 'Controladores y sondas',
    texto: 'Medición precisa de inventarios y control de combustible de toda la estación.',
    icono: 'grafica',
  },
  {
    titulo: 'Gestión de flota',
    texto: 'Control de flota con app, integrada con Business Central.',
    icono: 'ubicacion',
  },
  {
    titulo: 'Inmobiliario',
    texto: 'Venta y alquiler de propiedades y activos asociados a la estación.',
    icono: 'caja',
  },
];

/* ---------- Retail ---------- */

export const RETAIL_RUBROS: Elemento[] = [
  {
    titulo: 'Ferreterías',
    texto: 'Miles de productos con existencias y precios al día en cada sucursal.',
    icono: 'engranaje',
  },
  { titulo: 'Farmacias', texto: 'Caja rápida conectada al inventario y a la contabilidad.', icono: 'check' },
  {
    titulo: 'Tiendas de conveniencia',
    texto: 'Ventas de mostrador que llegan a Business Central sin digitarlas.',
    icono: 'tienda',
  },
  {
    titulo: 'Supermercados',
    texto: 'Varias cajas y sucursales consolidadas en un solo sistema.',
    icono: 'caja',
  },
];

export const RETAIL_BENEFICIOS: Elemento[] = [
  {
    titulo: 'Caja BCPOS',
    texto: 'El punto de venta donde se atiende al cliente, integrado con Business Central.',
    icono: 'tarjeta',
  },
  {
    titulo: 'Inventario al día',
    texto: 'Cada venta descuenta existencias en el ERP en cuestión de segundos.',
    icono: 'tabla',
  },
  {
    titulo: 'Multisucursal',
    texto: 'Retail, distribución y corporativos con varias sucursales en un solo sistema.',
    icono: 'ubicacion',
  },
  {
    titulo: 'Fidelización con Leal',
    texto: 'Puntos por compra, promociones personalizadas y app para sus clientes.',
    icono: 'persona',
  },
  {
    titulo: 'Integraciones bancarias',
    texto: 'Pagos y conciliaciones automáticas con entidades financieras.',
    icono: 'banco',
  },
  {
    titulo: 'Reportes en tiempo real',
    texto: 'Ventas e inventario desde cualquier dispositivo, con Power BI y Excel.',
    icono: 'grafica',
  },
];

/* ---------- Venta de equipos ---------- */

export const EQUIPOS: Elemento[] = [
  {
    titulo: 'Puntos de venta y servidores',
    texto: 'Equipos para cajas, tiendas y oficinas.',
    icono: 'terminal',
  },
  {
    titulo: 'Controladores y sondas',
    texto: 'Para la medición de combustibles en estaciones de servicio.',
    icono: 'surtidor',
  },
  { titulo: 'Sistemas de respaldo', texto: 'Para que la operación no se detenga.', icono: 'servidor' },
  { titulo: 'Suministros tecnológicos', texto: 'Periféricos y suministros asociados.', icono: 'caja' },
];

export const INFRAESTRUCTURA: Elemento[] = [
  { titulo: 'Licencias de software corporativo', texto: '', icono: 'documento' },
  { titulo: 'CCTV y control de accesos', texto: '', icono: 'camara' },
  { titulo: 'Correo corporativo', texto: '', icono: 'correo' },
  { titulo: 'Redes', texto: '', icono: 'sincronizar' },
  { titulo: 'Instalación de fibra óptica', texto: '', icono: 'flecha' },
  { titulo: 'Enlaces inalámbricos', texto: '', icono: 'antena' },
  { titulo: 'Servidores en la nube y locales', texto: '', icono: 'nube' },
  { titulo: 'Soporte técnico y mantenimiento', texto: '', icono: 'soporte' },
];

export const TELECOMUNICACIONES: Elemento[] = [
  {
    titulo: 'Distribuidor Starlink',
    texto:
      'Conexión satelital desde cualquier parte de Honduras u otro país, con IP pública para VPN, soporte local y regional y acceso a monitoreo.',
    icono: 'antena',
  },
  {
    titulo: 'Distribuidor Claro',
    texto: 'Servicios de telecomunicaciones a nivel nacional.',
    icono: 'telefono',
  },
];
