const express = require('express');
const authController = require('../controller/authController.js')

const router = express.Router();

router
      .post('/register', authController.registerUser)
      .post('/login', authController.loginUser)

exports.router = router;