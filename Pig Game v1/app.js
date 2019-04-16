/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Global Scopes

var scores, roundScore, activePlayer, gamePlaying; // declare all the variables faster by putting them all on one line.

init();


//EVENT FOR THE ROLL EVENT

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1; // Math floor removes the decimal from the math random function, * 6 allows 1-5 , +1 allows 1-6

        // 2. display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        //3. Update the round score IF the rolled number is NOT a 1
        if (dice !== 1) { //!== different operator
            //add score
            roundScore += dice; // adding
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player
            nextPlayer();
        }
    }
});

// Event to HOLD total score in place

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //Add Current score to GLOBAL score
        scores[activePlayer] += roundScore;
        // [] used to access variabale and mutate it
        //scores[activePlayer] = scores[activePlayer] + roundScore;  same as above

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next Player
            nextPlayer();
        }
    }
});



function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //turnery operator another way to do if else
    // if (activePlayer === 0) {
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // } //another way to get the next player

    roundScore = 0;

    document.getElementById('current-0').textContent = '0'; //resets player 1 to 0
    document.getElementById('current-1').textContent = '0'; //resets player 2 to 0

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

    // another way but it does not change back to other player
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click', init); //init is being called and passed to the Event Listener method 

//For the start of the game or a New Start

function init() {
    scores = [0, 0]; //starting scores for both players
    roundScore = 0; //rounded score of the player
    activePlayer = 0; //variable of current active player
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'; //do not display the dice at start

    document.getElementById('score-0').textContent = '0'; //total score
    document.getElementById('score-1').textContent = '0'; //total score
    document.getElementById('current-0').textContent = '0'; // current dice roll score
    document.getElementById('current-1').textContent = '0'; // current dice roll score
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner'); // remove winner class on both players
    document.querySelector('.player-1-panel').classList.remove('winner'); // remove winner class on both players
    document.querySelector('.player-0-panel').classList.remove('active'); // remove active class on both players
    document.querySelector('.player-1-panel').classList.remove('active'); // remove active class on both players

    document.querySelector('.player-0-panel').classList.add('active'); // active class added back to first player
}