'use strict';

const array = [];

for (let i = 0; i < 11; i++){
  array.push(i);
}

console.log(array);

function forLoop(array){
  for (let i in array){
    console.log(array[i]);
  }
}

forLoop(array);

function whileLoop(array){
  let count = 0;
  while(count > array.length){
    console.log(array[count]);
    count++;
  }
}

whileLoop(array);

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {};
let newState = {};

// let newPeople = people;

// newPeople.push(Garfield);
// newPeople.unshift(Odie);

console.log(newPeople);

//time boxed, limit reached