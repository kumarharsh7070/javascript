const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// About route
router.get('/about', (req, res) => {
  res.send('About us page content here');
});

module.exports = router;
