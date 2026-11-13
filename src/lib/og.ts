import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { sitio } from '../config/sitio';

const require = createRequire(import.meta.url);
const fuente = (peso: number) =>
  readFile(require.resolve(`@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-${peso}-normal.woff`));

let fuentes: Promise<[Buffer, Buffer]> | undefined;

type Nodo = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Nodo => ({
  type,
  props: { style, children },
});

export async function generarOg({ titulo, etiqueta }: { titulo: string; etiqueta: string; acento?: string }) {
  fuentes ??= Promise.all([fuente(400), fuente(600)]);
  const [regular, negrita] = await fuentes;

  const arbol = h(
    'div',
    {
      // Medidas fijas + border-box: con height 100% Satori sumaba el padding y la fila inferior quedaba fuera
      width: '1200px',
      height: '630px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px',
      color: '#e6edef',
      fontFamily: 'Plex',
      backgroundColor: '#0b1013',
      backgroundImage: 'linear-gradient(rgba(230,237,239,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(230,237,239,0.05) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
    },
    [
      h('div', { display: 'flex', alignItems: 'center', gap: '20px' }, [
        h(
          'div',
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '72px',
            height: '72px',
            borderRadius: '16px',
            color: '#0b1013',
            backgroundColor: '#e6edef',
            fontSize: '30px',
            fontWeight: 600,
          },
          sitio.iniciales,
        ),
        h('div', { fontSize: '30px', color: '#9aaab0' }, etiqueta),
      ]),
      h('div', { fontSize: titulo.length > 60 ? '58px' : '72px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em' }, titulo),
      h('div', { display: 'flex', justifyContent: 'space-between', fontSize: '28px', color: '#9aaab0' }, [
        h('div', {}, sitio.marca),
        h('div', {}, new URL(import.meta.env.SITE).host),
      ]),
    ],
  );

  const svg = await satori(arbol as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Plex', data: regular, weight: 400, style: 'normal' },
      { name: 'Plex', data: negrita, weight: 600, style: 'normal' },
    ],
  });
  return new Resvg(svg).render().asPng();
}
