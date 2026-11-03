import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { Icono } from '@/components/ui/Icono';
import styles from './QueEsBusinessCentral.module.css';

const SENALES = [
  'Su contabilidad básica ya no da abasto con el volumen de operaciones.',
  'Ventas, inventario y finanzas viven en sistemas que no se hablan.',
  'Cada cierre de mes depende de exportar, pegar y cuadrar en Excel.',
];

export function QueEsBusinessCentral() {
  return (
    <section className="seccion">
      <div className={`contenedor ${styles.rejilla}`}>
        <div {...revelarAlScroll()}>
          <p className="etiqueta">Dynamics 365 Business Central</p>
          <h2 className="titulo-seccion">Solución empresarial unificada para empresas en crecimiento.</h2>
        </div>
        <div className={styles.columna}>
          <p className={styles.grande} {...revelarAlScroll(1)}>
            Business Central es el ERP de Microsoft: aplicaciones comerciales conectadas, datos en tiempo real
            y una plataforma central para finanzas, operaciones y clientes.
          </p>
          <p className={styles.subtitulo} {...revelarAlScroll(2)}>
            Es la solución ideal si…
          </p>
          <ul className={styles.senales}>
            {SENALES.map((senal, indice) => (
              <li key={senal} {...revelarAlScroll(indice + 3)}>
                <span>
                  <Icono nombre="check" tamano={16} />
                </span>
                {senal}
              </li>
            ))}
          </ul>
          <Link href="/business-central/" className="enlace-flecha" {...revelarAlScroll(6)}>
            Conozca Business Central <Icono nombre="flecha" tamano={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
