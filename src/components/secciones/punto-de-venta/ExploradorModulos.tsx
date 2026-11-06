'use client';

import { useId, useState, type KeyboardEvent } from 'react';
import { Icono } from '@/components/ui/Icono';
import type { Elemento } from '@/data/verticales';
import styles from './ExploradorModulos.module.css';

/**
 * Lista de módulos con un panel de detalle: se ve uno a la vez,
 * así la sección ocupa poco espacio sin esconder contenido.
 */
export function ExploradorModulos({ modulos }: { modulos: Elemento[] }) {
  const [activo, setActivo] = useState(0);
  const base = useId();
  const actual = modulos[activo];

  function mover(evento: KeyboardEvent<HTMLButtonElement>) {
    const pasos: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const paso = pasos[evento.key];
    if (!paso) return;
    evento.preventDefault();
    const siguiente = (activo + paso + modulos.length) % modulos.length;
    setActivo(siguiente);
    document.getElementById(`${base}-tab-${siguiente}`)?.focus();
  }

  return (
    <div className={styles.explorador}>
      <div role="tablist" aria-orientation="vertical" aria-label="Módulos" className={styles.lista}>
        {modulos.map((m, i) => (
          <button
            key={m.titulo}
            id={`${base}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === activo}
            aria-controls={`${base}-panel`}
            tabIndex={i === activo ? 0 : -1}
            onClick={() => setActivo(i)}
            onKeyDown={mover}
          >
            {m.icono && <Icono nombre={m.icono} tamano={18} />}
            <span>{m.titulo}</span>
          </button>
        ))}
      </div>
      <div
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${activo}`}
        className={styles.panel}
      >
        <div key={activo} className={styles.contenido}>
          {actual.icono && (
            <span className={styles.icono}>
              <Icono nombre={actual.icono} tamano={28} />
            </span>
          )}
          <h3>{actual.titulo}</h3>
          <p>{actual.texto}</p>
          {actual.icono && (
            <span className={styles.marca} aria-hidden="true">
              <Icono nombre={actual.icono} tamano={220} />
            </span>
          )}
          <span className={styles.contador}>
            {activo + 1} de {modulos.length}
          </span>
        </div>
      </div>
    </div>
  );
}
