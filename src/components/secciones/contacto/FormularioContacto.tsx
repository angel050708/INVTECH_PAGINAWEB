'use client';

import { useSearchParams } from 'next/navigation';
import { useState, type ChangeEvent, type MouseEvent } from 'react';
import { Icono } from '@/components/ui/Icono';
import { INTERESES } from '@/data/paginas';
import { CONTACTO, enlaceWhatsapp } from '@/data/sitio';
import {
  armarMensaje,
  enlacesCorreo,
  leerIntereses,
  validarContacto,
  type DatosContacto,
  type ErroresContacto,
} from '@/lib/contacto';
import styles from './FormularioContacto.module.css';

type Campo = 'nombre' | 'empresa' | 'correo' | 'telefono' | 'mensaje';

/**
 * Formulario que arma el mensaje y lo envía por WhatsApp o correo.
 * Los botones son enlaces normales: el navegador los abre siempre, sin bloqueos de ventanas emergentes.
 */
export function FormularioContacto() {
  const parametros = useSearchParams();
  const [datos, setDatos] = useState<DatosContacto>(() => ({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    mensaje: '',
    intereses: leerIntereses(parametros.get('interes')),
  }));
  const [errores, setErrores] = useState<ErroresContacto>({});
  const [opcionesCorreo, setOpcionesCorreo] = useState(false);
  const [enviado, setEnviado] = useState('');

  const cambiar = (campo: Campo) => (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setDatos((actual) => ({ ...actual, [campo]: evento.target.value }));

  const alternar = (slug: string) =>
    setDatos((actual) => ({
      ...actual,
      intereses: actual.intereses.includes(slug)
        ? actual.intereses.filter((x) => x !== slug)
        : [...actual.intereses, slug],
    }));

  const texto = armarMensaje(datos);
  const asunto = `Solicitud de información: ${datos.empresa.trim() || 'invtech.pro'}`;
  const correo = enlacesCorreo(CONTACTO.correo, asunto, texto);

  /** Revisa los datos; si falta algo, detiene el enlace y lleva el foco al primer error. */
  function validar(evento: MouseEvent<HTMLElement>): boolean {
    const nuevos = validarContacto(datos);
    setErrores(nuevos);
    const primero = Object.keys(nuevos)[0];
    if (!primero) return true;
    evento.preventDefault();
    setOpcionesCorreo(false);
    document.getElementById(`campo-${primero}`)?.focus();
    return false;
  }

  return (
    <form className={styles.formulario} onSubmit={(e) => e.preventDefault()} noValidate>
      <h2>Solicitud de información</h2>
      <p className={styles.nota}>Los campos con * son obligatorios.</p>

      <div className={styles.dos}>
        <CampoTexto
          id="nombre"
          etiqueta="Nombre *"
          valor={datos.nombre}
          onChange={cambiar('nombre')}
          error={errores.nombre}
          autoComplete="name"
        />
        <CampoTexto
          id="empresa"
          etiqueta="Empresa *"
          valor={datos.empresa}
          onChange={cambiar('empresa')}
          error={errores.empresa}
          autoComplete="organization"
        />
        <CampoTexto
          id="correo"
          etiqueta="Correo electrónico *"
          tipo="email"
          valor={datos.correo}
          onChange={cambiar('correo')}
          error={errores.correo}
          autoComplete="email"
        />
        <div className={styles.campo}>
          <label htmlFor="campo-telefono">Teléfono</label>
          <div className={styles.telefono}>
            <span aria-hidden="true">+504</span>
            <input
              id="campo-telefono"
              name="telefono"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="9824-3334"
              aria-describedby={errores.telefono ? 'campo-telefono-error' : 'campo-telefono-ayuda'}
              aria-invalid={errores.telefono ? true : undefined}
              value={datos.telefono}
              onChange={cambiar('telefono')}
              maxLength={14}
            />
          </div>
          {errores.telefono ? (
            <span id="campo-telefono-error" className={styles.error}>
              {errores.telefono}
            </span>
          ) : (
            <span id="campo-telefono-ayuda" className={styles.ayuda}>
              Número de Honduras, 8 dígitos.
            </span>
          )}
        </div>
      </div>

      <fieldset className={styles.intereses}>
        <legend>¿En qué le podemos ayudar?</legend>
        <div>
          {INTERESES.map((interes) => (
            <label key={interes.slug} className={styles.chip}>
              <input
                type="checkbox"
                checked={datos.intereses.includes(interes.slug)}
                onChange={() => alternar(interes.slug)}
              />
              <span>{interes.etiqueta}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <CampoTexto
        id="mensaje"
        etiqueta="Mensaje *"
        valor={datos.mensaje}
        onChange={cambiar('mensaje')}
        error={errores.mensaje}
        multilinea
      />

      <div className={styles.botones}>
        <a
          href={enlaceWhatsapp(texto)}
          target="_blank"
          rel="noopener noreferrer"
          className="boton boton-acento boton-grande"
          onClick={(e) =>
            validar(e) && setEnviado('Abrimos WhatsApp con su mensaje listo: solo falta presionar enviar.')
          }
        >
          <Icono nombre="whatsapp" tamano={20} /> Enviar por WhatsApp
        </a>
        <button
          type="button"
          className={`boton boton-grande ${styles.secundario}`}
          aria-expanded={opcionesCorreo}
          aria-controls="opciones-correo"
          onClick={(e) => validar(e) && setOpcionesCorreo((v) => !v)}
        >
          <Icono nombre="correo" tamano={20} /> Enviar por correo
        </button>
      </div>

      {opcionesCorreo && (
        <div id="opciones-correo" className={styles.opcionesCorreo}>
          <p>¿Con qué correo lo envía?</p>
          <div>
            <a
              href={correo.gmail}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setEnviado('Abrimos Gmail con su mensaje listo: solo falta presionar enviar.')}
            >
              Gmail
            </a>
            <a
              href={correo.outlook}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setEnviado('Abrimos Outlook con su mensaje listo: solo falta presionar enviar.')}
            >
              Outlook
            </a>
            <a
              href={correo.aplicacion}
              onClick={() => setEnviado('Abrimos su aplicación de correo con el mensaje listo.')}
            >
              Aplicación de correo
            </a>
          </div>
          <small>
            ¿No se abre? Escríbanos a <a href={`mailto:${CONTACTO.correo}`}>{CONTACTO.correo}</a>.
          </small>
        </div>
      )}

      <p className={styles.estado} role="status">
        {enviado}
      </p>
    </form>
  );
}

interface PropsCampo {
  id: Campo;
  etiqueta: string;
  valor: string;
  onChange: (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  tipo?: string;
  error?: string;
  autoComplete?: string;
  multilinea?: boolean;
}

function CampoTexto({
  id,
  etiqueta,
  valor,
  onChange,
  tipo = 'text',
  error,
  autoComplete,
  multilinea,
}: PropsCampo) {
  const idCampo = `campo-${id}`;
  const comunes = {
    id: idCampo,
    name: id,
    value: valor,
    onChange,
    autoComplete,
    spellCheck: tipo === 'email' ? false : undefined,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${idCampo}-error` : undefined,
  };
  return (
    <div className={styles.campo}>
      <label htmlFor={idCampo}>{etiqueta}</label>
      {multilinea ? <textarea rows={5} {...comunes} /> : <input type={tipo} {...comunes} />}
      {error && (
        <span id={`${idCampo}-error`} className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}
