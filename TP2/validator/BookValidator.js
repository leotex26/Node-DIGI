const { param, body } = require("express-validator");



const validateIdParam = [
    param("id")
        .notEmpty().withMessage("L'id est requis")
        .isInt({ min: 1 }).withMessage("L'id doit être un entier positif")
];

const validateBodyParam = [
    body("title")
        .isString().withMessage("Le titre doit être une chaîne")
        .notEmpty().withMessage("Le titre est requis"),

    body("author")
        .isString().withMessage("L'auteur doit être une chaîne")
        .notEmpty().withMessage("L'auteur est requis"),

    body("publication_year")
        .isInt({ min: 0 }).withMessage("L'année doit être un nombre")
];


module.exports = {validateIdParam, validateBodyParam};

