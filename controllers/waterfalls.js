var Waterfall = require('../models/waterfall');

// List all waterfalls from MongoDB.
exports.waterfall_list = async function(req, res) {
  try {
    var results = await Waterfall.find({});
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get one waterfall.
exports.waterfall_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Waterfall detail for ' + req.params.id);
};

// Create a waterfall.
exports.waterfall_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Create waterfall');
};

// Delete a waterfall.
exports.waterfall_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Delete waterfall for ' + req.params.id);
};

// Update a waterfall.
exports.waterfall_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Update waterfall for ' + req.params.id);
};