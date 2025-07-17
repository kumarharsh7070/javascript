const express = require('express');
const path = require('path');
const app = express()

app.get('../',(req,res)=>{
   
})
app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
     console.log("server is listening on 5000 port");
     
})