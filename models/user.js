'use strict';

const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Profile);
      this.hasMany(models.Post);
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: 'Email has been used',
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Email is required',
          },
          notEmpty: {
            msg: 'Email is required',
          },
          isEmail: {
            msg: 'Email must be email format',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Password is required',
          },
          notEmpty: {
            msg: 'Password is required',
          },
          len: {
            args: [8],
            msg: 'Password must be at least 8 character',
          },
        },
      },
      // confirmPassword: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     notNull: {
      //       msg: 'Confirm password is required',
      //     },
      //     notEmpty: {
      //       msg: 'Confirm password is required',
      //     },
      //     len: {
      //       args: [8],
      //       msg: 'Confirm password must be at least 8 character',
      //     },
      //     isEqualsToPassword(value) {
      //       if (value !== this.password) {
      //         throw new Error('Password is not equals to confirm password');
      //       }
      //     },
      //     // equals: {
      //     //   args: this.password,
      //     //   msg: 'Password is not equals to confirm password',
      //     // },
      //   },
      // },
      role: {
        type: DataTypes.ENUM('admin', 'member'),
        allowNull: false,
        isIn: {
          args: [['admin', 'member']],
          msg: 'Role must be admin or member',
        }
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  User.beforeValidate((user) => {
    user.role = 'member';
  });

  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);
  });

  return User;
};
