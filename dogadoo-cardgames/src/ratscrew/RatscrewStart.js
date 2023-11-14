import { ratscrewAtom } from '../atoms/RatscrewAtom.js';
import { useAtomValue } from 'jotai';

import InitRat from './InitRat';
import shuffle from '../components/Shuffle';
import findPlayOrder from '../components/PlayerOrder';
import deal52 from '../components/Deal52';
//import ratStage1 from './RatStage1';
import displayCards from '../visuals/DisplayCards';

export default function ratStart(){
    //const rat = useAtomValue(ratscrewAtom);

    InitRat();
    //shuffle
   // shuffle(rat.deck);
    //find out who goes first
    //console.log(rat.deck)
    //findPlayOrder(deck, table, currentPlayer, otherPlayer, playerOne, playerTwo, 2);
    //deals cards to players
    //deal52(deck, playerOne, playerTwo);
    //display the cards
   // displayCards(table, playerOne, playerTwo);
    //initiates phase 1 of the game
    //ratStage1();
    // eslint-disable-next-line no-sequences
   
    //create game data
    /* const gameData = {
        table : table,
        deck : deck,
        playerOne : playerOne,
        playerTwo : playerTwo,
        currentPlayer : currentPlayer,
        otherPlayer : otherPlayer,
    };*/
    //update state in the parent component
    // setGameState(gameData);
}
