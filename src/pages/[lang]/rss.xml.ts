import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '../../lib/contenido';
import { pathsIdiomas, ruta, separarId, usarTraducciones } from '../../i18n/utils';
import { idiomas, type Idioma } from '../../i18n/ui';
import { sitio } from '../../config/sitio';

export const getStaticPaths = pathsIdiomas;

export const GET: APIRoute = async ({ params, site }) => {
  const idioma = params.lang as Idioma;
  const t = usarTraducciones(idioma);
  const posts = await getPosts(idioma);
  return rss({
    title: `${t('blog.titulo')} · ${sitio.nombre}`,
    description: t('blog.descripcion'),
    site: site!,
    customData: `<language>${idiomas[idioma].bcp47}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: ruta(idioma, `blog/${separarId(post.id).slug}`),
    })),
  });
};
