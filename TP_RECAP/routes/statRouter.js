const express = require("express");
const router = express.Router();
const courseController = require("../controller/ControllerCourses");
const userController = require("../controller/ControllerUser");
const { authMiddleware, verifyAdmin, verifyInstructor } = require("../middlewares/authMiddlewares")
const validate = require("../validator/validate")


router.get("/courses",authMiddleware,verifyAdmin,validate, courseController.totalOfCoursesPerCat) // Nombre total de cours par catégorie (admin)
router.get("/users",authMiddleware,verifyAdmin,validate, userController.numberOfUserPerRole) // Nombre d'utilisateurs par rôle (admin)



module.exports = router;