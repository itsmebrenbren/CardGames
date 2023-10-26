import ratStage1 from "./RatStage1";
import switchPlayer from "../components/SwitchPlayer";

//checks whether or not game should change phase or continue in current phase
export default function checkStage(face){
    if(face === true){
        ratStage2();
    }else{
        switchPlayer();
        ratStage1();
    }
}