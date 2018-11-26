---
layout: post
title: "Final Project, Revised"
date: 2018-11-22 18:21:23 -0500
tags: final project 
---
**Working Title**: Lexicon

**Summary**: My revised final project idea is a mock popup dictionary Chrome extension, simulating the process of learning a foreign language. The extension will force you to browse webpages in a language you don't know with the sole help of a pop-up dictionary. Over time, the web pages will transition from that unknown language to a language that you _do_ know, and using the dictionary to look up words constantly may hinder this.

### Details

**Concept**:
My revised final project idea is a mock popup dictionary Chrome extension, simulating the process of learning a foreign language. The extension will force you to browse webpages in a language you don't know with the sole help of a pop-up dictionary. Over time, the web pages will transition from that unknown language to a language that you _do_ know (probably the original webpage text). The more you use the pop-up dictionary -- which involves highlighting unknown words -- the more words are translated to the original text, but this is only a temporary solution, as doing this too much will cause them to revert to the unknown language. The time it takes for a webpage to revert fully to the original language depends on the length of the page, and slows down over time.

This project idea is inspired by my experiences in learning languages and being stuck on the 'intermediate' plateau, where it seems that you're not making any progress (or the false belief that you are, due to relying on dictionaries as a crutch), and how, ultimately, patience will lead to reward.

**Implementation**:
I have not worked with Chrome extensions before, so figuring out how they work will be one of the challenges for this project. I do have some experience with Javascript, though, so hopefully figuring out how to grab and change text from a webpage won't be too difficult. Another major implementation difficulty will be designing the way I'll be keeping track of which words are in the unknown language, which have been translated back permanently, and which have been translated back temporarily.

I may also store "learned" words that carry over from webpage to webpage, but that may be difficult depending on how I choose the unknown language.

Though I haven't had much time to explore the workings of Chrome extensions, I've looked into the APIs I might need to do translating. For the initial translation of the webpage, I think I can do something with the Google Website Translator. I've managed to set it up on my local version of this blog, as shown below, with the "original text" popup-on-hover disabled. Unfortunately, you have to pay to access the actual Translate API, and I'll have to look for alternatives if I want to do the back-translation (or settle with only translating into, say, English).

Since my goal is for this extension to be able to work with any website, I'll have to look into injecting this google translate button into an external website via an extension, but if I'm unable to do that, I might have to settle with making a mock webpage or two for the project instead.

![Image of this blog machine translated into French]({{site.baseurl}}/images/translation.png)
