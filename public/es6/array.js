/**
 * Created by alacret on 5/14/16.
 */

"use strict";

const a1 = [1,2,3,4];

const arre = Array(1,2,3,4);

const a2 = [1, 'two', 3, null];
const a3=[
    "What the hammer?  What the chain?",
    "In what furnace was thy brain?",
    "What the anvil?  What dread grasp",
    "Dare its deadly terrors clasp?",
];
const a4=[
    { name: "Ruby", hardness: 9 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
    [1,3,3,4,{
        a:[1,{
            b:3
        }]
    }]
];
console.log(a4.length);
console.log(a4[3][4].a[1].b);
const a5=[
[1, 3, 5],
[2, 4, 6],
];

const arr = ['a', 'b', 'c'];
arr.length;