const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('please turn off motor tank is full');
  setTimeout(()=>{
  console.log('please turn off motor tank is full ,its remainder')

  },2000)
});
myEmitter.emit('waterfull');