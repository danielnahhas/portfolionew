"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_experiences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_experiences.belongsTo(models.users, {
        foreignKey: "user_id", // The foreign key referencing the users table
        onDelete: "CASCADE", // Define the delete behavior if the associated user is deleted
      });
    }
  }
  user_experiences.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      desc: DataTypes.STRING,
      about: DataTypes.STRING,
      tags: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_experiences",
    }
  );
  return user_experiences;
};
