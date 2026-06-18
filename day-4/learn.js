// Variables
let var1 = "hello";
const var2 = "world"; // use by default
var var3 = "!" // avoid using var


// Block vs Function Scope
function myFunction(a) {
  let sharedVariable = 'xyz'
  if(a) {
    let blockVariable = 'abc'
  }
}


// Loop function
function processArray (array) {
  for(var i = 0; i < array.length; i++) {
    console.log('Element ', array[i]);
  }
  
  console.log('I can use variable i outside the loop ', i);
}


// Lambda functions () => {}
const sayHello = (name) => {
    console.log(name + ' says hello');
};


// Conditions
if (condition) {
    //do something
}

if (grade > 10) {
    console.log("Passing grade");
} else if (grade === 10) {
    // "2" == 2;
    console.log("Passing on the limit");
} else {
    console.log("Failing grade");
}


// Strings
// string concatenation
let text = "Hello" + " World!"

let textSubstring = text.substring(0,5) + "!" // immutable

text = `This is a template string`
text = `This is a multiline
        string that
        just works!`
const world = "world";
`Hello ${world}`;


// Numbers
let answer = 42;
answer.toString(); 

let str = "42";
Number.parseInt(str, 10);

// Number methods, using the Math object
Math.round() 
Math.floor()
Math.ceil() 
Math.min() 
Math.max() 


// Falsy values
// NaN - e.g. "abc" * 4;
// null
// undefined
// ""
// []
if ([]) { console.log("this runs") }
if (undefined) { console.log("this doesn't") }

// Arrays
// Strings are just arrays of characters
// array.prototype mdn docs
const users = []; // empty array
const grades = [1, 2, 3, 5]; // array of numbers
const attendees = ["hello", "world"]; // array of strings
const values = [10, false, "John"]; // mixed

users.length
attendees[1]; // evaluates to
values.at(2)

const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)



numbers.forEach(function(x) {
    // do something with individual grade
    console.log(x);
});


const result = attendees.find(function(name) {
  return name === "hello";
});

const booleanResult = numbers.includes(3);

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});

const doubled = numbers.map(function(number) {
    return number * 2;
});

function getStringSizes(strings) {
    return strings.map(s => s.length)
}

// reduce
const array = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);


// Objects
// everything is an object
// inheritance 
const ages = { alice: 18, bob: 27 };

const obj = {
    age: 18,
    hello: () => true
}

function hasPerson(name) {
  return name in ages; // returns boolean
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]

let obj = { a: 1, b: 2 };
let newObj = {...obj}; //=> { a: 1, b: 2 }
// another example
let obj = { a: 1, b: 2 };
let sourceOne = { a: 2, c: 3 };
let sourceTwo = { a: 3, b: 4 };
let newObj = {...obj, ...sourceOne, ...sourceTwo};
newObj // => { a: 3, b: 4, c: 3 }


