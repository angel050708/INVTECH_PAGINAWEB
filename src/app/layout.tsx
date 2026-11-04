// Va primero: los estilos de cada componente deben cargarse después para poder sobrescribir los globales.
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import { RevelarAlScroll } from '@/components/efectos/RevelarAlScroll';
import { Navegacion } from '@/components/layout/Navegacion';
import { PiePagina } from '@/components/layout/PiePagina';
import { BotonWhatsapp } from '@/components/ui/BotonWhatsapp';
import { NOMBRE_SITIO } from '@/data/sitio';
import { unirClases } from '@/lib/clases';
import { SITIO_INDEXABLE, SITIO_URL } from '@/lib/sitio-url';

const fuenteSans = Geist({ subsets: ['latin'], variable: '--fuente-sans' });
const fuenteMono = Geist_Mono({ subsets: ['latin'], variable: '--fuente-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(SITIO_URL),
  robots: SITIO_INDEXABLE ? undefined : { index: false, follow: false },
  title: {
    default: `${NOMBRE_SITIO} · Implementación de Dynamics 365 Business Central en Honduras`,
    template: `%s · ${NOMBRE_SITIO}`,
  },
  description:
    'Implementamos Microsoft Dynamics 365 Business Central con localización fiscal hondureña (CAI, retenciones), integración POS para estaciones de servicio, informes y soporte.',
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
  openGraph: { type: 'website', locale: 'es_HN', siteName: NOMBRE_SITIO },
};

export const viewport: Viewport = {
  themeColor: '#16141f',
};

const SCRIPT_ACTIVAR_ANIMACIONES = "document.documentElement.classList.add('js')";

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
      </head>
      <body>
        <a className="saltar-al-contenido" href="#contenido">
          Saltar al contenido
        </a>
        <Navegacion />
        <main id="contenido">{children}</main>
        <PiePagina />
        <BotonWhatsapp />
        <RevelarAlScroll />
      </body>
    </html>
  );
}
