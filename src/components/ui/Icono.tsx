const TRAZOS = {
  sello:
    'M12 3l2.4 1.6 2.9-.2.9 2.8 2.3 1.8-1 2.7 1 2.7-2.3 1.8-.9 2.8-2.9-.2L12 21l-2.4-1.6-2.9.2-.9-2.8-2.3-1.8 1-2.7-1-2.7 2.3-1.8.9-2.8 2.9.2zM9 12l2 2 4-4',
  surtidor: 'M4 21V5a2 2 0 012-2h6a2 2 0 012 2v16M3 21h12M7 8h4M14 10h2a2 2 0 012 2v5a1.5 1.5 0 003 0V9l-3-3',
  lupa: 'M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4M8 11l2 2 4-4',
  tabla: 'M4 4h16v16H4zM4 10h16M4 15h16M10 4v16',
  grafica: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  soporte:
    'M4 14v-2a8 8 0 0116 0v2M4 14a2 2 0 002 2h1v-5H6a2 2 0 00-2 2zM20 14a2 2 0 01-2 2h-1v-5h1a2 2 0 012 2zM17 16v1a3 3 0 01-3 3h-2',
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
