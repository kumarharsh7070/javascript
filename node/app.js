// const names = require('./names')
// const sayHi = require('./utils')
// const data = require('./3-alternative')
// require('./4-mindgraned')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
// const _ = require('lodash')

// const item =[1, [2,[3,[4]]]]
// const newitems = _.flattenDeep(item)
// console.log(newitems);
// console.log('hello world harry hh ');
// console.log('first')
// setTimeout(()=>{
//     console.log('second');
    
// },0)
// console.log('third');
// setInterval(()=>{
//   console.log("hello world");
// },2000)
// console.log("i will run first");
// const http = require('http')
// const server =http.createServer((req,res)=>{
//     console.log("request event");
//     res.end("hello world")
    
// })

// server.listen(5000,()=>{
//     console.log('server listeing on port : 5000');
    
// })
// const { log } = require('console');
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('home page')
//     }
//     if(req.url==="/about"){
//         res.end('about page')
//     }
//     res.end('error page')
// })

// server.listen(5000,()=>{
//     console.log("server listening on port 500");
    
// })
const eventemitter = require('events');

const customemitter =  new eventemitter()
 
customemitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} and id is ${id}`);
    
 })

  customemitter.on('response',()=>{
    console.log('some other logic');
    
 })
  customemitter.emit('response','john','34')

