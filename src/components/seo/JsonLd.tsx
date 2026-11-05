/** Inserta datos estructurados (schema.org) en la página. */
export function JsonLd({ datos }: { datos: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify no escapa "<"; se reemplaza para que el contenido no pueda cerrar la etiqueta
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, '\\u003c') }}
    />
  );
}
