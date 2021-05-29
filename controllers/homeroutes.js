const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    // Pass serialized data and session flag into template
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
}); module.exports = router;

router.get('/profile', async (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/profile')
    return
  }
  res.render('home')
})


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/dashboard', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('dashboard');
});

router.get('/posts', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('post');
});