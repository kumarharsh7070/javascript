const user ={
    username:"hitesh",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}

user.welcomemessage()
user.username="sam"
user.welcomemessage()
console.log(this)

// function chai(){
//     console.log(this);
// }
// chai()
const chai=() => {
     let username ="kumar"
     console.log(this)
}
chai()

// const addtwo =(num1, num2)=>{
//     return num1 + num2
// }
// ----------------------another way to call arrow function------------------------------------

// const addtwo =(num1, num2)=>  (num1 + num2)
const addtwo =(num1, num2)=>  num1 + num2

console.log(addtwo(3,4))

const add=(num1, num2)=>num1 + num2
console.log(add(4,4))