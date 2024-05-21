let player ={
    name :"ayman",
    chips: 145
}

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

 playerEl.textContent = player.name + " $"   + player.chips

function getRandomCard() {
return Math.floor ( Math.random() * 13) + 1
}
function startGame() {
    renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
   
    for (i=0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
      }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {

    if ( isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
}


