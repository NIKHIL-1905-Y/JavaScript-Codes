function calculateCartPrice(...num1)
{
    let sum = 0;
    for(let i = 0;i<num1.length;i++){
          sum = sum + num1[i];
    }
        return sum;
}

let price = calculateCartPrice(2,300,50,3000,342,900)

console.log(price);// Output:4594


//Eg.2 

function pricePrinting(val1,val2,...num){
    return num;
}

let pr = pricePrinting(100,200,300,800,900,403,890)

console.log(pr); //Output :[ 300, 800, 900, 403, 890 ]


//Functions and Objects

let objUser1 = {
    name:"Nikhil",
    age:23,
    position:"SDE1"
}

let objUser2 = {
    name:"Raman",
    age:22,
    position:"SWE"
}

function userDetails(objDet)
{
    return `The userName is ${objDet.name} and his age is ${objDet.age}.He is a ${objDet.position}`
}

let details1 = userDetails(objUser1)

let details2 = userDetails(objUser2)
console.log(details1);  //Output:--___--->>>The userName is Nikhil and his age is 23.He is a SDE1
console.log(details2);  //Output:---->The userName is Raman and his age is 22.He is a SWE

