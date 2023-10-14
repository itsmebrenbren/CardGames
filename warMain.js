const war = require('./war.js'); // Imports specific game class
const game = require('./baseGameFunc.js'); // Imports general game functions

// Creates instance of the Game class
const warGame = new war();

// Game flow
game.shuffle(warGame.deck); // shuffles deck
game.deal52(warGame.deck, warGame.playerOne, warGame.playerTwo); // deals deck to players
war.play(warGame.table, warGame.playerOne, warGame.playerTwo, warGame.winner); // plays game

console.log('player one hand: ', game.playerOne);
console.log('player two hand: ', game.playerTwo);
console.log('player One hand length: ', game.playerOne.length);
console.log('player Two hand length: ', game.playerTwo.length);
console.log('table length: ', game.table.length);
console.log('deck length: ', game.deck.length);
