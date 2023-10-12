class Game {

    // establishes ace high
    static aceHigh(deck){
        deck[0].rank = 14;
        deck[13].rank = 14;
        deck[26].rank = 14;
        deck[39].rank = 14;
    }

    // Fischer-Yates-Durstenfeld shuffle
    static fischerYatesDurstenfeld(deck) {
        for (let i = 0; i < deck.length - 1; i++) {
            let j = i + Math.floor(Math.random() * (deck.length - i));

            let temp = deck[j];
            deck[j] = deck[i];
            deck[i] = temp;
        }
        return deck;
    }

    // shuffles multiple times
    static shuffle(deck){
        for(let i = 1; i < 5; i++){
            Game.fischerYatesDurstenfeld(deck);
        }
        return deck;
    }

    // deals the entire deck of cards to players one and two
    static deal52(deck, playerOne, playerTwo){
        while(deck.length > 0){
        let toPlayer1 = deck.splice(0, 1)[0];
        playerOne.hand.push(toPlayer1);

        let toPlayer2 = deck.splice(0, 1)[0];
        playerTwo.hand.push(toPlayer2);
        }
    }

    // player draws card(s)
    static draw(player, table, numCards){
        for(let i = 0; i < numCards; i ++){
            if(player.hand.length > 0){
            let toTable = player.hand.shift();
            table.push(toTable);
            console.log(player.name + ' : ', table[table.length-1]);
            }  
        }
    return table;
    }

    // check for winner
    static checkWinner52(playerOne, playerTwo, winner){
        if(!playerTwo.hand.length){
            console.log('PLAYER ONE WINS!');
            winner = true;
        } else if(!playerOne.hand.length){
            console.log('PLAYER TWO WINS!');
            winner = true;
        } else {
            winner = false;
        }
        return winner;
    }

    // checks if drawn card is a face card
    static checkFace(table, face){
        if(table[table.length-1].rank >= 11){
            face = true;
        } else {
            face = false;
        }
        return face;
    }

    // switches current player between playerOne and playTwo so that they take turns within the game
    static switchPlayer(currentPlayer, otherPlayer){
        if(currentPlayer === playerOne){
            currentPlayer = playerTwo;
            otherPlayer = playerOne;
        } else if(currentPlayer === playerTwo){
            currentPlayer = playerOne;
            otherPlayer = playerTwo;
        }
        return currentPlayer, otherPlayer;
    }

    static winnerTakesAll(table, currentPlayer){
        if(face === false){ // winner takes all the cards on the table, if no face card was drawn
            let toPlayer = table.splice(0, table.length);
            currentPlayer.hand.push(...toPlayer);
            console.log(currentPlayer.name + ' WINS TRICK');
            play(playerOne, playerTwo);
        }
    }

}    

module.exports = Game