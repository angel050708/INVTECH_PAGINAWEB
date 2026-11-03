import Link from 'next/link';
import type { ReactNode } from 'react';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { Icono } from '@/components/ui/Icono';
import type { PaginaContenido as Pagina } from '@/data/paginas';
import { unirClases } from '@/lib/clases';
import { BandaLlamado } from '../BandaLlamado';
import { CabeceraPagina } from './CabeceraPagina';
import styles from './PaginaContenido.module.css';

interface Props {
  etiqueta: string;
  pagina: Pagina;
  interes?: string;
  /** Bloque opcional que se muestra después de la primera sección */
  extra?: ReactNode;
}

/** Plantilla de las páginas de Soluciones y Servicios. */
export function PaginaContenido({ etiqueta, pagina, interes, extra }: Props) {
  const [subtitulo, ...resto] = pagina.bajada;
  return (
    <>
      <CabeceraPagina etiqueta={etiqueta} titulo={pagina.titulo} bajada={subtitulo ?? ''}>
        {resto.map((parrafo) => (
          <p key={parrafo} className={styles.bajadaExtra}>
            {parrafo}
          </p>
        ))}
        <p className={styles.accion}>
          <Link
            href={interes ? `/contacto/?interes=${interes}` : '/contacto/'}
            className="boton boton-acento boton-grande"
          >
            Hablar con un consultor <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>

      {pagina.secciones.map((seccion, indice) => (
        <div key={seccion.titulo}>
          <section className={unirClases('seccion', indice % 2 === 1 && styles.alterna)}>
            <div className="contenedor">
              <div className={styles.cabeza} {...revelarAlScroll()}>
                <h2 className="titulo-seccion">{seccion.titulo}</h2>
                {seccion.intro.length > 0 && (
                  <div className={styles.intro}>
                    {seccion.intro.map((parrafo) => (
                      <p key={parrafo}>{parrafo}</p>
                    ))}
                  </div>
                )}
              </div>
              {seccion.items.length > 0 && <Items items={seccion.items} />}
            </div>
          </section>
          {indice === 0 && extra}
        </div>
      ))}

      <BandaLlamado />
    </>
  );
}

function Items({ items }: { items: Pagina['secciones'][number]['items'] }) {
  const conTexto = items.some((item) => item.texto.length > 0);
  if (!conTexto) {
    return (
      <ul className={styles.lista}>
        {items.map((item, indice) => (
          <li key={item.titulo} {...revelarAlScroll(indice % 6)}>
            <Icono nombre="check" tamano={18} />
            {item.titulo}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className={styles.tarjetas}>
      {items.map((item, indice) => (
        <li key={item.titulo} className={styles.tarjeta} {...revelarAlScroll(indice % 6)}>
          <span className={styles.numero}>{String(indice + 1).padStart(2, '0')}</span>
          <h3>{item.titulo}</h3>
          {item.texto.map((parrafo) => (
            <p key={parrafo}>{parrafo}</p>
          ))}
        </li>
      ))}
    </ul>
  );
}
