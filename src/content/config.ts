import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.date()
  })
});

export const collections = { pages };