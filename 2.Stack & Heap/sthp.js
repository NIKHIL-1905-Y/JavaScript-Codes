//Stack Memory ::(Primitive data types)

console.log("\nStack ::\n")

let myName = "Nikhil"

let myName2 = myName; //Copying



console.log(myName2)

myName2 = "Nishu";

console.log(myName2)
console.log(myName)


//Heap Memory ::(Non Primitive data Types)

console.log("\nHeap ::\n")

let userdemo = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

console.log(userdemo.email)

let userOne = userdemo;  //reference to original value

userOne.email = "nikhil@gmail.com"

console.log(userOne.email)
console.log(userdemo.email)