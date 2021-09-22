// Phil Welsh

// Set jQuery variables
const $nameInputButton = $('#nameInputButton')
const $eatButton = $('#eatButton')
const $setUpCampButton = $('#setUpCampButton')
const $playCardsButton = $('#playCardsButton')
const $nameInput = $('#nameInput')
const $hunger = $('#hungerLi')
const $boredom = $('#boredomLi')
const $sleepiness = $('#sleepinessLi')
const $name = $('#nameLi')
const $statsName = $('#name')
const $replay = $('#replay')
const $statsContainer = $('#statsContainer')
const $snailContainer = $('#snailContainer')
const $buttonContainer = $('#buttonContainer')
const $progressBarContainer = $('#progressBarContainer')
const $nameContainer = $('#nameContainer')
const $endGameContainer = $('#endGameContainer')

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
                displayGame()
            }
        },

    // Hunger counter that increases by 1 every 5 seconds
    hungerIncrease: () => {
        snail.hunger = setInterval(function() {
            if (snail.snailHunger >= 10) {
                clearInterval(snail.progress)
                clearInterval(snail.hunger)
                clearInterval(snail.boredom)
                clearInterval(snail.sleepiness)
                endGame("hunger")
        } else {
            snail.snailHunger += 1
            $hunger.text("Hunger: " + snail.snailHunger)
            snail.appearance()
            }
        }, 3000)
    },

    // Sleepiness counter that increases by 1 every 5 seconds
    sleepinessIncrease: () => {
        snail.sleepiness = setInterval(function() {
            if (snail.snailSleepiness >= 10) {
                clearInterval(snail.sleepiness)
                clearInterval(snail.progress)
                clearInterval(snail.hunger)
                clearInterval(snail.boredom)
                endGame("sleepiness")
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
                clearInterval(snail.boredom)
                clearInterval(snail.progress)
                clearInterval(snail.hunger)
                clearInterval(snail.sleepiness)
                endGame("boredom")
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
                clearInterval(snail.progress)
                clearInterval(snail.hunger)
                clearInterval(snail.boredom)
                clearInterval(snail.sleepiness)
                endGame("progress")
        } else {
            snail.snailProgress += 5
            var elem = document.getElementById("progressBar")
            elem.style.width = snail.snailProgress + "%"
            }
            }, 3000)
        },

    appearance: () => {
        var elem = document.getElementById("snail")
        elem.style.filter = "blur(" + (snail.snailHunger/4) + "px)"
    }
}

function displayGame() {
    $statsContainer.show()

    $snailContainer.show()

    $progressBarContainer.css('display', 'flex')
    $progressBarContainer.show()

    $buttonContainer.show()

    $nameContainer.hide()
}

// Calls function to hide/show appropriate containers, and displays reason for game end
function endGame(reason) {
    endGameHideShow()
    if (reason == "progress") {
        $replay.text("Hooray! " + $nameInput.val() + " made it all the way to the pile of food! Well done!")
    } else {
    $replay.text("Oh no! " + $nameInput.val() + " died from " + reason + "!") }
    addReplayButton()
}

function addReplayButton() {
    const $replayButton = $("<div><button id = 'replayButton'>Play again?</button></div>")
    $replayButton.on('click', function() {
        location.reload()
    })
    $replay.append($replayButton)
}

// Hides the gameplay containers and shows the end game container
function endGameHideShow() {
    $statsContainer.hide()

    $snailContainer.hide()

    $progressBarContainer.hide()

    $buttonContainer.hide()

    $nameContainer.hide()

    $endGameContainer.show()
}

// Add event listeners
$nameInputButton.on('click', snail.name)
$eatButton.on('click', snail.hungerDecrease)
$setUpCampButton.on('click', snail.sleepinessDecrease)
$playCardsButton.on('click', snail.boredomDecrease)
