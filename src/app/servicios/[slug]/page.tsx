import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { Icono } from '@/components/ui/Icono';
import { PaginaContenido } from '@/components/secciones/comunes/PaginaContenido';
import { paginaServicio, SERVICIOS_DYNAMICS } from '@/data/paginas';
import { buscarServicio, SERVICIOS } from '@/data/servicios';
import styles from '../../paginas.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [...SERVICIOS_DYNAMICS, ...SERVICIOS].map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const original = paginaServicio(slug);
  if (original) return { title: original.titulo, description: original.bajada.join(' ').slice(0, 160) };
  const servicio = buscarServicio(slug);
  return servicio ? { title: servicio.titulo, description: servicio.resumen } : {};
}

export default async function PaginaServicio({ params }: Props) {
  const { slug } = await params;
  const original = paginaServicio(slug);
  if (original) return <PaginaContenido etiqueta="Servicio" pagina={original} interes={slug} />;

  const servicio = buscarServicio(slug);
  if (!servicio) notFound();

  const otros = SERVICIOS.filter((otro) => otro.slug !== servicio.slug);

  return (
    <>
      <CabeceraPagina etiqueta="Servicio" titulo={servicio.titulo} bajada={servicio.resumen}>
        <p style={{ marginTop: 36 }}>
          <Link href={`/contacto/?interes=${servicio.slug}`} className="boton boton-acento boton-grande">
            Consultar este servicio <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>

      <section className="seccion">
        <div className={`contenedor ${styles.dosColumnas}`}>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">El problema</p>
            <p className={styles.texto} style={{ fontSize: '1.3rem', color: 'var(--tinta)' }}>
              {servicio.problema}
            </p>
          </div>
          <div {...revelarAlScroll(1)}>
            <p className="etiqueta">Qué incluye</p>
            <ul className={styles.lista}>
              {servicio.incluye.map((punto) => (
                <li key={punto}>
                  <Icono nombre="check" tamano={18} /> {punto}
                </li>
              ))}
            </ul>
            <p className={styles.resultado}>
              <small>Resultado</small>
              {servicio.resultado}
            </p>
          </div>
        </div>
      </section>

      <section className={`seccion ${styles.fondoAlterno}`}>
        <div className="contenedor">
          <p className="etiqueta">Otros servicios</p>
          <div className={styles.otros}>
            {otros.map((otro) => (
              <Link key={otro.slug} href={`/servicios/${otro.slug}/`}>
                {otro.titulo}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BandaLlamado />
    </>
  );
}
