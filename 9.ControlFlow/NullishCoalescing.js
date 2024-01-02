// The nullish coalescing operator (??) is a relatively new addition 
// to JavaScript, introduced to handle cases where you want to provide
//  a default value when dealing with null or undefined values.


let value1 = null;
let value2 = 10;

let result1 = value1 ?? "Default Value";
let result2 = value2 ?? "Default Value";

console.log(result1); // Output: "Default Value"
console.log(result2); // Output: 10


//Ternary Operator


//condition ? true :false

const iceTeaPrice = 10;

iceTeaPrice>=90 ? console.log("Chai Mhengi h"):console.log("Chai pee jaa sakti h")