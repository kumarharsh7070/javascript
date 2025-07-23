var express = require('express');
var router = express.Router();
const usermodel = require("./users")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// create-----------------------------------------------
router.get('/create', async function(req, res, next) {
 const createuser = await usermodel.create({
  usermodel:"harsh",
  age:20,
  username:"harsh"
 })
 res.send(createuser)
});

router.get("/delete",  async function (req,res) {
  let deleteuser = await usermodel.findOneAndDelete({
    username:"harsh"
  })
  res.send(deleteuser)
})
// find-----------------------------------
router.get("/alluser",  async function(req,res){
 let alluser = await usermodel.find()
 res.send(alluser)
})

module.exports = router;
// -------------notes--------------------
// in express-generator in place of app.get we write router.get
// npx nodemon filename -->npx nodemon