import type { Idioma } from '../i18n/ui';

type Texto = Record<Idioma, string>;

export interface Experiencia {
  rol: Texto;
  lugar: string;
  inicio: string; // AAAA-MM
  fin?: string; // vacío = actualidad
  descripcion: Texto;
  tipo: 'trabajo' | 'educacion';
}

// TODO: reemplazar con tu trayectoria real
export const experiencia: Experiencia[] = [
  {
    rol: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    lugar: 'Freelance',
    inicio: '2024-01',
    descripcion: {
      es: 'Desarrollo de sitios y aplicaciones web con Astro, React y Node.js para clientes de salud, educación y comercio.',
      en: 'Building websites and web apps with Astro, React and Node.js for clients in healthcare, education and retail.',
    },
    tipo: 'trabajo',
  },
  {
    rol: { es: 'Ingeniería en Computación', en: 'B.S. in Computer Engineering' },
    lugar: 'Universidad — TODO',
    inicio: '2019-08',
    fin: '2024-06',
    descripcion: {
      es: 'Formación en sistemas digitales, redes, estructuras de datos, bases de datos e ingeniería de software.',
      en: 'Coursework in digital systems, networking, data structures, databases and software engineering.',
    },
    tipo: 'educacion',
  },
];
