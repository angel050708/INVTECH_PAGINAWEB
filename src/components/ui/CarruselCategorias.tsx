'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Icono } from './Icono';
import styles from './CarruselCategorias.module.css';

interface Categoria {
  nombre: string;
  texto: string;
  foto: string;
}

/** Fotos: gasolineras y tiendas de la presentación de InvTech; el resto, fotos CC0 (Openverse). */
const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Gasolineras',
    texto: 'Pista, tienda y crédito en una sola caja.',
    foto: '/categorias/gasolineras.jpg',
  },
  {
    nombre: 'Tiendas de conveniencia',
    texto: 'Ventas rápidas con inventario al día.',
    foto: '/categorias/tiendas.jpg',
  },
  {
    nombre: 'Restaurantes',
    texto: 'Cobro en mostrador conectado a contabilidad.',
    foto: '/categorias/restaurantes.jpg',
  },
  {
    nombre: 'Farmacias',
    texto: 'Caja conectada al inventario y a Business Central.',
    foto: '/categorias/farmacias.jpg',
  },
  {
    nombre: 'Supermercados',
    texto: 'Varias cajas y sucursales en un solo sistema.',
    foto: '/categorias/supermercados.jpg',
  },
];

const INTERVALO = 3500;

/**
 * Las tarjetas van tres veces seguidas y la vista se mantiene en la copia del medio:
 * al acercarse a un extremo salta sin animación a la posición equivalente, así el giro es infinito
 * y siempre hay espacio para desplazar, aunque la pantalla sea muy ancha.
 */
function recentrar(el: HTMLElement) {
  const copia = el.scrollWidth / 3;
  if (el.scrollLeft < copia * 0.5) el.scrollLeft += copia;
  else if (el.scrollLeft > copia * 1.5) el.scrollLeft -= copia;
}

function avanzar(el: HTMLElement, direccion: 1 | -1) {
  recentrar(el);
  const tarjeta = el.querySelector('li');
  const paso = tarjeta ? tarjeta.getBoundingClientRect().width + 16 : 320;
  el.scrollBy({ left: paso * direccion, behavior: 'smooth' });
}

/**
 * Carrusel de rubros: avanza solo cada pocos segundos y el usuario puede deslizarlo,
 * arrastrarlo o usar las flechas. Se pausa mientras el usuario interactúa.
 */
export function CarruselCategorias() {
  const pista = useRef<HTMLUListElement>(null);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    const el = pista.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 3;
    let espera = 0;
    const alDesplazar = () => {
      window.clearTimeout(espera);
      espera = window.setTimeout(() => recentrar(el), 150);
    };
    el.addEventListener('scroll', alDesplazar, { passive: true });
    return () => el.removeEventListener('scroll', alDesplazar);
  }, []);

  useEffect(() => {
    if (pausado || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => pista.current && avanzar(pista.current, 1), INTERVALO);
    return () => window.clearInterval(id);
  }, [pausado]);

  // Arrastrar con el mouse (en pantallas táctiles el desplazamiento es nativo)
  useEffect(() => {
    const el = pista.current;
    if (!el) return;
    let inicioX = 0;
    let inicioScroll = 0;
    let arrastrando = false;
    const bajar = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      arrastrando = true;
      inicioX = e.clientX;
      inicioScroll = el.scrollLeft;
      el.classList.add(styles.arrastrando);
    };
    const mover = (e: PointerEvent) => {
      if (!arrastrando) return;
      el.scrollLeft = inicioScroll - (e.clientX - inicioX);
    };
    const soltar = () => {
      arrastrando = false;
      el.classList.remove(styles.arrastrando);
    };
    el.addEventListener('pointerdown', bajar);
    window.addEventListener('pointermove', mover);
    window.addEventListener('pointerup', soltar);
    return () => {
      el.removeEventListener('pointerdown', bajar);
      window.removeEventListener('pointermove', mover);
      window.removeEventListener('pointerup', soltar);
    };
  }, []);

  return (
    <div
      className={styles.carrusel}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onTouchStart={() => setPausado(true)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
    >
      <ul ref={pista} className={styles.pista} aria-label="Rubros donde funciona BCPOS" tabIndex={0}>
        {[0, 1, 2].flatMap((copia) =>
          CATEGORIAS.map((c) => (
            <li
              key={`${copia}-${c.nombre}`}
              className={styles.tarjeta}
              aria-hidden={copia !== 1 || undefined}
            >
              <Image src={c.foto} alt="" fill sizes="340px" className={styles.foto} draggable={false} />
              <div className={styles.texto}>
                <h3>{c.nombre}</h3>
                <p>{c.texto}</p>
              </div>
            </li>
          )),
        )}
      </ul>
      <div className={styles.flechas}>
        <button
          type="button"
          onClick={() => pista.current && avanzar(pista.current, -1)}
          aria-label="Rubro anterior"
        >
          <span className={styles.izquierda}>
            <Icono nombre="flecha" tamano={20} />
          </span>
        </button>
        <button
          type="button"
          onClick={() => pista.current && avanzar(pista.current, 1)}
          aria-label="Rubro siguiente"
        >
          <Icono nombre="flecha" tamano={20} />
        </button>
      </div>
    </div>
  );
}
