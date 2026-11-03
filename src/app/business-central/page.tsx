import type { Metadata } from 'next';
import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { Beneficios } from '@/components/secciones/comunes/Beneficios';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { DiagramaModulos } from '@/components/secciones/comunes/DiagramaModulos';
import { Icono } from '@/components/ui/Icono';
import styles from '../paginas.module.css';

export const metadata: Metadata = {
  title: 'Implementación de Dynamics 365 Business Central',
  description:
    'Business Central es el ERP de Microsoft para empresas en crecimiento: finanzas, ventas, compras e inventario conectados, en la nube, local o híbrido.',
};

const MODALIDADES = [
  {
    titulo: 'En la nube',
    texto: 'Sin servidores propios: Microsoft hospeda, respalda y actualiza el sistema.',
  },
  {
    titulo: 'Local',
    texto: 'Instalado en su infraestructura, para empresas con requisitos de control propio.',
  },
  { titulo: 'Híbrido', texto: 'Combina lo mejor de ambos: datos locales con servicios en la nube.' },
];

const AREAS = [
  'Finanzas y contabilidad',
  'Ventas y cuentas por cobrar',
  'Compras y cuentas por pagar',
  'Inventario y almacenes',
  'Proyectos y servicios',
  'Informes en tiempo real y Power BI',
];

export default function PaginaBusinessCentral() {
  return (
    <>
      <CabeceraPagina
        etiqueta="Solución"
        titulo="Implementación de Dynamics 365 Business Central"
        bajada="Aproveche las oportunidades de crecimiento, eficiencia e innovación que ofrece Microsoft Dynamics 365 Business Central para prosperar en el competitivo panorama empresarial actual."
      >
        <p style={{ marginTop: 36 }}>
          <Link href="/contacto/?interes=localizacion-honduras" className="boton boton-acento boton-grande">
            Solicitar diagnóstico <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>

      <section className="seccion">
        <div className={`contenedor ${styles.dosColumnas}`}>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">Qué es</p>
            <h2 className="titulo-seccion">Solución empresarial unificada para empresas en crecimiento</h2>
            <div style={{ marginTop: 48 }}>
              <DiagramaModulos />
            </div>
          </div>
          <div className={styles.texto} {...revelarAlScroll(1)}>
            <p>
              <strong>Business Central es una solución ERP avanzada</strong> que ofrece aplicaciones
              comerciales conectadas, acceso a datos en tiempo real y una plataforma de colaboración
              centralizada. Optimiza las finanzas, las operaciones y la gestión de clientes para tomar
              decisiones informadas y crecer.
            </p>
            <p>
              Si su empresa se ha expandido más allá de las capacidades de su solución contable básica, o
              encuentra obstáculos por sistemas heredados desconectados, Business Central es la solución
              ideal.
            </p>
            <ul className={styles.lista}>
              {AREAS.map((area) => (
                <li key={area}>
                  <Icono nombre="check" tamano={18} /> {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`seccion ${styles.fondoAlterno}`}>
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Modalidades</p>
              <h2 className="titulo-seccion">Nube, local o híbrido</h2>
            </div>
          </div>
          <ul className={styles.tarjetas}>
            {MODALIDADES.map((modalidad, indice) => (
              <li key={modalidad.titulo} className={styles.tarjeta} {...revelarAlScroll(indice)}>
                <span className={styles.numero}>0{indice + 1}</span>
                <h3>{modalidad.titulo}</h3>
                <p>{modalidad.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Beneficios />
      <BandaLlamado
        titulo="¿Business Central es para su empresa?"
        texto="Lo sabremos en una conversación. Revisamos sus procesos y le decimos con franqueza qué resuelve el estándar y qué habría que adaptar."
      />
    </>
  );
}
