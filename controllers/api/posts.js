const router = require('express').Router();
const { Post } = require('../../models');

// projects
// C.R.U.D

//Create
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(
      {
        title: req.body.name,
        content: req.body.content,
      })
    res.status(200).json(post)

  } catch (err) {
    res.status(400).json(err)
    console.log(req.body);
  }
})

// const read = async
// // Read
// const update = async
// // Update

// const delete2 = async
// // Delete


module.exports = router;