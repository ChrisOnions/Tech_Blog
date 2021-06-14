const router = require('express').Router();
const Comments = require('../../models/comments');

// C.R.U.D 
// Create
router.post('/', async (req, res) => {
  try {
    const { content, post_id } = req.body
    const comment = await Comments.create(
      {
        content,
        post_id,
        comment_id
      })
    res.json(comment)
  } catch (err) {
    res.status(400).json(err)
  }
})
// Read
// Update
// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comments.destroy({
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
