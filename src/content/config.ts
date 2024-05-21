import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      repo: z.string().optional(),
      url: z.string().optional(),
      image: image(),
      date: z.date().optional(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  project: projectCollection,
};
