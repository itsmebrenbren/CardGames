import ratInstance from "../ratscrew/InitRat"

export default function HumanHand() {
    if (ratInstance.playerTwo.hand > 0){
        return(
            <img src = { ratInstance.playerTwo[ratInstance.playerTwo.length-1].cardBack } alt = "Human hand"/>
        )
    } else {
        return(
            <div></div>
        );
    }
}