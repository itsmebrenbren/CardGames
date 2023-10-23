import ratInstance from './InitRat';
import shuffle from '../components/Shuffle';
import findPlayOrder from '../components/PlayerOrder';
import deal52 from '../components/Deal52';
import phase1 from './RatPhase1';

//shuffle
shuffle(ratInstance.deck);
//find out who goes first
findPlayOrder(ratInstance.deck, ratInstance.table, ratInstance.currentPlayer, ratInstance.otherPlayer, 
    ratInstance.playerOne, ratInstance.playerTwo, 2);
//deals cards to players
deal52(ratInstance.deck, ratInstance.playerOne, ratInstance.playerTwo);
//initiates phase 1 of the game
phase1();
