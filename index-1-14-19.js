'use strict';

const arr = [];

for (let i = 0; i <= 10; i++){
  arr.push(i);
}

console.log(arr);

function forLoop(arr){
  for (let i in arr){
    console.log(arr[i]);
  }
}

forLoop(arr);

function whileLoop(arr){
  let count = 0;
  while (count < arr.length){
    console.log(arr[count]);
    count++;
  }
}

whileLoop(arr);

function myMapper(arr, cb){
  const result = [];
  for(let i in arr){
    result.push(cb(arr[i]));
  }
  return result;
}

console.log(myMapper(arr, (value)=> {
  return Math.floor(value / 3 / 3);
}));
 // not working

 // for got to branch. must be monday..