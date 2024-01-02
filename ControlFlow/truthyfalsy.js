// Falsy Values:

// false,
//  0, 
// -0,
// BigInt On,
// "", 
// null,
// undefined,
// NaN


// Values that are treated as false when encountered in a boolean context:

// Empty Strings: An empty string "" is falsy.

// Zero (0): The number zero (0) is falsy.

// NaN (Not a Number): Represents a value that is not a legal number. It is falsy.

// null: Denotes the absence of any object value. It is falsy.

// undefined: Denotes a variable that has not been assigned a value. It is falsy.

// The boolean value false itself is falsy.


//1.Empty String

let falsyString = "";
if (falsyString) {
  console.log("FalsyString is truthy!");
} else {
  console.log("FalsyString is falsy!");
}


//2.Zero(0)

let falsyNumber = 0;
if (falsyNumber) {
  console.log("FalsyNumber is truthy!");
} else {
  console.log("FalsyNumber is falsy!");
}

//3.NULL
let falsyNull = null;
if (falsyNull) {
  console.log("FalsyNull is truthy!");
} else {
  console.log("FalsyNull is falsy!");
}

//undefined

let falsyUndefined = undefined;
if (falsyUndefined) {
  console.log("FalsyUndefined is truthy!");
} else {
  console.log("FalsyUndefined is falsy!");
}
