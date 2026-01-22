const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");


const users = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        require: true,
        validate: {
            isEmail: true          
        }
    },
    password: {
        type: DataTypes.STRING,
        require: true,
    },
}, {
    tableName: "users",
    timestamps: false 
});


module.exports = users;


