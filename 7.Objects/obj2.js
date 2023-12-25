//Object declaration using Constructor

const user = new Object()


user.id = "3232";
user.name = "Nikhil";
user.isLoggedIn = false
user.listSkills = ["Coding","Problem Solving","Speaking Skills"]
user.relation = {
    friend:[
        {
            name:"Akash",
            location:"Agra"
        },
        {
            name:"Raman",
            location:"Tundla"
        },
        {
            name:"Sahid",
            location:"Firozabad"
        },
    ],
     commonInterest:"Cricket",
    ageGroup:"Under 20"

}
console.log(user);

//object keys and values
console.log("OBject KEy and VAlue");

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user?.relation?.friend[0]?.location);

//Merging Objects
const object1 = {
    id: 1,
    name: 'John',
    age: 30,
    city: 'New York'
};

const object2 = {
    id: 1,
    occupation: 'Engineer',
    city: 'San Francisco',
    country: 'USA'
};

const obj3 = {...object1,...object2}

console.log(obj3);


