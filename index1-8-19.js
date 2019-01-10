'use strict';

const theArr = [];
for (let i = 0; i < 10; i++){
  theArr.push(i * i * i);
}
console.log(theArr);

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

forLoop(theArr);

function whileLoop(arr){
  let count = o;
  while(count < arr.length){
    console.log(arr[count]);
    count++;
  }
}
whileLoop(theArr);

function myMapper(arr, cb){
  const result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }
  return result;
}

console.log(myMapper(theArr, (value) => {
  return Math.floor(value / 3 / 3);
}));
