const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const category = sequelize.define("category", {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: DataTypes.TEXT
  });

module.exports = category;
