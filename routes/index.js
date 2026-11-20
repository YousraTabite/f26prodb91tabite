var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account');

// Home page
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Waterfall App',
    user: req.user
  });
});

// Registration form
router.get('/register', function(req, res) {
  res.render('register', {
    title: 'Waterfall App Registration'
  });
});

// Create an account
router.post('/register', async function(req, res) {
  try {
    var user = await Account.findOne({
      username: req.body.username
    });

    if (user) {
      return res.render('register', {
        title: 'Registration',
        message: 'Existing User',
        account: req.body.username
      });
    }

    var newAccount = new Account({
      username: req.body.username
    });

    await Account.register(newAccount, req.body.password);
    res.redirect('/');
  } catch (err) {
    res.render('register', {
      title: 'Registration',
      message: 'Registration error',
      account: req.body.username
    });
  }
});

// Login form
router.get('/login', function(req, res) {
  res.render('login', {
    title: 'Waterfall App Login',
    user: req.user
  });
});

// Authenticate and return to home
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

// Logout
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }

    res.redirect('/');
  });
});

// Connection check
router.get('/ping', function(req, res) {
  res.status(200).send('pong!');
});

module.exports = router;