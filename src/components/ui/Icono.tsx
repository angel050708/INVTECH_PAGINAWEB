const TRAZOS = {
  sello:
    'M12 3l2.4 1.6 2.9-.2.9 2.8 2.3 1.8-1 2.7 1 2.7-2.3 1.8-.9 2.8-2.9-.2L12 21l-2.4-1.6-2.9.2-.9-2.8-2.3-1.8 1-2.7-1-2.7 2.3-1.8.9-2.8 2.9.2zM9 12l2 2 4-4',
  surtidor: 'M4 21V5a2 2 0 012-2h6a2 2 0 012 2v16M3 21h12M7 8h4M14 10h2a2 2 0 012 2v5a1.5 1.5 0 003 0V9l-3-3',
  lupa: 'M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4M8 11l2 2 4-4',
  tabla: 'M4 4h16v16H4zM4 10h16M4 15h16M10 4v16',
  grafica: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  soporte:
    'M4 14v-2a8 8 0 0116 0v2M4 14a2 2 0 002 2h1v-5H6a2 2 0 00-2 2zM20 14a2 2 0 01-2 2h-1v-5h1a2 2 0 012 2zM17 16v1a3 3 0 01-3 3h-2',
  billete:
    'M3 7h18v11H3zM5 4h14M12 15.5v-6M10 10.5c0-.8.9-1.2 2-1.2s2 .5 2 1.3c0 1.8-4 .8-4 2.7 0 .8.9 1.3 2 1.3s2-.4 2-1.2',
  calendario: 'M4 6h16v14H4zM4 10h16M8 3v5M16 3v5M8 14h2M12 14h2M16 14h0M8 17h2M12 17h2',
  engranaje:
    'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z',
  caja: 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9',
  persona: 'M9 11a4 4 0 100-8 4 4 0 000 8zM2 21a7 7 0 0114 0M16 13l3-3 3 3M19 10v8',
  flecha: 'M5 12h14M13 6l6 6-6 6',
  telefono: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2',
  correo: 'M3 6h18v12H3zM3 7l9 6 9-6',
  whatsapp:
    'M4 20l1.3-3.9A8 8 0 1112 20a8 8 0 01-4-1.1zM9 9c0 3 2 5 5 6l1.2-1.2-1.7-1-.8.7c-1-.4-1.8-1.2-2.2-2.2l.7-.8-1-1.7z',
  check: 'M5 12l4 4 10-10',
  menu: 'M4 7h16M4 12h16M4 17h16',
  cerrar: 'M6 6l12 12M18 6L6 18',
  ubicacion: 'M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4z',
} as const;

export type NombreIcono = keyof typeof TRAZOS;

export function Icono({ nombre, tamano = 22 }: { nombre: NombreIcono; tamano?: number }) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={TRAZOS[nombre]} />
    </svg>
  );
}
