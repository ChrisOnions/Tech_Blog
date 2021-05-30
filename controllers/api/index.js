const router = require('express').Router();
const userRoutes = require('./users');
const posts = require('./posts');

router.use('/users', userRoutes);
router.use('/posts', posts)


module.exports = router;
