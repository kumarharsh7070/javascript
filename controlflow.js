// // <,>,<=,>=,==,===,!=,!==

 const temperature = 43
 if(temperature==43){
     console.log("yes temperature less than 50")
 }
 else{
     console.log("tempature greater than 50")
 }

 const score = 200

 if(score==200){
     const power ="fly"
     console.log(`user power ${power}`)
 }

// short hand notation------------------------------------------------------------

const balance = 2000
 if(balance>1000)console.log("test")
// --------------------------------------------------------------------------
 const amount = 5000
 if (amount< 5000){
     console.log("amount less than 5000")
 }else if(amount>5000){
      console.log("amount is greater than 5000")
 }
     console.log('amount is equal to 5000')
// --------------------------------------------------------------------------------
 const userloggedin=true
 const userdebeitcard = true
 const loggedfromgmail = false
 const loggedfromgoogle = true

 if (userloggedin && userdebeitcard){
     console.log("allow to buy");
 }
 if(loggedfromgmail || loggedfromgoogle){
     console.log("user logged in")
 }
// --------------------------switch case-------------------------------------------------
 const month=3
 switch (month) {
     case 1:
         console.log("january")
         break;     case 2:
         console.log("febuary")
         break;
     case 3:
         console.log("march")
         break;
     case 4:
         console.log("april")
         break;

     default:
         break;
 }
// ---------------------------------------------------------------------------------------------
 const useremail=""
 if(useremail){
     console.log("got user email")
 }else{
     console.log("don't get useremail")
 }
 
// falsy value
 false,0,-0,"",NaN,null,BigInt,undefined
// truthy values
"0","false"," ",[],{},function(){}
// detect array it is empty or not------------------------------------------
 if(useremail.length===0){
    console.log("arrar is empty")
}
// detect object it is empty or not------------------------------------------

 const emptyobj={}
 if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
 }

// -------nullish coalescing operator(??): null undefined
 let val
 val = 5 ?? 10
 val1=null??10
 val1=undefined??15
val1=null??10??20
// ----------------------terniary operator---------------------------------
const iceteaprice=100
iceteaprice <= 80 ? console.log("less than 80"):console.log("more than 80")