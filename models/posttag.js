'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PostTag extends Model {
    static associate(models) {
      this.belongsTo(models.Post);
      this.belongsTo(models.Tag);
    }
  }

  PostTag.init(
    {
      PostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      TagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Tag is required',
          },
          notEmpty: {
            msg: 'Tag is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'PostTag',
    }
  );

  return PostTag;
};
