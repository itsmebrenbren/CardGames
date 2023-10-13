const rat = require('./ratscrew.js'); // Imports specific game class
const game = require('./baseGameFunc.js'); // Imports general game functions

// Creates instance of the Game class
const ratGame = new rat();

// Game flow
game.aceHigh(ratGame.deck); // establishes ace high
game.shuffle(ratGame.deck); // shuffles deck
game.deal52(ratGame.deck, ratGame.playerOne, ratGame.playerTwo); // deals deck to players

console.log('One : ', ratGame.playerOne.hand.length);
console.log('Two : ', ratGame.playerTwo.hand.length);

game.draw(ratGame.table, ratGame.playerOne, 1);

game.checkFace(ratGame.table, ratGame.face);

console.log(ratGame.face + '2');

// console.log(ratGame.playerOne);

// rat.play(ratGame.table, ratGame.playerOne, ratGame.playerTwo, ratGame.currentPlayer, ratGame.otherPlayer, ratGame.winner, ratGame.face); // plays game

console.log('One : ', ratGame.playerOne.hand.length);
console.log('Two : ', ratGame.playerTwo.hand.length); 