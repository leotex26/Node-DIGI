const service = require("../service/serviceListApi");


const controller = {
    getAllList: async (req,res) =>{

        const lists = await service.getAll();
        res.status(200).json(lists);
    },
    getListById: async (req,res) =>{
        const index = req.params.id
        const list = await service.getListById(index);
        res.status(200).json(list);
    },
    create: async (req,res) =>{
        const nom = req.nom;
        const description = req.description;
        const list = service.create(nom,description)
        res.status(200).json(list);
    },
    addToList : async (req,res) =>{ 
        const list = await service.addToList(req);
        res.status(200).json(list);
    },
    update: async (req,res) =>{ 
        const list = await service.update(req);
        res.status(200).json(list);
    },

}


module.exports = controller;