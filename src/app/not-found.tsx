import Link from 'next/link';
import { CabeceraPagina } from '@/components/secciones/comunes/CabeceraPagina';

export default function NoEncontrada() {
  return (
    <CabeceraPagina
      etiqueta="Error 404"
      titulo="Página no encontrada"
      bajada="Puede que el enlace haya cambiado. Vuelva al inicio o escríbanos si buscaba algo en particular."
    >
      <p style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
        <Link href="/" className="boton boton-acento boton-grande">
          Ir al inicio
        </Link>
        <Link href="/contacto/" className="boton boton-borde boton-grande">
          Contacto
        </Link>
      </p>
    </CabeceraPagina>
  );
}
