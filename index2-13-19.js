'use strict';

let numbers = [1,2,3,4,5,6,7,8,9,10];
const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

function forLoop (arr){
  for (let i in arr){
    console.log(arr[i]);
  }
}

function whileLoop(arr){
  let count = 0;
  while(count < arr.length){
    console.log(arr[count]);
    count++;
  }
}

function map(arr,cb){
  let newArray = [];
  for (let i in array){
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

function filter(arr, cb){
  let newArray = [];
  for (let i in arr){
    if (cb(arr[i])){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function reduce (arr, cb, newThing){
  for (let i in arr){
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}

const state = {people, stuff};
let newPeople = ['odie', ...people, 'garfield'];
const newStuff = {...stuff, cars:[...stuff.cars, 'pacifica']};
let newState = {...state, people: ['odie', ...people, 'garfield'], stuff:{...stuff, cars:[...stuff.cars, 'pacifica']}};


whileLoop(numbers);

