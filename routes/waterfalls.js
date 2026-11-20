var express = require('express');
var router = express.Router();

var waterfallController = require('../controllers/waterfalls');
// Check for a logged-in user, or redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect('/login');
};

router.get('/', waterfallController.waterfall_view_all_Page);

router.get('/detail', waterfallController.waterfall_detail_Page);
router.get('/create', waterfallController.waterfall_create_Page);
router.get('/update', secured, waterfallController.waterfall_update_Page);
router.get('/delete', waterfallController.waterfall_delete_Page);
module.exports = router;


