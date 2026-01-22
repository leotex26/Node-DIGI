const service = require("../service/ServiceCategory");

const controller = {
    getAll: async (req, res) => {
        try {
            const list = await service.getAll();
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    getById: async (req, res) => {
        try {
            console.log("categories > getById demarre")
            const index = parseInt(req.params.id);
            const cat = await service.getById(index);
            res.status(200).json(cat);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    create: async (req, res) => {
        try {
            const cat = await service.create(req)
            res.status(200).json(cat);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },

}


module.exports = controller;