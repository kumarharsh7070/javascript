// function saynname(){
//     console.log("H")
//     console.log("A")
//     console.log("R")
//     console.log("S")
//     console.log("H")
// }
// console.log(saynname())

// function addtwonumber (num1,num2){
//     console.log(num1+num2);
// }

// addtwonumber(2,3)

// function add (n1,n2){
//        let result =n1+n2
//        return result
// }
//  const result = add(3,4)
// console.log("result:",result)

function loginuser (username="harsh"){
    if(!username){
      console.log("please enter a username")
      return
    }
   return `${username} just logged in`
}

console.log(loginuser("kumar"))