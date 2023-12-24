# Read More Buttons in JS

---

This tutorial will guide you through creating a simple "Read More" button using HTML, CSS, and JavaScript. The button will expand and collapse content when clicked, providing a user-friendly way to manage long pieces of text.
It come with two different effects.

## Screenshots

![readMore Video](https://digitalarbeit.com/rm/readmore.jpeg)

## Video example

[link for Video example](https://digitalarbeit.com/rm/readmore.m4v)

## Installation

Make sure, your html file contains the JavaScript and CSS Sytle files. In the index.html example file the css stylesheet is linked in <head>:

`<link rel="stylesheet" href="style.css" />`

Best parctice for JavaScript is on the bottom, before the </body> Tag closed:

`<script src="function.js"></script>`

### Second Button Effect

The second read more button have an .animate() effect. In the functions.js file you will find it under line 46.
Here you can adjust your key frames for your need.

```
// key frames from up to down
        // { transform: 'translateY(-100px)' },
        // { transform: 'translateY(0px)' },

        // key frames from left to center
        { transform: 'translateX(-200px)' },
        { transform: 'translateX(50px)' },
        { transform: 'translateX(0px)' },
```

You can comment out the keyframes for your need or adjust it how you prefer. Standard is from left to right, the example above is from top to down.

The duration of the effect can be set in line 59
`duration: 1000,`

### Opacity Keyframe seetings

You will find the opacity keyframes settings in the css file.

Here we have two keyframes, `smooth` for button 1 and `smooth2` for button 2. Both related to the class `.animateOpacity` for button 1 and `.animateOpacity2` for button 2.

> Made by [Digitalarbeit](https://digitalarbeit.com/)
