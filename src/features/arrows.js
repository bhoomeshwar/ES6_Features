// ES5
function DrawCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('here');
        console.log('Displaying radius: ', this.radius);
    }
}

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('Creating circle: ', radius);
        }
    }
}

// ES6
const arrowCreateCircle = radius => {
    return {
        draw: () => {
            console.log('Arrow Creating circle: ', radius);
        }
    }
};

const circle1 = new DrawCircle(10);
const circle2 = createCircle(15);
const circle3 = arrowCreateCircle(20);

circle1.draw();
circle2.draw();
circle3.draw();

// Rest Function parameters
function demo(part1, ...part2) {
    return {part1, part2}
}

console.log(demo(1,2,3,4,5,6));

// for..of and for..in
let list = [4, 5, 6];

console.log(list)

for (let i in list) {
    console.log(i);
}

for (let i of list) {
    console.log(i);
}
