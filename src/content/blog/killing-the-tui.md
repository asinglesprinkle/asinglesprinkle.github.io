---
title: 'Killing the TUI'
description: "Knowing when it's time to pivot."
pubDate: 'Oct 18 2026'
categories: ['warlock']
draft: false
---

I have a tool called Warlock which was a huge Rust Text User Interface.
The idea was basically an IDE from the future where you don't browse code you can view code but allow the agent to fully operate on the code for you.
This project had some mixed philosophies, it began when I started fully using AI and I had mixed intentions.
I wanted to add guardrails so teams could use AI with the same framework and must follow process (tickets, PRs, epics / projects).
All good things.

The problems
- I didn't trust AI enough I built the TUI as this cage for the AI and gave it mechanical ways to perform actions.
- I rolled my own Jira and Linear integrations which is a huge surface area which doesn't even deal with the core product.
- The TUI is obscure and hard to use when first learning about it, it's very classic feeling, if AI is so great why not just talk to the AI?

I felt I've seen enough.
After adding Jira integration I realized 90% of the code has nothing to do with the product.
I guess I just liked the idea of a CLI tool with visual elements and the language I chose but at the end of the day a good product is something people would really use and is accessible.

I decided to drastically reduce the code's surface area and turn Warlock into a Claude plugin with some hook elements.
So far it seems to work just as well for the core features and much better for ticket service integrations because I have no need to maintain those portions.

It feels weird but it's the right choice.
