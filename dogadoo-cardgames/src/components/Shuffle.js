
// Fischer-Yates-Durstenfeld shuffle
function fischerYatesDurstenfeld(deck) {
    for (let i = 0; i < deck.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (deck.length - i));

        let temp = deck[j];
        deck[j] = deck[i];
        deck[i] = temp;
    }
    return deck;
}

// shuffles multiple times
export default function shuffle(deck){
    for(let i = 1; i < 5; i++){
        fischerYatesDurstenfeld(deck);
    }
    return deck;
}
