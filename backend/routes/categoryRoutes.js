const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');
const {upload} = require('../helper/fileUpload');

router.post('/createCategory', upload.single('file'), categoryController.create);
router.get('/readCategories', categoryController.read);


module.exports = router;