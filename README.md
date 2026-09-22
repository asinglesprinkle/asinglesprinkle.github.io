# asinglesprinkle.github.io

My blog. Built with [Astro](https://astro.build), deployed to GitHub Pages at
<https://asinglesprinkle.github.io>.

## Write a post

Copy `src/content/blog/_template.md` to a new file in the same directory. The
filename becomes the URL: `src/content/blog/my-post.md` publishes at
`/blog/my-post/`.

Set `draft: true` in the frontmatter to keep a post out of the built site. Drafts
still render in the dev server, so you can read one in place before publishing.

## Run it locally

```sh
bun install       # once
bun run dev       # http://localhost:4321
bun run build     # production build into dist/
bun run preview   # serve dist/ to check the build
```

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and
publishes it to GitHub Pages. Nothing else to run.

## Layout

| Path | What's there |
| --- | --- |
| `src/content/blog/` | Posts, as Markdown or MDX |
| `src/pages/` | Routes: home, `/blog`, `/about`, `/rss.xml` |
| `src/layouts/BlogPost.astro` | The shell every post renders into |
| `src/components/` | Header, footer, date formatting |
| `src/styles/global.css` | Site-wide styles |
| `src/consts.ts` | Site title, description, author, GitHub URL |
| `src/lib/posts.ts` | Post fetching and draft filtering |
| `src/assets/` | Images and fonts the build processes |
| `public/` | Files copied to the site root as-is |
