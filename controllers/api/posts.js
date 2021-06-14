const router = require('express').Router();
const Post = require('../../models/posts');

// projects
// C.R.U.D

//Create
router.post('/', async (req, res) => {
  try {
    console.log(req.session.user_id);
    const posts = await Post.create(
      {
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
      })
    res.status(200).json(posts)

  } catch (err) {
    res.status(400).json(err)
    console.log(req.body);
  }
})

// const read = async
// // Read
// const update = async
// // Update

// const post('/:id', async (req, res) => {

// })
// // Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Post.destroy({
      where: {
        id
      }
    })
    res.json(comment)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;