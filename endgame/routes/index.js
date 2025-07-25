var express = require('express');
var router = express.Router();
const usermodel = require('./users')
/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index');
});

router.get('/create',async (req,res)=>{
   const model= await usermodel.create({
  username:"shivam",
  nickname:"shibu",
  description:"youtuber haui chaa wla nhi hai ",
  categories:[
    "js","node","react","gsap","modern animation"],});
    res.send(model)
})

// router.get('/find',async (req,res)=>{
//  var regex = new RegExp("^harshita$","i")
//   let user = await usermodel.find({username:regex})
//   res.send(user)
// })
router.get('/find',async (req,res)=>{
  let user = await usermodel.find({categories:{$exists:true}})
  res.send(user)
})

module.exports = router;
