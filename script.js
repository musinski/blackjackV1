let firstCard = 0;
let secondCard = 0;
let sum = 0;
let blackJackStatus = false;
let message = "";
let messageElement = document.getElementById("message-el");
let sumElement = document.getElementById("sum-el")
let cardsElement = document.getElementById("cards-el");
let errorMessage = document.getElementById("error-message");
let startGameButton = document.getElementById("start-game-btn");

function startGame() {
    firstCard = Math.floor(Math.random() * 12);
    secondCard = Math.floor(Math.random() * 12);

    while (firstCard === 0) {
        firstCard = Math.floor(Math.random() * 12);
    }

    while (secondCard === 0) { 
        secondCard = Math.floor(Math.random() * 12);
    }

    sum = firstCard + secondCard;

    checkBlackJackStatus(sum);
   
    cardsElement.textContent = "Cards: " + firstCard + ", " + secondCard;

    sumElement.textContent = "Sum: " + sum;

    startGameButton.textContent = "New Game?"; 
}

function newCard() {
    if (sum < 21) {
        let newCard = Math.floor(Math.random() * 12);
        while (newCard === 0) { 
            newCard = Math.floor(Math.random() * 12);
        }
        sum += newCard;
        cardsElement.textContent += ", " + newCard;
        sumElement.textContent = "Sum: " + sum;
        checkBlackJackStatus(sum);
    } else {
        errorMessage.textContent = "You are out.";
    }
}

function checkBlackJackStatus(sum) {
    if (sum <= 20) {
        message = "Do you want a new card?"
        messageElement.textContent = message;
    } else if (sum === 21) {
        blackJackStatus = true;
        message = "You've got Blackjack.";
        messageElement.textContent = message;
    } else {
        isAlive = false;
        message = "You're out of the game.";
        messageElement.textContent = message;
    }
}

