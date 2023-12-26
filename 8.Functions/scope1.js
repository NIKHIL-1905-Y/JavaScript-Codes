



//{block Scope}   //Scope


// if(true)
// {
//         let a = 10;
//         const b = 20;
//         var c = 30;

// }
//console.log(a);
//console.log(b);
//console.log(c);  //This is not giving error because of var

let a = 20

if(true)
{
    let a= 10;
    let b = 20;
    console.log('Inner : ',a);
    
}

console.log('Global :', a);

