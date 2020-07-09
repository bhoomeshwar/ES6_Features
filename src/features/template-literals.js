const firstName = 'Bruce';
const lastName = 'Wayne';

// Es5
const es5Name = 'Your name is ' + firstName + ' ' + lastName;
const es5RoadPoem = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'
    + 'Though as for that the passing there\n\t'
    + 'Had worn them really about the same,\n\t';

const es5FourAgreements = 'You have the right to be you.\n\
    You can only be you when you do your best.';

console.log('Es5 Name: ', es5Name);
console.log('Es5 fourAgreements: ', es5FourAgreements);
console.log('Es5 roadPoem: ', es5RoadPoem);


// Es6
const es6Name = `Your name is ${firstName} ${lastName}`;
const es6RoadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`;

const es6FourAgreements = `You have the right to be you.
    You can only be you when you do your best.`;

console.log('Es6 Name: ', es6Name);
console.log('Es6 fourAgreements: ', es6FourAgreements);
console.log('Es6 roadPoem: ', es6RoadPoem);


const f = a => a * 4;

console.log('Another example: ' , `hello ${f(4)}`);
