const express = require('express');
const userController = require('../controller/userController.js')
const router = express.Router();


router.get('/', userController.getUsers)
router.get('/:id', userController.getSingleUser)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

exports.router = router;