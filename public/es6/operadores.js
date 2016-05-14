/**
 * Created by alacret on 5/14/16.
 */

constn=5;
const s = "5";
n===s;
n!==s;
n === Number(s);
n !== Number(s);
n==s;
n!=s;

const a = { name: "an object" };
const b = { name: "an object" };

a === b;
a !== b;
a == b;
a != b;


letn=0;
while(true) {
    n += 0.1;
    if(n === 0.3) break;
}
console.log(`Stopped at ${n}`);


letn=0;
while(true) {
    n += 0.1;
    if(Math.abs(n - 0.3) < Number.EPSILON)
        break;
}
console.log(`Stopped at ${n}`);


const result = doIt ? "Did it!" : "Didn't do it.";



 // a normal object
constobj={b:2,c:3,d:4};
    // object destructuring assignment
const {a, b, c} = obj;
a; // undefined: there was no property "a" in obj
b; // 2
c; // 3
d; // reference error: "d" is not defined


constobj={b:2,c:3,d:4};
leta,b,c;
// this produces an error:
//{a,b,c}=obj;
// this works:
({a, b, c} = obj);
