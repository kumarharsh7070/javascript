// const http = require('http');
// const {readFileSync} = require('fs')
// // get all files

// const homepage = readFileSync('./navbar-app/index.html')
// const homestyle = readFileSync('./navbar-app/style.css')
// const homelogic = readFileSync('./navbar-app/browser-app.js')

// const server = http.createServer((req,res)=>{
//     //  console.log(req.method);
//     let url = req.url
//     if (url==="/") {
//          res.writeHead(200,{'content-type':'text/html'})
//      res.write(homepage)
//      res.end()
//     }else if (url==="/style.css") {
//      res.writeHead(200,{'content-type':'text/css'})
//      res.write(homestyle)
//      res.end()
//     }else if (url==="/browser-app.js") {
//      res.writeHead(200,{'content-type':'text/javascript'})
//      res.write(homelogic)
//      res.end()
//     }
//     else{
//         res.writeHead(404,{'content-type':'text/html'})
//      res.write('<h1>page not found</h1>')
//      res.end()
//     }
        

    
// })

// server.listen(5000,()=>{
//     console.log("server call ");
    
// })
// -------------------------------------------------------

//  const express = require("express");
//  const app = express();
//  app.set('view engine',"ejs")
// app.use(express.static('./public'))
 
//  app.get("/",(req,res)=>{
//      res.render("index")
//  })
//  app.get("/about",(req,res)=>{
//      res.render("about")
//  })
 
 
//  app.listen(3000,()=>{
//      console.log("server start");
     
//  })
 const express = require('express')
 const app = express()
 let {people} = require('./data')
 
 app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));

app.post('/api/people', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide a name' });
  }

  const newPerson = { id: people.length + 1, name };
  people.push(newPerson);

  res.status(201).json({ success: true, person: newPerson });
});

 app.listen(5000,()=>{
    console.log("server listening on port 50000....");
    
 })