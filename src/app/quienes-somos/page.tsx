import type { Metadata } from 'next';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { VALORES } from '@/data/empresa';
import styles from '../paginas.module.css';

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description:
    'InvTech: consultores en Microsoft Dynamics 365 Business Central que ayudan a empresas hondureñas a transformar su operación.',
};

export default function PaginaQuienesSomos() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Sobre nosotros"
        titulo="Más que un proveedor de soluciones de TI"
        bajada="Los negocios no se tratan solo de resolver problemas: se trata de brindar soluciones que ayuden a mejorar la vida de las personas."
      />

      <section className="seccion">
        <div className={`contenedor ${styles.dosColumnas}`}>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">Quiénes somos</p>
            <h2 className="titulo-seccion">Nuestra historia</h2>
          </div>
          <div className={styles.texto} {...revelarAlScroll(1)}>
            <p>
              InvTech se formó con la convicción de no solo brindar soluciones, sino de ser un agente de
              cambio que marque la diferencia en cada empresa que acompaña.
            </p>
            <p>
              Llevamos soluciones empresariales basadas en tecnología a grandes empresas, pymes y
              corporaciones. Nuestros consultores analizan sus áreas de crecimiento y le entregan una solución
              a la medida para lograr el máximo impacto.
            </p>
          </div>
        </div>
      </section>

      <section className={`seccion ${styles.fondoAlterno}`}>
        <div className={`contenedor ${styles.dosColumnas}`}>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">Nuestra visión</p>
            <h2 className="titulo-seccion">Crecer junto con nuestros clientes</h2>
          </div>
          <div className={styles.texto} {...revelarAlScroll(1)}>
            <p>
              Creemos en transformar los negocios de nuestros clientes y acompañarlos en su transformación
              digital para lograr un crecimiento sostenible. Queremos ser una marca sinónimo de confianza,
              innovación tecnológica y excelencia en el servicio.
            </p>
            <p>
              La excelencia no se logra de la noche a la mañana: se construye. Por eso entregamos soluciones
              sostenibles y escalables que ayudan a las empresas de Honduras a crecer y mantenerse por delante
              de la competencia.
            </p>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Nuestros valores</p>
              <h2 className="titulo-seccion">Equidad, transparencia, compromiso y honestidad</h2>
            </div>
          </div>
          <ul className={styles.tarjetas}>
            {VALORES.map((valor, indice) => (
              <li key={valor.titulo} className={styles.tarjeta} {...revelarAlScroll(indice)}>
                <span className={styles.numero}>0{indice + 1}.</span>
                <h3>{valor.titulo}</h3>
                <p>{valor.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BandaLlamado />
    </>
  );
}
