let numCards = prompt ("Com quantas cartas você quer jogar?");
let numClicks = 0;
let foundPair = 0;
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
    front.classList.add("turnFront");
    let back = elemento.querySelector(".back-face");
    back.classList.add("turnBack");
    checkMatch(elemento);
}

function checkMatch (card) {
    if (firstCard == null){
        firstCard = card;
        console.log("first " + firstCard);
    } else {
        secondCard = card;
        console.log("second "+ secondCard);
        if (firstCard.innerHTML === secondCard.innerHTML){
            foundPair ++;
            console.log(foundPair);    
            firstCard.removeAttribute("onclick");
            secondCard.removeAttribute("onclick");
            if (foundPair == (numCards/2)-1){
                setTimeout(victory,500);
            } 
        } else{
            setTimeout(close,1000,firstCard,secondCard);
        }
        firstCard = null;
        secondCard = null;
    }
}

function close (first,second){
    let frontFirst = first.querySelector(".front-face");
    frontFirst.classList.remove("turnFront");
    let backFirst = first.querySelector(".back-face");
    backFirst.classList.remove("turnBack");

    let frontSecond = second.querySelector(".front-face");
    frontSecond.classList.remove("turnFront");
    let backSecond = second.querySelector(".back-face");
    backSecond.classList.remove("turnBack");

}

function victory(){
    let cards = document.querySelectorAll(".card");
    for (i=0;i<cards.length;i++){
        let front = cards[i].querySelector(".front-face");
        front.classList.add("turnFront");
        let back = cards[i].querySelector(".back-face");
        back.classList.add("turnBack");
        cards[i].removeAttribute("onclick");

    }
    alert(`Você ganhou em ${numClicks} jogadas!`);
    const answer = prompt("Jogar novamente?");
    if (answer === "sim"){
        window.location.reload();
    }    
}