const name = "Nikhil"

const repCount = 20;

console.log(`Hello my name is ${name} and my repo count on github is ${repCount}`);


const newName = new String('Nandani')

console.log(newName)

for(let i = 0;i<newName.length;i++){
    console.log(newName[i])
}
// String Methods

console.log(newName.length)
console.log(newName.__proto__)

console.log(newName.toUpperCase());
console.log(newName.charAt(2))

console.log(newName.indexOf('n'))

// substring()

const newString = newName.substring(0,4)
 console.log(newString);
 
 //slice()
const anotherStr = newName.slice(-8,4)


console.log(anotherStr)

//trim()-->> It removes spaces from beginning and end


const trStr = "  Njnsjd  "

console.log(trStr);
console.log(trStr.trim());

//Replace()

const url = "https://noika.com/noika%20yadav"

console.log(url.replace('%20','-'));


//includes()

console.log(url.includes('com'));

//concat()
console.log(url.concat('/server'));


//split()

console.log(url.split('/'));

