import computersTurn from '../components/ComputersTurn';
import humansTurn from '../components/HumansTurn';
import checkPhase from './CheckPhase';

export default function phase1(currentPlayer, playerOne, playerTwo) {
    if(currentPlayer === playerOne){
        computersTurn();
        checkPhase();
    }if(currentPlayer === playerTwo){
        humansTurn();
        checkPhase();
    }
}