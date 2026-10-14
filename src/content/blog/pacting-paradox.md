---
title: 'Pacting paradox'
description: 'Current AI bandwidth, pacting findings, and the trade offs.'
pubDate: 'Oct 14 2026'
categories: ['warlock']
draft: false
---

Pacting was a feature for warlock which hashed directories so you could see when they were changed since last hash.
The concept behind this was during pacting the AI also produced a document to help its own reasoning.
This meant you could visually see how well the AI likely understood the codebase.

I did some light benchmarks because they are long and expensive.
Pacting appeared to score higher than grep given my sample sizes.

Pacting was a combination of mechanical parsing and AI prose.
Basically you end up with an artifact that would describe each file in a directory briefly and tell what the file declared.
The prose were model driven and the declarations were mechanical.

Now the paradox.

This process is a bit like having an MMORPG on dialup, it can be done (and has) but isn't a great experience.

I tested pacting on Nushell about 1500 Rust files.
The total time to pact would have been roughly 4 hours and anytime a file changes that directory should be repacted.
There is room to optimize, parallel file processing in a directory, refining model and mechanical aspects.
However even with all this optimization I reach a point where pacting costs too much in one either time or model usage to justify.

The paradox part comes from the artifact is useful and AI could soon reach the point to generate them much more effectively however once AI is at that point the artifact may become worthless.

All this being said if there is a complex system which doesn't change often this tool may still have a use.
But for normal shifting codebases it does not.
