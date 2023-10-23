// checks if drawn card is a face card
export default function checkFace(table, face){
    if(table[table.length-1].rank >= 11){
        face.value = true;
    } else {
        face.value = false;
    }
    console.log(face.value);
    return face.value;
}