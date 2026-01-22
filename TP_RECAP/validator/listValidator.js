const { body, param } = require("express-validator");

const validateListBody = [
    body("nom")
        .isString().withMessage("Le nom doit être une chaîne")
        .isLength({ min: 2 }).withMessage("Le nom doit contenir au moins 2 caractères"),

    body("description")
        .optional()
        .isString().withMessage("La description doit être une chaîne")
];

const validateListIdParam = [
    param("id")
        .isInt().withMessage("L'id doit être un entier numérique")
];

module.exports = {
    validateListBody,
    validateListIdParam
};
