var express = require('express');
var router = express.Router();

var waterfallController = require('../controllers/waterfalls');

router.get('/', waterfallController.waterfall_view_all_Page);

module.exports = router;


