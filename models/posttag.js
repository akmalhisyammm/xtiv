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
      PostId: DataTypes.INTEGER,
      TagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'PostTag',
    }
  );

  return PostTag;
};
