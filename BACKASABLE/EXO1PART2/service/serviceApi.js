const {Task} = require("../association/association");

const service = {

    getAll: async () => {
        return await Task.findAll();
    },

    getById: async (id) => {
        return await Task.findByPk(id);
    },

    create: async (taskData) => {
        return await Task.create({
            titre: taskData.titre,
            description: taskData.description,
            date_debut: taskData.date_debut,
            date_fin: taskData.date_fin,
            done: taskData.done ?? false
        });
    },

    update: async (id, updatedData) => {
        const task = await Task.findByPk(id);
        if (!task) return null;

        return await task.update(updatedData);
    },

    delete: async (id) => {
        const deletedCount = await Task.destroy({
            where: { id }
        });
        return deletedCount > 0;
    },


};

module.exports = service;
