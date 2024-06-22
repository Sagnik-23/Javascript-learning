const score = 500
console.log(score); // o/p --- 500

// Explicitely defining the datatypes 
const balance = new Number(score);
console.log(balance); //o/p---[Number: 500]
console.log(balance.toString().length);

console.log(balance.toFixed(2)); //O/P--- 500.00

const otherNum = 234.894
console.log(otherNum.toPrecision(4)); // O/P --- 234.9
// It gives precision the number of values it is mentioned in the parameter(Round of)

const oldOne = 1000000
console.log(oldOne.toLocaleString('en-IN')); //O/P-- 10,00,000 // Note if it is kept blank then it will work according to US methods

// +++++++++++++++++++++++++++++++++  Maths ++++++++++++++++++++++++++++++++++
console.log("+++++++++++++++++++++++++++++++++  Maths ++++++++++++++++++++++++++++++++++");
console.log(Math);
console.log(Math.abs(-8));// Absolute value
console.log(Math.round(4.5));// Gives round of value

// ============== Below methods are rarely used ======================//
console.log(Math.ceil(4.2)); // It will give output as the top value
console.log(Math.floor(4.8)); // It will give output as the low value

console.log(Math.min(5,7,-2,1)); // Gives minimum from an array
// Same Math.max() is avaliable

const example = Math.random();
console.log(Math.random()); // 0 <= Value <= 1
console.log(Math.floor((example* 10)+1));

const max = 20
const min = 10
console.log(Math.floor(example * (max - min + 1) ) + min);