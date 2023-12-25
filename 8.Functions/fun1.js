
// function addTwoNumbers(num1,num2)
// {
//     console.log(num1 + num2);
    
// }

// addTwoNumbers(10,13)


//Return from function


function addTwoNumbers(num1,num2){   ///----->>>Passing Parameters to a function
    return num1 + num2
}


let res = addTwoNumbers(10,12); //--->>>>Passing  Arguments to a function
// console.log(res);



function loginUser(username){
    if(username === undefined)
    {
        console.log('Please Enter a username');
        return ;
    }
    return `${username} just logged in`
}


let user = loginUser("Nikhil")  //If the argument is empty the it will give undefined in the output

console.log(user);



