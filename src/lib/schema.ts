import { sitio } from '../config/sitio';

export const personaLd = (site: URL) => ({
  '@type': 'Person',
  '@id': new URL('/#persona', site).href,
  name: sitio.nombre,
  url: site.href,
  email: `mailto:${sitio.email}`,
  jobTitle: 'Full Stack JavaScript Developer',
  knowsAbout: Object.values(sitio.habilidades).flat(),
  sameAs: [sitio.github, sitio.linkedin],
});

export const sitioWebLd = (site: URL, idioma: string) => ({
  '@type': 'WebSite',
  name: sitio.nombre,
  url: site.href,
  inLanguage: idioma,
  author: { '@id': new URL('/#persona', site).href },
});
