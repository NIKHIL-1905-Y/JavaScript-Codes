//MATHS

console.log(Math);


// Math.PI
console.log("PI:", Math.PI); // Output: PI: 3.141592653589793

// Math.abs(x)
console.log("Absolute value of -10:", Math.abs(-10)); // Output: Absolute value of -10: 10

// Math.round(x)
console.log("Rounded value of 3.7:", Math.round(3.7)); // Output: Rounded value of 3.7: 4

// Math.floor(x)
console.log("Floor value of 5.9:", Math.floor(5.9)); // Output: Floor value of 5.9: 5

// Math.ceil(x)
console.log("Ceil value of 4.2:", Math.ceil(4.2)); // Output: Ceil value of 4.2: 5

// Math.pow(x, y)
console.log("2 raised to the power of 5:", Math.pow(2, 5)); // Output: 2 raised to the power of 5: 32

// Math.sqrt(x)
console.log("Square root of 25:", Math.sqrt(25)); // Output: Square root of 25: 5

// Math.min(x1, x2, ...)
console.log("Minimum of 10, 5, 8:", Math.min(10, 5, 8)); // Output: Minimum of 10, 5, 8: 5

// Math.max(x1, x2, ...)
console.log("Maximum of 10, 5, 8:", Math.max(10, 5, 8,)); // Output: Maximum of 10, 5, 8: 10

// Math.random()
console.log("Random number between 0 and 1:", Math.random()); // Output: Random number between 0 and 1: (a random value between 0 and 1)

// Math.sin(x), Math.cos(x), Math.tan(x)
console.log("Sine of 45 degrees:", Math.sin(Math.PI / 4)); // Output: Sine of 45 degrees: 0.7071067811865475
console.log("Cosine of 60 degrees:", Math.cos(Math.PI / 3)); // Output: Cosine of 60 degrees: 0.5
console.log("Tangent of 30 degrees:", Math.tan(Math.PI / 6)); // Output: Tangent of 30 degrees: 0.5773502691896257

// Math.log(x), Math.exp(x)
console.log("Natural log of 10:", Math.log(10)); // Output: Natural log of 10: 2.302585092994046
console.log("Exponential of 2:", Math.exp(2)); // Output: Exponential of 2: 7.38905609893065

//Math.Random

console.log(`The random values b/w 1 to 100 is   ${Math.floor((Math.random())*100)}`);

//Random values b/w two numbers



 function RandomBetween(min,max) {
    const val = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(val);
    
}
RandomBetween(80,90)
 





