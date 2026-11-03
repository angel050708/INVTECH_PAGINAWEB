import Link from 'next/link';
import { revelarAlScroll } from '@/components/efectos/revelar';
import { BandaLlamado } from '@/components/secciones/BandaLlamado';
import { Ecosistema } from '@/components/secciones/comunes/Ecosistema';
import { Beneficios } from '@/components/secciones/comunes/Beneficios';
import { LineaFases } from '@/components/secciones/comunes/LineaFases';
import { PreguntasFrecuentes } from '@/components/secciones/comunes/PreguntasFrecuentes';
import { Autodiagnostico } from '@/components/secciones/inicio/Autodiagnostico';
import { HeroInicio } from '@/components/secciones/inicio/HeroInicio';
import { QueEsBusinessCentral } from '@/components/secciones/inicio/QueEsBusinessCentral';
import { ServiciosInicio } from '@/components/secciones/inicio/ServiciosInicio';
import { Icono } from '@/components/ui/Icono';

export default function PaginaInicio() {
  return (
    <>
      <HeroInicio />
      <Ecosistema />
      <QueEsBusinessCentral />
      <ServiciosInicio />

      <section className="seccion">
        <div className="contenedor">
          <div className="cabeza-seccion" {...revelarAlScroll()}>
            <div>
              <p className="etiqueta">Enfoque de implementación</p>
              <h2 className="titulo-seccion">Implementación en seis fases, con un entregable en cada una</h2>
            </div>
            <Link href="/metodologia/" className="enlace-flecha">
              Ver la metodología completa <Icono nombre="flecha" tamano={18} />
            </Link>
          </div>
          <LineaFases />
        </div>
      </section>

      <Autodiagnostico />
      <Beneficios />
      <PreguntasFrecuentes />
      <BandaLlamado />
    </>
  );
}
