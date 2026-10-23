import { getCollection, type CollectionEntry } from 'astro:content';
import type { Idioma } from '../i18n/ui';
import { separarId } from '../i18n/utils';

export type Proyecto = CollectionEntry<'projects'>;
export type Post = CollectionEntry<'blog'>;

export async function getProyectos(idioma: Idioma) {
  const proyectos = await getCollection('projects', ({ id }) => separarId(id).idioma === idioma);
  return proyectos.sort(
    (a, b) => a.data.order - b.data.order || b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export async function getPosts(idioma?: Idioma) {
  const posts = await getCollection(
    'blog',
    ({ id, data }) => (import.meta.env.PROD ? !data.draft : true) && (!idioma || separarId(id).idioma === idioma),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Idiomas en los que existe una entrada con el mismo slug. */
export function idiomasDisponibles(entradas: { id: string }[], slug: string) {
  return entradas.filter((e) => separarId(e.id).slug === slug).map((e) => separarId(e.id).idioma);
}

export function minutosLectura(texto = '') {
  return Math.max(1, Math.round(texto.split(/\s+/).length / 200));
}
