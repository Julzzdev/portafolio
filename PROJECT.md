---
name: portafolio
summary: Sitio bilingüe (ES/EN) de Julzz Labs, la marca indie de Julio Olvera; promociona Kirei y agrupa proyectos, blog, contacto y CV.
status: active
stack: Astro 7, React islands, Tailwind CSS v4, MDX, Resend, Vercel
updated: 2026-11-13
---
## What it does
Sitio personal de Julio Olvera (ingeniería backend/fintech, México). Muestra su trayectoria y CV, una lista de proyectos (OdontoWeb, extractor de pólizas con IA, chatbot de cotización, labresults, práctica de japonés, etc.), un blog técnico y un formulario de contacto. Es bilingüe con rutas `/es/` y `/en/`.

## How it works
- Astro 7 en modo `static` con i18n (`es` por defecto, prefijo en ambos idiomas); React sólo en la isla `ContactForm`; el inicio es un panel de estado de proyectos con franja de evidencia (concepto «Registro de producción», IBM Plex Sans).
- Proyectos y blog son content collections MDX, un archivo por idioma en `src/content/{projects,blog}/{es,en}/`.
- Datos editables en `src/config/sitio.ts`, `src/data/experiencia.ts` e `src/i18n/ui.ts`.
- SEO: hreflang, JSON-LD, sitemap, RSS por idioma e imágenes OG generadas en build (satori + resvg).
- `integraciones/cabeceras-seguridad.mjs` añade CSP con hashes, HSTS y otras cabeceras al `config.json` de Vercel.
- `src/pages/api/contact.ts` es la única función serverless: envía correo con Resend (honeypot y Turnstile opcional).
- Desplegado en Vercel (dominio automático vía `VERCEL_PROJECT_PRODUCTION_URL`); CI en GitHub Actions con `astro check`, build y Lighthouse CI.

## Status and next steps
Activo y desplegado en https://julioolvera.vercel.app con el rediseño «La Central»; el rediseño «Registro de producción» (tecnología y confianza) está listo localmente, sin commit ni despliegue. Pendiente: revisar los textos nuevos de principios y evidencia; cambiar `sitio.kirei.landing` cuando exista kireidental.mx; reemplazar datos marcados con `TODO`, CV en español (hoy solo hay el inglés), configurar variables de Resend/Turnstile en Vercel y dominio propio, y añadir proyectos nuevos y artículos del blog.

## Log
- 2026-11-13 Rediseño «Registro de producción»: se retira la taquilla; panel de estado, evidencia verificable, principios de trabajo, IBM Plex Sans y nuevo favicon/OG.
- 2026-11-08 CSS incrustado y precarga de la fuente de títulos: Lighthouse local ≥ 0.96 en rendimiento.
- 2026-11-08 Rediseño desplegado a producción con la CLI; repo conectado a Vercel para despliegues desde Git.
- 2026-11-08 Rediseño como Julzz Labs (tablero de salidas «La Central») con sección destacada de Kirei; proyectos por andén y estado; se retira la escena 3D.
- 2026-11-02 Se crea PROJECT.md para JARVIS.
- 2026-10-22 Hero con gradientes radiales en lugar de blur animado (TBT); .env* ignorado salvo .env.example.
- 2026-10-22 Tipos JSDoc en la integración de cabeceras; umbral de rendimiento de CI a 0.9.
- 2026-10-22 Email real y dominio automático en Vercel.
- 2026-10-22 Proyectos privados: OdontoWeb, extractor de pólizas con IA y chatbot.
- 2026-10-22 Contenido real del CV, proyectos de GitHub y cabeceras de seguridad.
- 2026-10-22 Portafolio inicial con Astro, React islands y Tailwind.
