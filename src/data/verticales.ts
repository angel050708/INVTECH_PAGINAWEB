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

/** Leal 360, según la presentación de InvTech (partners oficiales en Centroamérica). */
export const LEAL_CLIENTE: Elemento[] = [
  {
    titulo: 'Programa de puntos',
    texto: 'Sus clientes acumulan y canjean puntos por compras, con reglas y recompensas que usted define.',
    icono: 'sello',
  },
  {
    titulo: 'Promociones personalizadas',
    texto: 'Campañas armadas con el historial de compras de cada cliente.',
    icono: 'tarjeta',
  },
  {
    titulo: 'App móvil y portal web',
    texto: 'Su cliente consulta sus puntos, recibe promociones y canjea recompensas desde el celular.',
    icono: 'telefono',
  },
  {
    titulo: 'Puntos en todas las sucursales',
    texto: 'El cliente acumula en cualquiera de sus tiendas o estaciones.',
    icono: 'ubicacion',
  },
];

export const LEAL_NEGOCIO: Elemento[] = [
  {
    titulo: 'Datos de clientes en un solo lugar',
    texto: 'Leal se sincroniza con su punto de venta, su ERP y su comercio electrónico.',
    icono: 'sincronizar',
  },
  {
    titulo: 'Segmentación',
    texto: 'Agrupe a sus clientes por lo que compran y cada cuánto vuelven.',
    icono: 'persona',
  },
  {
    titulo: 'Métricas en tiempo real',
    texto: 'Use los datos de compra para decidir productos, ventas y promociones.',
    icono: 'grafica',
  },
  {
    titulo: 'Correo, SMS y WhatsApp',
    texto: 'Programe campañas y mensajes en todos los canales desde una sola plataforma.',
    icono: 'correo',
  },
];

export const BCPOS_INTEGRACIONES: Elemento[] = [
  {
    titulo: 'Integraciones bancarias',
    texto: 'Conexión segura y certificada con entidades financieras para pagos y conciliaciones automáticas.',
    icono: 'banco',
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
  'Para quienes necesitan ver todas sus estaciones en un solo lugar, controlar las pérdidas por diferencias de turno y automatizar el cumplimiento normativo, desde una hasta cientos de estaciones.';

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
    solucion: 'Desglose por bombero, turno y método de pago: efectivo, tarjetas y crédito.',
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

export interface Producto {
  nombre: string;
  /** Archivo en /public/marcas, si el producto tiene marca */
  marca?: string;
}

export interface Categoria {
  slug: string;
  /** Nombre corto para la pestaña */
  pestana: string;
  titulo: string;
  descripcion: string;
  icono: NombreIcono;
  /** Foto en /public/equipos */
  foto: string;
  /** Foto de producto sobre fondo blanco (se muestra completa) */
  fotoProducto?: boolean;
  productos: Producto[];
}

/** Lo que InvTech vende, con los modelos que muestra la presentación (página 20). */
export const CATALOGO: Categoria[] = [
  {
    slug: 'computadoras',
    pestana: 'Computadoras',
    titulo: 'Computadoras de escritorio y portátiles',
    descripcion:
      'Equipos para oficinas, cajas y administración, listos para trabajar con Microsoft 365 y Business Central.',
    icono: 'terminal',
    foto: '/equipos/computadoras-hp-dell.jpg',
    fotoProducto: true,
    productos: [
      { nombre: 'HP Mini PC', marca: 'hp' },
      { nombre: 'HP Power Desktop', marca: 'hp' },
      { nombre: 'Computadoras Lenovo', marca: 'lenovo' },
      { nombre: 'Dell Inspiron (portátil)', marca: 'dell' },
      { nombre: 'Dell de escritorio', marca: 'dell' },
    ],
  },
  {
    slug: 'servidores',
    pestana: 'Servidores',
    titulo: 'Servidores para su operación',
    descripcion: 'Servidores para alojar sus sistemas en sitio. También configuramos servidores en la nube.',
    icono: 'servidor',
    foto: '/equipos/servidores.jpg',
    productos: [
      { nombre: 'Servidor HP', marca: 'hp' },
      { nombre: 'Servidor Lenovo ThinkSystem', marca: 'lenovo' },
      { nombre: 'Servidor Dell T40', marca: 'dell' },
    ],
  },
  {
    slug: 'redes',
    pestana: 'Redes',
    titulo: 'Equipos de telecomunicación',
    descripcion:
      'Switches y puntos de acceso para conectar oficinas, tiendas y estaciones. Instalamos la red completa.',
    icono: 'antena',
    foto: '/equipos/redes.jpg',
    productos: [
      { nombre: 'Switch MikroTik', marca: 'mikrotik' },
      { nombre: 'Switch Aruba', marca: 'aruba' },
      { nombre: 'Puntos de acceso UniFi', marca: 'ubiquiti' },
    ],
  },
  {
    slug: 'punto-de-venta',
    pestana: 'Punto de venta',
    titulo: 'Equipos de punto de venta',
    descripcion:
      'Cajas, pantallas y periféricos listos para BCPOS, en tiendas, restaurantes y estaciones de servicio.',
    icono: 'tarjeta',
    foto: '/equipos/punto-de-venta.jpg',
    productos: [{ nombre: 'Equipos de punto de venta' }, { nombre: 'Periféricos' }],
  },
  {
    slug: 'combustible',
    pestana: 'Combustible',
    titulo: 'Controladores y sondas',
    descripcion:
      'Equipos para controlar las bombas y medir el combustible de los tanques en estaciones de servicio.',
    icono: 'surtidor',
    foto: '/equipos/surtidores.jpg',
    productos: [
      { nombre: 'Controladores para estaciones de servicio' },
      { nombre: 'Sondas para medición de combustibles' },
    ],
  },
  {
    slug: 'respaldo',
    pestana: 'Respaldo',
    titulo: 'Respaldo y suministros',
    descripcion:
      'Sistemas de respaldo para que su operación no se detenga, y suministros tecnológicos asociados.',
    icono: 'caja',
    foto: '/equipos/respaldo.jpg',
    productos: [
      { nombre: 'Sistemas de respaldo', marca: 'tripp-lite' },
      { nombre: 'Suministros tecnológicos asociados' },
    ],
  },
];

/** Marcas que aparecen en la presentación de InvTech. */
export const MARCAS: { nombre: string; archivo: string }[] = [
  { nombre: 'HP', archivo: 'hp' },
  { nombre: 'Dell', archivo: 'dell' },
  { nombre: 'Lenovo', archivo: 'lenovo' },
  { nombre: 'Cisco', archivo: 'cisco' },
  { nombre: 'Huawei', archivo: 'huawei' },
  { nombre: 'Ubiquiti', archivo: 'ubiquiti' },
  { nombre: 'TP-Link', archivo: 'tp-link' },
  { nombre: 'Linksys', archivo: 'linksys' },
  { nombre: 'Microsoft', archivo: 'microsoft' },
  { nombre: 'ASUS', archivo: 'asus' },
  { nombre: 'LG', archivo: 'lg' },
  { nombre: 'Dahua', archivo: 'dahua' },
  { nombre: 'Tripp Lite', archivo: 'tripp-lite' },
  { nombre: 'CDP', archivo: 'cdp' },
  { nombre: 'Kaseya', archivo: 'kaseya' },
  { nombre: 'SentinelOne', archivo: 'sentinelone' },
];

/** Aplicaciones de Microsoft 365 que muestra la presentación (licencias de software corporativo). */
export const APPS_365 = ['office-365', 'outlook', 'excel', 'teams', 'sharepoint', 'power-bi', 'power-apps'];

export const INFRAESTRUCTURA: Elemento[] = [
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

export interface MarcaCompatible {
  nombre: string;
  logo?: string;
  /** Fabricante, cuando el nombre es un producto. */
  de?: string;
  nota?: string;
}

/** Banderas con las que trabajamos. */
export const GASOLINERAS: MarcaCompatible[] = [
  { nombre: 'UNO', logo: '/compatibles/uno.png' },
  { nombre: 'Puma Energy', logo: '/compatibles/puma.svg' },
  { nombre: 'Shell', logo: '/compatibles/shell.png' },
  { nombre: 'Texaco', logo: '/compatibles/texaco.png' },
  { nombre: 'BIP', logo: '/compatibles/bip.png', nota: 'Bay Island Petroleum' },
];

/** Equipo de pista, en el orden en que viaja el dato: surtidor, controlador, sonda. */
export const EQUIPO_PISTA: {
  titulo: string;
  texto: string;
  marcas: MarcaCompatible[];
  foto?: { src: string; alt: string };
}[] = [
  {
    titulo: 'Surtidores',
    texto: 'Leemos cada despacho directo del dispensador.',
    marcas: [
      { nombre: 'Gilbarco', logo: '/compatibles/gilbarco-logo.svg' },
      { nombre: 'Wayne', logo: '/compatibles/wayne.png' },
    ],
  },
  {
    titulo: 'Controladores',
    texto: 'El controlador autoriza la bomba y entrega la venta al punto de venta.',
    marcas: [{ nombre: 'VOX' }, { nombre: 'DOMS' }, { nombre: 'Fusion' }],
    foto: { src: '/compatibles/vox-controlador.jpg', alt: 'Controlador de pista VOX de Gilbarco con su consulta en tableta y celular' },
  },
  {
    titulo: 'Sondas',
    texto: 'El inventario de cada tanque llega solo a Business Central.',
    marcas: [{ nombre: 'Veeder-Root' }, { nombre: 'Wayne' }],
    foto: { src: '/compatibles/tls-450plus.jpg', alt: 'Consola de medición de tanques TLS-450PLUS de Veeder-Root' },
  },
];
