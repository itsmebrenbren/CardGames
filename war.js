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

    //compares cards drawn by playerOne and playerTwo
    static compareCards(){
            if(!this.playerOne.length || !this.playerTwo.length){
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
        if(this.playerOne.length < 4){
            return console.log('PLAYER TWO WINS!!!!');
        } else if(this.playerTwo.length < 4){
            return console.log('PLAYER ONE WINS!!!!')
        } else {
            console.log('EQUAL');
            draw(this.playerOne, this.table, 4);
            draw(this.playerTwo, this.table, 4);
            console.log('table: ', this.table);
            console.log('table last two cards: ', this.table[this.table.length-1], this.table[this.table.length-2]);
            compareCards();
            return this.playerOne, this.playerTwo, this.table;
        }
    }

    // plays war until a player wins
    static play(){
        Game.checkWinner52(this.playerOne, this.playerTwo);
            while(winner === false){
                Game.draw(this.playerOne, this.table, 1);
                Game.draw(this.playerTwo, this.table, 1);
                console.log(' No winner yet...table :', this.table);
                Game.checkWinner52(this.playerOne, this.playerTwo);
                if(winner === true){
                    console.log('Game over');
                    break
                }
                this.compareCards();
            }  
        }

}

module.exports = War;

