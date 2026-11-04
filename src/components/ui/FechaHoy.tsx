'use client';

import { useSyncExternalStore } from 'react';

const suscribir = () => () => {};
const formato = new Intl.DateTimeFormat('es-HN', { day: '2-digit', month: '2-digit', year: 'numeric' });

/** Fecha de hoy del visitante (dd/mm/aaaa). En el HTML estático se usa la del build. */
export function FechaHoy() {
  const fecha = useSyncExternalStore(
    suscribir,
    () => formato.format(new Date()),
    () => formato.format(new Date()),
  );
  return <>{fecha}</>;
}
