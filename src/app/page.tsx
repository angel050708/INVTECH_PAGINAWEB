import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { Beneficios } from '@/components/secciones/comunes/Beneficios';
import { LineaFases } from '@/components/secciones/comunes/LineaFases';
import { HeroInicio } from '@/components/secciones/inicio/HeroInicio';
import { QueEsBusinessCentral } from '@/components/secciones/inicio/QueEsBusinessCentral';
import { ServiciosInicio, SolucionesInicio } from '@/components/secciones/inicio/ServiciosInicio';
import { Icono } from '@/components/ui/Icono';
import { FlujoFacturas } from '@/components/ui/FlujoFacturas';
import { MarquesinaApps } from '@/components/ui/MarquesinaApps';

export default function PaginaInicio() {
  return (
    <>
      <HeroInicio />
      <QueEsBusinessCentral />

      <section className="seccion" style={{ paddingTop: 0 }}>
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Datos en tiempo real</p>
              <h2 className="titulo-seccion">Cada venta, registrada en Business Central al momento</h2>
            </div>
            <p className="entrada" style={{ marginTop: 0, maxWidth: '44ch' }}>
              Aplicaciones comerciales conectadas y una plataforma central: lo que pasa en su operación llega
              a finanzas sin volver a digitarlo.
            </p>
          </div>
          <div {...revelarAlScroll(1)}>
            <FlujoFacturas />
          </div>
        </div>
      </section>
      <SolucionesInicio />
      <ServiciosInicio />

      <section className="seccion" style={{ paddingTop: 0 }}>
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Enfoque de implementación</p>
              <h2 className="titulo-seccion">Implementación en seis fases</h2>
            </div>
            <Link href="/metodologia/" className="enlace-flecha">
              Ver la metodología <Icono nombre="flecha" tamano={18} />
            </Link>
          </div>
          <LineaFases />
        </div>
      </section>

      <Beneficios />

      <section className="seccion">
        <div className="contenedor centrado" {...revelarAlScroll()}>
          <p className="etiqueta">Ecosistema Microsoft</p>
          <h2 className="titulo-seccion">Soporte para las aplicaciones de negocio de Microsoft</h2>
        </div>
        <MarquesinaApps />
      </section>

      <BandaLlamado />
    </>
  );
}
