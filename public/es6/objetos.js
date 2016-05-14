/**
 * Created by alacret on 5/14/16.
 */

"use strict";

const sam1 = {
    name: 'Sam',
    age: 4,
    "otra propiedad": {
        p: 1,
        e: 2
    },
};

console.log(sam1.name);
console.log(sam1["name"]);
console.log(sam1["otra propiedad"]);
console.log(sam1["otra propiedad"].p);
console.log(sam1["otra propiedad"]["e"]);

const sam2 = { name: 'Sam', age: 4 };

const sam3 = { name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfaimily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
  },
};


sam3.classification.family;
sam3["classification"].family;
sam3.classification["family"];
sam3["classification"]["family"];
// "Felinae"
// "Felinae"
// "Felinae"
// "Felinae"

    */