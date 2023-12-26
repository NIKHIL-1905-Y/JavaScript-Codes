//Nested Scope

// The child function can access the variables of his parent function
//But the parent function can not access the value of child function
function one()
{
    const username = "Nikhi"

    function two()
    {
        const website = "youtube"
        console.log(username);
        
    }

//     console.log(website);//This will throw an error because the scope of website variable is in function two
      two()
    
}

one()



//++++++++++++++++//


//Normal Functions can be Hoisted 
function addone(num)
{
    return num + 1;
}

addone(5)

//When functions are stored in variable then it can not be hoisted
//Function Declaration using variables
const addTwo = function(num){
    return num + 2;
}

addTwo(5)
