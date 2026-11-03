'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Hace aparecer los elementos marcados con revelarAlScroll() cuando entran en pantalla.
 * Se vuelve a ejecutar en cada cambio de página.
 */
export function RevelarAlScroll() {
  const rutaActual = usePathname();

  useEffect(() => {
    const observador = new IntersectionObserver(mostrarAlEntrar, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    });

    document
      .querySelectorAll('[data-revelar]:not(.visible)')
      .forEach((elemento) => observador.observe(elemento));
    return () => observador.disconnect();
  }, [rutaActual]);

  return null;
}

function mostrarAlEntrar(entradas: IntersectionObserverEntry[], observador: IntersectionObserver) {
  for (const entrada of entradas) {
    if (!entrada.isIntersecting) continue;
    entrada.target.classList.add('visible');
    observador.unobserve(entrada.target);
  }
}
