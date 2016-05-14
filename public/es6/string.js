/**
 * Created by alacret on 5/13/16.
 */

"use strict";
// Strings
const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';

// Template String
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;
// console.log(message);

//ES 5
const multi_line = "un " +
    "string " +
    "muy " +
    "muy muy " +
    "muy muy largo";

//ES6
const multiline = "line1\
line2";

const multiline2 = `line1 
Cualquier cosa que sea muy muy larga
Otra cosa muy larga
Txto Largo
line2`;

const s = "he*llo";
// console.log(s.indexOf("l"));
// console.log(s.toUpperCase()); // "HELLO"
// console.log(s.lastIndexOf("l"));
// console.log(s.split("*"));

// const s = "hello";
// s.rating = 3; // no error...success?
// s.rating; // undefined

let sym = Symbol("DESCRIPCION");
let sym2 = Symbol("DESCRIPCION")
console.log(typeof sym);
console.log(sym);
console.log(typeof sym2);
console.log(sym2);
console.log(sym == sym2);
console.log(sym == sym);

