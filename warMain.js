const War = require('./war.js'); // Imports Game class

// Create an instance of the Game class
const game = new Game();

// Game flow here
game.shuffle();  
game.deal();     
game.play();     

console.log('player one hand: ', game.playerOne);
console.log('player two hand: ', game.playerTwo);
console.log('player One hand length: ', game.playerOne.length);
console.log('player Two hand length: ', game.playerTwo.length);
console.log('table length: ', game.table.length);
console.log('deck length: ', game.deck.length);
