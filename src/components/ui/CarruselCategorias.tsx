import Image from 'next/image';
import { Icono, type NombreIcono } from './Icono';
import styles from './CarruselCategorias.module.css';

interface Categoria {
  nombre: string;
  texto: string;
  /** Foto de la presentación de InvTech; si no hay, se dibuja una tarjeta con ícono */
  foto?: string;
  icono: NombreIcono;
}

const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Gasolineras',
    texto: 'Pista, tienda y crédito en una sola caja.',
    foto: '/categorias/gasolineras.jpg',
    icono: 'surtidor',
  },
  {
    nombre: 'Tiendas de conveniencia',
    texto: 'Ventas rápidas con inventario al día.',
    foto: '/categorias/tiendas.jpg',
    icono: 'tienda',
  },
  {
    nombre: 'Restaurantes',
    texto: 'Cobro en mostrador conectado a contabilidad.',
    foto: '/categorias/restaurantes.jpg',
    icono: 'tarjeta',
  },
  { nombre: 'Farmacias', texto: 'Caja conectada al inventario y a Business Central.', icono: 'check' },
  { nombre: 'Supermercados', texto: 'Varias cajas y sucursales en un solo sistema.', icono: 'caja' },
];

/** Carrusel continuo de los rubros donde funciona BCPOS. Se pausa al pasar el mouse. */
export function CarruselCategorias() {
  return (
    <div className={styles.carrusel} aria-label="Rubros donde funciona BCPOS">
      <div className={styles.pista}>
        {[0, 1].map((copia) => (
          <ul key={copia} aria-hidden={copia === 1 || undefined}>
            {CATEGORIAS.map((c) => (
              <li key={c.nombre} className={styles.tarjeta}>
                {c.foto ? (
                  <Image src={c.foto} alt="" fill sizes="320px" className={styles.foto} />
                ) : (
                  <span className={styles.ilustracion}>
                    <Icono nombre={c.icono} tamano={64} />
                  </span>
                )}
                <div className={styles.texto}>
                  <h3>{c.nombre}</h3>
                  <p>{c.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
