'use client';

import { useSearchParams } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Icono } from '@/components/ui/Icono';
import { CONTACTO, enlaceWhatsapp } from '@/data/sitio';
import { SERVICIOS } from '@/data/servicios';
import {
  armarMensaje,
  leerIntereses,
  validarContacto,
  type DatosContacto,
  type ErroresContacto,
} from '@/lib/contacto';
import styles from './FormularioContacto.module.css';

type Canal = 'whatsapp' | 'correo';

export function FormularioContacto() {
  const parametros = useSearchParams();
  const [intereses, setIntereses] = useState<string[]>(() => leerIntereses(parametros.get('interes')));
  const [errores, setErrores] = useState<ErroresContacto>({});
  const [enviado, setEnviado] = useState<Canal | null>(null);

  const alternar = (slug: string) =>
    setIntereses((actual) => (actual.includes(slug) ? actual.filter((x) => x !== slug) : [...actual, slug]));

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const formulario = new FormData(evento.currentTarget);
    const canal = ((evento.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value as Canal;
    const datos: DatosContacto = {
      nombre: String(formulario.get('nombre') ?? ''),
      empresa: String(formulario.get('empresa') ?? ''),
      correo: String(formulario.get('correo') ?? ''),
      telefono: String(formulario.get('telefono') ?? ''),
      mensaje: String(formulario.get('mensaje') ?? ''),
      intereses,
    };

    const nuevosErrores = validarContacto(datos);
    setErrores(nuevosErrores);
    const primero = Object.keys(nuevosErrores)[0];
    if (primero) {
      evento.currentTarget.querySelector<HTMLElement>(`[name="${primero}"]`)?.focus();
      return;
    }

    const texto = armarMensaje(datos);
    const destino =
      canal === 'correo'
        ? `mailto:${CONTACTO.correo}?subject=${encodeURIComponent(`Solicitud de información: ${datos.empresa.trim()}`)}&body=${encodeURIComponent(texto)}`
        : enlaceWhatsapp(texto);

    window.open(destino, canal === 'correo' ? '_self' : '_blank', 'noopener');
    setEnviado(canal === 'correo' ? 'correo' : 'whatsapp');
  }

  return (
    <form className={styles.formulario} onSubmit={enviar} noValidate>
      <h2>Solicitud de información</h2>
      <p className={styles.nota}>Los campos con * son obligatorios.</p>

      <div className={styles.dos}>
        <Campo nombre="nombre" etiqueta="Nombre *" error={errores.nombre} autoComplete="name" />
        <Campo nombre="empresa" etiqueta="Empresa *" error={errores.empresa} autoComplete="organization" />
        <Campo
          nombre="correo"
          etiqueta="Correo electrónico *"
          tipo="email"
          error={errores.correo}
          autoComplete="email"
        />
        <Campo nombre="telefono" etiqueta="Teléfono" tipo="tel" autoComplete="tel" />
      </div>

      <fieldset className={styles.intereses}>
        <legend>¿En qué le podemos ayudar?</legend>
        <div>
          {SERVICIOS.map((servicio) => (
            <label key={servicio.slug} className={styles.chip}>
              <input
                type="checkbox"
                checked={intereses.includes(servicio.slug)}
                onChange={() => alternar(servicio.slug)}
              />
              <span>{servicio.titulo}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Campo nombre="mensaje" etiqueta="Mensaje *" error={errores.mensaje} multilinea />

      <div className={styles.botones}>
        <button type="submit" value="whatsapp" className="boton boton-acento boton-grande">
          <Icono nombre="whatsapp" tamano={20} /> Enviar por WhatsApp
        </button>
        <button type="submit" value="correo" className={`boton boton-grande ${styles.secundario}`}>
          <Icono nombre="correo" tamano={20} /> Enviar por correo
        </button>
      </div>

      <p className={styles.estado} role="status">
        {enviado === 'whatsapp' && 'Abrimos WhatsApp con su mensaje listo: solo falta presionar enviar.'}
        {enviado === 'correo' &&
          'Abrimos su programa de correo con el mensaje listo: solo falta presionar enviar.'}
      </p>
    </form>
  );
}

interface PropsCampo {
  nombre: string;
  etiqueta: string;
  tipo?: string;
  error?: string;
  autoComplete?: string;
  multilinea?: boolean;
}

function Campo({ nombre, etiqueta, tipo = 'text', error, autoComplete, multilinea }: PropsCampo) {
  const id = `campo-${nombre}`;
  const comunes = {
    id,
    name: nombre,
    autoComplete,
    spellCheck: tipo === 'email' ? false : undefined,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
  };
  return (
    <div className={styles.campo}>
      <label htmlFor={id}>{etiqueta}</label>
      {multilinea ? <textarea rows={5} {...comunes} /> : <input type={tipo} {...comunes} />}
      {error && (
        <span id={`${id}-error`} className={styles.error}>
          {error}
        </span>
      )}
    </div>
  );
}
