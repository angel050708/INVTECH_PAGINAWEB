import type { Metadata } from 'next';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { Icono } from '@/components/ui/Icono';
import { LineasCircuito } from '@/components/ui/LineasCircuito';
import { VALORES } from '@/data/empresa';
import styles from './quienes-somos.module.css';

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description:
    'InvTech: consultores en Microsoft Dynamics 365 que ayudan a las empresas a transformar su operación.',
};

const PRINCIPIOS = ['Equidad', 'Transparencia', 'Compromiso', 'Honestidad'];

export default function PaginaQuienesSomos() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Sobre nosotros"
        titulo="Más que un proveedor de soluciones de TI"
        bajada="Lideramos el camino en soluciones empresariales basadas en tecnología para grandes empresas, pymes y corporaciones."
        visual={<LineasCircuito />}
      />

      <section className={styles.manifiesto}>
        <div className="contenedor">
          <blockquote {...revelarAlScroll()}>
            <p>
              “Los negocios no se tratan solo de brindar a las personas soluciones a sus problemas. Tiene más
              que ver con brindar soluciones que ayuden a mejorar la vida.”
            </p>
            <footer>La creencia que guía a InvTech</footer>
          </blockquote>
        </div>
      </section>

      <section className="seccion">
        <div className={`contenedor ${styles.historia}`}>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">Nuestra historia</p>
            <h2 className="titulo-seccion">Creadores de cambio</h2>
            <p className={styles.texto}>
              InvTech se formó con la creencia de no solo brindar soluciones, sino también ser el creador de
              cambios que marquen la diferencia. Nuestros consultores certificados analizan sus áreas de
              crecimiento y le entregan una solución empresarial personalizada para lograr el máximo impacto.
            </p>
          </div>
          <div className={styles.vision} {...revelarAlScroll(1)}>
            <p className="etiqueta">Nuestra visión</p>
            <h2>Una marca sinónimo de confianza, innovación tecnológica y excelencia en el servicio</h2>
            <p>
              Transformar los negocios de nuestros clientes y acompañarlos en su transformación digital para
              crecer juntos de forma sostenible.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.principios} aria-label="Nuestros principios">
        <ul>
          {PRINCIPIOS.map((principio, i) => (
            <li key={principio} {...revelarAlScroll(i)}>
              {principio}
            </li>
          ))}
        </ul>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Nuestros valores</p>
              <h2 className="titulo-seccion">Lo que nos hace diferentes</h2>
            </div>
          </div>
          <ul className={styles.valores}>
            {VALORES.map((valor, indice) => (
              <li key={valor.titulo} {...revelarAlScroll(indice)}>
                <span className={styles.icono}>
                  <Icono nombre={valor.icono} tamano={22} />
                </span>
                <h3>{valor.titulo}</h3>
                <p>{valor.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BandaLlamado
        titulo="Crezcamos juntos"
        texto="Si necesita soporte para una implementación existente o quiere actualizar su solución empresarial, lo tenemos cubierto."
      />
    </>
  );
}
