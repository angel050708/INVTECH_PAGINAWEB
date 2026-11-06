import Image from 'next/image';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { DiagramaModulos } from './DiagramaModulos';
import styles from './QueEsBcSolucion.module.css';

/** "¿Qué es Business Central?": texto de invtech.pro, captura real de la presentación y el diagrama de áreas. */
export function QueEsBcSolucion() {
  return (
    <>
      <section className="seccion">
        <div className={`contenedor ${styles.rejilla}`}>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">¿Qué es Business Central?</p>
            <h2 className="titulo-seccion">Impulse su pequeña y mediana empresa hacia la escalabilidad</h2>
            <div className={styles.texto}>
              <p>
                Dynamics 365 Business Central es una solución avanzada basada en la nube que proporciona una
                ventaja competitiva a las empresas a través de sólidas capacidades de ERP.
              </p>
              <p>
                Con aplicaciones empresariales conectadas, datos en tiempo real y colaboración, simplifica las
                finanzas, las operaciones y la gestión de clientes para tomar mejores decisiones y crecer.
              </p>
            </div>
          </div>
          <div className={styles.foto} {...revelarAlScroll(1)}>
            <Image
              src="/fotos/bc-dispositivos.png"
              alt="Business Central abierto en una tableta y en un celular"
              width={946}
              height={525}
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className={`seccion ${styles.areas}`}>
        <div className="contenedor">
          <div className={styles.cabeza} {...revelarAlScroll()}>
            <p className="etiqueta">Un solo sistema</p>
            <h2 className="titulo-seccion">Todas las áreas de su empresa, conectadas</h2>
          </div>
          <DiagramaModulos />
        </div>
      </section>
    </>
  );
}
