const myNums = [1,2,3]

const initialValue = 0
const myTotal = myNums.reduce( (accumulator,currValue) => accumulator+currValue,initialValue )
console.log(myTotal);

const shoppingCart = [
    {
        itemCourse:"js",
        price: 2999
    },
    {
        itemCourse:"app dev",
        price: 5999
    },
    {
        itemCourse:"py",
        price: 1999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc+ item.price,0)
console.log(priceToPay);