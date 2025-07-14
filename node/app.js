// const names = require('./names')
// const sayHi = require('./utils')
// const data = require('./3-alternative')
// require('./4-mindgraned')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
const _ = require('lodash')

const item =[1, [2,[3,[4]]]]
const newitems = _.flattenDeep(item)
console.log(newitems);
