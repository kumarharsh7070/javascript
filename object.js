// signleton ------------------------------------------------------->>>>>>
// through constructor make signleton----------------------------->
// object literal
const mySym = Symbol("key1")
const jsuser={
    name:"hitesh",
    class:"fifth",
    rollno:7,
    // that a way how call symbol
     [mySym]: "mykey1",
    age:19,
    isloggedin:false,
    lastlogindays:["monday","saturday"],
    "fullname":"kumar harsh"
}
//  console.log(jsuser.name)
//  console.log(jsuser.age)
//  console.log(jsuser.rollno)
//  console.log(jsuser["fullname"])
//  console.log(jsuser[mySym])
//  jsuser.age= "20"
// Object.freeze(jsuser)
// jsuser.name="rishu"
// console.log(jsuser.age)
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello buddy");
}
 console.log(jsuser.greeting)

 jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
 }

 console.log(jsuser.greetingTwo())
 console.log(jsuser.greeting())