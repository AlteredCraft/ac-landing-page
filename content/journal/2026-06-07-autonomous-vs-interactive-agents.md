---
title: "Autonomous agents need different machinery than the ones you watch"
date: "2026-06-07"
slug: "autonomous-vs-interactive-agents"
tags: ["agents", "tilth", "ai-assisted-dev"]
excerpt: "Most coding agents assume someone is watching. The interesting problems start when no one is."
---

Spent most of this week on Tilth, the long-running agent harness I've been building, and the work kept circling one distinction: an agent you watch is a different animal from one that runs on its own.

When you pair with an agent, you are the safety net. You catch the bad run, you re-prompt, you decide when a change is actually done. Take the person out of the loop for half an hour and all of that has to live in the harness instead. That is why the autonomous version grew an evaluator that asks whether a change is a proper solution rather than just green tests, caps that stand in for the budget ceiling a human would otherwise impose, and observability you can replay afterward instead of watching live.

None of that is a knock on interactive agents. It is a different shape for a different job. Naming the difference plainly is what made the rest of the design fall into place.

See the work in progress at [Tilth](https://github.com/AlteredCraft/tilth) if you want to follow along. I also have a goal to maintain clear documentaion along the way [Docs](https://alteredcraft.github.io/tilth/).
