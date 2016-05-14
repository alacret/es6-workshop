/**
 * Created by alacret on 5/14/16.
 */

"use strict";

// const n = 5;
// const s = "5";
// console.log(n===s);
// console.log(n!==s);
// console.log(n === Number(s));
// console.log(n !== Number(s));
// console.log(n == s);
// console.log(n!=s);



const a = { name: "an object" };
const b = { name: "an object" };

// console.log(a === b);
// console.log(a !== b);
// console.log(a == b);
// console.log(a != b);

/*
let n = 0;
while(true) {
    n += 0.1;
    if(n === 0.3) break;
}
console.log(`Stopped at ${n}`);
*/


let n=0;
while(true) {
    n += 0.1;
    if(Math.abs(n - 0.3) < Number.EPSILON)
        break;
}
// console.log(`Stopped at ${n}`);

let result = (a.name === b.name) ? "Same name" : "Didn't do it.";
// console.log(result);
result = (a.name === "some other name") ? "Same name" : "Didn't do it.";
// console.log(result);


a normal object
const obj = {b:2,c:3,d:4};
const {a, b, c} = obj;
console.log(a); // undefined: there was no property "a" in obj
console.log(b); // 2
console.log(c); // 3
console.log(d); // reference error: "d" is not defined

const obj = {b:2,c:3,d:4};
let a2,b2,c;
// this produces an error:
{a2,b2,c}=obj;
// this works:
({a2, b2, c} = obj);
