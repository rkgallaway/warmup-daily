'use strict';

let numbers = [1,2,3,4,5,6,7,8,9,10];
const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};



//pasted above///////////////////////

function forLoop(arr){
  for (let i in arr){
    console.log(arr[i]);
  }
}

function whileLoop(arr){
  let array = [...arr];
  while(array.length){
    console.log(array.shift());
  }
}

function map(arr, cb){
  let newArray = [];
  for (let i in arr){
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

function filter(arr, cb){
  let newArray = [];
  for(let i in arr){
    if(cb(arr[i])){
      newArray.push(arr[i]);
    }
    return newArray;
  }
}

function reduce(arr, cb, newThing){
  for(let i in arr){
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}

const state = {people, stuff};
let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars:[...stuff.cars, 'GMC']};
let newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'GMC']}};

console.log({people});
console.log('------------------\n\n');

console.log({newPeople});
console.log('------------------\n\n');

console.log({stuff});
console.log('------------------\n\n');

console.log({newStuff});
console.log('------------------\n\n');

console.log({state});
console.log('------------------\n\n');

console.log({newState});
console.log('------------------\n\n');