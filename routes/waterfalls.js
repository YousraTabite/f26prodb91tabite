var express = require('express');
var router = express.Router();

var waterfallController = require('../controllers/waterfalls');

router.get('/', waterfallController.waterfall_view_all_Page);

router.get('/detail', waterfallController.waterfall_detail_Page);
router.get('/create', waterfallController.waterfall_create_Page);
module.exports = router;


