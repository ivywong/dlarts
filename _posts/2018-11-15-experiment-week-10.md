---
layout: post
title: "Week #10 Experiment - The Two - Chinese Translation"
date: 2018-11-15 19:15:13 -0500
tags: experiment
---
My experiment for this week is [他们俩]({{site.baseurl}}/experiments/the_two.html), a (mediocre) translation of Nick Montfort's [The Two](https://nickm.com/2/the_two.html) into Mandarin Chinese. Disclaimer: I am currently studying Chinese but am by no means fluent.

Part of the reason why I picked this project in particular was because it already has several translations in other languages, including Spanish, French, Russian, and Japanese, and it's very interesting to compare how each translation handles the differences in grammar when it comes to generating text. For example, since Japanese has particles indicating subject/object/etc, it has a fairly flexible word order and not much code had to be changed.

For the Chinese translation, I had to change the code a fair amount, since Chinese word order is fairly restrictive. In the original code, the middle sentence, which contains a randomly generated verb, is constructed in the form `[He/she] <verb> [her/him]`. This seems rather straightforward -- after all, Chinese has the same word order (Subject-Verb-Object) as English, right? The sticking point is that `<verb>` actually contained prepositions, which meant `[her/him]` could be the direct object or indirect object, which is handled differently in Chinese, where word order matters.

In addition, there is no difference between "he/she" and "her/him" in Chinese, which are represented by the same character. So, in a way, Chinese is simultaneously more flexible and less flexible than English... making computer-generated text projects simpler to create in some ways and more difficult in others.
