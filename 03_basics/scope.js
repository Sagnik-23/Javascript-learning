let a = 300;// Global scope

if(true){
    let a = 10;// local/block scope
    const b = 20;
    var c = 30;// worst 
}

// console.log(a);//won't run
// console.log(b);//won't run
// console.log(c);// will run and very bad.

function one(){
    const user = "Sagnik"

    function two(){
        const web = "Github"
        // console.log(user);
    }
    // console.log(web); // Can't be accessed

    two()
}

one()

//+++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++

addOne(5) // Will execute
function addOne(num){
    return num+1;
}

// addTwo(6)//can't be executed

// It is known as expressions.
const addTwo = function(num){
    return num+2;
}