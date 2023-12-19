'use strict';

// Variables Card 1
const dots = document.querySelector('.dots');
const button = document.querySelector('.button');
const readMoreContent = document.querySelector('.readMoreContent');

// Variables Card 2
const readMoreContent2 = document.querySelector('.readMoreContent2');
const button2 = document.querySelector('.button2');
const textVisible2 = document.querySelector('.textVisible2');

//Effect Opacity
const readMoreOpacity = function () {
  button.addEventListener('click', function () {
    //Change extra Content from display none to display block
    readMoreContent.classList.toggle('hidden');
    //Dots disappear
    dots.classList.toggle('hidden');
    //Change Text in Button
    readMoreContent.classList.contains('hidden')
      ? (button.textContent = 'Read More')
      : (button.textContent = 'Read Less');
    //Change Opacity with effect
    readMoreContent.classList.add('animateOpacity');
  });
};

//Effect Translate
const readMoreTranslate = function () {
  button2.addEventListener('click', function () {
    //Change extra Content from display none to display block
    readMoreContent2.classList.toggle('hidden');
    //Change Text in Button
    readMoreContent2.classList.contains('hidden')
      ? (button2.textContent = 'Read More')
      : (button2.textContent = 'Read Less');

    //Add or remove margin class
    readMoreContent2.classList.toggle('margin-bottom');
    textVisible2.classList.toggle('margin-bottom');
    textVisible2.classList.toggle('margin-bottom-0');
    readMoreContent2.classList.toggle('margin-top-0');

    //Change Opacity with Translate and animate
    readMoreContent2.animate(
      [
        // key frames from up to down
        // { transform: 'translateY(-100px)' },
        // { transform: 'translateY(0px)' },

        // key frames from left to center
        { transform: 'translateX(-200px)' },
        { transform: 'translateX(50px)' },
        { transform: 'translateX(0px)' },
      ],
      {
        // sync options
        duration: 1000,
      }
    );
    readMoreContent2.classList.add('animateOpacity2');
  });
};

// Wait for page completed loaded
document.addEventListener('DOMContentLoaded', readMoreOpacity);
document.addEventListener('DOMContentLoaded', readMoreTranslate);
