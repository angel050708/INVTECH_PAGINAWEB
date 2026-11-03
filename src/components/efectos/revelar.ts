import type { CSSProperties } from 'react';

/**
 * Marca un elemento para que aparezca al entrar en pantalla.
 * `orden` escalona la animación cuando hay varios elementos seguidos.
 */
export function revelarAlScroll(orden = 0) {
  return {
    'data-revelar': '',
    style: { '--orden': orden } as CSSProperties,
  };
}
