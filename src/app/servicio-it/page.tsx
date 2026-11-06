import type { Metadata } from 'next';
import Image from 'next/image';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';
import { RedEmpresa } from '@/components/secciones/servicio-it/RedEmpresa';
import { JsonLd } from '@/components/seo/JsonLd';
import { Icono } from '@/components/ui/Icono';
import { rutaLogo } from '@/data/aplicaciones';
import { PASOS_IT, SERVICIOS_IT, SOPORTE_BENEFICIOS, SOPORTE_PLANES } from '@/data/servicio-it';
import { CONTACTO, enlaceWhatsapp } from '@/data/sitio';
import { APPS_365, TELECOMUNICACIONES } from '@/data/verticales';
import { datosServicio } from '@/lib/datos-estructurados';
import { metadatosPagina } from '@/lib/metadatos';
import styles from './servicio.module.css';

const TITULO = 'Servicio IT: redes, servidores y soporte técnico en Honduras';
const DESCRIPCION =
  'Redes, servidores en la nube y locales, correo corporativo, CCTV, fibra óptica, licencias de Microsoft 365, Starlink y soporte técnico para empresas en Honduras.';

export const metadata: Metadata = metadatosPagina(TITULO, DESCRIPCION, '/servicio-it/');

const MENSAJE = 'Hola, me interesa el servicio IT de InvTech.';

export default function PaginaServicioIt() {
  return (
    <>
      <JsonLd datos={datosServicio(TITULO, DESCRIPCION, '/servicio-it/')} />
      <CabeceraPagina
        etiqueta="Servicio IT"
        titulo="Infraestructura y soporte tecnológico para su empresa"
        bajada="Redes, servidores, correo corporativo, cámaras, licencias y conexión a internet: lo instalamos, lo configuramos y le damos soporte técnico y mantenimiento."
        fondo={{
          src: '/fotos/it-fibra-4k.jpg',
          alt: 'Cables de fibra óptica conectados a un equipo de red en un rack',
        }}
      >
        <div className={styles.acciones}>
          <a
            href={enlaceWhatsapp(MENSAJE)}
            target="_blank"
            rel="noopener noreferrer"
            className="boton boton-acento boton-grande"
          >
            <Icono nombre="whatsapp" tamano={20} /> Escribir por WhatsApp
          </a>
          <a href={`mailto:${CONTACTO.correo}?subject=Servicio%20IT`} className={styles.correo}>
            <Icono nombre="correo" tamano={20} /> {CONTACTO.correo}
          </a>
        </div>
      </CabeceraPagina>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Soluciones de infraestructura tecnológica</p>
              <h2 className="titulo-seccion">Toda su infraestructura, conectada y en orden</h2>
            </div>
          </div>
          <div className={styles.infra}>
            <div className={styles.red} {...revelarAlScroll()}>
              <RedEmpresa />
            </div>
            <ul className={styles.servicios}>
              {SERVICIOS_IT.map((s, i) => (
                <li key={s.titulo} {...revelarAlScroll(i)}>
                  <span className={styles.icono}>
                    <Icono nombre={s.icono} tamano={22} />
                  </span>
                  <div>
                    <h3>{s.titulo}</h3>
                    <p>{s.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className={styles.licencias} {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Licencias de software corporativo</p>
              <h2 className="titulo-seccion">Microsoft 365 para todo su equipo</h2>
              <p className={styles.texto}>
                Correo, Office, Teams, SharePoint, Power BI y Power Apps con licencias corporativas,
                instaladas y configuradas en cada equipo.
              </p>
            </div>
            <ul className={styles.apps}>
              {APPS_365.map((app, i) => (
                <li key={app} style={{ animationDelay: `${i * 0.35}s` }}>
                  <Image src={rutaLogo(app)} alt="" width={48} height={48} unoptimized />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className={styles.soporte}>
            <div className={styles.fotoSoporte} {...revelarAlScroll()}>
              <Image
                src="/fotos/it-tecnico-4k.jpg"
                alt="Técnico conectando cables de red en un switch dentro de un rack"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </div>
            <div {...revelarAlScroll(1)}>
              <p className="etiqueta">Soporte técnico</p>
              <h2 className="titulo-seccion">Soporte especializado y mantenimiento</h2>
              <ul className={styles.beneficios}>
                {SOPORTE_BENEFICIOS.map((b) => (
                  <li key={b}>
                    <Icono nombre="check" tamano={18} />
                    {b}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subtitulo}>Elija cómo recibir el soporte</h3>
              <ul className={styles.planes}>
                {SOPORTE_PLANES.map((p) => (
                  <li key={p.titulo}>
                    <strong>{p.titulo}</strong>
                    <span>{p.texto}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion fondo-alterno">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Telecomunicaciones</p>
              <h2 className="titulo-seccion">Internet para su empresa en cualquier parte de Honduras</h2>
            </div>
          </div>
          <ul className={styles.telecom}>
            {TELECOMUNICACIONES.map((t, i) => (
              <li key={t.titulo} {...revelarAlScroll(i)}>
                <Image
                  src={i === 0 ? '/fotos/starlink.jpg' : '/fotos/claro.jpg'}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                  className={styles.fotoTelecom}
                />
                <h3>{t.titulo}</h3>
                <p>{t.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Cómo trabajamos</p>
              <h2 className="titulo-seccion">Del diagnóstico al soporte continuo</h2>
            </div>
          </div>
          <ol className={styles.pasos}>
            {PASOS_IT.map((p, i) => (
              <li key={p.titulo} {...revelarAlScroll(i)}>
                <span className={styles.numero}>{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <BandaLlamado
        titulo="Hablemos de su infraestructura"
        texto="Escríbanos por WhatsApp o correo y le respondemos con una propuesta para su empresa."
      />
    </>
  );
}
