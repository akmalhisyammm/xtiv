'use strict';

const { Model } = require('sequelize');
const { dateToLocaleString } = require('../helpers/dateFormat');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    get localeDateOfBirth() {
      return dateToLocaleString(this.dateOfBirth);
    }
    
    static associate(models) {
      this.belongsTo(models.User);
    }
  }

  Profile.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'First name is required',
          },
          notEmpty: {
            msg: 'First name is required',
          },
        },
      },
      lastName: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Gender is required',
          },
          notEmpty: {
            msg: 'Gender is required',
          },
        },
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Date of birth is required',
          },
          notEmpty: {
            msg: 'Date of birth is required',
          },
          isBefore: {
            args: `${new Date().getFullYear() - 12}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
            msg: 'Your age must be at least 12 years old',
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Profile',
    }
  );

  return Profile;
};
