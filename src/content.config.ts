import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS } from './categories';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Drafts render in `bun run dev` but are left out of the built site.
			draft: z.boolean().default(false),
			// Slugs from src/categories.ts. An unknown slug fails the build.
			categories: z.array(z.enum(CATEGORY_SLUGS)).default([]),
		}),
});

export const collections = { blog };
