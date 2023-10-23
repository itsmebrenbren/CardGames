// switches current player between playerOne and playTwo so that they take turns within the game
export default function switchPlayer(currentPlayer, otherPlayer, playerOne, playerTwo){
    if(currentPlayer === playerOne){
        currentPlayer = playerTwo;
        otherPlayer = playerOne;
    } else if(currentPlayer === playerTwo){
        currentPlayer = playerOne;
        otherPlayer = playerTwo;
    }
    return currentPlayer, otherPlayer;
}