"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.user_experiences, {
        foreignKey: "user_id",
      });

      users.hasMany(models.user_projects, {
        foreignKey: "user_id",
      });
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
