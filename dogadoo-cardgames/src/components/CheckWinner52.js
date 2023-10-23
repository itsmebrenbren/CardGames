// check for winner
export default function checkWinner52(playerOne, playerTwo, winner){
    console.log(playerOne.hand.length, playerTwo.hand.length)
    if(playerTwo.hand.length < 1){
        console.log('PLAYER ONE WINS!');
        winner.value = true;
    } else if(playerOne.hand.length < 1){
        console.log('PLAYER TWO WINS!');
        winner.value = true;
} else {
    winner.value = false;
}
return winner.value
}