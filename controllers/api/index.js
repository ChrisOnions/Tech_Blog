const router = require('express').Router();
const userRoutes = require('./users');
const posts = require('./posts');
const comment = require('./comments')

router.use('/users', userRoutes);
router.use('/posts', posts)
router.use('/comments', comment)


module.exports = router;
