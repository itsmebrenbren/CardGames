// imports deck into game
const deck = require('./deckOfCards.js');
// imports base game functions into deck
const Game = require('./baseGameFunc.js');

class rat{
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
        this.currentPlayer = this.playerOne;
        this.otherPlayer = this.playerTwo;
        this.winner = false;
        this.face = false;
    }

// checks what face card was drawn
    static playFace(){
        if(this.table[this.table.length-1].rank === 11){ // if it is a jack, the other player draws 1 card
            Game.checkWinner52(this.playerOne, this.playerTwo, this.winner);
            if(this.winner === true){
                return
            }
            Game.draw(this.otherPlayer, 1);
            Game.checkFace(this.table, this.face);
            if(this.face === true){
                Game.switchPlayer(this.currentPlayer, this.otherPlayer);
                playFace();
            } else {
                Game.winnerTakesAll(this.table, this.currentPlayer);
            }
        } else if(this.table[this.table.length-1].rank === 12){ // if it is a queen, the other player draws 2 cards (unless a face card is drawn)
            for(let i = 0; i < 2; i ++){
                Game.checkWinner52(this.playerOne, this.playerTwo, this.winner);
                if(this.winner === true){
                    return
                }
                Game.draw(this.otherPlayer, this.table, 1);
                Game.checkFace(this.table, this.face);
                if(this.face === true){
                    Game.switchPlayer(this.currentPlayer, this.otherPlayer);
                    playFace();
                }
            }
            Game.winnerTakesAll(this.table, this.currentPlayer);
        } else if(this.table[this.table.length-1].rank === 13){ // if it is a king, the other player draws 3 cards (unless a face card is drawn)
            for(let i = 0; i < 3; i ++){
                Game.checkWinner52(this.playerOne, this.playerTwo, this.winner);
                if(this.winner === true){
                    return
                }
                Game.draw(this.otherPlayer, this.table, 1);
                Game.checkFace(this.table, this.face);
                if(this.face === true){
                    Game.switchPlayer(this.currentPlayer, this.otherPlayer);
                    playFace();
                }
            }
            Game.winnerTakesAll(this.table, this.currentPlayer);
        } else if(this.table[this.table.length-1].rank === 14){ // if it is an ace, the other player draws 4 cards (unless a face card is drawn)
            for(let i = 0; i < 4; i ++){
                Game.checkWinner52(this.playerOne, this.playerTwo, this.winner);
                if(this.winner === true){
                    return
                }
                Game.draw(this.otherPlayer, this.table, 1);
                Game.checkFace(this.table, this.face);
                if(this.face === true){
                    Game.switchPlayer(this.currentPlayer, this.otherPlayer);
                    playFace();
                }
            }
            Game.winnerTakesAll(this.table, this.CurrentPlayer);
        }
    }


    // plays the game
    static play(){
        Game.checkWinner52(this.playerOne, this.playerTwo, this.winner);
        if(this.winner === true){
            return
        }
            while(this.winner === false){
                Game.draw(this.table, this.currentPlayer, 1);
                Game.checkFace(this.table, this.face);
                Game.checkWinner52(this.playerOne, this.playerTwo, this.winner);
                if(this.face === true){
                    playFace()
                }
                Game.switchPlayer(this.currentPlayer, this.otherPlayer);
                if(this.winner === true){
                    console.log(this.playerOne.hand.length, this.playerTwo.hand.length);
                    console.log('Game over')
                    break
                }
            }  
            
    }
}

module.exports =rat;