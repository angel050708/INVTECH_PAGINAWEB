# InvTech · sitio web

Sitio de InvTech (Microsoft Dynamics 365 Business Central en Honduras). Mismo stack que Guerrero Academy:
Next.js 16 (App Router) + React 19 + TypeScript + CSS Modules, Vitest, ESLint y Prettier.

## Rutas

| Ruta                                 | Contenido                                                                                |
| ------------------------------------ | ---------------------------------------------------------------------------------------- |
| `/`                                  | Inicio: hero, servicios, 6 fases, autodiagnóstico, beneficios, preguntas                 |
| `/business-central/`                 | Qué es Business Central, modalidades, beneficios                                         |
| `/servicios/` y `/servicios/[slug]/` | 6 servicios (datos en `src/data/servicios.ts`)                                           |
| `/metodologia/`                      | Fases y conceptos (FRD, Gap-Fit, UAT, go-live)                                           |
| `/quienes-somos/`                    | Historia, visión y valores                                                               |
| `/contacto/`                         | Formulario que abre WhatsApp o correo con el mensaje listo (`?interes=slug` lo precarga) |
| `/privacidad/`                       | Aviso de privacidad                                                                      |

`/contacto` y `/quienes-somos` mantienen las URLs del sitio anterior.

## Desarrollo

```bash
npm ci
npm run dev
npm run check   # formato, lint, tipos y tests
```

## Vercel

Importar el repositorio en Vercel (framework Next.js, sin configuración extra). Cuando exista el dominio,
definir `NEXT_PUBLIC_SITIO_URL=https://www.invtech.pro`; mientras no esté, el sitio no se indexa.
Los textos y datos de contacto se editan en `src/data/`.
