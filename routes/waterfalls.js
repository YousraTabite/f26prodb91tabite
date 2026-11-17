var express = require('express');
var router = express.Router();

var waterfallController = require('../controllers/waterfalls');

router.get('/', waterfallController.waterfall_view_all_Page);

router.get('/detail', waterfallController.waterfall_detail_Page);
module.exports = router;


