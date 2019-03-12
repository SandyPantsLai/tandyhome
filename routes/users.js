const express = require('express');
const router = express.Router();

router.get('/register', (request, response, next) => {
  response.send('Register user route');
});

router.get('/authenticate', (request, response, next) => {
  response.send('Authenticate user route');
});

module.exports = router;