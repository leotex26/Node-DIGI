const service = require("../service/ServiceCourses");



const controller = {
    getPublished: async (req, res) => {
        try {
            const list = await service.getPublished();
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    getById: async (req, res) => {
        try {
            const index = parseInt(req.params.id);
            const course = await service.getById(index);
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    getByLevel: async (req, res) => {
        try {
            const list = await service.getByLevel(req.params.level);
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    create: async (req, res) => {
        try {
            const course = await service.create(req)
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    update: async (req, res) => {
        try {
            const course = await service.update(id,req);
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    remove: async (req, res) => {
        try {
            await service.remove(req.params.id);
            res.status(200).json({ message: "supprimé avec succès" });
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    search: async (req, res) => {
        try {
            const courses = await service.search(req.query.keyword)
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    filter: async (req, res) => {
        try {
            const courses = await service.filter(req.query.minPrice,req.query.maxPrice)
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },
    totalOfCoursesPerCat: async (req, res) => {
        try {
            const count = await service.totalOfCoursesPerCat();
            res.status(200).json(count);
        } catch (error) {
            res.status(500).json({ message: "problemes controller" })
        }
    },

    

}


module.exports = controller;