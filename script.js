let betAmount = 0;
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
let betAmountElement = document.getElementById("bet-amount");
let cardsContainer = document.getElementById("cards-container");
let cardElement1 = document.createElement("div");
let cardElement2 = document.createElement("div");

let player = {
    name: "Player 1",
    chips: 0
}

console.log(player.name);

function startGame() {
    cards[0] = getRandomCard();
    cards[1] = getRandomCard();
    sum = cards[0] + cards[1];
    checkBlackJackStatus(sum);
    cardElement1.textContent = cards[0];
    cardElement2.textContent = cards[1];
    cardElement1.classList.add("cards");
    cardElement2.classList.add("cards");
    cardsContainer.appendChild(cardElement1);
    cardsContainer.appendChild(cardElement2);
    cardsElement.textContent = "";
    sumElement.textContent = "Sum: " + sum;
    startGameButton.textContent = "New Game?"; 
    errorMessage.textContent = "";
    if (player.chips === 0) {
        addFunds();
    }
    if (sum < 21) {
        player.chips += betAmount;
        moneyAmountElement.textContent = player.name + ": $" + player.chips;
    } 
    betAmount = 0;
    betAmountElement.textContent = "";
    
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
        cardsElement.textContent += newCard + " ";
        sumElement.textContent = "Sum: " + sum;
        
        checkBlackJackStatus(sum);
    } else if (sum === 21){
        errorMessage.textContent = "Blackjack achieved.";
        player.chips += bet * 2;
        moneyAmountElement.textContent = player.name + ": $" + player.chips;
        betAmount = 0;
        betAmountElement.textContent = "";
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
    player.chips += fundsToAdd;
    console.log(player.chips);
    moneyAmountElement.textContent = player.name + ": $" + player.chips;
}

function bet() {
    betAmount = prompt("How much to bet? ");
    betAmount = Number(betAmount);
    if (betAmount <= player.chips) {
        betAmountElement.textContent = "Bet: $" + betAmount;
        player.chips = player.chips - betAmount;
        moneyAmountElement.textContent = player.name + ": $" + player.chips;
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Add more funds.";
    }
}
