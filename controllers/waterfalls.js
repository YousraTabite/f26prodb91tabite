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
// Delete one waterfall by its ID.
exports.waterfall_delete = async function(req, res) {
  try {
    var result = await Waterfall.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({
        error: 'Waterfall not found'
      });
    }

    res.json(result);
  } catch (error) {
    res.status(400).json({
      error: 'Unable to delete waterfall. Check the ID.'
    });
  }
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

// Display the details of one waterfall.
exports.waterfall_detail_Page = async function(req, res, next) {
  try {
    var result = await Waterfall.findById(req.query.id);

    res.status(result ? 200 : 404).render('waterfalldetail', {
      title: 'Waterfall Details',
      waterfall: result
    });
  } catch (error) {
    next(error);
  }
};
// Display the form for creating a waterfall.
exports.waterfall_create_Page = function(req, res) {
  res.render('waterfallcreate', {
    title: 'Create Waterfall'
  });
};
// Display the form for updating one waterfall.
exports.waterfall_update_Page = async function(req, res, next) {
  try {
    var result = await Waterfall.findById(req.query.id);

    res.status(result ? 200 : 404).render('waterfallupdate', {
      title: 'Update Waterfall',
      waterfall: result
    });
  } catch (error) {
    next(error);
  }
};
// Display the page for deleting one waterfall.
exports.waterfall_delete_Page = async function(req, res, next) {
  try {
    var result = await Waterfall.findById(req.query.id);

    res.render('waterfalldelete', {
      title: 'Delete Waterfall',
      waterfall: result
    });
  } catch (error) {
    next(error);
  }
};