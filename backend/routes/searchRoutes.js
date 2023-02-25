const express = require('express');
const router = express.Router();

const searchController = require('../controllers/searchController');

router.get('/categorySearch/:cat_name', searchController.categorySearch);
router.get('/modelSearch/:model', searchController.modelSearch);
router.get('/tagSearch/:tag', searchController.tagSearch);


module.exports = router;