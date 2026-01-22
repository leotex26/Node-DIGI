const { body, param } = require("express-validator");
const Course = require("../model/Course");


const validateCourseBody = [
    body("title")
        .notEmpty().withMessage("Le title ne doit pas etre vide")
        .isString().withMessage("Le title doit être une chaîne")
        .isLength({ min: 3 }).withMessage("Le nom doit contenir au moins 3 caractères"),

    body("description")
        .notEmpty().withMessage("La description ne doit pas etre vide")
        .isString().withMessage("La description doit être une chaîne")
        .isLength({ min: 3 }).withMessage("Le nom doit contenir au moins 3 caractères"),
        body("duration")
        .isInt({ min: 1 }).withMessage("La durée doit être un nombre positif"),

    body("level")
        .notEmpty().withMessage("Le niveau est obligatoire")
        .isIn(["débutant", "intermédiaire", "avancé"])
        .withMessage("Le niveau doit être débutant, intermédiaire ou avancé"),

    body("price")
        .isFloat({ min: 0 }).withMessage("Le prix doit être un nombre positif ou 0"),

    body("instructor")
        .notEmpty().withMessage("L'instructeur est obligatoire")
        .isString().withMessage("L'instructeur doit être une chaîne"),

    body("categoryId")
        .isInt().withMessage("categoryId doit être un nombre entier")
];






const validateCourseIdParam = [
    param("id")
        .isInt().withMessage("L'id doit être un entier numérique")
];



module.exports = {
    validateCourseBody,
    validateCourseIdParam
};