const User = require('./User');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// a user has many posts
// posts belong to user
// cascade to delete comments

// posts have many comments
// comments belong to posts
// 

// a user has many comments
// comments belong to user 


module.exports = { User, Project };
