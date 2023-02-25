const express = require('express');
const router = express.Router();

const tagController = require('../controllers/tagController');

router.post('/', tagController.create);
router.get('/', tagController.read);


module.exports = router;