import Image from 'next/image';
import { rutaLogo } from '@/data/aplicaciones';
import { unirClases } from '@/lib/clases';
import styles from './LogosApp.module.css';

/** Uno o varios logos de aplicaciones, superpuestos. */
export function LogosApp({
  logos,
  tamano = 40,
  className,
}: {
  logos: string[];
  tamano?: number;
  className?: string;
}) {
  return (
    <span className={unirClases(styles.logos, className)} aria-hidden="true">
      {logos.map((logo) => (
        <span key={logo} className={styles.logo} style={{ width: tamano + 16, height: tamano + 16 }}>
          <Image src={rutaLogo(logo)} alt="" width={tamano} height={tamano} unoptimized />
        </span>
      ))}
    </span>
  );
}
