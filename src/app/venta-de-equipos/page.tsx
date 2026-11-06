import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RedEquipos } from '@/components/animaciones/RedEquipos';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { Elementos } from '@/components/secciones/comunes/Elementos';
import { JsonLd } from '@/components/seo/JsonLd';
import { Icono } from '@/components/ui/Icono';
import { rutaLogo } from '@/data/aplicaciones';
import { APPS_365, CATALOGO, INFRAESTRUCTURA, MARCAS, TELECOMUNICACIONES } from '@/data/verticales';
import { datosServicio } from '@/lib/datos-estructurados';
import { metadatosPagina } from '@/lib/metadatos';
import styles from './equipos.module.css';

const TITULO = 'Venta de computadoras, servidores y equipos de red';
const DESCRIPCION =
  'Computadoras HP, Dell y Lenovo, servidores, switches MikroTik y Aruba, UniFi, puntos de venta, licencias Microsoft 365, CCTV y Starlink.';

export const metadata: Metadata = metadatosPagina(TITULO, DESCRIPCION, '/venta-de-equipos/');

export default function PaginaVentaDeEquipos() {
  return (
    <>
      <JsonLd datos={datosServicio(TITULO, DESCRIPCION, '/venta-de-equipos/')} />
      <CabeceraPagina
        etiqueta="Venta de equipos"
        titulo="Computadoras, servidores y equipos de red para su empresa"
        bajada="Vendemos equipos HP, Dell y Lenovo, switches y puntos de acceso, equipos de punto de venta y controladores para estaciones de servicio. También instalamos la red, el CCTV y la conexión."
      >
        <ul className={styles.indice} aria-label="Lo que vendemos">
          {CATALOGO.map((c) => (
            <li key={c.titulo}>
              <Icono nombre={c.icono} tamano={16} /> {c.titulo}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 28 }}>
          <Link href="/contacto/?interes=venta-de-equipos" className="boton boton-acento boton-grande">
            Solicitar cotización <Icono nombre="flecha" tamano={18} />
          </Link>
        </p>
      </CabeceraPagina>

      <section className="seccion">
        <div className="contenedor">
          <div {...revelarAlScroll()}>
            <RedEquipos />
          </div>
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Catálogo</p>
              <h2 className="titulo-seccion">Qué vendemos</h2>
            </div>
            <p className="entrada" style={{ marginTop: 0, maxWidth: '44ch' }}>
              Le cotizamos el equipo, lo instalamos y le damos soporte técnico y mantenimiento.
            </p>
          </div>
          <ul className={styles.catalogo}>
            {CATALOGO.map((categoria, i) => (
              <li key={categoria.titulo} {...revelarAlScroll(i)}>
                <span className={styles.icono}>
                  <Icono nombre={categoria.icono} tamano={24} />
                </span>
                <h3>{categoria.titulo}</h3>
                <ul>
                  {categoria.productos.map((producto) => (
                    <li key={producto}>{producto}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.marcas} aria-labelledby="titulo-marcas">
        <div className="contenedor centrado">
          <h2 id="titulo-marcas" className="titulo-seccion">
            Marcas con las que trabajamos
          </h2>
        </div>
        <div className={styles.marquesina}>
          <div className={styles.pista}>
            {[0, 1].map((copia) => (
              <ul key={copia} aria-hidden={copia === 1 || undefined}>
                {MARCAS.map((marca) => (
                  <li key={marca.archivo}>
                    <Image
                      src={`/marcas/${marca.archivo}.png`}
                      alt={copia === 0 ? marca.nombre : ''}
                      width={140}
                      height={56}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className={`contenedor ${styles.infra}`}>
          <div {...revelarAlScroll()}>
            <p className="etiqueta">Infraestructura y servicios en la nube</p>
            <h2 className="titulo-seccion">Licencias, red, cámaras y servidores</h2>
            <div style={{ marginTop: 28 }}>
              <Elementos elementos={INFRAESTRUCTURA} columnas={2} variante="lista" />
            </div>
          </div>
          <div className={styles.licencias} {...revelarAlScroll(1)}>
            <p className="etiqueta">Licencias de software corporativo</p>
            <h3>Microsoft 365</h3>
            <p>Correo, Office, Teams, SharePoint, Power BI y Power Apps para su equipo.</p>
            <ul>
              {APPS_365.map((app, i) => (
                <li key={app} style={{ animationDelay: `${i * 0.4}s` }}>
                  <Image src={rutaLogo(app)} alt="" width={40} height={40} unoptimized />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Telecomunicaciones</p>
              <h2 className="titulo-seccion">Internet para su empresa en cualquier parte de Honduras</h2>
            </div>
          </div>
          <ul className={styles.telecom}>
            {TELECOMUNICACIONES.map((t, i) => (
              <li key={t.titulo} className={i === 0 ? styles.starlink : styles.claro} {...revelarAlScroll(i)}>
                <Image
                  src={i === 0 ? '/fotos/starlink.jpg' : '/fotos/claro.jpg'}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className={styles.foto}
                />
                <span className={styles.senal} aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <h3>{t.titulo}</h3>
                <p>{t.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BandaLlamado titulo="Cotice sus equipos con InvTech" />
    </>
  );
}
