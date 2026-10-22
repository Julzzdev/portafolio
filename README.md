# Portafolio · Julio Olvera

Portafolio bilingüe (ES/EN) hecho con **Astro 7 + React islands + Tailwind CSS v4**, desplegado en **Vercel**.

## Desarrollo

```bash
cp .env.example .env
npm install
npm run dev      # http://localhost:4321 (redirige a /es/)
npm run check    # tipos
npm run build    # salida en .vercel/output
```

## Dónde editar

| Qué | Archivo |
|---|---|
| Nombre, email, redes, habilidades, PDF del CV | `src/config/sitio.ts` |
| Dominio | `site` en `astro.config.mjs` |
| Proyectos (uno por idioma, mismo nombre de archivo) | `src/content/projects/{es,en}/*.mdx` |
| Artículos del blog | `src/content/blog/{es,en}/*.mdx` |
| Trayectoria / educación | `src/data/experiencia.ts` |
| Textos de la interfaz | `src/i18n/ui.ts` |
| Colores y tipografías | `src/styles/global.css` |
| Escena 3D del hero | `src/components/islands/Hero3D.tsx` |

Los datos provisionales están marcados con `TODO`. Para añadir portada a un proyecto, coloca la imagen junto al `.mdx` y usa `cover: ./portada.png` y `coverAlt` en el frontmatter.

## SEO incluido

- HTML estático; React sólo en islas (`RoleRotator`, `ContactForm`, `Hero3DLoader`). Three.js sólo se descarga en escritorio y sin `prefers-reduced-motion`.
- `hreflang` + `x-default`, canonical, Open Graph/Twitter, JSON-LD (`Person`, `WebSite`, `CreativeWork`, `BlogPosting`).
- Imagen OG por página generada en build (`src/pages/og/[...slug].png.ts`), sitemap con i18n, RSS por idioma (`/es/rss.xml`), `robots.txt`.

## Formulario de contacto

`src/pages/api/contact.ts` es la única función serverless. Variables en Vercel:

- `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (obligatorias para enviar; sin ellas responde 503)
- `CONTACT_FROM_EMAIL` (requiere dominio verificado en Resend)
- `PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` (anti-spam opcional; además hay honeypot)

## CI

`.github/workflows/ci.yml` corre `astro check`, build y Lighthouse CI (`lighthouserc.json`, mínimo 95 en las 4 categorías).

## Despliegue

1. Sube el repo a GitHub e impórtalo en Vercel (detecta Astro solo).
2. Configura las variables de entorno y tu dominio; actualiza `site`.
3. Activa Web Analytics y Speed Insights en el panel de Vercel.
4. Da de alta el dominio en Google Search Console y envía `/sitemap-index.xml`.
