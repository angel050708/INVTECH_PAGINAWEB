import { describe, expect, it } from 'vitest';
import {
  armarMensaje,
  enlacesCorreo,
  formatearTelefono,
  leerIntereses,
  validarContacto,
  type DatosContacto,
} from './contacto';

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

describe('teléfono', () => {
  it('agrega +504 y da formato a 8 dígitos', () => {
    expect(formatearTelefono('98243334')).toBe('+504 9824-3334');
    expect(formatearTelefono('+504 9824 3334')).toBe('+504 9824-3334');
  });
  it('marca error si no son 8 dígitos', () => {
    expect(validarContacto({ ...base, telefono: '9824' }).telefono).toBeDefined();
    expect(validarContacto({ ...base, telefono: '9824-3334' }).telefono).toBeUndefined();
  });
  it('incluye el teléfono con +504 en el mensaje', () => {
    expect(armarMensaje({ ...base, telefono: '98243334' })).toContain('Teléfono: +504 9824-3334');
  });
});

describe('enlacesCorreo', () => {
  it('arma enlaces de Gmail, Outlook y mailto', () => {
    const e = enlacesCorreo('info@invtech.pro', 'Asunto', 'Hola');
    expect(e.gmail).toContain('mail.google.com');
    expect(e.outlook).toContain('outlook.live.com');
    expect(e.aplicacion).toBe('mailto:info@invtech.pro?subject=Asunto&body=Hola');
  });
});
