
let playerInfo = {
    name: "John Doe",
    chips: 10000
}
let deck = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = document.getElementById("message")
let sumText = document.getElementById("sum")
let card = document.getElementById("card")
let id = document.getElementById("id")


function getRandomCard()  {
    let randomNumber = Math.floor (Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
} 

message.textContent = "Welcome to BlackJack"

const start = () => {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    deck = [firstCard, secondCard]
    sum = firstCard + secondCard
    id.textContent = playerInfo.name + ": $" + playerInfo.chips
    render()
}

const render = () => {
    card.textContent = "Cards: "
    for (let i = 0; i < deck.length; i++) {
        card.textContent += deck[i] + " "
    }
    sumText.textContent = "Sum: " + sum
    if (sum <= 20) {
        message.textContent = "Do you want to draw another card? (hit)"
    } else if (sum === 21) {
        message.textContent = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message.textContent = "You're out of the game!"
        isAlive = false
    }

}

const hit = () => {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        deck.push(newCard)
        render()  
    }
}
