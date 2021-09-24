# Oregon Snail

Created by: Phil Welsh

## Overview

This game is Phil Welsh's first project for his Fall 2021 Software Engineering Immersive program with General Assembly. Players help a snail across a dangerous landscape in the hopes of reaching a large stockpile of food.

## Wireframes

Wireframe images are in the wireframes folder in this repo.

## User stories:

- Player starts at a page where they name their snail.

- After naming, they enter the main game with their snail presented in the middle of the page.

- On the left side is a box displaying hunger, sleepiness, boredom, and name.

- On the right side is a box with buttons that allow users to feed the snail, sleep, and play cards.

- Under the snail, there is a colored bar that shows the snail's progress to their destination.

- The progress bar advances %5 at a specified interval.

- The hunger, sleepiness, boredom counters go up by 1 at a specified interval.

- The picture of the snail starts to fade as the hunger level increases.

- If any of the counters reach 10 before the progress bar is complete, the snail dies. The user is taken to a page that explains why the snail died, with a button to play again.

- If the snail completes the trip before any of the health/boredom/sleepiness attributes get to 10, then a window congratulating the player appears. This window also has a button to play again.

## Technologies Used

- HTML
- CSS
- Javascript
- Github

## Challenges

- I set intervals on many functions in the game. Figuring out how to clear them appropriately took a while.

- The replay button is a div created by a Javascript function. This button needs an event listener, so figuring out how to add an event listener to a newly appended button was a challenge.

- Hiding/showing elements, and then giving them display properties was challenging.

## Triumphs

- The game rendering turned out really well. The background image is great, and the empty top portion allowed me to create the game there.

- With the extra time, I was able to clean the code and comment it comprehensively.

## Things to improve

#### Code-wise

- There are many functions that call other functions. This may be fine, but currently if one function misbehaves, it breaks the whole game. Also functions cannot be reused as of writing.

#### Design

- Instead of a progress bar, it would be better if the game portrayed the snail moving across the landscape.

- The game is not designed for mobile or small screens currently.

- Currently the snail starts to get blurrier as it gets hungrier. This could probably be animated better.

- Would be better if the hunger/sleepiness/boredom stats were bars or animated somehow, rather than just numbers.

- Players can repeatedly click the buttons. In the future, it would be better if there was a delay while the snail ate, slept, or played cards.

## Future ideas and stretch features

- Create an inventory with food storage and other things that will become depleted as the journey goes on.

- Create challenges that the snail comes across that must be handled appropriately (e.g. "James just reached a river! What should he do?")

- Add an animation for when the snail is eating, sleeping, or playing cards.
