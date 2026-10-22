// TODO: completar con tus datos reales
export const sitio = {
  nombre: 'Julio Olvera',
  iniciales: 'JO',
  email: 'hola@julioolvera.dev',
  ubicacion: 'México',
  github: 'https://github.com/julioolvera',
  linkedin: 'https://www.linkedin.com/in/julioolvera',
  // Coloca los PDF en /public y escribe aquí la ruta; si es null no se muestra el botón.
  cv: {
    es: null as string | null,
    en: null as string | null,
  },
  habilidades: {
    frontend: ['JavaScript', 'TypeScript', 'React', 'Astro', 'Tailwind CSS', 'HTML/CSS'],
    backend: ['Node.js', 'Express', 'REST', 'PostgreSQL', 'MongoDB'],
    herramientas: ['Git', 'Docker', 'Vercel', 'Vite', 'Linux'],
  },
} as const;
