'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { unirClases } from '@/lib/clases';
import styles from './TerminalBcpos.module.css';

/**
 * Terminal PAX A920 (POS BAC) con la app BCPOS: tres escenas en pestañas.
 * La interfaz copia la app real (carrito, surtidores, clientes Crédito y LEAL); los datos son de ejemplo.
 * Las pestañas avanzan solas; al presionar una, se queda en esa escena.
 */

type Escena = 'credito' | 'bomba' | 'leal';

interface DatosEscena {
  id: Escena;
  pestana: string;
  titulo: string;
  pasos: string[];
  /** Duración de cada paso en milisegundos */
  tiempos: number[];
  /** A qué paso de la lista izquierda corresponde cada paso de la pantalla */
  paso: number[];
}

const ESCENAS: DatosEscena[] = [
  {
    id: 'credito',
    pestana: 'Consulta de crédito',
    titulo: 'El pistero consulta el saldo del cliente de crédito antes de facturar',
    pasos: [
      'Elige Crédito en el carrito',
      'Busca al cliente por nombre o RTN',
      'Ve su estado y saldo disponible',
    ],
    tiempos: [1400, 1300, 2200, 1600, 3200],
    paso: [0, 0, 1, 1, 2],
  },
  {
    id: 'bomba',
    pestana: 'Autorización de bomba',
    titulo: 'Ninguna bomba despacha sin una autorización registrada en el sistema',
    pasos: [
      'Elige el surtidor',
      'Selecciona combustible y tipo: full o monto',
      'La bomba despacha y la venta queda facturada',
    ],
    tiempos: [1400, 1200, 1800, 1800, 1200, 2000, 2800],
    paso: [0, 0, 1, 1, 1, 2, 2],
  },
  {
    id: 'leal',
    pestana: 'Leal',
    titulo: 'El cliente acumula puntos Leal en la misma factura',
    pasos: ['Elige LEAL en el carrito', 'Busca al cliente por su DNI', 'Asigna el cliente y suma puntos'],
    tiempos: [1400, 1300, 2200, 1600, 3200],
    paso: [0, 0, 1, 1, 2],
  },
];

export function TerminalBcpos() {
  const [indice, setIndice] = useState(0);
  const [paso, setPaso] = useState(0);
  const [fijada, setFijada] = useState(false);
  const [sinMovimiento, setSinMovimiento] = useState(false);
  const escena = ESCENAS[indice];

  useEffect(() => {
    const consulta = window.matchMedia('(prefers-reduced-motion: reduce)');
    const actualizar = () => setSinMovimiento(consulta.matches);
    actualizar();
    consulta.addEventListener('change', actualizar);
    return () => consulta.removeEventListener('change', actualizar);
  }, []);

  useEffect(() => {
    if (sinMovimiento) return;
    const temporizador = window.setTimeout(() => {
      if (paso < escena.tiempos.length - 1) {
        setPaso(paso + 1);
      } else {
        setPaso(0);
        if (!fijada) setIndice((indice + 1) % ESCENAS.length);
      }
    }, escena.tiempos[paso]);
    return () => window.clearTimeout(temporizador);
  }, [paso, indice, fijada, escena, sinMovimiento]);

  const elegir = (i: number) => {
    setIndice(i);
    setPaso(0);
    setFijada(true);
  };

  // Con movimiento reducido se muestra el resultado de cada escena, sin animar
  const pasoVisible = sinMovimiento ? escena.tiempos.length - 1 : paso;
  const pasoLista = escena.paso[pasoVisible];

  return (
    <div className={styles.escena}>
      <div className={styles.texto}>
        <div className={styles.pestanas} role="tablist" aria-label="Funciones de BCPOS en la terminal">
          {ESCENAS.map((e, i) => (
            <button
              key={e.id}
              type="button"
              role="tab"
              id={`pestana-${e.id}`}
              aria-selected={i === indice}
              aria-controls="panel-terminal"
              className={unirClases(styles.pestana, i === indice && styles.activa)}
              onClick={() => elegir(i)}
            >
              {e.pestana}
              {i === indice && !fijada && !sinMovimiento && (
                <span
                  className={styles.progreso}
                  style={{ animationDuration: `${escena.tiempos.reduce((a, b) => a + b, 0)}ms` }}
                  key={`${indice}`}
                />
              )}
            </button>
          ))}
        </div>

        <div id="panel-terminal" role="tabpanel" aria-labelledby={`pestana-${escena.id}`}>
          <h3 className={styles.titulo}>{escena.titulo}</h3>
          <ol className={styles.pasos}>
            {escena.pasos.map((texto, i) => (
              <li key={texto} className={i === pasoLista ? styles.pasoActivo : undefined}>
                <span>{i + 1}</span>
                {texto}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className={styles.terminal} aria-hidden="true">
        <div className={styles.impresora} />
        <div className={styles.cuerpo}>
          <div className={styles.sensor} />
          <div className={styles.pantalla}>
            <div className={styles.barraEstado}>
              <span>
                <b>002</b> ESTACIÓN CENTRO
              </span>
              <span>T-1</span>
            </div>
            <div className={styles.contenido} key={`${escena.id}-${pasoVisible}`}>
              {escena.id === 'credito' && <PantallaCredito paso={pasoVisible} />}
              {escena.id === 'bomba' && <PantallaBomba paso={pasoVisible} />}
              {escena.id === 'leal' && <PantallaLeal paso={pasoVisible} />}
            </div>
            <MenuInferior activo={escena.id === 'bomba' ? 'surtidores' : 'carrito'} />
          </div>
          <div className={styles.marca}>PAX</div>
        </div>
        <div className={styles.lector} />
      </div>
    </div>
  );
}

/* ---------- Piezas de la interfaz de BCPOS ---------- */

function Chips({ presionado }: { presionado?: 'Crédito' | 'LEAL' }) {
  return (
    <div className={styles.chips}>
      {['CF', 'RTN', 'Crédito', 'LEAL'].map((c) => (
        <span
          key={c}
          className={unirClases(c === 'LEAL' && styles.chipLeal, c === presionado && styles.presionado)}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function Totales({ total, listo }: { total: string; listo?: boolean }) {
  return (
    <div className={styles.totales}>
      <div>
        <span>TOTAL</span>
        <b>Lps. {total}</b>
      </div>
      <span className={unirClases(styles.cobrar, listo && styles.cobrarListo)}>Cobrar</span>
    </div>
  );
}

function Modal({
  titulo,
  subtitulo,
  color,
  children,
}: {
  titulo: string;
  subtitulo?: string;
  color: 'naranja' | 'azul';
  children: ReactNode;
}) {
  return (
    <div className={styles.fondoModal}>
      <div className={styles.modal}>
        <div className={styles.modalCabeza}>
          <span className={color === 'naranja' ? styles.iconoNaranja : styles.iconoAzul} />
          <span>
            <b>{titulo}</b>
            {subtitulo && <small>{subtitulo}</small>}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function Carrito({ conProducto }: { conProducto: boolean }) {
  return conProducto ? (
    <div className={styles.linea}>
      <span>
        <b>REGULAR</b>
        <small>12.400 x L. 40.32</small>
      </span>
      <b>L. 500.00</b>
    </div>
  ) : (
    <div className={styles.vacio}>
      <span className={styles.iconoCarrito} />
      El carrito está vacío
    </div>
  );
}

function PantallaCredito({ paso }: { paso: number }) {
  const seleccionado = paso >= 4;
  return (
    <>
      <div className={unirClases(styles.cliente, seleccionado && styles.clienteCredito)}>
        {seleccionado ? (
          <>
            <b>TRANSPORTES DEL VALLE</b>
            <span className={styles.etiquetaCredito}>CRÉDITO · ACTIVO</span>
            <small>Disponible: L. 37,420.50 de L. 150,000.00</small>
          </>
        ) : (
          <b>Sin cliente seleccionado</b>
        )}
      </div>
      <Chips presionado={paso === 1 ? 'Crédito' : undefined} />
      <Carrito conProducto />
      <Totales total="500.00" listo={seleccionado} />
      {(paso === 2 || paso === 3) && (
        <Modal titulo="Buscar Cliente" subtitulo="Crédito" color="naranja">
          <div className={styles.buscador}>
            <span className={paso === 2 ? styles.escribiendo : undefined}>Transportes</span>
          </div>
          {paso === 3 && (
            <div className={styles.resultado}>
              <span>
                <b>TRANSPORTES DEL VALLE</b>
                <small>RTN 0801-1999-04521</small>
              </span>
              <span className={styles.activo}>ACTIVO</span>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}

function PantallaBomba({ paso }: { paso: number }) {
  if (paso <= 1 || paso >= 5) {
    return (
      <div className={styles.surtidores}>
        <div className={styles.surtidoresCabeza}>
          <b>Surtidores</b>
          <span>4 activos</span>
        </div>
        <div className={styles.rejilla}>
          {[1, 2, 3, 4].map((n) => {
            const estado = n === 3 ? (paso === 5 ? 'despachando' : paso === 6 ? 'facturado' : '') : '';
            return (
              <div
                key={n}
                className={unirClases(
                  styles.surtidor,
                  estado === 'despachando' && styles.despachando,
                  estado === 'facturado' && styles.facturado,
                )}
              >
                <b>{n}</b>
                {estado === 'despachando' && (
                  <span className={styles.estadoSurtidor}>
                    REGULAR
                    <small>Despachando…</small>
                  </span>
                )}
                {estado === 'facturado' && (
                  <span className={styles.estadoSurtidor}>
                    L. 500.00
                    <small>FACTURADO</small>
                  </span>
                )}
                {!estado && <span className={styles.iconoBomba} />}
                <span className={unirClases(styles.autorizar, n === 3 && paso === 1 && styles.presionado)}>
                  Autorizar
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <Modal titulo="3 · Autorizar" color="azul">
      <small className={styles.subtitulo}>1. Combustible / manguera</small>
      {[
        ['SUPER', 'Manguera 1'],
        ['REGULAR', 'Manguera 2'],
        ['DIESEL', 'Manguera 3'],
      ].map(([producto, manguera]) => (
        <div
          key={producto}
          className={unirClases(styles.opcion, producto === 'REGULAR' && paso >= 2 && styles.opcionElegida)}
        >
          <span className={styles.radio} />
          <span>
            <b>{producto}</b>
            <small>{manguera}</small>
          </span>
        </div>
      ))}
      {paso >= 3 && (
        <>
          <small className={styles.subtitulo}>2. Tipo de autorización</small>
          <div className={styles.tipos}>
            <span className={styles.tipoElegido}>FULL</span>
            <span>MONTO</span>
          </div>
          <p className={styles.info}>Se autorizará la manguera 2 (REGULAR) a tanque completo.</p>
        </>
      )}
      <span className={unirClases(styles.botonAzul, paso === 4 && styles.presionado)}>Autorizar</span>
    </Modal>
  );
}

function PantallaLeal({ paso }: { paso: number }) {
  const asignado = paso >= 4;
  return (
    <>
      <div className={unirClases(styles.cliente, asignado && styles.clienteLeal)}>
        {asignado ? (
          <>
            <b>MARÍA FERNANDA LÓPEZ</b>
            <span className={styles.etiquetaLeal}>LEAL</span>
            <small>Puntos: 2,340 · +50 por esta compra</small>
          </>
        ) : (
          <b>Sin cliente seleccionado</b>
        )}
      </div>
      <Chips presionado={paso === 1 ? 'LEAL' : undefined} />
      <Carrito conProducto />
      <Totales total="500.00" listo={asignado} />
      {(paso === 2 || paso === 3) && (
        <Modal titulo="Cliente LEAL" color="naranja">
          <div className={styles.buscarPor}>
            <span className={styles.dni}>✓ DNI</span>
            <span>Otros</span>
          </div>
          <div className={unirClases(styles.buscador, styles.buscadorLeal)}>
            <span className={paso === 2 ? styles.escribiendo : undefined}>0801199004521</span>
          </div>
          {paso === 3 && (
            <>
              <div className={styles.resultado}>
                <span>
                  <b>MARÍA FERNANDA LÓPEZ</b>
                  <small>2,340 puntos</small>
                </span>
              </div>
              <span className={styles.botonLeal}>Asignar a Factura</span>
            </>
          )}
        </Modal>
      )}
    </>
  );
}

function MenuInferior({ activo }: { activo: 'carrito' | 'surtidores' }) {
  return (
    <div className={styles.menu}>
      {['Productos', 'Surtidores', 'Carrito', 'Documentos'].map((m) => (
        <span key={m} className={m.toLowerCase() === activo ? styles.menuActivo : undefined}>
          {m}
        </span>
      ))}
    </div>
  );
}
