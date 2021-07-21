let funds = 0;
let cards = [];
let sum;
let blackJackStatus = false;
let message = "";
let messageElement = document.getElementById("message-el");
let sumElement = document.getElementById("sum-el")
let cardsElement = document.getElementById("cards-el");
let errorMessage = document.getElementById("error-message");
let startGameButton = document.getElementById("start-game-btn");
let moneyAmountElement = document.getElementById("money-amount");

function startGame() {
    cards[0] = getRandomCard();
    cards[1] = getRandomCard();
    sum = cards[0] + cards[1];
    checkBlackJackStatus(sum);
    cardsElement.textContent = "Cards: " + cards[0] + ", " + cards[1];
    sumElement.textContent = "Sum: " + sum;
    startGameButton.textContent = "New Game?"; 
    errorMessage.textContent = "";
}

function newCard() {
    if (sum == undefined) {
        errorMessage.textContent = "Start game.";
    }
    else if (sum < 21) {
        let newCard = getRandomCard();
        while (newCard === 0) { 
            newCard = getRandomCard();
        }
        cards.push(newCard);
        sum += newCard;
        cardsElement.textContent += ", " + newCard;
        sumElement.textContent = "Sum: " + sum;
        checkBlackJackStatus(sum);
    } else if (sum === 21){
        errorMessage.textContent = "Blackjack achieved.";
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
        message = "You're out of the game.";
        messageElement.textContent = message;
    }
}

function getRandomCard() {
    let value = Math.floor(Math.random() * 13 + 1);
    if (value === 1) {
        return 11;
    } else if (value > 10) {
        return 10;
    } else {
        return value;
    }
}

function addFunds() {
    fundsToAdd = prompt("How much to add? ");
    fundsToAdd = Number(fundsToAdd);
    funds += fundsToAdd;
    console.log(funds);
    moneyAmountElement.textContent = "Funds: $" + funds;
}

