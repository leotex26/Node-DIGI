const service = require("../service/serviceApi");


const controller = {

    getAllTasks: async (req, res) => {
        try {
            const listOfTask = await service.getAll();
            res.status(200).json(listOfTask);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getTaskById: async (req, res) => {
        const id = parseInt(req.params.id);
        const task = await service.getById(id);

        if (!task) {
            return res.status(404).json({ message: "Tâche non trouvée" });
        }

        res.status(200).json(task);
    },

    createTask: async (req, res) => {
        try {
            const newTask = await service.create(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateTask: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const updatedTask = await service.update(id, req.body);

            if (!updatedTask) {
                return res.status(404).json({ message: "Tâche non trouvée" });
            }

            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteTask: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const deleted = await service.delete(id);

            if (!deleted) {
                return res.status(404).json({ message: "Tâche non trouvée" });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};


module.exports = controller;