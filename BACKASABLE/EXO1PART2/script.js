const express = require("express")
const app = express();
const taskRouter = require("./routes/routerAPI.js");
const authRouter = require("./routes/authRouter");
const { sequelize } = require("./config/db");
const initData = require("./initData");

require("dotenv").config();
app.use(express.json());

app.use("/",taskRouter);
app.use("/",authRouter);

console.log("initDB demarre")
const initDB = async () => {
    try {
        await sequelize.sync({ alter: true }); 
        console.log("Tables synchronisées !");
        
    } catch (err) {
        console.error("Erreur DB :", err);
    }
};

initDB();
initData();


app.listen(3000, () => {
    console.log("Server running on port 3000");
});





module.exports = initDB ;





