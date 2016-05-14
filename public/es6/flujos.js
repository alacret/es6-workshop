/**
 * Created by alacret on 5/14/16.
 */

"use strict";

const funds = 12;
const funds2 = "12";

if(funds == funds2) {
    // console.log("IF normal");
}else{
    // console.log("ELSE");
}

if(funds === funds2) {
    // console.log("IF estricto");
}else{
    // console.log("ELSE");
}


//While
let fondos = 50; // starting conditions
while(fondos > 1 && fondos < 100) {
    if (Math.random() < 0.5)
        fondos += 10; // funds = funds + 10;
    else
        fondos -= 10; // funds = funds - 10;
}
// console.log(fondos);


// do while loop

let fondos2 = 50; // starting conditions
do{
    if (Math.random() < 0.5)
        fondos2 += 10; // funds = funds + 10;
    else
        fondos2 -= 10; // funds = funds - 10;
}while(fondos2 > 1 && fondos2 < 100)
// console.log(fondos2);


// for loop

let winnings = 0;
let aces = [
    {spade:"Corazon Rojo",value:"A"},
    {spade:"Corazon Negro",value:"A"},
    {spade:"Diamantes",value:"A"},
    {spade:"Cocada",value:"A"}
];
for(let card = 0; card < aces.length ; card++) {
    break;
    console.log("Throw an Ace:", aces[card].spade);
    if (aces[card].spade === "Corazon Rojo"){
        console.log("Lucky For you! The heart's pot");
        winnings += 110;
        continue;
    }
    if (aces[card].spade === "Diamantes"){
        console.log("Dealer's Luck: The house win!");
        winnings -= 30;
        break;
    }
    winnings += 10;
}
// console.log("No more aces, score: ", winnings);

// for IN
const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };

for(let prop in player) {
    if(!player.hasOwnProperty(prop))
        continue; // see explanation below
    // console.log(prop + ': ' + player[prop]);
}

let diceRoll = 13233;
switch(diceRoll) {
    case 7:
        console.log("Lucky 7");
    case 13:
        console.log("13! Bad Luck");
    case 7:
        console.log("Black Jack Dices");
        break;
    default:
        console.log("Try again");
        break;
}