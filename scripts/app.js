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
const $statsName = $('#name')

// Snail object
const snail = {

    snailProgress: 0,
    progress: null,
    snailHunger: 0,
    hunger: null,
    snailSleepiness: 0,
    sleepiness: null,
    snailBoredom: 0,
    boredom: null,

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
                $statsName.text(snailName)
                snail.hungerIncrease()
                snail.sleepinessIncrease()
                snail.boredomIncrease()
                snail.updateProgress()
            }
        },

    // Hunger counter that increases by 1 every 5 seconds
    hungerIncrease: () => {
        snail.hunger = setInterval(function() {
            if (snail.snailHunger >= 10) {
                alert(`${snailName} died from hunger! :(`)
                clearInterval(snail.hunger)
        } else {
            snail.snailHunger += 1
            $hunger.text("Hunger: " + snail.snailHunger)
            }
        }, 5000)
    },

    // Sleepiness counter that increases by 1 every 5 seconds
    sleepinessIncrease: () => {
        snail.sleepiness = setInterval(function() {
            if (snail.snailSleepiness >= 10) {
                alert(`${snailName} died from sleepiness! :(`)
                clearInterval(snail.sleepiness)
        } else {
            snail.snailSleepiness += 1
            $sleepiness.text("Sleepiness: " + snail.snailSleepiness)
            }
        }, 5000)
    },

    // Boredom counter that increases by 1 every 5 seconds
    boredomIncrease: () => {
        snail.boredom = setInterval(function() {
            if (snail.snailBoredom >= 10) {
                alert(`${snailName} died from boredom! :(`)
                clearInterval(snail.boredom)
        } else {
            snail.snailBoredom += 1
            $boredom.text("Boredom: " + snail.snailBoredom)
            }
        }, 5000)
    },

    // Hunger counter that decreases by 1 every time "Eat" button is clicked
    hungerDecrease: () => {
        if (snail.snailHunger > 0) {
        snail.snailHunger -= 1
        $hunger.text("Hunger: " + snail.snailHunger)
        }
    },

    // Sleepiness counter that decreases by 1 every time "Set up camp" button is clicked
    sleepinessDecrease: () => {
        if (snail.snailSleepiness > 0) {
        snail.snailSleepiness -= 1
        $sleepiness.text("Sleepiness: " + snail.snailSleepiness)
        }
    },

    // Boredom counter that decreases by 1 every time "Play cards" button is clicked
    boredomDecrease: () => {
        if (snail.snailBoredom > 0) {
        snail.snailBoredom -= 1
        $boredom.text("Boredom: " + snail.snailBoredom)
        }
    },

    updateProgress: () => {
        snail.progress = setInterval(function() {
            if (snail.snailProgress >= 100) {
                alert(`${snailName} completed the journey!`)
                clearInterval(snail.progress)
        } else {
            snail.snailProgress += 5
            var elem = document.getElementById("progressBar")
            elem.style.width = snail.snailProgress + "%"
            }
        }, 10000)
    }
}



// Add event listeners
$nameInputButton.on('click', snail.name)
$eatButton.on('click', snail.hungerDecrease)
$setUpCampButton.on('click', snail.sleepinessDecrease)
$playCardsButton.on('click', snail.boredomDecrease)
