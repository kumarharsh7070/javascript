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

 const express = require("express");
 const app = express();
app.get('/',(req,res)=>{
    res.json([{name:"harsh"},{name:"rishu"}])
})
 app.listen(5000,()=>{
    console.log("server is listening on port 5000...");
    
 })