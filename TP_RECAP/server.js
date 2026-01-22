require("dotenv").config();
const app = require("./script");
const { sequelize } = require("./config/db");
const initData = require("./initData");

const PORT = process.env.PORT || 3000;

(async () => {
  try {

    await sequelize.sync({ alter: true });
    console.log("Database connected");

    await initData();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Erreur au démarrage :", error);
  }
})();
