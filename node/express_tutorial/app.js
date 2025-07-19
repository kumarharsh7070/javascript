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
// ---------------------------------------------------------------------------------------
//  const express = require('express')
//  const app = express()
//  let {people} = require('./data')
 
//  app.use(express.static('./public'));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.post('/api/people', (req, res) => {
//   const { name } = req.body;

//   if (!name) {
//     return res.status(400).send('<h3>Please provide a name</h3>');
//   }

//   res.send(`<h2>Welcome, ${name}!</h2>`);
// });


// // app.get('/api/people',(req,res)=>{
// //     res.status(200).json({success:true,data:people})
// // })

// app.put('/api/people/:id',(req,res)=>{
//     const {id} = req.params
//     const {name} = req.body
//     console.log(id,name)
//         res.send('hello world')
    
    

// })
// pp.delete('/api/people/:id', (req, res) => {
//   const personId = parseInt(req.params.id);
//   users = users.filter(person => person.id !== personId)
//   res.send(`Person with ID ${personId} deleted.`);
// });
//  app.listen(5000,()=>{
//     console.log("server listening on port 50000....");
    
// })
// -----------------------------------for routes-------------------------------------------------
const express = require('express');
const app = express();

const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');

app.use(express.json()); // to parse JSON body

// Mount routers
app.use('/', homeRoutes);        // for / and /about
app.use('/auth', authRoutes);    // for /auth/login and /auth/register

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on `);
});
