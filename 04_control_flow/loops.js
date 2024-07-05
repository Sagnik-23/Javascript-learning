arr = [1,3,4,5,6,3,2]
for (const num of arr) {
    // console.log(arr[num]);
}

const greet = "Hello World"
for(const i of greet){
    if(i==" ") continue;
    // else console.log(i);
}

const map = new Map()
map.set('IN' , "India")
map.set('AUS' , "Australia")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key + " Value:-" + value);
}

// for of obj
const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of myObj) {
//     console.log(key + value);//TypeError: myObj is not iterable
// }

//For in loop
const myobj2 = {
    js: "javascript",
    cpp: "c++",
    py: "python"
}

for (const key in myobj2) {
    // console.log(`${key} is the shortcut of ${myobj2[key]}`);
}

//Array

const programming = ["js","py","cpp","java"]
for (const key in programming) {
    // console.log(key + ":-" + programming[key]);
}

//in map for in loop don't run//

//For each loop

const coding = ["js","ruby","python","cpp","java"]

// coding.forEach( function (item) {
//     console.log(item);
// } )
// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// } )

const myArray = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myArray.forEach( (item) => {
    console.log(item.languageName);
} )