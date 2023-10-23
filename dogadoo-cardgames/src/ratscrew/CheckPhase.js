import phase1 from "./RatPhase1";
import switchPlayer from "../components/SwitchPlayer";

//checks whether or not game should change phase or continue in current phase
export default function checkPhase(face){
    if(face === true){
        phase2();
    }else{
        switchPlayer();
        phase1();
    }
}