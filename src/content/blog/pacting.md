---
title: 'Pacting'
description: 'The freshness system I built for warlock.'
pubDate: 'Sep 30 2026'
categories: ['warlock']
draft: false
---

In my TUI tool for AI driven workflows there is a core concept called "pact".
When you pact a directory you hash its contents and in that directory write a file called WARLOCK.md.
If any files in that directory change that part of the file tree turns from green to yellow meaning the AI probably no longer has full understanding.

How pacting works:
1. Pacting goes bottom-up. The Warlock tool documents the deepest directories first and works up to the root.
2. One pass per file, blind to its siblings. Each file gets its own model pass, which sees only that file, with comments stripped and bodies elided where needed. It writes one routing line (I will go into this more later) to that directory's WARLOCK.md.
3. Measured, not written. Warlock adds each file's size and the names it declares itself. Only the description is prose.
4. The directory is described from its file lines, not its code. A second pass reads only the lines already written and checked for each file, plus the WARLOCK.md's of the subdirectories below, and writes the directory's purpose and a line for each subdirectory. It never reads the source itself, so it can't claim anything the checked lines don't support, and it costs the same for five files as for five hundred.
5. Checked before it's written. Every name a line relies on must appear in the code. A line that fails is sent back or repaired.
6. The pact itself. When the document is granted, warlock records a hash of everything at and below the directory. When the hash stops matching, the directory is stale until a new pass reads it, and unchanged files keep their lines.

How I reached this position, why I chose the above model for pacting.

At first I envisioned a tool where AI simply lives in a box and makes itself better at its job.
I sent the AI and told it to summarize files for each directory and make a document.
I mean this is what most developers do, they have a large project and AI updates comments and README.md's per directory.
There it should have maximum context, right?

No, not even close.
AI out of the box is highly geared toward developing code in our current middle state (AI and Human engineers working on code).
This means it's adding the comments and README.md's for YOU a human.
Why is this bad?
Because the AI never owns the entirety of the README.md's or the comments, it just keeps appending new lines or updating spots here and there, after a few rounds the documents tell no truth of the reality (the code).

I quickly encountered this issue and thought how do I benchmark my product, I spent so long trying to remove falsehoods from my documents until I realized the lies are real.
By the "lies are real" I mean this: the code is code and it is the truth, however all the documents and comments now tell a stale cached version of reality.
So what do I do?
My first instinct was to make a test repo where I planted real fake information and if I encountered any of those true-lies I knew the tool was "working".
The obvious issue is this is playing at a weakness, it's how the world works but is technically unexpected behavior, and finally the big one - it does not help AI reasoning.

So what do I do? How do I fix this I dug in so deep already.
Scrap it all, and change the shape of pacting to the 6 bullets I put above.
Pacting is mostly mechanical now and instead of human readable summaries the files are shaped more like routing information, where to find things.
This ensures a cold session with the agent at least has some initial context.

At the time of writing Cursor recently dropped its support for semantic search over vector embeddings and replaced it with local instant grep.
Cursor, the tool that popularized semantic indexing, has dropped it. That's an admission that treating code as text to be matched by resemblance is less reliable than searching the structure that's already there.
It strengthens the decision I made to prioritize routing over prose summaries.

There are similar tools available:
- Aider: an open-source terminal coding assistant whose "repo map" gives the model a free overview of a codebase, built by parsing definitions with tree-sitter and ranking them by PageRank to fit a token budget, with no model involved.
- PageIndex: an open-source "vectorless RAG" system that builds a tree over a long document like a PDF, has a model summarize every node, and lets an agent reason its way down the tree instead of searching embeddings.

I have benchmarked pacting against these two tools.

Warlock vs aider. Given one directory's map and a question about its code, does the model name the right file? 36 questions, one model call each, Sonnet 5.

| map | right file | right file + symbol |
|---|---|---|
| warlock (WARLOCK.md) | 91.7% | 33.3% |
| aider repo map (same token budget) | 38.9% | 19.4% |
| file list only (the floor) | 58.3% | 8.3% |

Warlock vs PageIndex. Given a real change from the repo's history, can an agent find the files it touched? 49 questions, a full agent run each, Sonnet 5.

| index | found every file | top pick right | found at least one | cost per question |
|---|---|---|---|---|
| warlock (WARLOCK.md tree) | 53% | 55% | 80% | $0.53 |
| grep only (no index) | 47% | 49% | 73% | $0.50 |
| PageIndex (summary tree) | 37% | 43% | 61% | $0.43 |

The two tables share a pattern: each has a "no index" row (file list only, or grep only).
That's what makes them tell one story: warlock beats having nothing, and each alternative falls below or near simply using nothing.

For honesty, to my knowledge no exact tool matches pacting, so I am benchmarking similar tools and that comes with some issues.
- Aider's: Aider's repo map is designed to rank a whole repository within a chat; scoped to one directory with no conversation, it's doing its weakest job.
- PageIndex's: Warlock's lead over grep isn't statistically significant at 49 questions, and PageIndex was built for PDFs, not code.

These are early benchmarks and the sample size is small but promising, I will run larger benchmarks in the future, but my concern for now is getting to MVP.
After that the token usage required for these benchmarks becomes quite meaningful, so a true deep test may run a week's time in duration.

That's it for today's post, pacting is one of Warlock's most unique features so I felt the need to write it down in a digestible way.
