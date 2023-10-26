import computersTurn from '../components/ComputersTurn';
import humansTurn from '../components/HumansTurn';
import checkStage from './CheckStage';

export default function ratStage1(currentPlayer, playerOne, playerTwo) {
    if(currentPlayer === playerOne){
        computersTurn();
        checkStage();
    }if(currentPlayer === playerTwo){
        humansTurn();
        checkStage();
    }
}