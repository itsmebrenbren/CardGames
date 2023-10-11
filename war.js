let deck = require('./deckOfCards.js'); //imports deck into the game
let playerOne = []; //establishes players
let playerTwo = [];
let table = [];

//Fischer-Yates-Durstenfeld shuffle
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
function deal(deck){
    while(deck.length > 0){
    let toPlayer1 = deck.splice(0, 1)[0];
    playerOne.push(toPlayer1);

    let toPlayer2 = deck.splice(0, 1)[0];
    playerTwo.push(toPlayer2);
    }
}
//check for winner
function checkWinner(playerOne, playerTwo){
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

//compares cards drawn by playerOne and playerTwo
function compareCards(){
        if(!playerOne.length || !playerTwo.length){
            return 'Yay'
        }
        if(table[table.length-2].rank < table[table.length-1].rank){
            let toPlayer2 = table.splice(0, table.length);
            playerTwo.push(...toPlayer2);
            console.log('playerTwo won trick');
        } else if(table[table.length-2].rank > table[table.length-1].rank){
            let toPlayer1 = table.splice(0, table.length);
            playerOne.push(...toPlayer1);
            console.log('playerOne won trick');
        } else {
            equalCards();
            }
        return playerOne, playerTwo, table;
}

//Process of redrawing cards and comparing them again if they are equal
function equalCards(){
    if(playerOne.length < 4){
        return console.log('PLAYER TWO WINS!!!!');
    } else if(playerTwo.length < 4){
        return console.log('PLAYER ONE WINS!!!!')
    } else {
        console.log('EQUAL');
        draw(playerOne, playerTwo, 4);
        console.log('table: ', table);
        console.log('table last two cards: ', table[table.length-1], table[table.length-2]);
        compareCards();
        return playerOne, playerTwo, table;
    }
}

// plays war until a player wins
function play(playerOne, playerTwo){
    checkWinner(playerOne, playerTwo);
        while(winner === false){
            draw(playerOne, playerTwo, 1);
            console.log(' No winner yet...table :', table);
            checkWinner(playerOne, playerTwo);
            if(winner === true){
                console.log('Game over')
                break
            }
            compareCards();
        }  
        
}


shuffle(deck);
deal(deck);
play(playerOne, playerTwo);

console.log('player one hand: ', playerOne);
console.log('player two hand: ', playerTwo);
console.log('player One hand length: ', playerOne.length);
console.log('player Two hand length: ', playerTwo.length);
console.log('table length: ', table.length);
console.log('deck length: ', deck.length);
