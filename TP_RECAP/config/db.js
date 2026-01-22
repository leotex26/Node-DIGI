const { Sequelize } = require("sequelize");


const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite", 
    logging: false 
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("SQLite connecté avec Sequelize ");

        await sequelize.sync({alter:true});
        console.log('all models were synchronized successfully.')
    } catch (error) {
        console.error("Erreur connexion SQLite ", error);

    }
};

module.exports = { sequelize, connectDB };
