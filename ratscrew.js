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
        this.winner = {
            'value' : false
        }
        this.face = {
            'value' : false
        }
    }
// checks what face card was drawn
    static playFace(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face){
        if(table[table.length-1].rank === 11){ // if it is a jack, the other player draws 1 card
            Game.checkWinner52(playerOne, playerTwo, winner);
            if(winner.value === true){
                return
            }
            Game.draw(table, otherPlayer, 1);
            Game.checkFace(table, face);
            if(face.value === true){
                Game.switchPlayer(currentPlayer, otherPlayer, playerOne, playerTwo);
                rat.playFace(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face);
            } else {
                Game.winnerTakesAll(table, currentPlayer, face);
                rat.play(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face);
            }
        } else if(table[table.length-1].rank === 12){ // if it is a queen, the other player draws 2 cards (unless a face card is drawn)
            for(let i = 0; i < 2; i ++){
                Game.checkWinner52(playerOne, playerTwo, winner);
                if(winner.value === true){
                    return
                }
                Game.draw(table, otherPlayer, 1);
                Game.checkFace(table, face);
                if(face.value === true){
                    Game.switchPlayer(currentPlayer, otherPlayer, playerOne, playerTwo);
                    rat.playFace(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face);
                }
            }
            Game.winnerTakesAll(table, currentPlayer, face);
        } else if(table[table.length-1].rank === 13){ // if it is a king, the other player draws 3 cards (unless a face card is drawn)
            for(let i = 0; i < 3; i ++){
                Game.checkWinner52(playerOne, playerTwo, winner);
                if(winner.value === true){
                    return
                }
                Game.draw(table, otherPlayer, 1);
                Game.checkFace(table, face);
                if(face.value === true){
                    Game.switchPlayer(currentPlayer, otherPlayer, playerOne, playerTwo);
                    rat.playFace(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face);
                }
            }
            Game.winnerTakesAll(table, currentPlayer, face);
            rat.play(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face);
        } else if(table[table.length-1].rank === 14){ // if it is an ace, the other player draws 4 cards (unless a face card is drawn)
            for(let i = 0; i < 4; i ++){
                Game.checkWinner52(playerOne, playerTwo, winner);
                if(winner.value === true){
                    return
                }
                Game.draw(table, otherPlayer, 1);
                Game.checkFace(table, face);
                if(face.value === true){
                    Game.switchPlayer(currentPlayer, otherPlayer, playerOne, playerTwo);
                    rat.playFace(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face);
                }
            }
            Game.winnerTakesAll(table, currentPlayer, face);
            rat.play(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face);
        }
    }


    // plays the game
    static play(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face){
        Game.checkWinner52(playerOne, playerTwo, winner);
        while(winner.value === false){
            Game.draw(table, currentPlayer, 1);
            Game.checkFace(table, face);
            Game.checkWinner52(playerOne, playerTwo, winner);
            if(face.value === true){
                rat.playFace(table, playerOne, playerTwo, currentPlayer, otherPlayer, winner, face);
            } else {
            Game.switchPlayer(currentPlayer, otherPlayer);
            }
            if(winner.value === true){
                console.log(playerOne.hand.length, playerTwo.hand.length);
                console.log('Game over')
                break
            }
        }  
            
    }
}

module.exports = rat;