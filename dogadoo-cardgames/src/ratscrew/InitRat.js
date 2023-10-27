/* eslint-disable no-sequences */
import React from 'react';
import Deck from '../data/deckOfCards.js';
import aceHigh from '../components/AceHigh.js';
// import StartButton from "./visuals/StartButton.jsx";

let deck = Deck;

deck = aceHigh(deck)

const playerOne =  {
    'name' : 'Computer',
    'hand' : []
}
const playerTwo = {
    'name' : 'Human',
    'hand' : []
}
const currentPlayer = playerOne;
const otherPlayer = playerTwo;
const table = [];
const winner = {
    'value' : false
}
const face = {
    'value' : false
}
const message = '';


class InitRat extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line no-unused-expressions
        this.deck = deck,
        this.playerOne = playerOne,
        this.playerTwo = playerTwo,
        this.currentPlayer = currentPlayer,
        this.otherPlayer = otherPlayer,
        this.table = table,
        this.winner = winner,
        this.face = face,
        this.message = message
    }
} 

export default InitRat;