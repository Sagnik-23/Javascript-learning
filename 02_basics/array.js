// Array
const myArr = [0,1,2,6,4,5] //Note- In JS array can contain multiple datatypes.
// console.log(myArr[0]);

//Array declaration types
const heroes = ["Spiderman", "Octo"]
const myArr2 = new Array(1,2,3,4,5) 
// myArr.push(9)// Adds element at the end of the array.
// myArr.pop() // Removes the last element
// myArr.unshift(8) //Add element at the begining of the array
// myArr.shift() //Removes from base address 

// console.log(myArr.includes(5)); //Gives output in boolean
// console.log(myArr.indexOf(63)); // If index is out of bound then the output will be -1

const newArray = myArr.join() //Converts array to a string seperated by comma
// console.log(myArr);
// console.log(newArray);

// ---Slice and Splice---
const myN1 = myArr.slice(1,3)
console.log("A: ", myArr, " First condition");
console.log(myN1);
console.log("B: ",myArr, " After slicing");

const myN2 = myArr.splice(1,3)
console.log("C: ",myArr, " After splicing");
console.log(myN2);