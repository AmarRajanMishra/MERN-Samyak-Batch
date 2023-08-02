const express = require('express');
const usersController = require('../controller/userController.js')


const router = express.Router();

router.get('/', usersController.getUsers)
router.post('/', usersController.createUser)
router.patch('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)

exports.router = router;


// PUT =>
// PATCH =>