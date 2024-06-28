const user = {
    username: "Sagnik",
    id: "10Drt",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        // console.log(this); // Current context
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this); // O/P- {} empty

function lol(){
    let username = "Unknown"
    // console.log(this.username);// can't be done
    console.log(this);
}
// lol()

const var1 = function(){
    const username2 = "Aizen"
    console.log("Yokoso!!",this.username2);//Yokoso!! undefined
}
// var1()

//+++++ Arrow function ++++++++
const var2 = () => {
    const username2 = "Aizen"
    console.log(this); // {} <-- O/P
}
// var2()

const addTwo = (num1,num2) => {
    return num1+num2;
}
// const addTwo2 = (num1,num2) => num1+num2;
const addTwo2 = (num1,num2) => (num1+num2);
const objReturn = (num1,num2) => ({username: "Sagnik"});

console.log(addTwo2(2,3));
console.log(objReturn());