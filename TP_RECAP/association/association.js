const Course = require("../model/Course");
const Category = require("../model/Category");


Course.belongsTo(Category);
Category.hasMany(Course);


module.exports = { Course, Category };
