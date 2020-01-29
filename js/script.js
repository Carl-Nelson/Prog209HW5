let playerArray = [];
let computerArray = [];
let turn = 0;
let playerScore = 0;
let computerScore = 0;

const dealButton = document.getElementById("DEALbutton");
const nextButton = document.getElementById("NEXTbutton");
const turnCounter = document.getElementById("turnCounter");
const gameMessage = document.getElementById("gameMessage");

let faceCardCheck = function(num) {
    if (num < 11) {
        return num;
    } else if (num === 11) {
        return "JACK";
    } else if (num === 12) {
        return "QUEEN";
    } else if (num === 13) {
        return "KING";
    } else if (num === 14) {
        return "ACE";
    }
};

//this function determines how to display a card in text
let cardDisplay = function(card){
    switch(card.suit) {
        case 1:
            return "<p style=\"color:black\">" + faceCardCheck(card.rank) + " of SPADES</p>";
        case 2:
            return "<p style=\"color:black\">" + faceCardCheck(card.rank) + " of CLUBS</p>";
        case 3:
            return "<p style=\"color:red\">" + faceCardCheck(card.rank) + " of DIAMONDS</p>";
        case 4:
            return "<p style=\"color:red\">" + faceCardCheck(card.rank) + " of HEARTS</p>";
    }
};

let endGame = function() {
    
    if (playerScore > computerScore) {
        gameMessage.innerText = "Game Over! You won!!";
    } else if (computerScore > playerScore) {
        gameMessage.innerText = "Game Over! You lost!!";
    } else {
        gameMessage.innerText = "Game Over! It's a tie! Lame.";
    }
    nextButton.style.display = "none";
    dealButton.style.display = "block";
    playerArray = [];
    computerArray = [];
    turn = 0;
    playerScore = 0;
    computerScore = 0;
};

let determineWinner = function() {

    if (playerArray[turn].rank > computerArray[turn].rank) {
        gameMessage.innerText = "You won!";
        playerScore++;

    } else if (computerArray[turn].rank > playerArray[turn].rank) {
        gameMessage.innerText = "The computer won.";
        computerScore++;

    } else if (playerArray[turn].rank === computerArray[turn].rank) {
        if (playerArray[turn].suit > computerArray[turn].suit) {
            gameMessage.innerText = "You won!";
            playerScore++;
        } else if (computerArray[turn].suit > playerArray[turn].suit) {
            gameMessage.innerText = "The computer won.";
            computerScore++;
        } else {
            gameMessage.innerText = "It's a tie! This is impossible!";
        }
    } else {
        gameMessage.innerText = "Oh god something broke";
    }
};

document.addEventListener("DOMContentLoaded", function (event) {

    dealButton.addEventListener("click", function(event) {
        deck.load();
        deck.shuffle();
        for (i = 0; i < 26; i++) {
            playerArray[i] = deck.cardArray[i];
        }
        for (i = 0; i < 26; i++) {
            computerArray[i] = deck.cardArray[i+26];
        }
        dealButton.style.display = "none";
        nextButton.style.display = "block";

        gameMessage.innerText = "Cards dealt! Click the Next button to continue.";
    });

    nextButton.addEventListener("click",function(event){

        document.getElementById("playerCard").innerHTML = cardDisplay(playerArray[turn]);
        document.getElementById("computerCard").innerHTML = cardDisplay(computerArray[turn]);
        
        determineWinner();
        document.getElementById("playerScore").innerText = "Player score: " + playerScore;
        document.getElementById("computerScore").innerText = "Computer score: " + computerScore;

        turn++;
        turnCounter.innerText = "Turn: " + turn;
        
        if (turn === 26) {
            endGame();
        }

    });
});