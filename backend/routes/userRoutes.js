const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/authentication', userController.authentication);
router.post('/coin', userController.coin);
// router.post('/login', userController.login);


module.exports = router;