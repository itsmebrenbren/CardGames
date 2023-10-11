// imports deck into game
let deck = require('./deckOfCards.js');

// establishes players (players are objects, so we can track who is playing what card)
let playerOne = {
    'name' : 'One',
    'hand' : []
}
let playerTwo = {
    'name' : 'Two',
    'hand' : []
}
let table = [];


// current and other players are open variables dictating whose turn it is
let currentPlayer = playerOne;
let otherPlayer = playerTwo;
//establishing our boolean for face cards
let face = false;

//establishes that ace is high
deck[0].rank = 14;
deck[13].rank = 14;
deck[26].rank = 14;
deck[39].rank = 14;


// Fischer-Yates-Durstenfeld shuffle
function fischerYatesDurstenfeld(deck) {
    for (let i = 0; i < deck.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (deck.length - i));

        let temp = deck[j];
        deck[j] = deck[i];
        deck[i] = temp;
    }
    return deck;
}

// shuffles multiple times
function shuffle(deck){
    for(let i = 1; i < 5; i++){
        fischerYatesDurstenfeld(deck);
    }
    return deck;
}

// deals the entire deck of cards to players one and two
function deal(deck){
    while(deck.length > 0){
    let toPlayer1 = deck.splice(0, 1)[0];
    playerOne.hand.push(toPlayer1);

    let toPlayer2 = deck.splice(0, 1)[0];
    playerTwo.hand.push(toPlayer2);
    }
}

// player draws card(s)
function draw(player, numCards){
    for(let i = 0; i < numCards; i ++){
        if(player.hand.length > 0){
          let toTable = player.hand.shift();
          table.push(toTable);
          console.log(player.name + ' : ', table[table.length-1]);
        }  
    }
return table;
}

// check for winner
function checkWinner(playerOne, playerTwo){
    // console.log('check winner', playerOne.hand.length, playerTwo.hand.length)
    if(!playerTwo.hand.length){
        console.log('PLAYER ONE WINS!');
        return winner = true;
    } else if(!playerOne.hand.length){
        console.log('PLAYER TWO WINS!');
        return winner = true;
    } else {
        return winner = false;
    }
}

// checks if drawn card is a face card
function checkFace(){
    if(table[table.length-1].rank >= 11){
        return face = true;
    } else {
        return face = false;
    }
}

// switches current player between playerOne and playTwo so that they take turns within the game
function switchPlayer(){
    if(currentPlayer === playerOne){
        currentPlayer = playerTwo;
        otherPlayer = playerOne;
        return currentPlayer, otherPlayer;
    } else if(currentPlayer === playerTwo){
        currentPlayer = playerOne;
        otherPlayer = playerTwo;
        return currentPlayer, otherPlayer;
    }
}

function winnerTakes(){
    if(face === false){ // winner takes all the cards on the table, if no face card was drawn
        let toPlayer = table.splice(0, table.length);
        currentPlayer.hand.push(...toPlayer);
        console.log(currentPlayer.name + ' WINS TRICK');
        play(playerOne, playerTwo);
    }
}

// checks what face card was drawn
function playFace(){
    if(table[table.length-1].rank === 11){ // if it is a jack, the other player draws 1 card
        checkWinner(playerOne, playerTwo);
        if(winner === true){
            return
        }
        draw(otherPlayer, 1);
        checkFace();
        if(face === true){
            switchPlayer();
            playFace();
        } else {
            winnerTakes();
        }
    } else if(table[table.length-1].rank === 12){ // if it is a queen, the other player draws 2 cards (unless a face card is drawn)
        for(let i = 0; i < 2; i ++){
            checkWinner(playerOne, playerTwo);
            if(winner === true){
                return
            }
            draw(otherPlayer, 1);
            checkFace();
            if(face === true){
                switchPlayer();
                playFace();
            }
        }
        winnerTakes();
    } else if(table[table.length-1].rank === 13){ // if it is a king, the other player draws 3 cards (unless a face card is drawn)
        for(let i = 0; i < 3; i ++){
            checkWinner(playerOne, playerTwo);
            if(winner === true){
                return
            }
            draw(otherPlayer, 1);
            checkFace();
            if(face === true){
                switchPlayer();
                playFace();
            }
        }
        winnerTakes();
    } else if(table[table.length-1].rank === 14){ // if it is an ace, the other player draws 4 cards (unless a face card is drawn)
        for(let i = 0; i < 4; i ++){
            checkWinner(playerOne, playerTwo);
            if(winner === true){
                return
            }
            draw(otherPlayer, 1);
            checkFace();
            if(face === true){
                switchPlayer();
                playFace();
            }
        }
        winnerTakes();
    }
}


//plays the game
function play(playerOne, playerTwo){
    checkWinner(playerOne, playerTwo);
    if(winner === true){
        return
    }
        while(winner === false){
            draw(currentPlayer, 1);
            checkFace();
            checkWinner(playerOne, playerTwo);
            if(face === true){
                playFace()
            }
            switchPlayer();
            if(winner === true){
                console.log(playerOne.hand.length, playerTwo.hand.length);
                console.log('Game over')
                break
            }
        }  
        
}




shuffle(deck);
deal(deck);
play(playerOne, playerTwo);