// establishes ace high
export default function aceHigh(deck) {
    deck[0].rank = 14;
    deck[13].rank = 14;
    deck[26].rank = 14;
    deck[39].rank = 14;
    return deck
}
