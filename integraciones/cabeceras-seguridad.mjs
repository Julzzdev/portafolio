// @ts-check
import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Agrega cabeceras de seguridad (CSP con hashes, HSTS, COOP, etc.) al config.json
 * que genera @astrojs/vercel, porque el adaptador no aplica las de vercel.json.
 *
 * No se usa 'strict-dynamic': con hashes (sin nonces) la confianza no se propaga a
 * los import() de las islas y Chrome las bloquea. Los nonces requerirían renderizar
 * cada página por petición, y este sitio es estático.
 */

const SCRIPT_INLINE = /<script(?![^>]*\bsrc=)(?![^>]*application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g;

async function* archivosHtml(dir) {
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const ruta = join(dir, entrada.name);
    if (entrada.isDirectory()) yield* archivosHtml(ruta);
    else if (entrada.name.endsWith('.html')) yield ruta;
  }
}

async function hashesScriptsInline(dir) {
  const hashes = new Set();
  for await (const archivo of archivosHtml(dir)) {
    for (const [, cuerpo] of (await readFile(archivo, 'utf8')).matchAll(SCRIPT_INLINE)) {
      hashes.add(`'sha256-${createHash('sha256').update(cuerpo).digest('base64')}'`);
    }
  }
  return [...hashes].sort();
}

export function construirCsp(hashes) {
  const turnstile = 'https://challenges.cloudflare.com';
  return [
    "default-src 'self'",
    `script-src 'self' ${hashes.join(' ')} ${turnstile}`,
    // Los style="" de las tarjetas y de Shiki requieren 'unsafe-inline' en estilos
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    // Vite incrusta como data: algunas fuentes pequeñas de fontsource
    "font-src 'self' data:",
    `connect-src 'self' ${turnstile}`,
    `frame-src ${turnstile}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests',
  ].join('; ');
}

export function cabeceras(hashes) {
  return {
    'Content-Security-Policy': construirCsp(hashes),
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  };
}

/** @returns {import('astro').AstroIntegration} */
export default function cabecerasSeguridad() {
  let raiz;
  return {
    name: 'cabeceras-seguridad',
    hooks: {
      'astro:config:done': ({ config }) => {
        raiz = fileURLToPath(config.root);
      },
      'astro:build:done': async ({ dir, logger }) => {
        const salida = join(raiz, '.vercel/output');
        const rutaConfig = join(salida, 'config.json');
        const config = JSON.parse(await readFile(rutaConfig, 'utf8'));
        // `dir` es la salida del cliente; el adaptador la copia a .vercel/output/static después
        const hashes = await hashesScriptsInline(fileURLToPath(dir));

        // Se insertan antes del handle "filesystem" para que apliquen también a archivos estáticos
        const indice = config.routes.findIndex((r) => r.handle === 'filesystem');
        config.routes.splice(indice === -1 ? 0 : indice, 0, {
          src: '/(.*)',
          headers: cabeceras(hashes),
          continue: true,
        });
        await writeFile(rutaConfig, JSON.stringify(config, null, 2));
        logger.info(`CSP con ${hashes.length} hashes de scripts inline agregada a ${rutaConfig}`);
      },
    },
  };
}
