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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Name is required',
          },
          notEmpty: {
            msg: 'Name is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Tag',
    }
  );

  return Tag;
};
