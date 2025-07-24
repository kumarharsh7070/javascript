const express= require("express")
const app = express();
const usermodel = require("./usermodel")
app.get("/",(req,res)=>{
    res.send("hey")
})

app.get("/create",async (req,res)=>{
 let modelret =  await usermodel.create({
    name:"shivam",
    username:"singh",
    email:"gautamd@gmail.com"
   })
   res.send(modelret)
})

app.get("/update",async (req,res)=>{
   const updatenew = await usermodel.findOneAndUpdate({username:"kumar"},{name:"rishu"},{new:true})
   res.send(updatenew)
   console.log(updatenew);
   
})

app.get("/read",async (req,res)=>{
   let user= await usermodel.find()
   res.send(user)
})
app.get("/delete",async (req,res)=>{
   let deleteone= await usermodel.findOneAndDelete({name:"rishu"})
   res.send(deleteone)
})
app.listen(3000);
