---
title: 'AI in a team setting'
description: 'The current state of AI as a practical tool.'
pubDate: 'Sep 26 2026'
categories: ['ai-general']
draft: false
---

AI is being pushed heavily in jobs but I feel there's this weird middle ground.
Like obviously giant corporations have a different level of compliance than a small to mid level company.
A company like Oracle couldn't justify to the world at the moment having fully AI written software even if it was hypothetically possible without issue.

That leaves this place where everyone should be using AI but not really and you should use it but with no solution as to how.

Before we move on I want to define a few things:
1) Prompt Engineering: typical open the AI and just type and hit enter - the vast majority of people do this and it's just not that great.
2) Harness Engineering: you notice some pattern to your work and either have canned prompts you feed the AI or some framework to get work done.
3) Loop Engineering: Essentially looping the harness and getting the human out of the picture.

The typical harness and loop implementations are bad from my perspective because they seek to remove the human element.
I have written software completely autonomously and it does work and is testable but for the purpose of companies and compliance and regulations this is a tough sell.

You should keep the people in the system at logical gates, PR Review, Ticket Definitions, things where judgement calls can be made.
This pushes liability back onto the human so when the company is audited there's someone to point to instead of 'we let AI run away and have product drift or some incident'.

I guess what I'm getting at is okay say you have this hypothetical system.
It's an AI Loop or AI Harness with human gates. Well how do you work with people on a team?
Everyone is just doing their own one-off implementation? Some internal software only for your company?

Everything I've seen people doing is at best spec driven development which means making a local .md file which defines a direction a product should go and then splitting that concept up into tickets which are also local .md's.
There's no true full on AI team driven system where process is mandatory, it's always just some guy with everything on a local machine and going tens of thousands of line changes.
How do you review this, how do you work with this?
So then everyone falls back to either their own rolled Harness or Prompt engineering because there's no real path forward.

This is why I started making Warlock. I felt there should at least be some option, there should be somebody making the first version of this whether its good or bad, maybe it would catch on and allow more productive work.
