const results = document.querySelector('.resultList');
const cardsLeft = document.querySelector('.cardsLeft');
const btn5 = document.querySelector('.draw5');
const btn2 = document.querySelector('.draw2');
const btn1 = document.querySelector('.draw1');
const show = document.querySelector('.peek');
let deck = ['1♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥','1♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦','1♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠','1♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣'];
const generateCard = function (newCard) {
    const html = `
    ${"||"}

     ${newCard}
    
    `;

    results.innerHTML += html
};

const showDeck = function (){
    const html = 
    `
    ${deck.join(" ")}
    
    `;

    cardsLeft.innerHTML = html
}


btn5.addEventListener('click', () => {

let card = get10(deck,5)
generateCard(card)
}
);

btn2.addEventListener('click', () => {

    let card = get10(deck,2)
    generateCard(card)
    }
    );

btn1.addEventListener('click', () => {

    let card = get10(deck,1)
    generateCard(card)
    }
    );


show.addEventListener('click', () => {
    showDeck(deck)
    }

    );


function get10(mylist,numOfCards){
    let result = []
    
    for(x=0;x<numOfCards;x++){
        //get random index
        let index = Math.floor((Math.random() * Math.floor(mylist.length)));
        //push item at chosen index to result and remove from mylist
        result.push(String(mylist.splice([index],1)))
    }
    return result.join(" ")
    
    }



