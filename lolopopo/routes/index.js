var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
// -------------notes--------------------
// in express-generator in place of app.get we write router.get
// npx nodemon filename -->npx nodemon