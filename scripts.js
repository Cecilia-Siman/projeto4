let numCards = prompt ("Com quantas cartas você quer jogar?");

while (numCards<4 || numCards>14 || numCards%2!=0){
    numCards =prompt ("Com quantas cartas você quer jogar?");
}