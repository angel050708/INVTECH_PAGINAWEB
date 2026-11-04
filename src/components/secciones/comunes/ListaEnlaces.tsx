import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { Icono } from '@/components/ui/Icono';
import { LogosApp } from '@/components/ui/LogosApp';
import type { EntradaMenu } from '@/data/paginas';
import styles from './ListaEnlaces.module.css';

export function ListaEnlaces({ base, entradas }: { base: string; entradas: EntradaMenu[] }) {
  return (
    <ul className={styles.lista}>
      {entradas.map((entrada, indice) => (
        <li key={entrada.slug} {...revelarAlScroll(indice)}>
          <Link href={`${base}${entrada.slug}/`} className={styles.fila}>
            <LogosApp logos={entrada.logos} tamano={30} />
            <h2>{entrada.etiqueta}</h2>
            <p>{entrada.resumen}</p>
            <span className={styles.flecha}>
              <Icono nombre="flecha" tamano={18} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
