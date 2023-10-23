// deals the entire deck of cards to players one and two
export default function deal52(deck, playerOne, playerTwo){
    while(deck.length > 0){
    let toPlayer1 = deck.splice(0, 1)[0];
    playerOne.hand.push(toPlayer1);

    let toPlayer2 = deck.splice(0, 1)[0];
    playerTwo.hand.push(toPlayer2);
    }
}