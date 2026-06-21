---
title: "The four-hour course is delivered, demo fails and all"
date: "2026-06-21"
slug: "packt-course-delivered"
tags: ["ai-assisted-dev", "agents", "tooling", "teaching"]
excerpt: "A delivered course (demo fails and all), a clean rename out of lsp4agents, and a meetup demo to plan."
---

Three threads this week.

I delivered a four-hour online course on Saturday. It was part of Packt's Deep Engineering platform, and they did an amazing job co-hosting the call with me. I felt a little bad for them — the call didn't wrap until around 12:30 am their time. I think it went pretty well. A couple of demo fails along the way, but that is the way of live talks, and of non-deterministic LLMs.

I also made a bit of progress on [lsp4agents](https://github.com/AlteredCraft/lsp4agents). The `lsp4a` command now returns well-formed output — here's a rename in action:

```
❯ lsp4a rename sample.py greet greetz
{
  "changes": [
    {
      "after": "from sample import greetz",
      "before": "from sample import greet",
      "file": "consumer.py",
      "line": 8
    },
    {
      "after": "reply = greetz(\"world\")",
      "before": "reply = greet(\"world\")",
      "file": "consumer.py",
      "line": 10
    },
    {
      "after": "def greetz(name: str) -> str:",
      "before": "def greet(name: str) -> str:",
      "file": "sample.py",
      "line": 1
    },
    {
      "after": "message = greetz(123)",
      "before": "message = greet(123)",
      "file": "sample.py",
      "line": 6
    }
  ],
  "renamed_to": "greetz",
  "resolved": {
    "file": "sample.py",
    "from": "symbol",
    "line": 1
  },
  "scope": {
    "edits": 4,
    "files": 2
  },
  "status": "preview",
  "target": "greet"
}
```

It's a preview of a cross-file rename: every edit the change would make, listed before it touches a file.

Lastly, I'm starting to plan a Tech Builder Demo event to host here in Vancouver, WA. Looking forward to that one.
