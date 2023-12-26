const user = {
    username: "Nikhil",
    price:999,

    welcomeMessage: function(){
        console.log(`Hello ${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

user.welcomeMessage()


// Hello Nikhil , welcome to website
// {
//   username: 'Nikhil',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

console.log(this); // Output:{}  :::In the node Environment this refers to empty object

//But in can of browser this refers to the window object



//Arrow Function


const check = () =>{
    let username = "nikhil"
    console.log(this);
    
}

check()


// function checkKar()
// {
//     console.log(this);
    
// }

// checkKar()

//Explicit Return
const addTwo = (num1,num2)=>{

    return num1 + num2;
}

//If you use curly braces then you will have to use return keyword

console.log(addTwo(3,4));

//In this case : If you are not using curly braces then you need not to use return keyword
//Implicit return 
const addOne = (num1,num2) => (num1 + num2);

console.log(addOne(4,5));
