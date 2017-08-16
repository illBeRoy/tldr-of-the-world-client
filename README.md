# TL;DR of the World Client
Part of the [TL;DR of the World](https://tldrofthe.world) academic project.  

Server repository can be found [here](https://github.com/illBeRoy/tldr-of-the-world-server).

Whenever "graph" is mentioned in this readme it refers to [another part of the project](https://github.com/illBeRoy/tldr-of-the-world-data).

## Client structure

### Dependencies
The client is written in ES6, and mainly uses the following dependencies:

- [reactjs](https://facebook.github.io/react) for UI rendering,

- [visjs](http://visjs.org) for a specific, performant data component

- [babel](https://babeljs.io) for transpiling new features of javascript into plain old ES5, allowing for it to support more versions of more browsers.

- [axios](https://github.com/mzabriskie/axios) for making api requests

...And more, as can be seen in [package.json](/package.json)

### Pages
The project consists of two pages:

#### Onboarding and feed creation

Where you create the group of people, from which a feed of quotes would be generated.

The page uses autocompletion for faster data input, and also an [Apple Music inspired "bubble" interface](http://factmag-images.s3.amazonaws.com/wp-content/uploads/2015/07/apple-music-bubbles-040715.jpg) for enriching your feed with similar characters.

#### Feed

The feed page presents the quotes of the selected people (with automatically suggested extras) and allows you to traverse, search and learn more about the involved figures.

Each feed has unique id that is embedded in the url, and can be shared with others.

### Attributions

In addition to pantheon, wikiquote and wikipedia, the UI also makes use of some excellent icons from [flaticon](https://www.flaticon.com).
