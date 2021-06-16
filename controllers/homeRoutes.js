const router = require('express').Router();
const { Project, User } = require('../models');
const Comments = require('../models/comments');
const { findAll } = require('../models/posts');
const Post = require('../models/posts');
const withAuth = require('../utils/auth');

// Home route - gets DB data to post to home - displays logged in on home 
router.get('/', async (req, res) => {
  try {
    const Getposts = await Post.findAll({
      include: [
        {
          model: Comments,
          attributes: ['content', 'post_id'],
        },
      ],
    })

    const planePosts = Getposts.map((post) =>
      post.get({ plain: true })
    )
    res.render('home', {
      planePosts,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  user = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"] },
    include: [{ model: Post }, { model: Comments }]
  })
  const userid = user.get({ plain: true })


  console.log(userid)

  if (req.session.logged_in) {

    res.render('dashboard', {
      userid,
      logged_in: req.session.logged_in,
    })
  } else {
    res.redirect('login')
  }
})

router.get('/login', async (req, res) => {

  if (!req.session.logged_in) {
    res.render('login')
    return
  } else { res.redirect('/home') }
})

router.get('/posts', withAuth, async (req, res) => {

  if (req.session.logged_in) {
    res.render('post', {
      logged_in: req.session.logged_in,
    })
  } else { res.redirect('/login') }
})

router.get('/signup', async (req, res) => {

  if (!req.session.logged_in) {
    res.render('signup')
    return
  }
})
router.get('/profile', withAuth, async (req, res) => {

  if (req.session.logged_in) {
    res.render('profile', {
      logged_in: req.session.logged_in,
    })
    return
  }
})


router.get('/logout', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    res.render('logout', {
      logged_in: req.session.logged_in,
    })
  } else {
    res.render('/')
  }
})


module.exports = router;