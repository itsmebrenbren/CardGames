// winner takes all the cards on the table, if no face card was drawn
export default function winnerTakesAll(table, currentPlayer, face){
    if(face.value === false){
        let toPlayer = table.splice(0, table.length);
        currentPlayer.hand.push(...toPlayer);
        console.log(currentPlayer.name + ' WINS TRICK');
    }
}
 