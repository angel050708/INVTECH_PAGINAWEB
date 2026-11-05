import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { JsonLd } from '@/components/seo/JsonLd';
import { Icono } from '@/components/ui/Icono';
import { LogosApp } from '@/components/ui/LogosApp';
import type { Especialidad } from '@/data/honduras';
import { datosServicio } from '@/lib/datos-estructurados';
import { BandaLlamado } from '../BandaLlamado';
import { CabeceraPagina } from './CabeceraPagina';
import styles from './PaginaEspecialidad.module.css';

/** Plantilla de los servicios propios de InvTech para Honduras. */
export function PaginaEspecialidad({ especialidad: e }: { especialidad: Especialidad }) {
  return (
    <>
      <JsonLd datos={datosServicio(e.tituloSeo, e.descripcion, `/servicios/${e.slug}/`)} />
      <CabeceraPagina
        etiqueta="Servicio para empresas de Honduras"
        titulo={e.etiqueta}
        bajada={e.descripcion}
        visual={<LogosApp logos={e.logos} tamano={e.logos.length > 1 ? 64 : 96} />}
      >
        <p style={{ marginTop: 32 }}>
          <Link href={`/contacto/?interes=${e.slug}`} className="boton boton-acento boton-grande">
            Hablar con un consultor <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>

      <section className="seccion">
        <div className={`contenedor ${styles.rejilla}`}>
          <div className={styles.intro} {...revelarAlScroll()}>
            {e.intro.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
          <ul className={styles.puntos}>
            {e.puntos.map((punto, i) => (
              <li key={punto.titulo} {...revelarAlScroll(i)}>
                <span className={styles.check}>
                  <Icono nombre="check" tamano={16} />
                </span>
                <div>
                  <h2>{punto.titulo}</h2>
                  <p>{punto.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <h2 className="titulo-seccion" style={{ marginBottom: 24 }}>
            También le puede interesar
          </h2>
          <ul className={styles.relacionadas}>
            {e.relacionadas.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="enlace-flecha">
                  {r.etiqueta} <Icono nombre="flecha" tamano={18} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BandaLlamado />
    </>
  );
}
