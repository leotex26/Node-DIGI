
const { ListOfTask, Task } = require("./association/association.js");
const { sequelize } = require("./config/db");


const run = async () => {
    console.log("initData demarre")

    await sequelize.sync({ alter: true });

    const maListe = await ListOfTask.create({ nom: "daily" , description: "Mes tâches du jour" });

    await Task.create({ 
        titre: "Manger", 
        description: "Petit déjeuner", 
        date_debut: new Date("2024-01-10"),
        date_fin: new Date("2024-01-10"),
        done: false,
        listId: maListe.id 
    });

    await Task.create({ 
        titre: "Dormir", 
        description: "Faire la sieste", 
        date_debut: new Date("2024-01-10"),
        date_fin: new Date("2024-01-10"),
        done: false,
        listId: maListe.id 
    });

    const listeAvecTaches = await ListOfTask.findOne({
        where: { id: maListe.id },
        include: [{ model: Task, as: "tasks" }]
    });

    console.log(JSON.stringify(listeAvecTaches, null, 2));
};


module.exports = run;
