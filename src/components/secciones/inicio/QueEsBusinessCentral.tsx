import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { DiagramaModulos } from '@/components/secciones/comunes/DiagramaModulos';
import { Icono } from '@/components/ui/Icono';
import styles from './QueEsBusinessCentral.module.css';

const SENALES = [
  'Su sistema contable ya no da abasto con el volumen de operaciones.',
  'Ventas, inventario y finanzas viven en programas separados.',
  'Cada cierre de mes depende de exportar y cuadrar en Excel.',
];

export function QueEsBusinessCentral() {
  return (
    <section className="seccion">
      <div className={`contenedor ${styles.rejilla}`}>
        <div>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">Dynamics 365 Business Central</p>
            <h2 className="titulo-seccion">Un solo sistema para finanzas, ventas, compras e inventario</h2>
            <p className="entrada">
              Business Central es el ERP de Microsoft para empresas en crecimiento. Funciona en la nube, en
              sus servidores o de forma híbrida.
            </p>
          </div>
          <p className={styles.subtitulo} {...revelarAlScroll(1)}>
            Le conviene si:
          </p>
          <ul className={styles.senales}>
            {SENALES.map((senal, indice) => (
              <li key={senal} {...revelarAlScroll(indice + 2)}>
                <Icono nombre="check" tamano={18} />
                {senal}
              </li>
            ))}
          </ul>
          <Link href="/soluciones/business-central/" className="enlace-flecha">
            Conozca Business Central <Icono nombre="flecha" tamano={18} />
          </Link>
        </div>
        <div {...revelarAlScroll(1)}>
          <DiagramaModulos />
        </div>
      </div>
    </section>
  );
}
