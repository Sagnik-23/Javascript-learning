const score = 500
console.log(score); // o/p --- 500

// Explicitely defining the datatypes 
const balance = new Number(score);
console.log(balance); //o/p---[Number: 500]
console.log(balance.toString().length);

console.log(balance.toFixed(2)); //O/P--- 500.00

const otherNum = 234.894
console.log(otherNum.toPrecision(4)); // O/P --- 234.9
// It gives precision the number of values it is mentioned in the parameter(Round off)

const oldOne = 1000000
console.log(oldOne.toLocaleString('en-IN')); //O/P-- 10,00,000 // Note if it is kept blank then it will work according to US methods
