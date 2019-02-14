let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const people = ['kookla', 'fran', 'ollie'];
const stuff = {
  tv: '55 inch',
  radio: 'not radio, alexa',
  toothbrush: 'electric',
  cars: ['pacifica', 'ranger']
};

function forLoop(arr){
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

function map(arr, cb){
  let newArray = [];
  for (let i in arr){
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

function filter(arr,cb){
  let newArray = [];
  for (let i in arr){
    if (cb(arr[i])){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function reduce(arr, cb, newThing){
  for (let i in arr){
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}

/////////////////////////////////////////

const state = {people, stuff};
let newPeople = ['odie', ...people, 'garfield'];
const newStuff = {...stuff, cars:[stuff.cars, 'bus']};
let newState = {...state, people: ['odie', ...people, 'garfield'], stuff:{...stuff, cars:[...stuff.cars, 'bus']}};


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


console.log('forLoop()');
forLoop(numbers);
console.log('------------------\n\n');

console.log('whileLoop()');
whileLoop(numbers);
console.log('------------------\n\n');

console.log('map()');
let squares = map(numbers, (val=>val * val));
console.log({squares});
console.log('------------------\n\n');

console.log('filter()');
let odds = filter(numbers, (val => !!(val % 2)));
console.log({odds});
console.log('------------------\n\n');

console.log('reduce()');
let sum = reduce(numbers, (acc,num) => {
  acc += num;
  return acc;
},0);

console.log({sum});
console.log('------------------\n\n');