// Constructor method of object defining
// Object.create // Here Singleton is created

//Symbols is obj
const mySym = Symbol("key1")

//Object literals
const JsObj = {
    name: "Sagnik Chakraborty",
    "Time up": "10 past 4",
    [mySym]: "myValue1",
    age: 19,
    place: "Arambagh",
    isLoggedin: false,
    email: "abc@gmail.com"
}

// console.log(JsObj.name);
// console.log(JsObj["email"]); // Another way of accessing the obj.
// console.log(JsObj["Time up"]);// Only way of accessing this.
// console.log(JsObj[mySym]); // getting symbol values

JsObj.email = "lol@gmail.com" // Overwritting the existing values

// Object.freeze(JsObj) // Can't alter the values in the objects any more

//Funtions
JsObj.greetings = function(){
    console.log("Welcome Home");
}
console.log(JsObj.greetings); //O/P -> [Function (anonymous)]
console.log(JsObj.greetings()); 

JsObj.greetings2 = function(){
    console.log(`Welcome Home , ${this.name}`); // getting values from the same objects
}
console.log(JsObj.greetings2());