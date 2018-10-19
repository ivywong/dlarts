---
layout: post
title: "Week #6 Experiment - [class]ics"
date: 2018-10-19 12:27:34 -0400
tags: experiment
---
## [class]ics

{% highlight python %}
class Bookshelf:
    def __init__(self):
        self.books = [
            [ Odyssey(), Ulysses() ],
            [ LittlePrince(), IRobot() ],
            [ DorianGray(), Fahrenheit451() ],
            [ Metamorphosis() ]
        ]
    
    def read(self):
        random.choice(self.books).read())

class Odyssey:
    def read(self):
        return longestPath("Troy", "Ithaca")

class Ulysses:
    def read(self):
        return self.words.shuffle()

class LittlePrince:
    def read(self):
        if showReader(drawing) == 'hat':
            return 'dull'
        elif showReader(drawing) == 'elephant in a snake':
            return 'joy'

class IRobot:
    def read(self):
        self.distance_to_selenium = 5
        while(true):
            if (self.distance_to_selenium > 0):
                self.distance_to_selenium -= 1
            if (self.distance_to_selenium < 3:
                print('DANGER')
                self.distance_to_selenium += 1
            if is_human_in_danger():
                break

class DorianGray:
    def read(self):
        while (portrait):
            self.portrait.beauty -= self.dorian.sins
        self.dorian = self.portrait
        return self.dorian

class Fahrenheit451:
    def read(self):
        raise RuntimeError('book on fire')

class Metamorphosis:
    def read(self):
        return self.gregor.to_cockroach()
{% endhighlight %}
