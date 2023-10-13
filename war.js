let deck = require('./deckOfCards.js'); //imports deck into the game
// imports base game functions into deck
let Game = require('./baseGameFunc.js');

class War {
    constructor() {
        // initialize player decks and table
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

    // compares cards drawn by playerOne and playerTwo
    static compareCards(){
            if(!playerOne.hand.length || !playerTwo.hand.length){
                return
            }
            if(table[table.length-2].rank < table[table.length-1].rank) {
                let toPlayer2 = table.splice(0, table.length);
                playerTwo.hand.push(...toPlayer2);
                console.log('playerTwo won trick');
            } else if(table[table.length-2].rank > table[table.length-1].rank) {
                let toPlayer1 = table.splice(0, table.length);
                playerOne.hand.push(...toPlayer1);
                console.log('playerOne won trick');
            } else {
                equalCards();
                }
            return playerOne, playerTwo, table;
    }

    // process of redrawing cards and comparing them again if they are equal
    static equalCards(){
        if(playerOne.hand.length < 4){
            return console.log('PLAYER TWO WINS!!!!');
        } else if(playerTwo.hand.length < 4){
            return console.log('PLAYER ONE WINS!!!!')
        } else {
            console.log('EQUAL');
            draw(playerOne, table, 4);
            draw(playerTwo, table, 4);
            console.log('table: ', table);
            console.log('table last two cards: ', table[table.length-1], table[table.length-2]);
            compareCards();
            return playerOne, playerTwo, table;
        }
    }

    // plays war until a player wins
    static play(table, playerOne, playerTwo, winner){
        Game.checkWinner52(playerOne, playerTwo);
            while(winner === false){
                Game.draw(playerOne, table, 1);
                Game.draw(playerTwo, table, 1);
                console.log(' No winner yet...table :', table);
                Game.checkWinner52(playerOne, playerTwo);
                if(winner === true){
                    console.log('Game over');
                    break
                }
                this.compareCards();
            }  
        }

}

module.exports = War;

