---
title: "Give the agent the tools you already use"
date: "2026-06-03"
slug: "agents-deserve-real-tools"
tags: ["agents", "tooling", "rust", "learning-in-public"]
excerpt: "We hand agents a text editor and act surprised when they reason about code like it's text."
---

A smaller thread this week: I started a testbed for wiring a language server (LSP) into an agent's toolset.

The premise is simple. When we work in an IDE, we lean on the language server constantly: go to definition, find references, real type errors, a rename that actually understands scope. Coding agents get none of that. They grep and pattern-match over source as if it were plain text, and then we wonder why they miss a caller three files away or it takes 2 minutes and 10k tokens to rename a function is three places. Handing them the same structured tools we use looks like an obvious lever.

I certaily see LSP Skills and MCP's for agents, but from what I've found those simply 'expose' the LSP server to the agent. The fact that these servers were build with a perception that an IDE was the client, they may not be optimal for an agent. Thus that is what this testbed it aiming to explore: what does an LSP client built for agents look like? What are the right abstractions and interfaces? How do we design it to be efficient and effective for an agent's workflow?

It is early. So far it is a rough client and a small CLI, and part of the week went to deciding to build the real version in Rust and park the Python sketch. The code is public now at [lsp4agents](https://github.com/AlteredCraft/lsp4agents) if you want to follow along. More a question I am chasing than an answer, but it feels like the right question.
