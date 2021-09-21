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
const $hunger = $('#hungerLi')
const $boredom = $('#boredomLi')
const $sleepiness = $('#sleepinessLi')
const $name = $('#nameLi')

// Set global variables
let snailHunger = 0
let snailSleepiness = 0
let snailBoredom = 0
let snailProgress = 0

// Snail object
const snail = {

    // Saves name input to object
    name: () => {
        snailName = $nameInput.val()
        if (snailName.length == 0) {
            alert("Snail name can't be empty!")
            }
            else if (snailName.length > 20) {
                alert("Please choose a shorter name!")
            }
            else {
                $name.text("Name: " + snailName)
                snail.hungerIncrease()
                snail.sleepinessIncrease()
                snail.boredomIncrease()
                snail.progress()
            }
        },

    // Hunger counter that increases by 1 every 5 seconds
    hungerIncrease: () => {
        window.setInterval(function() {
            snailHunger += 1
            $hunger.text("Hunger: " + snailHunger)},
            5000)
        },

    // Sleepiness counter that increases by 1 every 5 seconds
    sleepinessIncrease: () => {
        window.setInterval(function() {
            snailSleepiness += 1
            $sleepiness.text("Sleepiness: " + snailSleepiness)},
            5000)
        },

    // Boredom counter that increases by 1 every 5 seconds
    boredomIncrease: () => {
        window.setInterval(function() {
            snailBoredom += 1
            $boredom.text("Boredom: " + snailBoredom)},
            5000)
    },

    // Hunger counter that decreases by 1 every time "Eat" button is clicked
    hungerDecrease: () => {
        if (snailHunger > 0) {
        snailHunger -= 1
        $hunger.text("Hunger: " + snailHunger)
        }
    },

    // Sleepiness counter that decreases by 1 every time "Set up camp" button is clicked
    sleepinessDecrease: () => {
        if (snailSleepiness > 0) {
        snailSleepiness -= 1
        $sleepiness.text("Sleepiness: " + snailSleepiness)
        }
    },

    // Boredom counter that decreases by 1 every time "Play cards" button is clicked
    boredomDecrease: () => {
        if (snailBoredom > 0) {
        snailBoredom -= 1
        $boredom.text("Boredom: " + snailBoredom)
        }
    },

    // Progress counter that increases by 5 every 5 seconds
    progress: () => {
            window.setInterval(function() {
                if (snailProgress >= 100) {
                    alert(`${snailName} completed the journey!`)
                    clearInterval(window)
                } else
                snailProgress += 5
                var elem = document.getElementById("progressBar")
                elem.style.width = snailProgress + "%"
            }, 500)
        }
}

// Add event listeners
$nameInputButton.on('click', snail.name)
$eatButton.on('click', snail.hungerDecrease)
$setUpCampButton.on('click', snail.sleepinessDecrease)
$playCardsButton.on('click', snail.boredomDecrease)
