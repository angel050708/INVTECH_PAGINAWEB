# InvTech · sitio web

Sitio de InvTech (Microsoft Dynamics 365 Business Central en Honduras). Mismo stack que Guerrero Academy:
Next.js 16 (App Router) + React 19 + TypeScript + CSS Modules, Vitest, ESLint y Prettier.

## Rutas

| Ruta                                            | Contenido                                                                               |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| `/`                                             | Inicio: curva 3D de aplicaciones, soluciones, servicios, 6 fases, beneficios, preguntas |
| `/soluciones/` y `/soluciones/[slug]/`          | 6 soluciones clave de invtech.pro                                                       |
| `/servicios/` y `/servicios/[slug]/`            | 6 servicios clave de invtech.pro                                                        |
| `/metodologia/`                                 | Fases y conceptos (FRD, Gap-Fit, UAT, go-live)                                          |
| `/quienes-somos/`, `/contacto/`, `/privacidad/` | Empresa, formulario (WhatsApp o correo) y privacidad                                    |

El texto de Soluciones y Servicios está en `src/data/contenido-original.json`, tomado de invtech.pro.
Las páginas que se dejaron de publicar redirigen a su listado (ver `next.config.ts`).
Los logos de aplicaciones están en `public/logos/` y el logo de InvTech vectorizado en `public/logo-invtech.svg`.

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
