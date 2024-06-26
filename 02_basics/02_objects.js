// const tinderUser = new Object() // Singleton 
const tinderUser = {}

tinderUser.name = "Sagnik"
tinderUser.roll = 99
tinderUser.id = "CSE@23"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    name: {
        fullName:{
            first: "Sagnik",
            last: "Chakraborty"
        }   
    },
    email: "abc@gmail.com"
}
// console.log(regularUser.name.fullName.first);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1 , obj2) // Here {} is used as a target in which all the objects get merged.
const obj3 = {...obj1 , ...obj2}

// console.log(obj3);

const users = [
    {
        id:1,
        email: "lol@gmail.com"
    },
    {
        id:1,
        email: "lol@gmail.com"
    },{
        id:1,
        email: "lol@gmail.com"
    },
]
// console.log(users[0].email);// Accessing the values of an array of obj.

console.log(tinderUser);

console.log(Object.keys(tinderUser));// Give the keys of the objects in an array format
console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // [[ 'name', 'Sagnik' ],[ 'roll', 99 ],[ 'id', 'CSE@23' ],[ 'isLoggedIn', false ]]

console.log(tinderUser.hasOwnProperty('name'));

//DE-STRUCTURING//
const course = {
    courseName: "Javascript",
    courseFee: 999,
    courseInstructor: "Unknown"
}
const {courseName: name} = course //syntax of De-structure
console.log(name);