const eWar = require('./egyptianWar.js'); // Imports specific game class
const game = require('./baseGameFunc.js'); // Imports general game functions

// Create an instance of the Game class
const eWarGame = new eWar();

// Game flow here
game.aceHigh(eWarGame.deck);
game.shuffle(eWarGame.deck); 
game.deal52(eWarGame.deck, eWarGame.playerOne, eWarGame.playerTwo);  

console.log('One : ', eWarGame.playerOne.hand.length);
console.log('Two : ', eWarGame.playerTwo.hand.length);

game.draw(eWarGame.playerOne, eWarGame.table, 1);

eWar.play();   

console.log('One : ', eWarGame.playerOne.hand.length);
console.log('Two : ', eWarGame.playerTwo.hand.length); 