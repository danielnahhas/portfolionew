"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_projects.belongsTo(models.users, {
        foreignKey: "user_id", // The foreign key referencing the users table
        onDelete: "CASCADE", // Define the delete behavior if the associated user is deleted
      });
    }
  }
  user_projects.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      desc: DataTypes.STRING,
      img: DataTypes.STRING,
      tags: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user_projects",
    }
  );
  return user_projects;
};
