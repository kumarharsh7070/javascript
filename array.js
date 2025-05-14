// array-----------------------------
const myarr= [0,1,2,3,4,5,6,7,8,9]
console.log(myarr)
console.log(myarr[0])
myarr.push(11)
console.log(myarr)
myarr.pop()
console.log(myarr)
myarr.unshift(13)
console.log(myarr)
myarr.shift()
console.log(myarr)
console.log(myarr.includes(9))
console.log(myarr.indexOf(6))
// slice ,splice--------------------------------
 console.log("A", myarr);
 const myarr1=myarr.slice(1,3)
 console.log(myarr1)
 console.log("B", myarr)

//  splice---------------------------------------
console.log("A", myarr);
const myarr2=myarr.splice(1,3)
console.log(myarr2)
// console.log("B", myarr)