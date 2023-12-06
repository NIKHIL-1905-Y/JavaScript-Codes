// Number Properties
console.log("Maximum value:", Number.MAX_VALUE); // Output: Maximum value: 1.7976931348623157e+308
console.log("Minimum value:", Number.MIN_VALUE); // Output: Minimum value: 5e-324
console.log("NaN value:", Number.NaN); // Output: NaN value: NaN
console.log("Positive Infinity:", Number.POSITIVE_INFINITY); // Output: Positive Infinity: Infinity
console.log("Negative Infinity:", Number.NEGATIVE_INFINITY); // Output: Negative Infinity: -Infinity

// Number Methods
console.log("Parsed float:", Number.parseFloat("3.14")); // Output: Parsed float: 3.14
console.log("Parsed integer:", Number.parseInt("10")); // Output: Parsed integer: 10

// Number Object Methods
let num = 123.456789;

console.log("Exponential notation:", num.toExponential()); // Output: Exponential notation: 1.23456789e+2
console.log("Fixed-point notation:", num.toFixed(2)); // Output: Fixed-point notation: 123.46
console.log("Precision notation:", num.toPrecision(4)); // Output: Precision notation: 123.5


// Using Number() constructor
let numObject = new Number(10); // Creating a number object with value 10

console.log(numObject); // Output: [Number: 10]

// Checking the type of numObject
console.log(typeof numObject); // Output: object

// Accessing the value within the number object
console.log(numObject.valueOf()); // Output: 10
