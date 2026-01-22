const { sequelize } = require("./config/db");

const checkTables = async () => {
    try {
        // Se connecter à la DB
        await sequelize.authenticate();
        console.log("Connexion OK.");

        // Lister toutes les tables dans SQLite
        const tables = await sequelize.query(
            "SELECT name FROM sqlite_master WHERE type='table';",
            { type: sequelize.QueryTypes.SELECT }
        );

        console.log("Tables existantes :", tables);

        // Pour vérifier la structure de la table 'books'
        const booksDesc = await sequelize.query(
            "PRAGMA table_info('books');",
            { type: sequelize.QueryTypes.SELECT }
        );

        console.log("Structure de la table 'books' :", booksDesc);
    } catch (err) {
        console.error("Erreur checkTables :", err);
    } finally {
        await sequelize.close();
    }
};

checkTables();
