import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/metodologia/', destination: '/servicios/implementacion/', permanent: true },
      { source: '/combustible/', destination: '/punto-de-venta/combustible/', permanent: true },
      { source: '/retail/', destination: '/punto-de-venta/retail/', permanent: true },
      { source: '/business-central/', destination: '/soluciones/business-central/', permanent: true },
      { source: '/servicios/integracion-punto-de-venta/', destination: '/punto-de-venta/', permanent: true },
      { source: '/soluciones/comercio/', destination: '/soluciones/', permanent: true },
      { source: '/soluciones/marketing/', destination: '/soluciones/', permanent: true },
      { source: '/soluciones/operaciones-proyecto/', destination: '/soluciones/', permanent: true },
      { source: '/soluciones/recursos-humanos/', destination: '/soluciones/', permanent: true },
      { source: '/soluciones/servicio-campo/', destination: '/soluciones/', permanent: true },
      { source: '/servicios/compromiso-cliente/', destination: '/servicios/', permanent: true },
      { source: '/servicios/finanzas-scm/', destination: '/servicios/', permanent: true },
      { source: '/servicios/mejora/', destination: '/servicios/', permanent: true },
      { source: '/servicios/sharepoint/', destination: '/servicios/', permanent: true },
      { source: '/servicios/localizacion-honduras/', destination: '/servicios/', permanent: true },
      { source: '/servicios/integracion-pos-gasolineras/', destination: '/servicios/', permanent: true },
      { source: '/servicios/validacion-facturas/', destination: '/servicios/', permanent: true },
      { source: '/servicios/importacion-excel/', destination: '/servicios/', permanent: true },
      { source: '/servicios/informes-personalizados/', destination: '/servicios/', permanent: true },
    ];
  },
};

export default nextConfig;
