import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { Icono } from '@/components/ui/Icono';
import styles from './ListaEnlaces.module.css';

interface Enlace {
  href: string;
  titulo: string;
  texto: string;
}

export function ListaEnlaces({ enlaces }: { enlaces: Enlace[] }) {
  return (
    <ul className={styles.lista}>
      {enlaces.map((enlace, indice) => (
        <li key={enlace.href} {...revelarAlScroll(indice % 6)}>
          <Link href={enlace.href} className={styles.fila}>
            <h2>{enlace.titulo}</h2>
            <p>{enlace.texto}</p>
            <span className={styles.flecha}>
              <Icono nombre="flecha" tamano={18} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
