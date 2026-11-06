import Link from 'next/link';
import type { ReactNode } from 'react';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { Icono } from '@/components/ui/Icono';
import { LogosApp } from '@/components/ui/LogosApp';
import type { PaginaContenido as Pagina, SeccionContenido } from '@/data/paginas';
import { unirClases } from '@/lib/clases';
import { BandaLlamado } from '../BandaLlamado';
import { CabeceraPagina } from './CabeceraPagina';
import { LineaFases } from './LineaFases';
import styles from './PaginaContenido.module.css';

/* Límites para que cada página se lea rápido: lo esencial del texto original. */
const MAX_SECCIONES = 3;
const MAX_PARRAFOS = 2;
const MAX_ITEMS = 6;

interface Props {
  etiqueta: string;
  pagina: Pagina;
  logos: string[];
  interes?: string;
  /** Bloque opcional que se muestra después de la primera sección */
  extra?: ReactNode;
  /** Secciones que se reemplazan por un bloque propio, por título */
  reemplazos?: Record<string, ReactNode>;
}

/** Plantilla de las páginas de Soluciones y Servicios. */
export function PaginaContenido({ etiqueta, pagina, logos, interes, extra, reemplazos = {} }: Props) {
  const secciones = pagina.secciones.slice(0, MAX_SECCIONES).map(resumir);
  return (
    <>
      <CabeceraPagina
        etiqueta={etiqueta}
        titulo={pagina.titulo}
        bajada={pagina.bajada[0] ?? ''}
        visual={
          <div className={styles.flotar}>
            <LogosApp logos={logos} tamano={logos.length > 1 ? 64 : 96} />
          </div>
        }
      >
        <p className={styles.accion}>
          <Link
            href={interes ? `/contacto/?interes=${interes}` : '/contacto/'}
            className="boton boton-acento boton-grande"
          >
            Hablar con un consultor <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>

      {secciones.map((seccion, indice) => (
        <div key={seccion.titulo}>
          {seccion.titulo in reemplazos ? (
            reemplazos[seccion.titulo]
          ) : (
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
                {seccion.titulo.startsWith('Enfoque de implementación') ? (
                  <LineaFases />
                ) : (
                  seccion.items.length > 0 && <Items items={seccion.items} />
                )}
              </div>
            </section>
          )}
          {indice === 0 && extra}
        </div>
      ))}

      <BandaLlamado />
    </>
  );
}

/** Recorta la sección y convierte un único elemento largo en párrafo. */
function resumir(seccion: SeccionContenido): SeccionContenido {
  let { intro, items } = seccion;
  if (items.length === 1) {
    intro = [...intro, items[0].titulo, ...items[0].texto];
    items = [];
  }
  return {
    titulo: seccion.titulo,
    intro: intro.slice(0, MAX_PARRAFOS),
    items: items.slice(0, MAX_ITEMS).map((item) => ({ titulo: item.titulo, texto: item.texto.slice(0, 1) })),
  };
}

function Items({ items }: { items: SeccionContenido['items'] }) {
  const conTexto = items.some((item) => item.texto.length > 0);
  if (!conTexto) {
    return (
      <ul className={styles.lista}>
        {items.map((item, indice) => (
          <li key={item.titulo} {...revelarAlScroll(indice)}>
            <span className={styles.check}>
              <Icono nombre="check" tamano={16} />
            </span>
            {item.titulo}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className={styles.tarjetas}>
      {items.map((item, indice) => (
        <li key={item.titulo} className={styles.tarjeta} {...revelarAlScroll(indice)}>
          <h3>{item.titulo}</h3>
          {item.texto.map((parrafo) => (
            <p key={parrafo}>{parrafo}</p>
          ))}
        </li>
      ))}
    </ul>
  );
}
