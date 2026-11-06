// Va primero: los estilos de cada componente deben cargarse después para poder sobrescribir los globales.
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import { RevelarAlScroll } from '@/components/efectos/RevelarAlScroll';
import { Navegacion } from '@/components/layout/Navegacion';
import { PiePagina } from '@/components/layout/PiePagina';
import { JsonLd } from '@/components/seo/JsonLd';
import { BotonWhatsapp } from '@/components/ui/BotonWhatsapp';
import { datosEmpresa } from '@/lib/datos-estructurados';
import { NOMBRE_SITIO } from '@/data/sitio';
import { unirClases } from '@/lib/clases';
import { SITIO_INDEXABLE, SITIO_URL } from '@/lib/sitio-url';

const fuenteSans = Geist({ subsets: ['latin'], variable: '--fuente-sans' });
const fuenteMono = Geist_Mono({ subsets: ['latin'], variable: '--fuente-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(SITIO_URL),
  robots: SITIO_INDEXABLE ? undefined : { index: false, follow: false },
  title: {
    default: `Business Central para empresas de Honduras | ${NOMBRE_SITIO}`,
    // Todas las páginas llevan "Honduras" en el <title>
    template: `%s | ${NOMBRE_SITIO} Honduras`,
  },
  description:
    'Implementamos Microsoft Dynamics 365 Business Central para empresas de Honduras: facturación fiscal con CAI, integración con punto de venta, implementación en seis fases y soporte.',
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_HN',
    siteName: NOMBRE_SITIO,
    title: `Business Central para empresas de Honduras | ${NOMBRE_SITIO}`,
    description:
      'Implementación de Microsoft Dynamics 365 Business Central para empresas de Honduras, con soporte después de salir en vivo.',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#16141f',
};

// Se ejecuta antes de pintar: activa las animaciones y aplica el tema guardado (o el del sistema),
// para que la página no parpadee en claro al cargar en modo oscuro.
const SCRIPT_ACTIVAR_ANIMACIONES =
  "var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('tema');" +
  "d.dataset.tema=t||(matchMedia('(prefers-color-scheme: dark)').matches?'oscuro':'claro')}catch(e){d.dataset.tema='claro'}";

export default function LayoutRaiz({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={unirClases(fuenteSans.variable, fuenteMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_ACTIVAR_ANIMACIONES }} />
        <JsonLd datos={datosEmpresa()} />
      </head>
      <body>
        <a className="saltar-al-contenido" href="#contenido">
          Saltar al contenido
        </a>
        <Navegacion />
        <main id="contenido">{children}</main>
        <PiePagina />
        <aside aria-label="Contacto rápido">
          <BotonWhatsapp />
        </aside>
        <RevelarAlScroll />
      </body>
    </html>
  );
}
