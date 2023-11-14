import { atom } from 'jotai'

export const ratscrewAtom = atom([
    {
    deck: [],
    playerOne: {
        'name' : 'Computer',
        'hand' : []
    },
    playerTwo: {
        'name' : 'Human',
        'hand' : []
    },
    currentPlayer: {},
    otherPlayer: {},
    table: {},
    winner: {
        'value' : false
    },
    face: {
        'value' : false
    },
    message: '',
    }
]);