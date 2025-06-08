import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/project" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      repo: z.string().optional(),
      url: z.string().optional(),
      image: image(),
      date: z.date().optional(),
      priority: z.number().optional(),
      tags: z.array(z.string()),
    }),
});

const testimonialCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/testimonial" }),
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      author_role: z.string(),
      image: image().optional(),
    }),
});

export const collections = {
  project: projectCollection,
  testimonial: testimonialCollection,
};
