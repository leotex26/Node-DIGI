const { body, param } = require("express-validator");

const validateTaskBody = [
    body("titre")
        .isString().withMessage("Le titre doit être une chaîne de caractères")
        .isLength({ min: 3 }).withMessage("Le titre doit contenir au moins 3 caractères"),

    body("description")
        .optional()
        .isString().withMessage("La description doit être une chaîne de caractères"),

    body("date_debut")
        .isISO8601().withMessage("La date_debut doit être une date valide (ISO8601)"),

    body("date_fin")
        .isISO8601().withMessage("La date_fin doit être une date valide (ISO8601)")
        .custom((value, { req }) => {
            if (new Date(value) <= new Date(req.body.date_debut)) {
                throw new Error("La date_fin doit être postérieure à la date_debut");
            }
            return true;
        }),

    body("done")
        .isBoolean().withMessage("Le champ done doit être un booléen")
];

const validateTaskIdParam = [
    param("id")
        .isInt().withMessage("L'id doit être un entier numérique")
];

module.exports = {
    validateTaskBody,
    validateTaskIdParam
};
