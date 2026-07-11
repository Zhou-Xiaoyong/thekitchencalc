import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default("The Kitchen Calc Team"),
    tags: z.array(z.string()).default([]),
    category: z.string().default("Cooking Tips"),
  }),
});

export const collections = { blog };
