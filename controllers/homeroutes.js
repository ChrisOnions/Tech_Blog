const router = require('express').Router();
const { Project, User } = require('../models');
const Comments = require('../models/comments');
const { findAll } = require('../models/posts');
const Post = require('../models/posts');
const withAuth = require('../utils/auth');

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

    res.render('home', {
      planePosts,
      logged_in: req.session.logged_in,
    })

  } catch (err) {
    res.status(500).json(err);
  }
}); module.exports = router;

router.get('/dashboard', withAuth, async (req, res) => {

  res.render('dashboard')

})


router.get('/login', async (req, res) => {

  if (req.session.logged_in) {
    res.render('login')
    return
  }
  res.redirect('login')
})

router.get('/posts', withAuth, async (req, res) => {

  res.render('post')

})

// router.get('/logout', async (req, res) => {

//   if (req.session.logged_in) {
//     res.render('login')
//     return
//   }
// })

router.get('/signup', async (req, res) => {

  if (req.session.logged_in) {
    res.render('signup')
    return
  }
})
router.get('/profile', async (req, res) => {

  if (req.session.logged_in) {
    res.render('user_data')
    return
  }
})

module.exports = router;