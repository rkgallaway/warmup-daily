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
  while(count < arr.length){
    console.log(arr[count]);
    count++;
  }
}

whileLoop(arr);

function myMapparr, cb){
  const result = [];
  for(let i in arr){
    result.push(cb(arr[i]));
  }
  return result;
}
console.log(nyMap(arr, (value)=> * 5)))


