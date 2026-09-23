---
title: 'Warlock origin'
description: 'The AI first editor.'
pubDate: 'Sep 22 2026'
categories: ['warlock']
draft: false
---

I was hesitant with AI at first. I felt like it was cheating or couldn't possibly be good enough, to trust running autonomously, and a few years ago that was probably true.

I hesitantly got a Claude subscription back in March of 2026.
I would do what most people do, prompt engineering.
You fire off a prompt watch it work and then audit the results, normally short pieces of code.
I would never let Claude commit and I would enforce no em dashes.

This all changed when I eventually got a job working on AI Infrastructure.

I joined the project and thought the code must be so advanced it's so hard to reason about.. maybe I'm not good enough yet, maybe it's that I've never read Rust before.
It wasn't any of those, after diagramming the entire project by hand I realized what's happening - the project as an idea is completely sound and coherent but just not for human eyes.
Every directory has a README.md to supply context but is large and hard to parse for a person.

I realized someone made this, it's getting funding, and it actually works.
It was created using ideas from the top down and hit back into place where it went astray.

Traditional coding is you go bottom up, you write code to create the higher level ideas.

This AI generated code almost reminded me of how compilers and higher level languages work.
Like you could go in and read the assembly or binaries but besides being a nerd... why would you?
Educational purposes? Fun? All valid but it's not "the way".

What if this is the new higher level language?

I started to think but this method you can't work with other people, it's too rapid, and documentation process is rarely followed.

To help with this friction I built an AI Harness over the weekend.
Something dead simple, you describe a ticket and it is pushed to Linear, later you can pull the ticket from Linear and work on it.
Each pulled ticket is cut up into sub-tickets with local state in case of failure, you can resume, at the end of this process you are left with a PR waiting to be reviewed by a human.
I thought this is great but what if I build the AI Loop level but with some guardrails.
I go a layer up - okay what if I was a project manager and I describe large chunks of work and upload it to Linear as a Project.
Later I can pull Projects and then call the first tool to cut those up into tickets.
And the process was created.
I'm sure none of this is new and there are probably pre-built tools for this, but it was so fast and efficient it seemed perfect for our workflow.
I wanted to show it to the team eventually.

At work we spoke about how we would program and were assigned the method.
Each person owns a slice of the project.
As a slice owner you use the AI to operate on the code.
You are judged by the outcome being sound.

I was excited to see this play out, it seemed like some experimental method I doubt many people actually follow.
How would this develop into a real work style?
Before I could find out the company closed down.

But the idea just sat with me, what if you woke up 20 years in the future?
Somebody actually looking at code, actually reading it would be a hobbyist, like you can.. but why?

What would an IDE look like in that world?
Right now AI driven IDEs are just normal IDEs + AI, they clearly aren't a tool imagining everything is generated.

I got to thinking well what would it look like, well the old job had README.md's in every directory but they go stale.
What if they never went stale? But they are written about the code, you'd need to know when the code goes stale.

So I thought well.. a Text User Interface tool where the file tree is just modules, no need to show the files, you press a button to rewrite the documents from the source code which the AI uses to reason about the codebase.
If files change they turn yellow, once you refresh the AI support files the tree turns green meaning the AI understands the codebase again.
