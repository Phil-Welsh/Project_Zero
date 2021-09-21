// Phil Welsh

// Functions I need
// 2. Push up title after hitting "Let's go!"
//          a. Hide naming box and unhide game
// 3. +1 on stats every 30 seconds
// 4. -1 on stats every time respective button is pushed
// 5. Progress bar that increases every 30 seconds
// 6. Replay button when stats get to 10
// 7. Animate snail getting fuzzier as he gets hungrier

// Set jQuery variables
const $nameInputButton = $('#nameInputButton')
const $eatButton = $('#eatButton')
const $setUpCampButton = $('#setUpCampButton')
const $playCardsButton = $('#playCardsButton')
const $nameInput = $('#nameInput')
const $snailImg = $('#snail')
const $hunger = $('hungerLi')

// Snail object
const snail = {
    // Saves name input to object
    name: () => {
        snailName = $nameInput.val()
        console.log(snailName)
    },

    // Health counter
    hunger: () => {
        snailHunger = 0
        window.setInterval(function() {
            snailHunger += 1
            console.log(this.snailHunger)},
            10000)
        },
}

// Add event listeners
$nameInputButton.on('click', snail.name)
$nameInputButton.on('click', snail.hunger)
