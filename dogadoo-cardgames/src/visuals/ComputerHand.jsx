import ratInstance from "../ratscrew/InitRat"

export default function ComputerHand() {
    if(ratInstance.playerOne.hand > 0){
        return(
            <img src = { ratInstance.playerOne[ratInstance.playerOne.length-1].cardBack } alt = "image of computer's hand"/>
        )
    } else{
        return(
            <div></div>
        )
    }
}