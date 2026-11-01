import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/services' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			// Plain patient words shown first on the home page cards, with the official title underneath.
			// [CHECK WITH CLIENT] Which services are most popular.
			plainName: z.string().optional(),
			order: z.number(),
			// One sentence for the home page card, taken from the page text.
			summary: z.string(),
			icon: z.enum(['general', 'laser', 'biomechanics', 'children', 'surgery', 'orthotics', 'diabetes', 'footwear']),
			image: image().optional(),
			imageAlt: z.string().optional(),
		}),
});

export const collections = { services };
