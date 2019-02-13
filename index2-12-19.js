let array = [];
for (i = 1; i <= 10; i++){
  array.push(i);
}
const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

///////////////////////////////////////////////////////////////
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

function map(arr,cb){
  let newArray = [];
  for(let i in arr){
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

function filter(arr,cb){
  let newArray = [];
  for (let i in arr){
    if(cb(arr[i])){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

///  a bit distracted, but timeboxed this for 15 min

console.log(array);
whileLoop(array);