import { describe, expect, it } from 'vitest';
import { armarMensaje, leerIntereses, validarContacto, type DatosContacto } from './contacto';

const base: DatosContacto = {
  nombre: 'Ana',
  empresa: 'Gasolinera El Sol',
  correo: 'ana@elsol.hn',
  telefono: '',
  mensaje: 'Queremos integrar el POS.',
  intereses: ['power-bi'],
};

describe('validarContacto', () => {
  it('acepta datos completos', () => {
    expect(validarContacto(base)).toEqual({});
  });
  it('marca los obligatorios y el correo inválido', () => {
    const errores = validarContacto({ ...base, nombre: ' ', empresa: '', correo: 'ana@', mensaje: '' });
    expect(Object.keys(errores).sort()).toEqual(['correo', 'empresa', 'mensaje', 'nombre']);
  });
});

describe('leerIntereses', () => {
  it('ignora slugs inexistentes y repetidos', () => {
    expect(leerIntereses('soporte,nada,soporte')).toEqual(['soporte']);
    expect(leerIntereses(null)).toEqual([]);
  });
});

describe('armarMensaje', () => {
  it('incluye los datos, el interés y omite el teléfono vacío', () => {
    const texto = armarMensaje(base);
    expect(texto).toContain('Empresa: Gasolinera El Sol');
    expect(texto).toContain('Interés: Implementación de Power BI');
    expect(texto).not.toContain('Teléfono');
    expect(texto.endsWith('Queremos integrar el POS.')).toBe(true);
  });
});
