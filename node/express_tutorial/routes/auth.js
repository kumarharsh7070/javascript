const express = require('express');
const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Dummy authentication logic
  if (username === 'admin' && password === '1234') {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Register route
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Dummy registration logic
  res.send(`User ${username} registered successfully`);
});

module.exports = router;
