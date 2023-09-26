'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
  
    static associate({ User, Park }) {
      Comment.belongsTo(Park, { as: 'park', foreignKey: 'park_id' })
      Comment.belongsTo(User, { as: 'author', foreignKey: 'author_id' })
    }

  };
  Comment.init({
    commentId: {
      type:  DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    parkId: DataTypes.SMALLINT,
    authorId: DataTypes.SMALLINT,
    content: DataTypes.STRING,
    stars: DataTypes.FLOAT,
    rant: DataTypes.BOOLEAN
  }, {
    sequelize,
    underscored: true,
    modelName: 'Comment',
  });
  return Comment;

};
