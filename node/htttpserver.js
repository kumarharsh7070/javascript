const http = require('http');
const { url } = require('inspector');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
   console.log(req,url);
   
    req.statusCode = 200;
    res.setHeader("content-type","text/html");
    res.end("<h1>this is codewithharry</h1> <p> hey this is the way to rock the world </p>")
})
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
    });
