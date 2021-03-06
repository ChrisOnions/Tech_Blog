const User = require('./User');
const Post = require('./posts');
const Comment = require('./comments');


User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})
Post.belongsTo(User, {
  foreignKey: 'user_id'
})
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
})
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

User.hasMany(Comment, {
  foreignKey: 'comment_id'
})
Comment.belongsTo(User, {
  foreignKey: 'comment_id'
})

// a user has many posts
// posts belong to user
// cascade to delete comments

// posts have many comments
// comments belong to posts
// 

// a user has many comments
// comments belong to user 


module.exports = { User };
