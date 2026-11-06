import { Icono, type NombreIcono } from '@/components/ui/Icono';
import styles from './RedEmpresa.module.css';

interface Nodo {
  etiqueta: string;
  icono: NombreIcono;
  /** Posición en porcentaje del lienzo */
  x: number;
  y: number;
}

const NODOS: Nodo[] = [
  { etiqueta: 'Oficina', icono: 'persona', x: 18, y: 13 },
  { etiqueta: 'Nube', icono: 'nube', x: 82, y: 13 },
  { etiqueta: 'Servidores', icono: 'servidor', x: 11, y: 50 },
  { etiqueta: 'Cámaras', icono: 'camara', x: 89, y: 50 },
  { etiqueta: 'Sucursal', icono: 'tienda', x: 26, y: 87 },
  { etiqueta: 'Internet', icono: 'antena', x: 74, y: 87 },
];

const ANCHO = 400;
const ALTO = 450;
const CENTRO = { x: 200, y: 225 };

/** Red de la empresa: cada punto conectado al centro, con datos que viajan por las líneas. */
export function RedEmpresa() {
  return (
    <div
      className={styles.lienzo}
      role="img"
      aria-label="Oficina, nube, servidores, cámaras, sucursal e internet conectados a la red de su empresa"
    >
      <svg
        viewBox={`0 0 ${ANCHO} ${ALTO}`}
        preserveAspectRatio="none"
        className={styles.lineas}
        aria-hidden="true"
      >
        {NODOS.map((n, i) => {
          const x = (n.x / 100) * ANCHO;
          const y = (n.y / 100) * ALTO;
          const ruta = `M ${CENTRO.x} ${CENTRO.y} L ${x} ${y}`;
          return (
            <g key={n.etiqueta}>
              <path d={ruta} className={styles.linea} />
              <circle
                r="2.6"
                className={styles.paquete}
                style={{ offsetPath: `path('${ruta}')`, animationDelay: `${i * 0.45}s` }}
              />
              <circle
                r="2.6"
                className={`${styles.paquete} ${styles.vuelta}`}
                style={{ offsetPath: `path('${ruta}')`, animationDelay: `${i * 0.45 + 1.3}s` }}
              />
            </g>
          );
        })}
      </svg>

      <div className={styles.centro} aria-hidden="true">
        <span className={styles.onda} />
        <span className={styles.onda} />
        <strong>Su empresa</strong>
      </div>

      {NODOS.map((n, i) => (
        <div
          key={n.etiqueta}
          className={styles.nodo}
          style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * 0.6}s` }}
          aria-hidden="true"
        >
          <span>
            <Icono nombre={n.icono} tamano={22} />
          </span>
          <small>{n.etiqueta}</small>
        </div>
      ))}
    </div>
  );
}
