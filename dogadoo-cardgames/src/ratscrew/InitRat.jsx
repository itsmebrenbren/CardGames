import React from 'react';
import Deck from '../data/deckOfCards.js';
import AceHigh from "../components/AceHigh.js";
// import StartButton from "./visuals/StartButton.jsx";

const deck = Deck;
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

componentDidMount(); {
    AceHigh(this.state.ratGame.deck);
    console.log(this.state.ratGame.deck.rank);
}


export default InitRat;