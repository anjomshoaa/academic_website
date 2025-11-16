// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/BlogPosts",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

const project = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/Projects",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

const talk = defineCollection({
  loader: file("./src/data/talks.json"),
    schema: z.object({
        title: z.string(),
        venue: z.string(),
        date: z.coerce.date(),
        category: z.string(),
        url: z.string(),
    }),
});


const paper = defineCollection({
  loader: file("./src/data/papers.json"),
    schema: z.object({
        title: z.string(),
        authors: z.string(),
        venue: z.string(),
        volume: z.string().optional(),
        issue: z.string().optional(),
        publisher: z.string().optional(),
        year: z.coerce.number().int(),
        pages: z.string().optional(),
        url: z.string().optional(),
    }),
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { talk, paper, };
