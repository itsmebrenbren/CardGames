import ratInstance from "../ratscrew/InitRat"

export default function TableHand() {
    if (ratInstance.table > 0){
        return(
            <img src = { ratInstance.table[ratInstance.table.length-1].cardFront } alt = "image of active card on the table"/>
        )
    } else {
        return(
            <div></div>
        )
    }
    
}