---
title: 'Post template'
description: 'Copy this file to start a new post. It never publishes while draft is true.'
pubDate: 'Sep 22 2026'
categories: ['system-design']
draft: true
---

Copy this file, rename it, and write. The filename becomes the URL, so
`bytes-over-the-wire.md` publishes at `/blog/bytes-over-the-wire/`.

## Frontmatter

`title`, `description`, and `pubDate` are required. `description` shows up in the
post list, on category pages, in the RSS feed, and in link previews, so write it
for a stranger.

`categories` takes slugs from `src/categories.ts`. A post can be in more than
one, and a slug that isn't in that file fails the build rather than silently
creating a new category:

```yaml
categories: ['system-design', 'career']
```

Two more fields are optional:

- `updatedDate` adds a "last updated" line to the post.
- `draft: true` keeps the post out of the built site. Drafts still render at
  `bun run dev`, so you can read yours in place before publishing. Delete the
  line to publish.

## Code

Fenced blocks get syntax highlighting from the language tag:

```rust
fn main() {
    println!("hello");
}
```

## Images

Put an image in `src/assets/`, then reference it relative to this file:

```markdown
![Alt text](../../assets/diagram.png)
```

To give the post a banner, add `heroImage: '../../assets/banner.jpg'` to the
frontmatter. The banner doubles as the link-preview image.
