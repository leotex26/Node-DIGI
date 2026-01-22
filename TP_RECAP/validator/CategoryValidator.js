const { body, param } = require("express-validator");
const Category = require("../model/Category");

const validateCategoryBody = [

        body("name").notEmpty().withMessage("le nom de la catégorie ne peut pas etre vide")
        .isLength({min:3})
        .isString().withMessage("Le nom doit être une chaîne")
        .custom(async (name) => {
            const category = await Category.findOne({ where: { name: name } });
            if (category) {
                throw new Error("Cette catégorie existe déjà");
            }
            return true;
        }),
        
        body("description")
            .optional()
            .isString().withMessage("La description doit être une chaîne")
    
];







const validateCategoryIdParam = [
    param("id")
        .isInt().withMessage("L'id doit être un entier numérique")
];



module.exports = {
    validateCategoryBody,
    validateCategoryIdParam
};