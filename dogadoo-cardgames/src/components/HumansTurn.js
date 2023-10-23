import checkWinner52 from "./CheckWinner52";
import addMessage from "../visuals/AddMessage";
import checkFace from "./CheckFace";

//initiates human goes
export default function humansTurn() {
    checkWinner52();
    message = addMessage("Human's turn!"); 
    draw();
    checkFace();
}