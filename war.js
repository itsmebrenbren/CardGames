let deck = require('./deckOfCards.mjs'); //imports deck into the game
// imports base game functions into deck
let Game = require('./baseGameFunc.mjs');

class war {
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
        this.winner = {
            'value' : false
        }
    }

    // compares cards drawn by playerOne and playerTwo
    static compareCards(table, playerOne, playerTwo){
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
                war.equalCards(table, playerOne, playerTwo);
                }
            return playerOne, playerTwo, table;
    }

    // process of redrawing cards and comparing them again if they are equal
    static equalCards(table, playerOne, playerTwo){
        if(playerOne.hand.length < 4){
            return console.log('PLAYER TWO WINS!!!!');
        } else if(playerTwo.hand.length < 4){
            return console.log('PLAYER ONE WINS!!!!')
        } else {
            console.log('EQUAL');
            for(let i = 0; i < 4; i ++){
                Game.draw(table, playerOne, 1);
                Game.draw(table, playerTwo, 1);
            }
            console.log('table last two cards: ', table[table.length-2], table[table.length-1]);
            war.compareCards(table, playerOne, playerTwo);
            return playerOne, playerTwo, table;
        }
    }

    // plays war until a player wins
    static play(table, playerOne, playerTwo, winner){
        Game.checkWinner52(playerOne, playerTwo, winner);
        while(winner.value === false){
            Game.draw(table, playerOne, 1);
            Game.draw(table, playerTwo, 1);
            console.log(' No winner yet...table :', table);
            Game.checkWinner52(playerOne, playerTwo, winner);
            if(winner.value === true){
                console.log('Game over');
                break
            }
            war.compareCards(table, playerOne, playerTwo);
        }  
    }

}

module.exports = war;

