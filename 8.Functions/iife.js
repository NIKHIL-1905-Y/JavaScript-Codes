
//Immediately invoked function

//Named IIFE

(function adminController(){
    console.log('Hello Admin ');
    
})();

//Arrow function

(() => {
    console.log('Hello Head Admin  in Arrow Function');
    
})();

//Passing parmeters in IIFE

((name)=>{
    console.log(`Hello ${name}`);
    
})('Nikhil');


//Point to Remember:::::---->>>>   While using IIFE always remember to use semicolon when the iife is executed completely.
//Otherwise it may throw an error 

