let firstcard = 5
let secondcard = 10
let sum = firstcard + secondcard
let hasBlackjack=false
let isAlive=true
let message=""
let getEl=document.getElementById("text-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")

function startgame(){


    cardEl.textContent="CARDS: "+firstcard+" "+secondcard

    sumEl.textContent="SUM: "+sum
    

if(sum <= 20){message="Do you want to draw a another card..?"}
else if(sum === 21){
    message="wohoo!, You've got the black jack"
    hasBlackjack=true
}
else{
    message="you're out of the game"
    isAlive=false
}
getEl.textContent=message

}
