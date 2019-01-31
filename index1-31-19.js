'use strict';

let numbers = [1,2,3,4,5,6,7,8,9,10];
const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

const state = {people,stuff};
let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars:[...stuff.cars, 'GMC']};
let newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'GMC']} };

function forLoop(arr) {
  for (let i in arr){
    console.log(arr[1]);
  }
}

function whileLoop(arr) {
  let array = [...arr];
  while (array.length){
    console.log(array.shift());
  }
}

function map(arr,cb){ //takes in an array and a callback that does a thing.  does that thing at every interval and push the result into a ne array
  let newArr = [];
  for (let i in arr){
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

function filter (arr,cb){ //takes in an array and a callback that does a thing.  if that thing happnes, the array value at that interval is pushed into a new array
  let newArray = [];
  for(let i in arr){
    if (cb(arr[i])){newArray.push(arr[i]);}
  }
  return newArray;
}

function reduce (arr,cb,newThing){
  for (let i in arr){
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}

console.log('reduce()');
let sum = reduce(numbers, (acc,num) => {
  acc += num;
  return acc;
},0);

console.log({sum});
console.log('------------------\n\n');