//import addMessage from './visuals/AddMessage.jsx';

//finds out who plays first
export default function findPlayOrder(deck, table, currentPlayer, otherPlayer, playerOne, playerTwo, numCards){
    for(let i = 0; i < numCards; i ++){
    let toTable = deck[Math.floor(Math.random() * deck.length)];
    table.push(toTable);
    console.log('draw card: ', table);
    }
    if(table[table.length-1].rank > table[table.length-2].rank){
        currentPlayer = playerTwo;
        otherPlayer = playerOne;
        let toDeck = table.splice(0, table.length);
        deck.push(...toDeck);
    } else if(table[table.length-1].rank < table[table.length-2].rank){
        currentPlayer = playerOne;
        otherPlayer = playerTwo;
        let toDeck = table.splice(0, table.length);
        deck.push(...toDeck);
    } else {
        // eslint-disable-next-line no-undef
        //findPlayerOrder(deck, table, currentPlayer, otherPlayer, playerOne, playerTwo, numCards)
    }
    //addMessage(currentPlayer.name + ' goes first!'); 
}
