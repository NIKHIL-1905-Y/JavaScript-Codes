//

const myArr = [0,32,34]

console.log(myArr.push(50))

myArr.forEach((num,index)=>{
    myArr[index] = num*2
})
console.log(myArr)


const myHeros  = ["shaktiMan","NaagRaj","Puma"]

const mixBoth = [...myArr,...myHeros]  //Output:[ 0, 64, 68, 100, 'shaktiMan', 'NaagRaj', 'Puma' ]

console.log(mixBoth);

// Array Accesing values
console.log(myArr[0],myArr[1])


//Array Methods


const newArr = [45,323,455,232]

newArr.push(5757) //Inserts the element at the end of the array
newArr.push(823)

newArr.pop();//Deletes the elements from the end 
console.log(newArr);//Output:[ 45, 323, 455, 232, 5757 ]


newArr.unshift(123)//Inserts the element at the beginning 
console.log(newArr);//Output:[ 123, 45, 323, 455, 232, 5757 ]

newArr.shift()//Removes the element from the beginnning

console.log(`Shifted element is a[0]:`,newArr);


console.log(newArr.includes(123));//Returns true or false on the basis of whether the element is present in the array

console.log(newArr.indexOf(123));//


// const modifyArr = newArr.join()
//=>=>  ==== Arr.join() function converts the array values into string
// console.log(newArr);
// console.log(modifyArr);  

//slice,splice

const arrSlic = [1,3,,5,7,9,11]


