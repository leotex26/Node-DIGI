const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Task = sequelize.define("Task", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date_debut: {
        type: DataTypes.DATE,
        allowNull: false
    },

    date_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },

    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: "tasks",
    timestamps: false 
});

module.exports = Task;
