/**
 * Created by alacret on 5/14/16.
 */


const sam1 = {
    name: 'Sam',
    age: 4,
};
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