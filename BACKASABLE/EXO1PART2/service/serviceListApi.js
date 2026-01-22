const { ListOfTask, Task } = require("../association/association");



const service = {
    getAll:async ()=>{
        return ListOfTask.findAll();
    },
    getListById:async (id)=>{
        const index = parseInt(id);

        return await ListOfTask.findByPk(index,{
            include: [{
                model: Task,
                as: 'tasks'
            }]
        })
    },
    create:async (nom,description) => {
        const list = {
            nom: nom,
            description: description
        }

        return await ListOfTask.create(list)
    },
    addToList: async (req) => {

        let task;

        if(!req.body.id){
            task = {
                titre: req.body.titre,
                description: req.body.description,
                date_debut: req.body.date_debut,
                date_fin: req.body.date_fin,
                done: req.body.done ?? false
            };
        }else{
            task = await Task.findByPk(req.body.id);
        }
        const list = await ListOfTask.findByPk(req.params.id);
        list.tasks.add(task);

        return await ListOfTask.update(list)
    },
    update: async (idList,nom,description) => {

        let list = await ListOfTask.findByPk(idList);

        list = {
            nom: nom,
            description: description
        }

        return await ListOfTask.update(list)
    }

}


module.exports = service;