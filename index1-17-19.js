'use strict';

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {couch: 'old', ...stuff, cars: [...stuff.cars, 'pacifica']};
let newState = {};

console.log({newPeople,});
console.log(newStuff);

// skipped some of the first stuff so that I could get to the object bits... Took me a while to get it going, but will move faster later.  was good to get this back into my brain