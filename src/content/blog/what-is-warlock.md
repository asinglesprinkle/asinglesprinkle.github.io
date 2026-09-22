---
title: 'What is Warlock'
description: 'A description of my TUI tool.'
pubDate: 'Sep 22 2026'
categories: ['warlock']
draft: false
---

Warlock is a TUI tool for AI first development.

Warlock's features can be split into two groups each with three points.

Part One: The TUI
1) Warlock has a feature called pacting which essentially creates a WARLOCK.md file per directory which contains routing information to allow the AI to very effectively reason about a code base.
When any file changes (except for .md files) the file tree for that module turns yellow, meaning a pact should be refreshed to get the most out of the AI's pact files.
2) Scopes are the ability to have the org-chart live in the repo. You can add a name to a directory like "control-plane". The scope will also take the Linear board associated with that team, the review state a finished ticket should be placed in, and a label the system will add to tickets so it knows which tickets it's allowed to pull.
3) Sigils are not committed, they are local to a machine. If you have a sigil that matches a scope in a repo that means traditionally you are on that team, so you are allowed to work on it. When you pull work the AI will check "am I allowed to change this" and see if the local sigil is in the machine to edit the files in a scoped directory.
This is essentially a speed bump but it's not changing what we do today, if someone wants to hand edit a new sigil and make some wild changes - good luck, I'm sure the team will think that was a weird decision. I'm not trying to solve problems that exist today, I just want to provide tooling that makes a consistent environment to use AI more effectively.

Part Two: The Workflow
1) Briefs are the concept where you chat with the AI to define a large scope of work similar to a project manager, the AI will push back on your assumptions and try to reach a shared understanding with you on your goals and define the task. This brief will be uploaded to Linear as a Project.
2) Drafting is when you pull a Linear Project and cut it up into tickets which can later be pulled and worked on.
3) Pull is when you pull a ticket, a pulled ticket is cut up into sub-tasks and each sub-task gets a new agent session for maximum context window. This session checks scope-sigil pairing to know if it's allowed to make changes and also has access to the WARLOCK.md's for increased reasoning without rebuilding context.

In each of these points I'm sure you can find a way to side step this system.
That is fine, I want to provide the framework not hold people hostage to it.
This also allows teams to find what works for them. I found this works very well for systems and tooling.
Warlock itself was built 100% using this method, I have never looked at the code.
This tool would be terrible for design, if you need quick instant feedback and a series of tiny tweaks, please use something like Cursor, it's perfect for that.

I'm hoping to provide the first AI first next generation IDEs but I can't even call it an IDE, it's not.
Existing AI IDEs are essentially just VSCode with an AI panel, some better than others, but I wanted something that was AI and then code instead of CODE and also AI.

I hope to find some audience for this but I'm aware it's a bit niche.
