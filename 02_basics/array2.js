const team1 = ["Superman" , "Batman" , "Flash"]
const team2 = ["Ironman","Spiderman"]

// team1.push(team2)
// console.log(team1); //[ 'Superman', 'Batman', 'Flash', [ 'Ironman', 'Spiderman' ] ]

const add = team1.concat(team2)
// console.log(add); //[ 'Superman', 'Batman', 'Flash', 'Ironman', 'Spiderman' ]

//Spread operator
const allHeroes = [...team1, ...team2] //Separating each elements of an array
// console.log(allHeroes); //[ 'Superman', 'Batman', 'Flash', 'Ironman', 'Spiderman' ]

const lolArr = [1,3,4,[5,6],7,[1,2,[4,5],7]]
// console.log(lolArr.flat(Infinity));

console.log(Array.isArray("Sagnik"));
console.log(Array.from("Sagnik"));
console.log(Array.from({name: "Sagnik"})); // Here the O/P is []. To get proper results we have to mention the key value or the value upon which is to be executed.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));