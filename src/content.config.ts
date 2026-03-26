import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['mobile', 'web']).default('mobile'),
    video: z.string().optional(),
    image: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    tags: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(true),
  }),
});

export const collections = { projects };
