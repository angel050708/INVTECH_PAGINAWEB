import styles from './Marquesina.module.css';

const PALABRAS = [
  'Finanzas',
  'Ventas',
  'Compras',
  'Inventario',
  'Facturación con CAI',
  'Retenciones',
  'Punto de venta',
  'Estados de cuenta',
  'Excel',
  'Power BI',
  'Outlook y Teams',
];

export function Marquesina() {
  const lista = (oculta: boolean) => (
    <ul aria-hidden={oculta || undefined}>
      {PALABRAS.map((palabra) => (
        <li key={palabra}>{palabra}</li>
      ))}
    </ul>
  );
  return (
    <div className={styles.marquesina} aria-label="Lo que conecta Business Central">
      <div className={styles.pista}>
        {lista(false)}
        {lista(true)}
      </div>
    </div>
  );
}
