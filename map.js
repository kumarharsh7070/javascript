const num=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum = num.map((number)=> number+10)
// console.log(newnum)

const newnum = num.map((number)=>number*10)
console.log(newnum)

// const shoppingcart =[
//     {
//         coursename:"js",
//         price:233
//     },
//     {
//         coursename:"js",
//         price:199
//     },
//     {
//         coursename:"js",
//         price:200

//     }
// ]

// const cart= shoppingcart.reduce((acc,item)=> acc+item.price,0)
// console.log(cart)

// // let ages =[12,14,24,17,18,45]
// // let eligible=ages.map((age)=>age>20)
// // console.log(eligible)

// let ages =[12,14,24,17,18,45]
// let eligible=ages.filter((age)=>age>20)
// console.log(eligible)