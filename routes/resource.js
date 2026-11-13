var express = require('express');
var router = express.Router();

var apiController = require('../controllers/api');
var waterfallController = require('../controllers/waterfalls');

router.get('/', apiController.api);

router.get('/waterfalls', waterfallController.waterfall_list);
router.post('/waterfalls', waterfallController.waterfall_create_post);

router.get('/waterfalls/:id', waterfallController.waterfall_detail);
router.put('/waterfalls/:id', waterfallController.waterfall_update_put);
router.delete('/waterfalls/:id', waterfallController.waterfall_delete);

module.exports = router;
