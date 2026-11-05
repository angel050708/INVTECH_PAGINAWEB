'use client';

import { useEffect, useRef, useState } from 'react';

const formato = (decimales: number) =>
  new Intl.NumberFormat('es-HN', { minimumFractionDigits: decimales, maximumFractionDigits: decimales });

/** Número que sube desde 0 cuando entra en pantalla (respeta prefers-reduced-motion). */
export function Contador({
  valor,
  decimales = 0,
  duracion = 1600,
}: {
  valor: number;
  decimales?: number;
  duracion?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cuadro = 0;
    const observador = new IntersectionObserver(([entrada]) => {
      if (!entrada.isIntersecting) return;
      observador.disconnect();
      if (sinMovimiento) {
        setActual(valor);
        return;
      }
      const inicio = performance.now();
      const paso = (ahora: number) => {
        const t = Math.min(1, (ahora - inicio) / duracion);
        setActual(valor * (1 - Math.pow(1 - t, 3)));
        if (t < 1) cuadro = requestAnimationFrame(paso);
      };
      cuadro = requestAnimationFrame(paso);
    });
    observador.observe(elemento);
    return () => {
      observador.disconnect();
      cancelAnimationFrame(cuadro);
    };
  }, [valor, duracion]);

  return <span ref={ref}>{formato(decimales).format(actual)}</span>;
}
