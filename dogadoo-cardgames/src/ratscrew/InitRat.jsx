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


class InitRat extends React.Component {
    constructor(props) {
        super(props);
        this.ratGame = {
            deck : deck,
            playerOne : playerOne,
            playerTwo : playerTwo,
            currentPlayer : currentPlayer,
            otherPlayer : otherPlayer,
            table : table,
            winner : winner,
            face : face,
        }
    }
}

console.log(InitRat)

export default InitRat;