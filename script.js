let firstCard = Math.floor(Math.random() * 12);
let secondCard = Math.floor(Math.random() * 12);

while (firstCard == 0) {
    firstCard = Math.floor(Math.random() * 12); 
}

while (secondCard == 0) {
    secondCard = Math.floor(Math.random() * 12);
}

let sum = firstCard + secondCard;

document.getElementById("card1").textContent = firstCard;
document.getElementById("card2").textContent = secondCard;
document.getElementById("sum").textContent = "Sum = " + sum;

console.log(firstCard);
console.log(secondCard);
console.log(sum);

let newCard = 0;

function hit() {
    if (sum < 21) {
        console.log("Clicked!")
        newCard = Math.floor(Math.random() * 12);

        while (newCard == 0) {
            newCard = Math.floor(Math.random() * 12); 
        }
    
        sum += newCard;
        console.log(newCard);
        document.getElementById("dealer-output").textContent = "New card is " + newCard;
        document.getElementById("sum").textContent = "Sum = " + sum;
        if (sum > 21) {
            document.getElementById("dealer-output").textContent += " Sorry..... you are out!";
        }
    } else {
        console.log("Sorry...You are out!")
    }
    
}

function restartGame() {
    let answer = prompt("Are you sure?")
    answer = answer.toLowerCase();
    if (answer == 'y' || answer == 'yes' || answer == "ye") {
        console.log("Dealing cards...")
        firstCard = Math.floor(Math.random() * 12);
        secondCard = Math.floor(Math.random() * 12);
        sum = firstCard + secondCard;
        document.getElementById("card1").textContent = firstCard;
        document.getElementById("card2").textContent = secondCard;
        document.getElementById("sum").textContent = "Sum = " + sum;
    }
}




