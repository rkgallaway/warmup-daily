'use strict';

const arr = [];
for (let i = 0; i <= 10; i++){
  arr.push(i);
}

console.log({arr});

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

function myMapper(arr, cb){
  const results = [];
  for(let i in arr){
    results.push(cb(arr[i]));
  }
  return results;
}

console.log(myMapper(arr, (value) => {
  return Math.floor(value);
}));

//didn't get much further but doing things differently, more on my own, getting more expected results!