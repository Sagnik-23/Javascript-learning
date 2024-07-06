const myNums = [1,2,3,4,5,6,7,8,9,10]

//For-each loop don't return anything. So we need filter for returning.

// const newNums = myNums.filter( (nums) => nums>5 )
// console.log(newNums);
const newNums = myNums.filter( (nums) => {
    // nums>5// will not run as scope is created.
    return nums>5
} )
console.log(newNums);

const newNums2 = []
myNums.forEach( (nums) => {
    if(nums>4){
        newNums2.push(nums)
    }
} )

console.log(newNums2);