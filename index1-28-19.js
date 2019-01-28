'use strict';

const arr = [];

for (let i = 0; i <= 10; i++){
  arr.push(i);
}

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

function forLoop(arr){
  for (let i in arr){
    console.log(arr[i]);
  }
}

function whileLoop(arr){
  let array = [...arr];
  while(array.length){
    console.log(array);
  }
}

funstion map(arr,cb){

}

//moving slow this mrning.  spent the time, and brought in John's solution code for first time and am seeing how that all looks