// const tinderUser = new object()      
// single turn object
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name= "sammy"
tinderUser.isLoggedIn=  false
console.log(tinderUser)

const regularUser={
     email:"hkumar537@gmail.com",
     fullname:{
        userfullname:{
            firstname:"kumar",
            lastname:"harsh"
        }
     }
}
console.log(regularUser.fullname.userfullname.lastname)

const obj1={1:"a",2:"b",}
const obj2={3:"a",4:"b",}
const obj3={5:"a",6:"b",}

// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,...obj2,...obj3}
console.log(obj4)
const user=[
    {
        email:"hkumar@gmail.com",
        name:"kumar"
    },
    {},
    {}
    
]
user[1].email
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
const course={
    coursename:"js in hindi",
    price:"999",
    courseinstracor:"kumar"
}

const{courseinstracor: instrctor} =course

//  console.log(courseinstracor);
 console.log(instrctor)