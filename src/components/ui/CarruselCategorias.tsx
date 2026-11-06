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
 * Carrusel de rubros: avanza solo cada pocos segundos y el usuario puede deslizarlo,
 * arrastrarlo o usar las flechas. Se pausa mientras el usuario interactúa.
 */
export function CarruselCategorias() {
  const pista = useRef<HTMLUListElement>(null);
  const [pausado, setPausado] = useState(false);

  const mover = (direccion: 1 | -1) => {
    const el = pista.current;
    if (!el) return;
    const tarjeta = el.querySelector('li');
    const paso = tarjeta ? tarjeta.getBoundingClientRect().width + 16 : 320;
    const alFinal = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const alInicio = el.scrollLeft <= 4;
    if (direccion === 1 && alFinal) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (direccion === -1 && alInicio) el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    else el.scrollBy({ left: paso * direccion, behavior: 'smooth' });
  };

  useEffect(() => {
    if (pausado || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => mover(1), INTERVALO);
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
        {CATEGORIAS.map((c) => (
          <li key={c.nombre} className={styles.tarjeta}>
            <Image src={c.foto} alt="" fill sizes="340px" className={styles.foto} draggable={false} />
            <div className={styles.texto}>
              <h3>{c.nombre}</h3>
              <p>{c.texto}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.flechas}>
        <button type="button" onClick={() => mover(-1)} aria-label="Rubro anterior">
          <span className={styles.izquierda}>
            <Icono nombre="flecha" tamano={20} />
          </span>
        </button>
        <button type="button" onClick={() => mover(1)} aria-label="Rubro siguiente">
          <Icono nombre="flecha" tamano={20} />
        </button>
      </div>
    </div>
  );
}
