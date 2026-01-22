const ListOfTask = require("../model/ListOfTask");
const Task = require("../model/Task");


ListOfTask.hasMany(Task, { foreignKey: "listId", as: "tasks" });
Task.belongsTo(ListOfTask, { foreignKey: "listId", as: "list" });

module.exports = { ListOfTask, Task };
