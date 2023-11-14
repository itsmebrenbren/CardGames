import { useAtom } from 'jotai';
import { ratscrewAtom } from '../atoms/RatscrewAtom.js';
import Deck from '../data/deckOfCards.js';
import aceHigh from '../components/AceHigh.js';

export default function InitRat(){
    const [, setRat] = useAtom(ratscrewAtom);

    let deck = Deck;
    // Configure aceHigh
    deck = aceHigh(deck)

    // Update ratscrewAtom.deck with the modified deck
    setRat((prevRat) => ({
        ...prevRat,
        deck: deck,
    }));

}

