// class user{
//     constructor(username, email,  password){
//        this.username=username;
//        this.email=email;
//        this.password=password;
//     }

const { log } = require("node:console");

//     encrptyPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai=new user("harsh",'harsh@gmail.com',"123")
// console.log(chai.encrptyPassword());
// console.log(chai.changeusername());

//behind the scene-----------------------------------------------
function user1(username,email,password){
      this.username=username;
      this.email=email;
      this.password=password
}

user1.prototype.encrptyPassword = function(){
return `${this.password}abc`
}

user1.prototype.changeusername = function(){
      return `${this.username.toUpperCase()}`
}
 const tea=new user1("harsh",'harsh@gmail.com',"123")
console.log(tea.encrptyPassword());
console.log(tea.changeusername());
