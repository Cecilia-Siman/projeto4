let numCards = prompt ("Com quantas cartas você quer jogar?");
let numClicks = 0;
let firstCard;
let secondCard;


while (numCards<4 || numCards>14 || numCards%2!=0){
    numCards =prompt ("Com quantas cartas você quer jogar?");
}

let listCards = [];

let cont = 1;
for (i=0;i<numCards;i+=2){
    listCards[i] = `arquivos/img${cont}.gif`;
    listCards[i+1] = `arquivos/img${cont}.gif`;
    cont++;
}

listCards.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

function comparador() { 
	return Math.random() - 0.5; 
}

for (i=0;i<numCards;i++){
    cards = document.querySelector(".cards");
    cards.innerHTML += `<div onclick="openCard(this)" class="card">
    <div class="front-face face">
       <img src="arquivos/front.png" >
    </div>
    <div class="back-face face">
    <img src="${listCards[i]}">
    </div>
</div>`;
}

function openCard(elemento){
    numClicks ++;
    let front = elemento.querySelector(".front-face");
    front.classList.toggle("turnFront");
    let back = elemento.querySelector(".back-face");
    back.classList.toggle("turnBack");
    checkMatch(elemento);
}

function checkMatch (card) {
    if (firstCard == null){
        firstCard = card;
        console.log("first " + firstCard);
    } else {
        secondCard = card;
        console.log("rest "+ secondCard);
    }
}