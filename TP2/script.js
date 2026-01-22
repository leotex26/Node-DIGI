const express = require("express");
const app = express();
const router = require("./routes/routerBook.js");
const { sequelize } = require("./config/db");
const initData = require("./initData");

app.use(express.json());
app.use("/", router);

const initDB = async () => {
    try {
        await sequelize.sync({ force: true }); // crée toutes les tables
        console.log("Tables synchronisées !");
        await initData(); // insère les livres
    } catch (err) {
        console.error("Erreur DB :", err);
    }
};

initDB();

app.listen(3000, () => console.log("Server running on port 3000"));
