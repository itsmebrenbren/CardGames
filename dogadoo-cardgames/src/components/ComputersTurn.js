import checkWinner52 from "./CheckWinner52";
import addMessage from "../visuals/AddMessage";
import checkFace from "./CheckFace";

//initiates human goes
export default function computersTurn() {
    checkWinner52();
    message = addMessage("Computer's turn!"); 
    draw();
    checkFace();
}