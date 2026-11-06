'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type KeyboardEvent } from 'react';
import { Icono } from '@/components/ui/Icono';
import { CATALOGO } from '@/data/verticales';
import { unirClases } from '@/lib/clases';
import styles from './CatalogoPestanas.module.css';

/** Catálogo de equipos en pestañas: cada categoría con su foto, sus modelos y un botón para cotizar. */
export function CatalogoPestanas() {
  const [activa, setActiva] = useState(0);
  const categoria = CATALOGO[activa];

  // Flechas izquierda y derecha para moverse entre pestañas
  const teclas = (evento: KeyboardEvent<HTMLDivElement>) => {
    if (evento.key !== 'ArrowRight' && evento.key !== 'ArrowLeft') return;
    evento.preventDefault();
    const siguiente = (activa + (evento.key === 'ArrowRight' ? 1 : -1) + CATALOGO.length) % CATALOGO.length;
    setActiva(siguiente);
    document.getElementById(`pestana-${CATALOGO[siguiente].slug}`)?.focus();
  };

  return (
    <div className={styles.catalogo}>
      <div className={styles.pestanas} role="tablist" aria-label="Categorías de equipos" onKeyDown={teclas}>
        {CATALOGO.map((c, i) => (
          <button
            key={c.slug}
            id={`pestana-${c.slug}`}
            type="button"
            role="tab"
            aria-selected={i === activa}
            aria-controls="panel-equipos"
            tabIndex={i === activa ? 0 : -1}
            className={unirClases(styles.pestana, i === activa && styles.activa)}
            onClick={() => setActiva(i)}
          >
            <Icono nombre={c.icono} tamano={18} />
            {c.pestana}
          </button>
        ))}
      </div>

      <div
        id="panel-equipos"
        role="tabpanel"
        aria-labelledby={`pestana-${categoria.slug}`}
        className={styles.panel}
        key={categoria.slug}
      >
        <div className={styles.info}>
          <h3>{categoria.titulo}</h3>
          <p>{categoria.descripcion}</p>
          <ul className={styles.productos}>
            {categoria.productos.map((p) => (
              <li key={p.nombre}>
                <span className={styles.marca}>
                  {p.marca ? (
                    <Image src={`/marcas/${p.marca}.png`} alt="" width={64} height={32} />
                  ) : (
                    <Icono nombre={categoria.icono} tamano={18} />
                  )}
                </span>
                {p.nombre}
              </li>
            ))}
          </ul>
          <Link href={`/contacto/?interes=venta-de-equipos`} className="boton boton-acento boton-grande">
            Cotizar {categoria.pestana.toLowerCase()} <Icono nombre="flecha" tamano={18} />
          </Link>
        </div>
        <div className={styles.foto}>
          <Image src={categoria.foto} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </div>
    </div>
  );
}
