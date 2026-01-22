const service = require("../service/serviceBook");


const controller = {

    getAllBooks: async (req, res) => {
        try {
            const listOfBook = await service.getAll();
            res.status(200).json(listOfBook);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getBookById: async (req, res) => {
        const id = parseInt(req.params.id);
        const book = await service.getById(id);

        if (!book) {
            return res.status(404).json({ message: "Livre non trouvée" });
        }

        res.status(200).json(book);
    },

    createBook: async (req, res) => {
        try {
            const newBook = await service.create(req.body);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateBook: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const updatedBook = await service.update(id, req.body);

            if (!updatedBook) {
                return res.status(404).json({ message: "Livre non trouvée" });
            }

            res.status(200).json(updatedBook);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteBook: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const deleted = await service.delete(id);

            if (!deleted) {
                return res.status(404).json({ message: "Livre non trouvée" });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    search: async (req, res) => {
        try {
            const { title, author } = req.query;

            console.log("controller search demarre") 

            if(title && !author) return res.json(await service.searchByTitle(title));
            if(author && !title) return res.json(await service.searchByAuthor(author));
            if(title && author) return res.json(await Book.findAll({
                where: {
                    title: { [Op.like]: `%${title}%` },
                    author: { [Op.like]: `%${author}%` }
                }
            }));

            return res.status(404).json({ message: "Paramètres de recherche insuffisants" });
        } catch(err) {
            res.status(500).json({ error: err.message });
        }
    },
    getStats: async  (req, res) => {
        try {
            const statistiques = await service.getStats();
            if(statistiques){return res.status(200).json(statistiques)}

            return res.status(404).json({ message: "statistiques non trouvées" });
        } catch(err) {
            res.status(500).json({ error: err.message });
        }
    }
};


module.exports = controller;