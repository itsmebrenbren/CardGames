import InitRat from './InitRat';
import shuffle from '../components/Shuffle';
import findPlayOrder from '../components/PlayerOrder';
import deal52 from '../components/Deal52';
//import ratStage1 from './RatStage1';
import displayCards from '../visuals/DisplayCards';

export default function ratStart(){
    //create a new instance of game 
    const ratInstance = new InitRat();

    // redefine ratInstance variables
    let table = ratInstance.table
    let deck = ratInstance.deck
    let playerOne = ratInstance.playerOne
    let playerTwo = ratInstance.playerTwo
    let currentPlayer = ratInstance.currentPlayer
    let otherPlayer = ratInstance.otherPlayer

    //shuffle
    console.log(ratInstance.table)
    shuffle(ratInstance.deck);
    //find out who goes first
    console.log(ratInstance.deck)
    findPlayOrder(ratInstance.deck, ratInstance.table, ratInstance.currentPlayer, ratInstance.otherPlayer, 
        ratInstance.playerOne, ratInstance.playerTwo, 2);
    //deals cards to players
    deal52(ratInstance.deck, ratInstance.playerOne, ratInstance.playerTwo);
    //display the cards
    displayCards(ratInstance.table, ratInstance.playerOne, ratInstance.playerTwo);
    //initiates phase 1 of the game
    //ratStage1();
    // eslint-disable-next-line no-sequences
    return table, deck, playerOne, playerTwo, currentPlayer, otherPlayer
}
