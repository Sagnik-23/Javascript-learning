// Functions...
function sayMyName(){
    console.log("Sagnik Chakraborty");
}
// sayMyName();

function addNum(n1,n2){
    sum = n1 + n2;
    console.log(sum);
}

// const res = addNum(3,4)// In res there will be no value as nothing is returned.
// console.log("Result: ",res);
function addNum2(n1,n2){
    sum = n1 + n2;
    return sum;
}

const result = addNum2(3,4)

// console.log("Result: ",result);
function login(user = "GoD"){
    // if(user === undefined) console.log("Enter a name");
    if(!user) console.log("Enter a name");
    else return `${user} just logged in.`

}
// console.log(login("Sagnik"));
// console.log(login()); // Output will be "undefined just logged in."

//Rest operator
function calculateCart(...num1){
    return num1;
} 
// console.log(calculateCart(200,300,400)); // O/P--> [ 200, 300, 400 ]

function calculateCart3(val1,val2,...num1){
    return val1,val2,num1; // for comma seperations the last value in the comma is taken.
    
}
// console.log(calculateCart3(200,300,400,2000));

function handleObj(anyObj){
    console.log(`Item is ${anyObj.itemName} and price is ${anyObj.price}`);
}

handleObj({
    itemName: "Medikit",
    price: 200
});

function arraySecond(array){
    console.log(array[1]);
}
arraySecond([100,3,4,2])