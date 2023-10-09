let deck = require('./deckOfCards.js'); //imports deck into the game

class Game {
    constructor() {
        // Initialize player decks and table
        this.deck = deck;
        this.playerOne = [];
        this.playerTwo = [];
        this.table = [];
        this.winner = false;
    }

    // Fischer-Yates-Durstenfeld shuffle
    fischerYatesDurstenfeld() {
        for (let i = 0; i < this.deck.length - 1; i++) {
            let j = i + Math.floor(Math.random() * (this.deck.length - i));

            let temp = this.deck[j];
            this.deck[j] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }

    // Shuffles multiple times
    shuffle() {
        for (let i = 1; i < 5; i++) {
            this.fischerYatesDurstenfeld();
        }
        return this.deck;
    }

    // Deals the entire this.deck of cards to players one and two
    deal() {
        while(this.deck.length > 0) {
            let toPlayer1 = this.deck.splice(0, 1)[0];
            this.playerOne.push(toPlayer1);

            let toPlayer2 = this.deck.splice(0, 1)[0];
            this.playerTwo.push(toPlayer2);
        }
    }

    // Check for winner
    async checkWinner() {
        console.log('check winner', this.playerOne.length, this.playerTwo.length);
        if(!this.playerTwo.length) {
            console.log('PLAYER ONE WINS!');
            this.winner = true;
        } else if(!this.playerOne.length) {
            console.log('PLAYER TWO WINS!');
            this.winner = true;
        } else {
            this.winner = false;
        }
    }

    // Each player draws a card
    async draw(numCards) {
        for(let i = 0; i < numCards; i++) {
            if(this.playerOne.length > 0 && this.playerTwo.length > 0) {
                let toTable1 = this.playerOne.shift();
                let toTable2 = this.playerTwo.shift();
                this.table.push(toTable1);
                this.table.push(toTable2);
            }  
        }
        return this.table;
    }

    // Compares cards drawn by playerOne and playerTwo
    async compareCards() {
        if(!this.playerOne.length || !this.playerTwo.length) {
            return 'Yay';
        }
        if(this.table[this.table.length-2].rank < this.table[this.table.length-1].rank) {
            let toPlayer2 = this.table.splice(0, this.table.length);
            this.playerTwo.push(...toPlayer2);
            console.log('playerTwo won trick');
        } else if(this.table[this.table.length-2].rank > this.table[this.table.length-1].rank) {
            let toPlayer1 = this.table.splice(0, this.table.length);
            this.playerOne.push(...toPlayer1);
            console.log('playerOne won trick');
        } else {
            await this.equalCards();
        }
    }

    // Process of redrawing cards and comparing them again if they are equal
    async equalCards() {
        if(this.playerOne.length < 4) {
            return console.log('PLAYER TWO WINS!!!!');
        } else if(this.playerTwo.length < 4) {
            return console.log('PLAYER ONE WINS!!!!');
        } else {
            console.log('EQUAL');
            await this.draw(4);
            console.log('table: ', this.table);
            console.log('table last two cards: ', this.table[this.table.length-1], this.table[this.table.length-2]);
            await this.compareCards();
        }
    }

    // Plays war until a player wins
    async play() {
        await this.checkWinner();
        while(this.winner === false) {
            await this.draw(1);
            console.log('No winner yet...table :', this.table);
            await this.checkWinner();
            if(this.winner === true) {
                console.log('Game over');
                break;
            }
            await this.compareCards();
        }  
    }
}

module.exports = Game;


// playerOne.length > 0 && playerTwo.length > 0