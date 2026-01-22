const { Course, Category } = require("../association/association");


const service = {
    getAll: async ()=>{
        return await Category.findAll({
            include: {
                model: Course,
                attributes: ["title","level","price"]
              }
          });
    },
    getById: async (index)=>{
        return await Category.findAll({
            where: {
              id: index
            },
            include: {
                model: Course,
                attributes: ["title","description","duration","level","price"]
              }
          });
    },
    create: async (req)=>{
        return await Categorie.create({
            name: req.body.name,
            description: req.body.description
        })
    }
}

module.exports = service;