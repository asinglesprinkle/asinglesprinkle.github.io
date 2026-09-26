---
title: 'AI Infrastructure Test Oracle'
description: 'A canary which continuously monitored Control Plane for correctness.'
pubDate: 'Sep 26 2026'
categories: ['system-design']
draft: false
---

I recently built a Test Oracle for an AI infrastructure company.
A Test Oracle is basically a system that knows what "correct" means so the rest of the system doesn't have to.
There could be many legally correct states and it is the part that decides if a test has passed.

The portion of the infrastructure I owned was the Control Plane, in this context that basically meant deciding what happens where and why.
Our product was offering customers space on a baremetal machine in the form of a microVM, there could be multiple different customers on a single machine.
We need to track availability and latency and cached software to make a decision about who goes where and why.

The state being modified by the Control Plane was metadata about the system and the actual baremetal machines which customers' microVMs would run on.

I want to break down what I built into more digestible chunks so this article doesn't become a bunch of jargon.

1) Spoofed Host Substrate: I never interacted with real VMs I just skipped over the actual calls which would truly change state. I had a fake fleet I could define and simulate scenarios against. The test actually ran on the real Control Plane not another version or a simulated version.
2) Fleet State Fixtures: I saved various snapshots of what the fleet looks like and used these different states as the starting conditions for scenarios.
3) Scenarios: Operations run against a fleet state, like create, create again, destroy. This was versioned and deterministic.
4) Lifecycle Barriers: Named points inside an operation (after allocation, before DB commit) where a fault could be triggered.
5) Fault Plans: declarative data saying "at barrier X, do fault Y" Faults were environmental events: host death mid-operation, dropped acknowledgements, crash before finalize.
6) Seeded Deterministic Clock: Controls timing so the same plan plus the same seed produces the exact same run every time. Turned intermittent failures into reproducible ones.
7) Test Oracle: Judges each run by invariants rather than exact expected output. Idempotency (duplicate creates on a five-machine fleet yield one machine), deterministic machine selection, final state consistent with policy, truthful event history, and correct records in the datastore.
8) Golden Replay Corpus: The saved set of scenarios, fault plans, and seeds that passed. Replayed continuously so regressions surface as diffs.
9) Failures Become Tests: When a run caught a bug, that exact scenario went into the corpus, so the fix is proven and can't silently regress.
10) Canary Gate: The whole suite ran on every control plane change before it shipped.

I feel I've already summed up the system pretty cleanly above but to put it together a bit.
There was a canary that would be continuously running tests against the Control Plane.
Tests really ran on the Control Plane but would just skip over calls which really mutated VM state.
Any finding was added to the corpus of tests to prevent a regression.
Tests could define a synthetic fleet so any shape could be tested against.
And finally the fault plans allowed injecting artificial unexpected events at certain barriers: host death, dropped ack, etc.

I had never heard of the concept of Test Oracle before building this and was very excited to work on software like this. 
I felt like I actually got to use my skills to the best of their ability.

This initially started because we needed to test the Control Plane and I thought back to how Oracle tested Exadata systems (big systems, takes 24 hours to provision one, costs insane amount of money to run).
A lot of people might think it's complicated but really what most big companies do might seem silly. 
If name starts with "test-" and environment is "dev" then just write an entry but don't really provision - done.

Extending from this thought I kept working on how do I make this better and the rest sort of spawned from that.

I could talk about more but I want to leave enough vagueness to avoid getting too in depth about inner company workings.
Thanks for reading.