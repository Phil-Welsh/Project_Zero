<!-- Phil Welsh -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oregon Snail</title>
    <link rel="stylesheet" href="styles/styles.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="scripts/app.js" defer></script>
</head>
<body>

    <div id = "titleContainer">
        <h1>Oregon Snail</h1>
        <h3>Guide your snail across a dangerous landscape to reach a stockpile of food!</h3>
    </div>

    <div id = "nameContainer">
        <input type="text" id = "nameInput">
        <button class= "btn" id = "nameInputButton">Let's go!</button>
    </div>

    <div id = "centerPiece">

        <div id = "statsContainer">
            <p>Make sure none of these get to 10 or <span id = "name"></span> dies!</p>
            <ul id = "statsLiContainer">
                <li class = "statsLi" id = "nameLi">Name: </li>
                <li class = "statsLi" id = "sleepinessLi">Sleepiness: </li>
                <li class = "statsLi" id = "boredomLi">Boredom: </li>
                <li class = "statsLi" id = "hungerLi">Hunger: </li>
            </ul>
        </div>

        <div id = "snailContainer">
            <img id = "snail" src = "assets/snail.png">
        </div>

        <div id = "buttonContainer">
            <ul id = "buttonLiContainer">
                <li class = "btn"><button id = "eatButton">Eat</button></li>
                <li class = "btn"><button id = "setUpCampButton">Set up camp</button></li>
                <li class = "btn"><button id = "playCardsButton">Play cards</button></li>
            </ul>
        </div>

    </div>

    <div id = "endGameContainer">
        <div id = "replay"></div>
    </div>

    <div id = "progressBarContainer">
        <div id = "progressBarBackground">
            <div id = "progressBar"></div>
        </div>
    </div>

</body>
</html>
