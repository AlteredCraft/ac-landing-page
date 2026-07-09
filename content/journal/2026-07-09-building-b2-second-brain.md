---
title: "I like 80% of Obsidian, so I'm building the other 20%"
date: "2026-07-09"
slug: "building-b2-second-brain"
tags: ["rust", "pkm", "tooling", "learning-in-public"]
excerpt: "Obsidian gets me most of the way; B2 is my Rust-and-Tauri take on the rest, with hybrid keyword + semantic search built in."
---

I've started a new project, currently called [B2](https://github.com/AlteredCraft/B2) — as in "second brain."

To this point I've used Obsidian for personal knowledge management (PKM). I like about 80% of how it works, but I'm not a fan of the plugin system for extension, and the native search could be better — and AI-augmented. I've finally started to build out my own take.

I'm also using the opportunity to work with Rust, settling on Tauri for the desktop UI. It's getting close to usable: currently I'm working on the "live edit" feature (such as we have in Obsidian) and tuning/testing the indexing (vector embedding) that will provide a hybrid search capability — keyword plus semantic.
