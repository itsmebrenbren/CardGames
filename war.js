let deck = require('./deckOfCards.js'); //imports deck into the game

class Game {
    constructor() {
        // Initialize player decks and table
        this.deck = deck;
        this.playerOne = [];
        this.playerTwo = [];
        this.table = [];
        this.winner = false;
    }

    // Fischer-Yates-Durstenfeld shuffle
    fischerYatesDurstenfeld() {
        for (let i = 0; i < this.deck.length - 1; i++) {
            let j = i + Math.floor(Math.random() * (this.deck.length - i));

            let temp = this.deck[j];
            this.deck[j] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }

    // Shuffles multiple times
    shuffle() {
        for (let i = 1; i < 5; i++) {
            this.fischerYatesDurstenfeld();
        }
        return this.deck;
    }

    // Deals the entire this.deck of cards to players one and two
    deal() {
        while(this.deck.length > 0) {
            let toPlayer1 = this.deck.splice(0, 1)[0];
            this.playerOne.push(toPlayer1);

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
        return this.table;
    }

//compares cards drawn by playerOne and playerTwo
function compareCards(){
        if(!playerOne.length || !playerTwo.length){
            return 'Yay'
        }
        if(this.table[this.table.length-2].rank < this.table[this.table.length-1].rank) {
            let toPlayer2 = this.table.splice(0, this.table.length);
            this.playerTwo.push(...toPlayer2);
            console.log('playerTwo won trick');
        } else if(this.table[this.table.length-2].rank > this.table[this.table.length-1].rank) {
            let toPlayer1 = this.table.splice(0, this.table.length);
            this.playerOne.push(...toPlayer1);
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
            await this.compareCards();
        }  
    }
}

module.exports = Game;



shuffle(deck);
deal(deck);
play(playerOne, playerTwo);

console.log('player one hand: ', playerOne);
console.log('player two hand: ', playerTwo);
console.log('player One hand length: ', playerOne.length);
console.log('player Two hand length: ', playerTwo.length);
console.log('table length: ', table.length);
console.log('deck length: ', deck.length);
