const Book = require("../model/Book");
const { Op, QueryTypes } = require("sequelize");

const service = {

    getAll: async () => {
        return await Book.findAll();
    },

    getById: async (id) => {
        return await Book.findByPk(id);
    },

    create: async (bookData) => {
        return await Book.create({
            title: bookData.title,
            author: bookData.author,
            publication_year: bookData.publication_year,
        });
    },

    update: async (id, updatedData) => {
        const book = await Book.findByPk(id);
        if (!book) return null;

        return await book.update(updatedData);
    },

    delete: async (id) => {
        const deletedCount = await Book.destroy({
            where: { id }
        });
        return deletedCount > 0;
    },
    searchByTitle: async (title) => {
        return Book.findAll({ where: { title: { [Op.like]: `%${title}%` } } });
    },
    searchByAuthor: async (author) => {
        return Book.findAll({ where: { author: { [Op.like]: `%${author}%` } } });
    },
    getStats: async ()=>{
        const db = Book.sequelize;
        const numberOfBooks = await db.query(
            "SELECT COUNT(*) AS total_books FROM books",{ type: QueryTypes.SELECT }
          );
        const numberOfBooksPerYear = await db.query(
            "SELECT publication_year AS year, COUNT(*) AS count FROM books GROUP by publication_year ORDER BY publication_year ASC",{ type: QueryTypes.SELECT }
          );
        const numberOfBooksPerAuthor = await db.query(
            "SELECT author, COUNT(*) AS count FROM books GROUP by author ORDER BY author ASC",{ type: QueryTypes.SELECT }
          );

          return {totalBooks: numberOfBooks[0].total_books , numberOfBooksPerYear, numberOfBooksPerAuthor};
    }

};

/*Afficher le nombre total de livres 
Afficher le nombre de livres par année de publication 
Afficher le nombre de livres par auteur */


module.exports = service;
