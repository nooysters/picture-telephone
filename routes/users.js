var express = require('express');
var router = express.Router();

const userController = require('../controllers/users_controller')

/* GET users listing. */
router.get('/', userController.getAllUsers);

router.get('/user/:id', userController.getUserById)

router.post('/user', userController.userCreate)

router.put('/user/:id', userController.userUpdate)

module.exports = router;
