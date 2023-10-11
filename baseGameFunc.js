function fischerYatesDurstenfeld(deck) {
    for (let i = 0; i < deck.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (deck.length - i));

        let temp = deck[j];
        deck[j] = deck[i];
        deck[i] = temp;
    }
    return deck;
}
//shuffles multiple times
function shuffle(deck){
    for(let i = 1; i < 5; i++){
        fischerYatesDurstenfeld(deck);
    }
    return deck;
}

//deals the entire deck of cards to players one and two
function deal52(deck){
    while(deck.length > 0){
    let toPlayer1 = deck.splice(0, 1)[0];
    playerOne.push(toPlayer1);

    let toPlayer2 = deck.splice(0, 1)[0];
    playerTwo.push(toPlayer2);
    }
}

//check for winner
function checkWinner52(playerOne, playerTwo){
    console.log('check winner', playerOne.length, playerTwo.length)
    if(!playerTwo.length){
        console.log('PLAYER ONE WINS!');
        return winner = true;
    } else if(!playerOne.length){
        console.log('PLAYER TWO WINS!');
        return winner = true;
    } else {
        return winner = false;
    }
}

// each player draws a card
function draw(playerOne, playerTwo, numCards){
    for(let i = 0; i < numCards; i ++){
        if(playerOne.length > 0 && playerTwo.length > 0){
          let toTable1 = playerOne.shift();
          let toTable2 = playerTwo.shift();
          table.push(toTable1);
          table.push(toTable2);
        }  
    }
return table;
}