const express = require("express");
const router = express.Router();
const Controller = require("../controller/ControllerBook.js")
const { validateIdParam, validateBodyParam } = require("../validator/BookValidator")
const validate = require("../validator/validate")


router.get("/api/books", Controller.getAllBooks);
router.get("/api/books/stats", Controller.getStats);
router.get("/api/books/search", Controller.search)
router.get("/api/books/:id", Controller.getBookById);
router.post("/api/books", validateBodyParam, validate, Controller.createBook);
router.put("/api/books/:id", Controller.updateBook);
router.delete("/api/books/:id", Controller.deleteBook);







module.exports = router;