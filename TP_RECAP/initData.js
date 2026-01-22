require("dotenv").config();
const bcrypt = require("bcryptjs");
const { Category, Course } = require("./association/association");
const { sequelize } = require("./config/db");
const User = require("./model/User");


async function initData() {
    try {
      console.log("dbData insert >");

      const password = await bcrypt.hash("admin123", 10);
  
      // Crée l'admin seulement si pas déjà présent
      const [admin, created] = await User.findOrCreate({
        where: { email: "admin@test.com" },
        defaults: {
          username: "admin",
          password,
          role: "admin"
        }
      });
  
      const cuisine = await Category.findOrCreate({
        where: { name: "les Bases de la cuisine" },
        defaults: { description: "cuisine pour tous" }
      });
  
      const cinema = await Category.findOrCreate({
        where: { name: "pouet" },
        defaults: { description: "pouet" }
      });
  
      // Récupère les vrais objets Category
      const cuisineObj = cuisine[0];
      const cinemaObj = cinema[0];
  
      await Course.bulkCreate([
        {
          title: "oeufs au plat",
          description: "oeufs au plat",
          duration: 180,
          level: "débutant",
          price: 0,
          published: true,
          instructor: "Maité",
          categoryId: cuisineObj.id
        },
        {
          title: "salade de hareng à la papaye",
          description: "toto",
          duration: 300,
          level: "intermédiaire",
          price: 49.99,
          published: true,
          instructor: "machin",
          categoryId: cinemaObj.id
        },
        {
          title: "charlie chaplin",
          description: "charlie chaplin",
          duration: 240,
          level: "débutant",
          price: 29.99,
          published: false,
          instructor: "truc",
          categoryId: cinemaObj.id
        }
      ]);
  
      console.log("Données initialisées avec succès !");
  
    } catch (error) {
      console.error("Erreur lors de l'initialisation :", error);
    }
  }
  
  initData();

  module.exports = initData;

  



