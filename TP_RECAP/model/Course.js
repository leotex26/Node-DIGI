const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const course = sequelize.define("course", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    level: DataTypes.STRING,
    price: DataTypes.FLOAT,
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    instructor: DataTypes.STRING
  });

module.exports = course;