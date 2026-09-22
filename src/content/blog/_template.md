---
title: 'Post template'
description: 'Copy this file to start a new post. It never publishes while draft is true.'
pubDate: 'Sep 22 2026'
draft: true
---

Copy this file, rename it, and write. The filename becomes the URL, so
`bytes-over-the-wire.md` publishes at `/blog/bytes-over-the-wire/`.

## Frontmatter

`title`, `description`, and `pubDate` are required. `description` shows up in the
post list, in the RSS feed, and in link previews, so write it for a stranger.

Two fields are optional:

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
frontmatter.
