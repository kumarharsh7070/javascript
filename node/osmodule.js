//  const os = require("os");
// // console.log(os.freemem());
// // console.log(os.homedir());
// // console.log(os.hostname());
// // console.log(os.platform());
// // console.log(os.release());
// // console.log(os.totalmem());
// // console.log(os.uptime());
// // console.log(os.type());
// const user = os.userInfo()
// console.log(user);

// const currentos = {
//     name:os.type(),
//     release:os.release(),
//     totalmem:os.totalmem(),
//     freemen:os.freemem()
// }

// console.log(currentos);
// ------------------------------------------------------------------------------------
// const { log } = require('console');
// const path = require('path')
// console.log(path.sep);
// const filepath =path.join('/content','subfolder','test.txt')
// console.log(filepath);
// const base = path.basename(filepath)
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
// console.log(absolute);
// --------------------------------------------------------------------------------------------------
 const  {readFileSync, writeFileSync} = require('fs')
 const first = readFileSync('./content/subfolder/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

console.log(first, second);
writeFileSync('./content/result-sync.txt',`here is the result : ${first},${secondv  }`)
