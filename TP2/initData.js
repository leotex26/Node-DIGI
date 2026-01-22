const Book = require("./model/Book");

const run = async () => {
    console.log("initData démarre");

    await Book.bulkCreate([
        { title: "L'Île au trésor", author: "Robert Louis Stevenson", publication_year: new Date("1883-01-01") },
        { title: "Enlevé !", author: "Robert Louis Stevenson", publication_year: new Date("1886-01-01") }
    ]);

    console.log("Livres insérés !");
};

module.exports = run;

