//Hearts
const hA = {suit: 'hearts', rank: 1}; //ace
const h2 = {suit: 'hearts', rank: 2};
const h3 = {suit: 'hearts', rank: 3};
const h4 = {suit: 'hearts', rank: 4};
const h5 = {suit: 'hearts', rank: 5};
const h6 = {suit: 'hearts', rank: 6};
const h7 = {suit: 'hearts', rank: 7};
const h8 = {suit: 'hearts', rank: 8};
const h9 = {suit: 'hearts', rank: 9};
const h10 = {suit: 'hearts', rank: 10};
const hJ = {suit: 'hearts', rank: 11}; //jack
const hQ = {suit: 'hearts', rank: 12}; //queen
const hK= {suit: 'hearts', rank: 13}; //king

//Spades
const sA = {suit: 'spades', rank: 1} //ace
const s2 = {suit: 'spades', rank: 2};
const s3 = {suit: 'spades', rank: 3};
const s4 = {suit: 'spades', rank: 4};
const s5 = {suit: 'spades', rank: 5};
const s6 = {suit: 'spades', rank: 6};
const s7 = {suit: 'spades', rank: 7};
const s8 = {suit: 'spades', rank: 8};
const s9 = {suit: 'spades', rank: 9};
const s10 = {suit: 'spades', rank: 10};
const sJ = {suit: 'spades', rank: 11}; //jack
const sQ = {suit: 'spades', rank: 12}; //queen
const sK = {suit: 'spades', rank: 13}; //king

//Diamonds
const dA = {suit: 'diamonds', rank: 1} //ace
const d2 = {suit: 'diamonds', rank: 2};
const d3 = {suit: 'diamonds', rank: 3};
const d4 = {suit: 'diamonds', rank: 4};
const d5 = {suit: 'diamonds', rank: 5};
const d6 = {suit: 'diamonds', rank: 6};
const d7 = {suit: 'diamonds', rank: 7};
const d8 = {suit: 'diamonds', rank: 8};
const d9 = {suit: 'diamonds', rank: 9};
const d10 = {suit: 'diamonds', rank: 10};
const dJ = {suit: 'diamonds', rank: 11}; //jack
const dQ = {suit: 'diamonds', rank: 12}; //queen
const dK = {suit: 'diamonds', rank: 13}; //king

//Clubs
const cA = {suit: 'clubs', rank: 1} //ace
const c2 = {suit: 'clubs', rank: 2};
const c3 = {suit: 'clubs', rank: 3};
const c4 = {suit: 'clubs', rank: 4};
const c5 = {suit: 'clubs', rank: 5};
const c6 = {suit: 'clubs', rank: 6};
const c7 = {suit: 'clubs', rank: 7};
const c8 = {suit: 'clubs', rank: 8};
const c9 = {suit: 'clubs', rank: 9};
const c10 = {suit: 'clubs', rank: 10};
const cJ = {suit: 'clubs', rank: 11}; //jack
const cQ = {suit: 'clubs', rank: 12}; //queen
const cK = {suit: 'clubs', rank: 13}; //king

const deck = [hA, h2, h3, h4, h5, h6, h7, h8, h9, h10, hJ, hQ, hK,  
    sA, s2, s3, s4, s5, s6, s7, s8, s9, s10, sJ, sQ, sK,  
    dA, d2, d3, d4, d5, d6, d7, d8, d9, d10, dJ, dQ, dK,  
    cA, c2, c3, c4, c5, c6, c7, c8, c9, c10, cJ, cQ, cK];

module.exports = deck;