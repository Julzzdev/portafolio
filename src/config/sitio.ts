export const sitio = {
  nombre: 'Julio Olvera',
  marca: 'Julzz Labs',
  iniciales: 'JL',
  // Cuando exista kireidental.mx, se cambia aquí
  kirei: { landing: 'https://odontoweb-landing.vercel.app' },
  email: 'julzzdev@gmail.com',
  ubicacion: 'México',
  github: 'https://github.com/Julzzdev',
  linkedin: 'https://www.linkedin.com/in/julio-olvera-ortiz-b74737166/',
  // Si es null no se muestra el botón de descarga. Por ahora sólo hay CV en inglés.
  cv: {
    es: '/cv-julio-olvera-en.pdf' as string | null,
    en: '/cv-julio-olvera-en.pdf' as string | null,
  },
  habilidades: {
    backend: ['Node.js', 'TypeScript', 'JavaScript', 'REST APIs', 'Microservices', 'SQL / NoSQL'],
    cloud: ['AWS', 'CI/CD', 'System Design'],
    frontend: ['React', 'Astro', 'Tailwind CSS', 'Vite'],
    liderazgo: ['Team Leadership', 'Fintech Systems', 'Data Integration'],
  },
} as const;
