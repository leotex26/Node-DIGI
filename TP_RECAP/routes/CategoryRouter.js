const express = require("express");
const router = express.Router();
const categoryController = require("../controller/ControllerCategory");
const { authMiddleware, verifyAdmin, verifyInstructor } = require("../middlewares/authMiddlewares")
const validate = require("../validator/validate")
const {validateCategoryBody,validateCategoryIdParam} = require("../validator/CategoryValidator")


router.get("/", categoryController.getAll); // Récupérer toutes les catégories (public)
router.get("/:id",validateCategoryIdParam, categoryController.getById); // Récupérer une catégorie avec ses cours (public)
router.post("/",authMiddleware,verifyAdmin, validateCategoryBody ,validate,  categoryController.create); // Créer une catégorie (protégé - admin uniquement)

module.exports = router;
