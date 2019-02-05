'use strict';

let numbers = [1,2,3,4,5,6,7,8,9,10];
const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};
function forLoop(arr){
  for(let i in arr){
    console.log(arr);
  }
}

function whileLoop(arr){
  let array = [...arr];
  while(array.length){
    console.logarray.shift());
  }
}

function map(arr,cb){
  let mewArray = [];
  for (let i in arr){
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

function filter(arr,cb){
  let newArray = [];
  for (let i in arr){newThing
    if(cb(arr[i])){newArray.push(arr[i]);}
  }
  return newArray;
}

