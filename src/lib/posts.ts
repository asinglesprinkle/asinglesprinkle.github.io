import { getCollection } from 'astro:content';
import { CATEGORIES } from '../categories';

/**
 * Every post that belongs on the built site, newest first.
 *
 * Drafts are included during `astro dev` so you can preview them, and dropped
 * from `astro build` so they never reach the published site.
 */
export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Published posts in one category, newest first. */
export async function getPostsInCategory(slug: string) {
	const posts = await getPublishedPosts();
	return posts.filter((post) => (post.data.categories as readonly string[]).includes(slug));
}

/** Every category with the number of published posts in it, in config order. */
export async function getCategoriesWithCounts() {
	const posts = await getPublishedPosts();
	return CATEGORIES.map((category) => ({
		...category,
		count: posts.filter((post) => (post.data.categories as readonly string[]).includes(category.slug))
			.length,
	}));
}
