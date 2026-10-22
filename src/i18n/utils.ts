import { getRelativeLocaleUrl } from 'astro:i18n';
import { idiomas, idiomaPorDefecto, ui, type ClaveUI, type Idioma } from './ui';

export function esIdioma(valor: string | undefined): valor is Idioma {
  return !!valor && valor in idiomas;
}

export function getIdiomaDeUrl(url: URL): Idioma {
  const [, segmento] = url.pathname.split('/');
  return esIdioma(segmento) ? segmento : idiomaPorDefecto;
}

export function usarTraducciones(idioma: Idioma) {
  return (clave: ClaveUI) => ui[idioma][clave] ?? ui[idiomaPorDefecto][clave];
}

/** Ruta localizada, p. ej. ruta('en', 'projects') -> /en/projects/ */
export function ruta(idioma: Idioma, path = '') {
  return getRelativeLocaleUrl(idioma, path);
}

/** Misma página en otro idioma (las rutas comparten estructura entre idiomas). */
export function cambiarIdioma(url: URL, destino: Idioma) {
  const [, , ...resto] = url.pathname.split('/');
  return ruta(destino, resto.join('/'));
}

/** Las entradas de contenido viven en es/<slug> y en/<slug>. */
export function separarId(id: string) {
  const [idioma, ...resto] = id.split('/');
  return { idioma: idioma as Idioma, slug: resto.join('/') };
}

export const pathsIdiomas = () =>
  (Object.keys(idiomas) as Idioma[]).map((lang) => ({ params: { lang } }));

export function formatearFecha(fecha: Date, idioma: Idioma) {
  return fecha.toLocaleDateString(idiomas[idioma].bcp47, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC', // las fechas del frontmatter se interpretan en UTC
  });
}
