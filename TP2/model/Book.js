const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Book = sequelize.define("Book", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    publication_year: { type: DataTypes.DATE, allowNull: false }
}, {
    tableName: "books",
    timestamps: true
});

module.exports = Book;
