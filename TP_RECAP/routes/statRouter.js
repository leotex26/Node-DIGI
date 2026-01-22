const express = require("express");
const router = express.Router();
const courseController = require("../controller/ControllerCourses");
const userController = require("../controller/ControllerUser");


router.get("/courses", courseController.totalOfCoursesPerCat) // Nombre total de cours par catégorie (admin)
router.get("/users", userController.numberOfUserPerRole) // Nombre d'utilisateurs par rôle (admin)



module.exports = router;