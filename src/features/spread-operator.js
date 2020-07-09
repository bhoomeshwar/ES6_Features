function f(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
console.log(f(...[1,2,3]));


const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];

console.log(lyrics);


let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x);
console.log(y);
console.log(z);

// Spread properties
let n = { x, y, ...z };
console.log(n);


let someObj = {'id': 1};
someObj = {
    ...someObj,
    'name': 'test'
};

console.log('someObje: ', someObj);


const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);

arr1.push(4);

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
