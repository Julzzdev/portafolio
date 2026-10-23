import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(170),
      date: z.coerce.date(),
      stack: z.array(z.string()).min(1),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Un proyecto puede tener varios repos (p. ej. backend y frontend)
      repos: z.array(z.object({ nombre: z.string(), url: z.url() })).default([]),
      demo: z.url().optional(),
      featured: z.boolean().default(false),
      // Posición en las listas (menor = primero); a igual orden, el más reciente primero
      order: z.number().default(99),
      // Color de acento en hex (#rrggbb); se le agregan canales alfa en las tarjetas
      accent: z.string().regex(/^#[0-9a-f]{6}$/i).default('#7c5cff'),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
