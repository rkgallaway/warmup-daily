'use strict';

const arr = [];
for (let i = 0; 1 <= 10; i++){
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
  let i = 0;
  while (i <= arr.length){
    console.log(arr[i]);
    i++;
  }
}

whileLoop(arr);

// I keep having some bizarre issue with this file and can't see the issue.  I've used my time alotment tho.. not sure what I've done
