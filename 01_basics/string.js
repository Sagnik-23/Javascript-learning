// Another short note for Strings. I know it is not arranged but I will try my best to do it.

name = "Sagnik Chakraborty"
roll = 75

// Backtiks(``) are used in string just like the f string in python.
console.log(`Hello everyone my name is ${name.toUpperCase()} and my class roll is ${roll}`)
// console.log(typeof name);     Just for checking purpose of investigation study
// console.log(typeof roll);
console.log(name === roll);// This also checks datatype during comparison

console.log(name)


let valueInNum = Number(roll) // Type casting is done by this method
console.log(valueInNum);
console.log(typeof valueInNum);

let valueInString = String(roll) // Type casting to string
console.log(valueInString);
console.log(typeof valueInString);

// Building a string and using different operations to it
const gameName = new String('SagnikPC')

console.log(gameName.toLowerCase());
console.log(gameName.bold()) // Works in HTML


const nwStr = gameName.slice(-3,-1);// Here .slice(upto which it will slice, starting point of slice)[for negative cases only]
//## If you want to slice from the very end just give the first parameter. No need to mention the starting it will automatically taken.
//Eg- gameName.slice(-3)  ## Here from last 3 char are sliced.
// For +ve cases it will just act normal.
console.log(nwStr);

// I will provide a full text file for all the string methods and exlaining it.