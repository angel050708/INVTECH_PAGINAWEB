'use client';

import { useSyncExternalStore } from 'react';

const suscribir = () => () => {};

/** Año del visitante; en el HTML estático se usa el año del build. */
export function AnioActual() {
  const anio = useSyncExternalStore(
    suscribir,
    () => new Date().getFullYear(),
    () => new Date().getFullYear(),
  );
  return <>{anio}</>;
}
