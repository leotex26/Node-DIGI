const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");


const users = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "instructor"
    }
  });



module.exports = users;


