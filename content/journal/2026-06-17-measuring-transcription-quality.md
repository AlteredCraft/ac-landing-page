---
title: "Measuring transcription quality is harder than comparing strings"
date: "2026-06-17"
slug: "measuring-transcription-quality"
tags: ["ios", "models", "tilth", "learning-in-public"]
excerpt: "Exact string match punishes the very thing a good transcription model does: clean up what was actually said."
---

Three threads today.

The slide deck for an upcoming online course is finally done: four hours, ninety slides, and the demos to go with them. From here it's delivery practice, which is a good kind of work to be left with.

The one that has me stuck is the test suite for Relay Notes, my iPhone app. I want to compare transcription quality across the different speech-to-text models, and I assumed I could score each one against a reference transcript. But exact string match turns out to be the wrong measure. Many of these models deliberately clean up what they hear: they fix grammar ("wanna" becomes "want to"), drop the ums and ahs, smooth out the continuity. The transcript I actually want is not the literal audio, so a literal diff punishes the very thing I'm paying for.

So what is the right measure? Semantic similarity, a model-graded rubric, something else? I don't have a clean answer yet, and rather than block on it I'm going to punt: ad hoc testing for now, and come back to the measurement problem when it is the thing standing in my way.

Tonight is the Portland AI Meetup, a multi-demo night. A few presenters cancelled late, so I'm filling the gap with a demo of my own: the visualize feature in Tilth. A good forcing function for making it presentable.
