'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsToMany(models.Tag, { through: models.PostTag });
    }

    static async getPostsByTagWithSort(tag, sort) {
      const posts = await this.findAll({
        include: [
          {
            model: sequelize.models.Tag,
            where: tag ? { name: tag } : {},
          },
          { 
            model: sequelize.models.User, 
            include: sequelize.models.Profile,
          },
        ],
        order: [['createdAt', sort]],
      });

      return posts;
    }
  }

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Title is required',
          },
          notEmpty: {
            msg: 'Title is required',
          },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Content is required',
          },
          notEmpty: {
            msg: 'Content is required',
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );

  return Post;
};
