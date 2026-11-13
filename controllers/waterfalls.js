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

// Get one waterfall by its ID.
exports.waterfall_detail = async function(req, res) {
  try {
    var result = await Waterfall.findById(req.params.id);

    if (!result) {
      return res.status(404).json({
        error: 'Waterfall not found'
      });
    }

    res.json(result);
  } catch (error) {
    res.status(400).json({
      error: 'Unable to retrieve waterfall. Check the ID.'
    });
  }
};
// Create a waterfall.
// Create and save a waterfall.
exports.waterfall_create_post = async function(req, res) {
  try {
    var waterfall = new Waterfall({
      name: req.body.name,
      country: req.body.country,
      height: req.body.height
    });

    var result = await waterfall.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a waterfall.
exports.waterfall_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Delete waterfall for ' + req.params.id);
};

// Update a waterfall.
// Update the supplied fields of a waterfall.
exports.waterfall_update_put = async function(req, res) {
  try {
    var waterfall = await Waterfall.findById(req.params.id);

    if (!waterfall) {
      return res.status(404).json({
        error: 'Waterfall not found'
      });
    }

    if (req.body.name !== undefined) {
      waterfall.name = req.body.name;
    }

    if (req.body.country !== undefined) {
      waterfall.country = req.body.country;
    }

    if (req.body.height !== undefined) {
      waterfall.height = req.body.height;
    }

    var result = await waterfall.save();
    res.json(result);
  } catch (error) {
    res.status(400).json({
      error: 'Unable to update waterfall. Check the ID and values.'
    });
  }
};
// Display waterfalls on a webpage.
exports.waterfall_view_all_Page = async function(req, res, next) {
  try {
    var results = await Waterfall.find({});
    res.render('waterfalls', {
      title: 'Waterfalls',
      results: results
    });
  } catch (error) {
    next(error);
  }
};