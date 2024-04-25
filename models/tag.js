'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      this.belongsToMany(models.Post, { through: models.PostTag });
    }
  }

  Tag.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Tag',
    }
  );

  return Tag;
};
