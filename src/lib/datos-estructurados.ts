import { CONTACTO, NOMBRE_SITIO } from '@/data/sitio';
import { SITIO_URL } from './sitio-url';

const ID_EMPRESA = `${SITIO_URL}/#empresa`;

/** Organization + LocalBusiness (ProfessionalService) de InvTech. */
export function datosEmpresa() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ID_EMPRESA,
    name: NOMBRE_SITIO,
    url: SITIO_URL,
    logo: `${SITIO_URL}/logo-invtech.svg`,
    image: `${SITIO_URL}/opengraph-image`,
    telephone: CONTACTO.telefonoEnlace.replace('tel:', ''),
    email: CONTACTO.correo,
    address: { '@type': 'PostalAddress', addressCountry: 'HN' },
    areaServed: { '@type': 'Country', name: 'Honduras' },
    knowsAbout: [
      'Microsoft Dynamics 365 Business Central',
      'Microsoft Dynamics 365',
      'Power BI',
      'SharePoint',
    ],
  };
}

/** Service de una página de servicio. */
export function datosServicio(nombre: string, descripcion: string, ruta: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: nombre,
    description: descripcion,
    url: `${SITIO_URL}${ruta}`,
    areaServed: { '@type': 'Country', name: 'Honduras' },
    provider: { '@id': ID_EMPRESA },
  };
}
