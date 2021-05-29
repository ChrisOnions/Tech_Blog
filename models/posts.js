const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        min: 50
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
)
module.exports = Post;
// Posts get saved to the database with a comment id
// id post primary key
// user id for who posted teh comment 
// post string where posts are stored
// comments id where comments get and post id to be saved to the post
// 