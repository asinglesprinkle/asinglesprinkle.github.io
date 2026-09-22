import { getCollection } from 'astro:content';

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
