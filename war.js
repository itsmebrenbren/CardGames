let deck = require('./deckOfCards.js'); //imports deck into the game
// imports base game functions into deck
let Game = require('./baseGameFunc.js');

class War {
    constructor() {
        // Initialize player decks and table
        this.deck = deck;
        this.playerOne = {
            'name' : 'One',
            'hand' : []
        }
        this.playerTwo = {
            'name' : 'Two',
            'hand' : []
        }
        this.table = [];
        this.winner = false;
    }
    // each player draws a card
    static draw(playerOne, playerTwo, numCards){
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
    static compareCards(){
            if(!playerOne.length || !playerTwo.length){
                return
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
    static equalCards(){
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
    static play(playerOne, playerTwo){
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


    // each player draws a card
    static draw(playerOne, playerTwo, numCards){
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
    static compareCards(){
            if(!playerOne.length || !playerTwo.length){
                return
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
    static equalCards(){
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
    static play(playerOne, playerTwo){
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
}

module.exports = War;



shuffle(deck);
deal(deck);
play(playerOne, playerTwo);

console.log('player one hand: ', playerOne);
console.log('player two hand: ', playerTwo);
console.log('player One hand length: ', playerOne.length);
console.log('player Two hand length: ', playerTwo.length);
console.log('table length: ', table.length);
console.log('deck length: ', deck.length);
