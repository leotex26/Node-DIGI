const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
//const Task = require("../model/Task");


const listOfTask = sequelize.define("listOfTask", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
        tableName: "listsOfTask",
        timestamps: false 
    });

module.exports = listOfTask;