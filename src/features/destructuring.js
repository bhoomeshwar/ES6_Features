const [a, , b] = [1, 2, 3];
console.log(a);
console.log(b);


const nodes = {
    op: "a",
    lhs: "b",
    rhs: "c"
};
const {op, lhs, rhs, test = 'test'} = nodes;
console.log(op);
console.log(lhs);
console.log(rhs);
console.log(test);


// Enhanced Object Literals
// ES5 code
const  one = 1, two = 2, three = 3;
const obj = {
    one: one,
    two: two,
    three: three
};

const es6Object = {
    one,
    two,
    three
};

// obj.one = 1, obj.two = 2, obj.three = 3
// es6Object.one = 1, es6Object.two = 2, es6Object.three = 3


console.log(Number.isInteger(Infinity));
console.log(Number.isNaN("NaN"));
console.log(Math.hypot(3, 4));
console.log(Math.pow(2, 4));

console.log("abcde".includes("cd") );
console.log("abc".repeat(3) );
