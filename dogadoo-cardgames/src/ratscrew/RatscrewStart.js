//import React, { useState } from 'react';
import InitRat from './InitRat';
import shuffle from '../components/Shuffle';
import findPlayOrder from '../components/PlayerOrder';
import deal52 from '../components/Deal52';
//import ratStage1 from './RatStage1';
import displayCards from '../visuals/DisplayCards';

export default function ratStart(setGameState){
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
    console.log(table)
    shuffle(deck);
    //find out who goes first
    console.log(deck)
    findPlayOrder(deck, table, currentPlayer, otherPlayer, playerOne, playerTwo, 2);
    //deals cards to players
    deal52(deck, playerOne, playerTwo);
    //display the cards
    displayCards(table, playerOne, playerTwo);
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
