import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { sitio } from '../config/sitio';

const require = createRequire(import.meta.url);
const fuente = (peso: number) =>
  readFile(require.resolve(`@fontsource/inter/files/inter-latin-${peso}-normal.woff`));

let fuentes: Promise<[Buffer, Buffer]> | undefined;

type Nodo = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Nodo => ({
  type,
  props: { style, children },
});

export async function generarOg({ titulo, etiqueta, acento = '#7c5cff' }: { titulo: string; etiqueta: string; acento?: string }) {
  fuentes ??= Promise.all([fuente(400), fuente(800)]);
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
      color: '#f4f4f5',
      fontFamily: 'Inter',
      backgroundColor: '#09090b',
      backgroundImage: `radial-gradient(circle at 85% 15%, ${acento}88, transparent 45%), radial-gradient(circle at 10% 100%, #0d948866, transparent 45%)`,
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
            borderRadius: '18px',
            fontSize: '30px',
            fontWeight: 800,
            backgroundImage: 'linear-gradient(135deg, #6d4aff, #0d9488)',
          },
          sitio.iniciales,
        ),
        h('div', { fontSize: '30px', color: '#a1a1aa' }, etiqueta),
      ]),
      h('div', { fontSize: titulo.length > 60 ? '58px' : '72px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }, titulo),
      h('div', { display: 'flex', justifyContent: 'space-between', fontSize: '28px', color: '#a1a1aa' }, [
        h('div', {}, sitio.nombre),
        h('div', {}, new URL(import.meta.env.SITE).host),
      ]),
    ],
  );

  const svg = await satori(arbol as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: regular, weight: 400, style: 'normal' },
      { name: 'Inter', data: negrita, weight: 800, style: 'normal' },
    ],
  });
  return new Resvg(svg).render().asPng();
}
