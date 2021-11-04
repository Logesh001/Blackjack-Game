let firstcard = getRandomNum()
let secondcard = getRandomNum()
let sum = firstcard + secondcard
let cards=[firstcard,secondcard]
let hasBlackjack=false
let isAlive=true
let message=""
let getEl=document.getElementById("text-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("cards-el")

function startgame()
{
    rendergame()
}

let player={
    name:"logesh",
    cash:2000
}

let playerEl=document.getElementById("player-el")

playerEl.textContent = player.name+": $"+player.cash


function getRandomNum()
{
    let rand = Math.floor(Math.random()*13)+1
    if(rand===1)
    {
        return 11
    }
    else if(rand>10)
    {
        return 10
    }
    else{
        return rand
    }
}



function rendergame(){


    cardEl.textContent="CARDS: "
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent+=cards[i]+" "
    }

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


function newcard()
{
    if(isAlive===true && hasBlackjack===false){
    let card = getRandomNum()
    sum=sum+card
    cards.push(card)
    rendergame()
    }
}
    

