# Pathfinder AR

This project is an augmented reality single application page (AR SPA) for
replacing a [paper tokens for Pathfinder](https://dmjason.weebly.com/blog/1)
 with an AR 3d models.

# Features

At the moment the project works with [a warrior marker](public/images/warrior_marker.png)
 and replace it with a box with [a warrior image](public/images/warrior.png)
on top of it.

The second feature the project provides is a health tracker. It's a number of
health points for a token. It's placed upper on the box.

# Technologies

We use React with [React Web AR](https://github.com/nitin42/React-Web-AR), and
[Aframe](http://aframe.io/) with [AR.js]()

# Development

``` bash
$ yarn install # install dependencies
$ yarn start # run it un your machine
```

You don't need a webcam for development, you can use video or static image instead.
Search for `sourceUrl` key in `AFrameRenderer`'s `arToolKit` property.
