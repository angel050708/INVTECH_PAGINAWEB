import type { Metadata } from 'next';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { LineasCircuito } from '@/components/ui/LineasCircuito';
import { VALORES } from '@/data/empresa';
import styles from '../paginas.module.css';

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description:
    'InvTech: soluciones empresariales basadas en tecnología para grandes empresas, pymes y corporaciones.',
};

/** Texto de invtech.pro/quienes-somos. */
const BLOQUES = [
  {
    titulo: 'Nuestra historia',
    parrafos: [
      'InvTech se formó con la creencia de no solo brindar soluciones, sino también ser el creador de cambios para ofrecer soluciones que marquen la diferencia. Nuestro crecimiento (y éxito) gira en torno a una creencia constante: “los negocios no se tratan solo de brindar a las personas soluciones a sus problemas. Tiene más que ver con brindar soluciones que ayuden a mejorar la vida”.',
      'Lideramos el camino en el suministro de soluciones empresariales basadas en tecnología a grandes empresas, pymes y corporaciones para transformar sus negocios. Nuestro personal y consultores expertos certificados lo ayudan a analizar las áreas de crecimiento potencial y le brindan una solución empresarial personalizada para lograr el máximo impacto.',
    ],
  },
  {
    titulo: 'Nuestra visión',
    parrafos: [
      'Creemos en transformar los negocios de nuestros clientes para obtener ganancias y ayudarlos en su viaje de transformación digital para crecer juntos y lograr un crecimiento sostenible. Nuestro objetivo es convertirnos en un líder global de TI y en una marca que sea sinónimo de confianza, innovación tecnológica y excelencia en el servicio para impulsar un cambio positivo.',
      'La excelencia es un camino que no se logra de la noche a la mañana: hay que construir hacia él. Creemos en ofrecer lo mejor del negocio y brindar a los clientes soluciones empresariales sostenibles y escalables para ayudar a las empresas a crecer más y mantenerse por delante de la competencia.',
    ],
  },
  {
    titulo: 'Nuestros valores',
    parrafos: [
      'Somos una empresa impulsada por valores que asume la responsabilidad de cumplir su promesa de realizar un cambio positivo. A nuestro equipo de expertos ágiles le encanta actualizarse con el tiempo y valora profundamente los comentarios de nuestros clientes para crecer a medida que aprendemos.',
      'No solo brindamos soluciones a sus problemas comerciales. Nuestro enfoque de priorizar a las personas nos ayuda a desarrollar un entendimiento mutuo y establecer relaciones que duren para siempre.',
    ],
  },
];

export default function PaginaQuienesSomos() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Quiénes somos"
        titulo="Sobre nosotros"
        bajada="Los negocios no se tratan solo de brindar soluciones a los problemas: se trata de brindar soluciones que ayuden a mejorar la vida."
        visual={<LineasCircuito />}
      />

      {BLOQUES.map((bloque, indice) => (
        <section
          key={bloque.titulo}
          className={indice % 2 === 1 ? `seccion ${styles.fondoAlterno}` : 'seccion'}
        >
          <div className={`contenedor ${styles.dosColumnas}`}>
            <h2 className="titulo-seccion" {...revelarAlScroll()}>
              {bloque.titulo}
            </h2>
            <div className={styles.texto} {...revelarAlScroll(1)}>
              {bloque.parrafos.map((parrafo) => (
                <p key={parrafo}>{parrafo}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className={`seccion ${styles.fondoAlterno}`}>
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <h2 className="titulo-seccion">Más que un proveedor de soluciones de TI</h2>
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
