for(let i=0;i<10;i++){
    console.log(`value of outer loop is ${i}`)
    for(let j=0;j<10;j++){
        console.log(`inner loop value ${j}`)
    }
}
// -----------------------------------------------------------------------
for (let index = 0; index < 10; index++) {
    if(index==5){
        console.log("5 is the best number")
        break
    }
    const element = index
    console.log(element)
    
}
// -------------------------------------------------------------------------------------
for (let index = 0; index <= 10; index++) {
    if(index==5){
        console.log("5 is the best number")
        continue
    }
    const element = index
    console.log(element)
    
}
// -------------------------------------------------------------------while and do while--------------
let index = 0
while (index<=10) {
    console.log(`value of index${index}`)
    index =index +2
}
//  --------------------------------------------------do while-----------
let score =40
do {
    console.log(`value of score ${score}`)
    score++
} while (score<=10);
// ---------------------------------------------------for of loop---------------------------
let detail="kumar harsh"
for (const element of detail) {
    // console.log(`name is ${element}`)
}

const myarr=["harsh","sumit","sidd","sagar"]
for (const element of myarr) {
        console.log(`name is ${element}`)

}
const map = new Map()
map.set('IN', "India")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('USA', "UNITED STATE OF AMERICA")
console.log(map)
// only unique value map can give no duplicateion allow------------------------------
for (const element of map) {
    console.log(element)
}

for (const [key, values] of map) {
    console.log(key, ":-", values)
}
// ---------------------iteration in objeact----------------------------------------------------------
const myobject ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myobject) {
      console.log(`${key} shortcut is for ${myobject[key]}`)
}

const parr =["js","mango","new","car"]
for (const key in parr) {
        //   console.log(`${parr[key]`)

}

// callback function have no name------------------------------------------

const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function (val){
//     console.log(`${val} is a coding language`)
// })

coding.forEach( (val)=>{
    console.log(`${val} is a coding language`)
})

// ----------------object in array----------------------------------------------------------------
 const plan =[
    {
        langugename:"javascript",
        filename:"js"
    },
    {
         langugename:"python",
        filename:"py"
    },
    {
         langugename:"dart",
        filename:"dart"
    },
 ]

 plan.forEach((item)=>{
    console.log(item.filename)
 })