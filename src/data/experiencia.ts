import type { ImageMetadata } from 'astro';
import type { Idioma } from '../i18n/ui';
import insigniaClaude from '../assets/certificaciones/claude-certified-architect.png';

type Texto = Record<Idioma, string>;

export interface Experiencia {
  rol: Texto;
  empresa: string;
  cliente?: string;
  inicio?: string; // AAAA-MM
  fin?: string; // vacío = actualidad
  logros: Texto[];
  tipo: 'trabajo' | 'educacion';
}

// Fuente: Julio_Olvera_Resume.pdf
export const experiencia: Experiencia[] = [
  {
    rol: { es: 'Ingeniero de Mantenimiento de Software (3rd Line)', en: '3rd Line / Software Maintenance Engineer' },
    empresa: 'EPAM Systems',
    cliente: 'Baker Hughes USA · Leucipa (Tycho)',
    inicio: '2025-01',
    logros: [
      {
        es: 'Soporte a la plataforma insignia de Baker Hughes para optimización de producción con IA, construida sobre AWS.',
        en: "Support Baker Hughes' flagship AI-powered production optimization platform, built on AWS.",
      },
      {
        es: 'Mantenimiento, mejora y expansión de módulos existentes, y desarrollo de nuevas funcionalidades.',
        en: 'Maintain, improve and expand existing modules while developing new features.',
      },
      {
        es: 'Diagnóstico y resolución de incidentes en producción para minimizar el tiempo de inactividad.',
        en: 'Identify and resolve production issues to minimize unplanned downtime.',
      },
    ],
    tipo: 'trabajo',
  },
  {
    rol: { es: 'Senior Backend Engineer', en: 'Senior Backend Engineer' },
    empresa: 'EPAM Systems',
    cliente: 'THOR Pricing Tracking & Management System',
    inicio: '2024-10',
    logros: [
      {
        es: 'APIs escalables, seguras y de alto rendimiento para precios en tiempo real.',
        en: 'Build scalable, secure, high-performance APIs powering real-time pricing.',
      },
      {
        es: 'Gestión de bases de datos con reglas de precios detalladas y analítica predictiva.',
        en: 'Manage databases enforcing detailed pricing rules and predictive analytics.',
      },
      {
        es: 'Optimización de cuellos de botella y supervisión de pruebas y CI/CD.',
        en: 'Resolve performance bottlenecks; oversee testing and CI/CD processes.',
      },
    ],
    tipo: 'trabajo',
  },
  {
    rol: { es: 'Líder de Desarrollo de Software', en: 'Software Development Lead' },
    empresa: 'Brillio',
    cliente: 'Realtor.com',
    inicio: '2023-05',
    fin: '2024-06',
    logros: [
      {
        es: 'Liderazgo de más de 15 repositorios y submódulos de infraestructura crítica.',
        en: "Led development of 15+ repositories and sub-modules for critical infrastructure.",
      },
      {
        es: 'Consola de onboarding de clientes que aumentó la eficiencia del proceso en 300 %.',
        en: 'Orchestrated a customer onboarding console, increasing onboarding efficiency by 300%.',
      },
      {
        es: 'Análisis de datos de más de 10,000 consultas diarias.',
        en: 'Conducted schematic data analysis for 10,000+ daily incoming inquiries.',
      },
      {
        es: 'Gestión de un equipo de 4 desarrolladores.',
        en: 'Managed a team of 4 developers.',
      },
    ],
    tipo: 'trabajo',
  },
  {
    rol: { es: 'Sr. Software Engineer', en: 'Sr. Software Engineer' },
    empresa: 'Unosquare',
    cliente: 'Foundation Medicine Inc.',
    inicio: '2022-12',
    fin: '2023-05',
    logros: [
      {
        es: 'Mantenimiento de más de 5 repositorios críticos para investigación y reportes de cáncer.',
        en: 'Enhanced and maintained 5+ critical repositories supporting cancer research.',
      },
      {
        es: 'Más de 10 plantillas de reportes con exportación automática, mejorando el rendimiento 20 %.',
        en: 'Designed 10+ reporting templates with automated export, improving performance by 20%.',
      },
      {
        es: 'Capa de API segura que integra múltiples bases de datos de ensayos clínicos.',
        en: 'Built a secure API layer integrating multiple clinical trial databases.',
      },
    ],
    tipo: 'trabajo',
  },
  {
    rol: { es: 'Sr. Backend Engineer, Full Stack Developer', en: 'Sr. Backend Engineer, Full Stack Developer' },
    empresa: 'Anheuser-Busch InBev',
    inicio: '2022-03',
    fin: '2022-10',
    logros: [
      {
        es: 'Integración de más de 20 bancos de Sudamérica y Sudáfrica en un Global Payment Gateway.',
        en: 'Integrated 20+ banks across South America and South Africa into a Global Payment Gateway.',
      },
      {
        es: 'Servicios backend en más de 5 países cumpliendo regulaciones locales e internacionales.',
        en: 'Deployed backend services for 5+ countries, complying with local and international regulations.',
      },
      {
        es: 'Portal móvil para pago de facturas con analítica integrada.',
        en: 'Designed a mobile portal for invoice payments with embedded analytics.',
      },
    ],
    tipo: 'trabajo',
  },
  {
    rol: { es: 'Backend Engineer', en: 'Backend Engineer' },
    empresa: 'Derevo',
    cliente: 'WiseITDMS',
    inicio: '2021-02',
    fin: '2022-03',
    logros: [
      {
        es: 'ERP y CMS para un distribuidor automotriz líder.',
        en: 'Designed and delivered an ERP and CMS for a leading automotive retailer.',
      },
      {
        es: 'Migración de software de escritorio a una aplicación web moderna.',
        en: 'Transformed standalone software into a modern web application.',
      },
      {
        es: 'Rediseño de la base de datos con normalización de Codd para mayor escalabilidad.',
        en: "Overhauled database architecture per Codd's normalization principles.",
      },
    ],
    tipo: 'trabajo',
  },
  {
    rol: { es: 'Full Stack Web Developer', en: 'Full Stack Web Developer' },
    empresa: 'Reina Madre',
    inicio: '2020-07',
    fin: '2021-01',
    logros: [
      {
        es: 'Estructuras de datos y procesos backend para gestión de información médica.',
        en: 'Designed database structures and backend processes for medical data management.',
      },
      {
        es: 'Interfaces para más de 100 interacciones diarias con pacientes.',
        en: 'Built interfaces supporting 100+ daily patient interactions.',
      },
      {
        es: 'Fundador del sistema Maria Linda para clínicas cosméticas.',
        en: 'Founded the Maria Linda software system for cosmetic clinics.',
      },
    ],
    tipo: 'trabajo',
  },
  {
    rol: { es: 'Ingeniería en Computación', en: 'B.Eng., Computer Engineering' },
    empresa: 'Universidad Autónoma del Estado de México',
    logros: [],
    tipo: 'educacion',
  },
];

export const destacados: { valor: string; texto: Texto }[] = [
  { valor: '5+', texto: { es: 'años de experiencia backend y full stack', en: 'years of backend & full stack experience' } },
  { valor: '4+', texto: { es: 'ingenieros liderados en producción', en: 'engineers led on production platforms' } },
  { valor: '20+', texto: { es: 'bancos integrados en un gateway de pagos', en: 'banks integrated into a payment gateway' } },
  { valor: 'F500', texto: { es: 'clientes en fintech, salud, bienes raíces y energía', en: 'clients across fintech, healthcare, real estate & energy' } },
];

export interface Certificacion {
  nombre: string;
  emisor: string;
  fecha?: string; // AAAA-MM
  vence?: string; // AAAA-MM
  url?: string; // enlace de verificación
  imagen?: ImageMetadata;
}

export const certificaciones: Certificacion[] = [
  {
    nombre: 'Claude Certified Architect — Foundations',
    emisor: 'Anthropic',
    fecha: '2026-06',
    vence: '2027-06',
    url: 'https://www.credly.com/badges/7eeb96d6-7265-4534-b551-3c1db6f2dc53',
    imagen: insigniaClaude,
  },
];
