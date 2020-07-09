const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Array.of(1, 2, 3));
console.log(Array.from('foo'));
console.log([0, 0, 0].fill(7, 1));
console.log(Array.from([1, 2, 3], x => x + x));
console.log(array.find(x => x === 3));
console.log(array.findIndex(x => x === 2));
console.log(array.reverse());
console.log(array.some((number) => number >5));

const mapArray = array.map((number) => number * 2);
console.log('mapArray: ', mapArray);

const reduceArray = array.reduce((acc, number) => {
    return acc.concat(number * 2);
}, []);
console.log('reduceArray: ', reduceArray);

array.forEach((number) => console.log('number: ', number));

const someObj = {
    '1': {
        'id': 1,
        name: 'test'
    },
    '2': {
        'id': 2,
        name: 'test'
    }
};

console.log(Object.keys(someObj));
console.log(Object.values(someObj));
