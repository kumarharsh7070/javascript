const eventemitter = require('events');

const customemitter =  new eventemitter()
 
customemitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} and id is ${id}`);
    
 })

  customemitter.on('response',()=>{
    console.log('some other logic');
    
 })
  customemitter.emit('response','john','34')

