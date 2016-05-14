/**
 * Created by alacret on 5/14/16.
 */


const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };

let totalBet = rand(1, funds);

if(totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
}else{
        // distribute total bet
}
funds = funds - totalBet;



// While

let funds = 50; // starting conditions
while(funds > 1 && funds < 100) {
}


// do while loop

let remaining = totalBet;
do{
    let bet = rand(1, remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining = remaining - bet;
} while(remaining > 0);

// for loop

let winnings = 0;
for(let die=0; die < hand.length; die++) {
    let face = hand[die];
    if(bets[face] > 0)
        winnings = winnings + bets[face];
}
funds = funds + winnings;

/*
break
Breaks out of loop early.
continue
Skip to the next step in the loop.
return
Exits the current function (regardless of control flow). See Chapter 6.
throw
 */

switch(totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13:
        funds = funds - 1; // give 1 pence to charity! case 11:
        totalBet = 0;
        break;
    case 21:
        totalBet = 21;
        break;
    default:
        console.log("No superstition here!");
        break;
}

// for IN
const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };

for(let prop in player) {
    if(!player.hasOwnProperty(prop))
        continue; // see explanation below
    console.log(prop + ': ' + player[prop]);
}


// For off

const hand = [randFace(), randFace(), randFace()]; for(let face of hand)
console.log(`You rolled...${face}!`);