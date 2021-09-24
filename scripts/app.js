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
const $playerName = $('.name')
const $replay = $('#replay')
const $statsContainer = $('#statsContainer')
const $snailContainer = $('#snailContainer')
const $buttonContainer = $('#buttonContainer')
const $progressBarContainer = $('#progressBarContainer')
const $nameContainer = $('#nameContainer')
const $endGameContainer = $('#endGameContainer')

// Snail object
const snail = {

    // Set properties for use in methods below
    snailProgress: 0,
    progress: null,
    snailHunger: 0,
    hunger: null,
    snailSleepiness: 0,
    sleepiness: null,
    snailBoredom: 0,
    boredom: null,

    name: () => {

        // Saves name input to variable
        snailName = $nameInput.val()

        // Logic to make sure name is valid
        if (snailName.length == 0) {
            alert("Snail name can't be empty!")
            }
            else if (snailName.length > 20) {
                    alert("Please choose a shorter name!")
                }
            else {

                // Sets name for statsContainer
                $name.text("Name: " + snailName)
                $playerName.text(snailName)

                // Calls methods that start the game
                snail.hungerIncrease()
                snail.sleepinessIncrease()
                snail.boredomIncrease()
                snail.updateProgress()

                // Display game objects
                displayGame()
            }
        },

    hungerIncrease: () => {

        // Method that increases hunger at a specified increment
        snail.hunger = setInterval(function() {

            // If hunger limit is reached, it clears all other setIntervals
            if (snail.snailHunger >= 9) {
                clearInterval(snail.progress)
                clearInterval(snail.hunger)
                clearInterval(snail.boredom)
                clearInterval(snail.sleepiness)

                // Ends the game and passes the hunger parameter
                endGame("hunger")

            } else {

            // If limit is not reached, add 1 to the count
            snail.snailHunger += 1
            $hunger.text("Hunger: " + snail.snailHunger)

            // Calls method to make snail blurrier as it gets hungrier
            snail.appearance()
            }
        }, 3000)
    },

    sleepinessIncrease: () => {

        // Method that increases sleepiness at a specified increment
        snail.sleepiness = setInterval(function() {

            // If sleepiness limit is reached, it clears all other setIntervals
            if (snail.snailSleepiness >= 9) {
                clearInterval(snail.sleepiness)
                clearInterval(snail.progress)
                clearInterval(snail.hunger)
                clearInterval(snail.boredom)

                // Ends the game and passes sleepiness parameter
                endGame("exhaustion")
            } else {

            // If limit is not reached, add 1 to the count
            snail.snailSleepiness += 1
            $sleepiness.text("Sleepiness: " + snail.snailSleepiness)
            }
        }, 6000)
    },

    boredomIncrease: () => {

        // Method that increases boredom at a specific increment
        snail.boredom = setInterval(function() {

            // If boredom limit is reached, it clears all other setIntervals
            if (snail.snailBoredom >= 9) {
                clearInterval(snail.boredom)
                clearInterval(snail.progress)
                clearInterval(snail.hunger)
                clearInterval(snail.sleepiness)

                // Ends the game and passes boredom parameter
                endGame("boredom")
            } else {

            // If limit is not reached, add 1 to the count
            snail.snailBoredom += 1
            $boredom.text("Boredom: " + snail.snailBoredom)
            }
        }, 10000)
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

        // Progress counter that runs at specified increment
        snail.progress = setInterval(function() {

            // If progress reaches 100, clear all other setIntervals
            if (snail.snailProgress >= 100) {
                clearInterval(snail.progress)
                clearInterval(snail.hunger)
                clearInterval(snail.boredom)
                clearInterval(snail.sleepiness)

                // Ends the game and passes parameter
                endGame("progress")

        } else {

            // If limit is not reached, add to progress and increase bar width
            snail.snailProgress += 5
            var elem = document.getElementById("progressBar")
            elem.style.width = snail.snailProgress + "%"
            }
            }, 8000)
        },

    // Method called by hungerIncrease method that makes snail blurrier as it gets hungrier
    appearance: () => {
        var elem = document.getElementById("snail")
        elem.style.filter = "blur(" + (snail.snailHunger/4) + "px)"
    }
}

// Function called by snail.name to hide/show appropriate containers
function displayGame() {
    $statsContainer.show()

    $snailContainer.show()

    $progressBarContainer.css('display', 'flex')
    $progressBarContainer.show()

    $buttonContainer.show()

    $nameContainer.hide()
}

// Function that hides/shows appropriate containers, then displays reason for game end and calls addReplayButton function
function endGame(reason) {
    endGameHideShow()
    if (reason == "progress") {
        $replay.text("Hooray! " + $nameInput.val() + " made it all the way to the pile of food! Well done!")
    } else {
    $replay.text("Oh no! " + $nameInput.val() + " died from " + reason + "!") }
    addReplayButton()
}

// Function that adds replay button div, gives it ability to reload page, and appends it
function addReplayButton() {
    const $replayButton = $("<div><button class = 'btn' id = 'replayButton'>Play again?</button></div>")
    $replayButton.on('click', function() {
        location.reload()
    })
    $replay.append($replayButton)
}

// Function that hides/shows appropriate containers at game end
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
