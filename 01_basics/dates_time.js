// Dates
let myDate = new Date()
console.log(myDate.toString())// Output- Sun Jun 23 2024 03:59:12 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());// Output- Sun Jun 23 2024(Gives only date)

console.log(myDate.toISOString());// Output- 2024-06-23T04:03:31.852Z //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

console.log(myDate.toJSON());//Output- 2024-06-23T04:08:43.374Z  // Gives the output in json format

console.log(myDate.toLocaleDateString());// Output- 6/23/2024

console.log(myDate.toLocaleString()); //Output- 6/23/2024, 4:10:10 AM

console.log(myDate.toLocaleTimeString()); //Output- 4:10:41 AM

console.log(myDate.toTimeString()); // Output- 04:12:17 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString()); // Output- Sun, 23 Jun 2024 04:13:09 GMT

// myDate is a object always. //console.log(typeof myDate);

// let myCreateDate = new Date(2024,0,5)
// let myCreateDate = new Date(2024,0,5,4,5)
let myCreateDate = new Date("01-17-2024")
console.log(myCreateDate.getTime());

console.log(myCreateDate.toLocaleString());

//Timestamp
let myTimeStamp = Date.now()
console.log(myTimeStamp);// Milliseconds
console.log(Math.floor(myTimeStamp/1000));

console.log(myDate.getMonth() + 1)
console.log(myDate.getDay())
console.log(myDate.getDate())

let nwDate = new Date()

//This is the best way to play with the dates
console.log(nwDate.toLocaleDateString('default',{
    day: "2-digit",
    weekday: "long" 
}))