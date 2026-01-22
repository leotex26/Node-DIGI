const express = require("express");
const router = express.Router();
const courseController = require("../controller/ControllerCourses");
const { authMiddleware, verifyAdmin, verifyInstructor } = require("../middlewares/authMiddlewares")
const validate = require("../validator/validate")
const {validateCourseBody,validateCourseIdParam} = require("../validator/CourseValidator")

router.get("/", courseController.getPublished); // Récupérer tous les cours publiés (public)
router.get("/search",courseController.search); //  - Rechercher des cours par mot-clé (titre ou description)
router.get("/filter",courseController.filter); // - Filtrer par prix
router.get("/:id", courseController.getById); // Récupérer un cours par son ID (public)
router.get("/level/:level", courseController.getByLevel); // Récupérer les cours par niveau (public)


router.post("/",authMiddleware,verifyInstructor,validateCourseBody, validate,courseController.create); // Créer un cours (protégé - instructor ou admin)
router.put("/:id", authMiddleware,verifyInstructor,validateCourseIdParam, validateCourseBody, validate, courseController.update); // Modifier un cours (protégé - instructor ou admin)
router.delete("/:id", authMiddleware,verifyAdmin,validateCourseIdParam, validate, courseController.remove); // Supprimer un cours (protégé - admin uniquement)



module.exports = router;