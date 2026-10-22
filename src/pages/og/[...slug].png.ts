import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generarOg } from '../../lib/og';
import { getPosts } from '../../lib/contenido';
import { separarId, usarTraducciones } from '../../i18n/utils';
import { idiomas, type Idioma } from '../../i18n/ui';

type Props = { titulo: string; etiqueta: string; acento?: string };

export const getStaticPaths = (async () => {
  const paginas: { params: { slug: string }; props: Props }[] = [];

  for (const idioma of Object.keys(idiomas) as Idioma[]) {
    const t = usarTraducciones(idioma);
    const p = (path: string, props: Props) =>
      paginas.push({ params: { slug: [idioma, path].filter(Boolean).join('/') }, props });
    p('', { titulo: t('hero.intro'), etiqueta: t('hero.rol') });
    p('projects', { titulo: t('proyectos.descripcion'), etiqueta: t('proyectos.titulo') });
    p('blog', { titulo: t('blog.descripcion'), etiqueta: t('blog.titulo') });
    p('cv', { titulo: t('cv.descripcion'), etiqueta: t('cv.titulo') });
    p('contact', { titulo: t('contacto.descripcion'), etiqueta: t('contacto.titulo') });
  }

  for (const proyecto of await getCollection('projects')) {
    const { idioma, slug } = separarId(proyecto.id);
    paginas.push({
      params: { slug: `${idioma}/projects/${slug}` },
      props: { titulo: proyecto.data.title, etiqueta: usarTraducciones(idioma)('proyectos.titulo'), acento: proyecto.data.accent },
    });
  }

  for (const post of await getPosts()) {
    const { idioma, slug } = separarId(post.id);
    paginas.push({
      params: { slug: `${idioma}/blog/${slug}` },
      props: { titulo: post.data.title, etiqueta: 'Blog' },
    });
  }

  return paginas;
}) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = async ({ props }) =>
  new Response(new Uint8Array(await generarOg(props)), { headers: { 'Content-Type': 'image/png' } });
