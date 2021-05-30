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
    // console.log(planePosts);

    res.render('home',
      {
        planePosts,
        logged_in: req.session.logged_in,
      })

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {

  res.render('dashboard', {
    logged_in: req.session.logged_in,
  })

})


router.get('/login', async (req, res) => {

  if (req.session.logged_in) {
    res.render('login')
    return
  }
  // res.redirect('home')
})

router.get('/posts', withAuth, async (req, res) => {

  res.render('post', {
    logged_in: req.session.logged_in,
  })

})

// router.get('/logout', async (req, res) => {

//   if (req.session.logged_in) {
//     res.render('login')
//     return
//   }
// })

router.get('/signup', async (req, res) => {

  if (!req.session.logged_in) {
    res.render('signup')
    return
  }
})
router.get('/profile', async (req, res) => {

  if (req.session.logged_in) {
    res.render('profile', {
      logged_in: req.session.logged_in,
    })
    return
  }
})

module.exports = router;