
//     // A Promise is in one of these states:



    
    //  pending: initial state, neither fulfilled nor rejected.
     
    //  fulfilled: meaning that the operation was completed successfully. 
     
    // rejected: meaning that the operation failed.
 const promisesone = new Promise(function(resolve,reject){
    // do an async task
    // db call cryptography network
     setTimeout(function(){
            console.log("async task complete");
            resolve();
     },1000)
 });

 promisesone.then((function(){
    console.log("promise consumed");
    
 }))

 new Promise(function(resolve ,reject){
     setTimeout(function(){
        console.log("async task 2 complete");
        resolve();
     },1000)
 }).then(function(){
    console.log("promise 2 consumed");
    
 })


 const promisethree= new Promise(function(resolve,reject){
       setTimeout(function(){
         resolve({username:"kumar",email:"kumar@gmail.com"});
       },1000)
 })

 promisethree.then(function(user){
       console.log(user);
       
 })


const promisefour=new Promise(function(resolve,reject){
      setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({username:"harsh",password:"1234"})
        }else{
            reject('error something went wrong')
        }
      },1000)
})

promisefour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
 console.log(username);
 
}).catch((error)=>{
   console.log(error);
   
}).finally(()=>console.log('the promise is either resolved or rejected')
)

const promisefive = new Promise(function(resolve,reject){
     setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({username:"harsh",password:"1234"})
        }else{
            reject('error handle graceful')
        }
      },1000)
})

async function consumepromisefive() {
    try {
        const response =await promisefive;
    console.log(response)
    } catch (error) {
        console.log(error);
        
    }
    
}
consumepromisefive()


async function getallusers() {
 try {
     const response=  await fetch('https://jsonplaceholder.typicode.com/users')
  const data= await response.json();
  console.log(data);
 } catch (error) {
    console.log('e',error);
 }
}

// getallusers()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json()
})
.then((data)=>{
  console.log(data);
  
})
.catch((error)=>console.log(error)
)