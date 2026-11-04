import Link from 'next/link';
import { CONTACTO } from '@/data/sitio';
import { revelarAlScroll } from '@/components/efectos/revelar';
import styles from './BandaLlamado.module.css';

interface Props {
  titulo?: string;
  texto?: string;
}

export function BandaLlamado({
  titulo = 'Comience con InvTech hoy mismo',
  texto = 'Agende una reunión de diagnóstico. Revisamos sus procesos y le indicamos qué cubre Business Central de fábrica y qué conviene adaptar.',
}: Props) {
  return (
    <section className={styles.banda}>
      <div className={styles.interior} {...revelarAlScroll()}>
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <div className={styles.acciones}>
          <Link href="/contacto/" className="boton boton-acento boton-grande">
            Agendar diagnóstico
          </Link>
          <a href={CONTACTO.telefonoEnlace} className={styles.telefono}>
            o llame al <strong>{CONTACTO.telefono}</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
