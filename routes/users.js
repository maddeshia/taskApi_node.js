const express = require('express');
const router  = express.Router();
const userController = require('../controller/userController')

// register user
router.post('/userRegister', userController.register)
// get User
router.get('/userGetUser', userController.getUser);


module.exports = router;