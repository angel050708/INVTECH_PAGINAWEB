export interface Aplicacion {
  nombre: string;
  logo: string;
}

/** Aplicaciones de Microsoft que InvTech menciona en invtech.pro. Logos en /public/logos. */
export const APLICACIONES: Aplicacion[] = [
  { nombre: 'Business Central', logo: 'dynamics-365-businesscentral' },
  { nombre: 'Dynamics 365 Finance', logo: 'dynamics-365-finance' },
  { nombre: 'Supply Chain Management', logo: 'dynamics-365-supply-chain-management' },
  { nombre: 'Dynamics 365 Sales', logo: 'dynamics-365-sales' },
  { nombre: 'Customer Service', logo: 'dynamics-365-customer-service' },
  { nombre: 'Field Service', logo: 'dynamics-365-fieldservice' },
  { nombre: 'Marketing', logo: 'dynamics-365-marketing' },
  { nombre: 'Commerce', logo: 'dynamics-365-commerce' },
  { nombre: 'Human Resources', logo: 'dynamics-365-human-resources' },
  { nombre: 'Project Operations', logo: 'dynamics-365-project-operations' },
  { nombre: 'Power BI', logo: 'power-bi' },
  { nombre: 'SharePoint', logo: 'sharepoint' },
  { nombre: 'Power Apps', logo: 'power-apps' },
  { nombre: 'Microsoft 365', logo: 'office-365' },
  { nombre: 'Microsoft Teams', logo: 'teams' },
  { nombre: 'Microsoft Azure', logo: 'azure' },
  { nombre: 'Dynamics NAV', logo: 'dynamics-nav' },
  { nombre: 'Dynamics AX', logo: 'dynamics-ax' },
];

export function rutaLogo(logo: string): string {
  return `/logos/${logo}.svg`;
}
