'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsToMany(models.Tag, { through: models.PostTag });
    }
  }

  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );

  return Post;
};
