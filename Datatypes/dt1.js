//Primitive data Types

//7 types :
// 1.String
// 2.Number
// 3.Boolean
// 4.NULL
// 5.Undefined
// 6.Symbol
// 7.BigInt

console.log("\nPrimitive Data Types : \n")
const score = 100;

const scoreValue = 100.3;


const isloogedIn = false;
const outsideTemp = null;

console.log(typeof(outsideTemp))


const id = Symbol('123')

const id2 = Symbol('123')

console.log(id === id2)


const bigNumber = 239747849993939n;

console.log(typeof(bigNumber))


//Reference(Non Primitive)

//Array 
//Objects
//Function

//Array
console.log("\nNON-Primitive Data Types: \n")
const heros = ["shaktiman","nagraj","doga"];
console.log(typeof(heros))
//Obj

let myObj = {
    name:"Nikhil",
    age:22
}
console.log(typeof(myObj))

//Function

const myFunction = function(){
    console.log("Hello World")

}
myFunction()

console.log(typeof(myFunction))

