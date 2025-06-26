// const user ={
//     username:"hitesh",
//     logincount:8,
//     singedin:true,

//     getuserdetails:function(){
//         // console.log(`username: ${this.username}`);
//         console.log(this);
        
        
//     }

// }

// console.log(user.username);
// // console.log(user.getuserdetails)
// console.log(this);
// const promiseone = new Promise();
// const date= new Date();

function user(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin
    return this;
}
const userone = new user('hitesh',12,true)
const usertwo= new user ("chai aur code",11,false)
console.log(userone);
console.log(usertwo);

