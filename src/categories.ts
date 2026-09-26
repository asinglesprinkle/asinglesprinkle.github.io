/**
 * The categories shown on the home page, in the order they appear there.
 *
 * To add one, add an entry here and use its `slug` in a post's `categories`
 * frontmatter. A slug that isn't in this list fails the build, so a typo in a
 * post can't quietly create a fifth category.
 */
export const CATEGORIES = [
    {
        slug: 'ai-general',
        name: 'AI General',
        description: 'Thoughts on AI as a whole.'
    },
	{
		slug: 'ai-videos',
		name: 'AI Videos',
		description: 'Generating video with models, and the pipelines around it.',
	},
	{
		slug: 'system-design',
		name: 'System Design',
		description: "Building things that don't fall over.",
	},
	{
		slug: 'career',
		name: 'Career',
		description: 'Notes on the job, the industry, and working as a developer.',
	},
	{
		slug: 'warlock',
		name: 'Warlock',
		description: 'Progress and design notes from building Warlock.',
	},
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

/** Look up a category by slug. Returns undefined for an unknown slug. */
export function getCategory(slug: string) {
	return CATEGORIES.find((c) => c.slug === slug);
}
