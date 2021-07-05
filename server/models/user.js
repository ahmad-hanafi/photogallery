'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bycrpt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password cannot be empty'
        }
      }
    },
    roles: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  })
  User.beforeCreate((user,option) => {
    user.password = hashPassword(user.password)
    if(!user.roles) user.roles = "Public"
  })
  ;
  return User;
};