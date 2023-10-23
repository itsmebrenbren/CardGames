// player draws card(s)
export default function draw(table, player, numCards){
    for(let i = 0; i < numCards; i ++){
        if(player.hand.length > 0){
        let toTable = player.hand.shift();
        table.push(toTable);
        console.log(player.name + ' : ', table[table.length-1]);
        }  
    }
return table;
}