

//Object literals

const jsUser = {
    name:"NIkhil",
    id:"34343",
    age:23,
    location:"India",
    rid:29249999,
    isLoggedIn:false
}
//Accesing objects using .
console.log(jsUser.age);

//Accesing Object using []
console.log(jsUser["rid"]);
console.log(jsUser.isLoggedIn);


//Updating values in Objects

 jsUser.name = "NIkhil Yadav"
 console.log(jsUser);
 

 jsUser.greeting = function(){
    console.log(`Hello Js ${this.name}`);
    
 }
 jsUser.greeting();
 
//Obj2
let person = {
    name: 'John Doe',
    age: 30,
    hobbies: ['reading', 'music', 'hiking'],
    address: {
      city: 'New York',
      zip: '10001'
    },
    greet: function() {
      return 'Hello!';
    }
  };
  
  console.log(person.name); // Output: John Doe
  console.log(person.hobbies[0]); // Output: reading
  console.log(person.address.city); // Output: New York
  console.log(person.greet()); // Output: Hello!
  
