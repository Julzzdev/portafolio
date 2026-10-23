import { sitio } from '../config/sitio';
import { certificaciones } from '../data/experiencia';

export const personaLd = (site: URL) => ({
  '@type': 'Person',
  '@id': new URL('/#persona', site).href,
  name: sitio.nombre,
  url: site.href,
  email: `mailto:${sitio.email}`,
  jobTitle: 'Senior Software Engineer — Backend & Full Stack',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Autónoma del Estado de México' },
  knowsAbout: Object.values(sitio.habilidades).flat(),
  hasCredential: certificaciones.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: c.nombre,
    credentialCategory: 'certification',
    recognizedBy: { '@type': 'Organization', name: c.emisor },
    ...(c.url && { url: c.url }),
    ...(c.fecha && { dateCreated: c.fecha }),
    ...(c.vence && { expires: c.vence }),
  })),
  sameAs: [sitio.github, sitio.linkedin],
});

export const sitioWebLd = (site: URL, idioma: string) => ({
  '@type': 'WebSite',
  name: sitio.nombre,
  url: site.href,
  inLanguage: idioma,
  author: { '@id': new URL('/#persona', site).href },
});
