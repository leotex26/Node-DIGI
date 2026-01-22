const express = require("express");
const router = express.Router();
const ControllerApi = require("../controller/ControllerApi.js")
const ControllerListApi = require("../controller/ControllerListApi.js")
const { validateTaskBody,validateTaskIdParam } = require("../validator/TaskValidator")
const { validateListBody,validateListIdParam } = require("../validator/listValidator");
const authMiddleware = require("../middlewares/authMiddlewares")
const validate = require("../validator/validate")


router.get("/", ControllerApi.getAllTasks);
router.get("/tasks/:id",authMiddleware, validate, ControllerApi.getTaskById);
router.post("/tasks",authMiddleware,validateTaskBody,validate, ControllerApi.createTask);
router.put("/tasks/:id",authMiddleware, validateTaskIdParam, validateTaskBody, validate, ControllerApi.updateTask);
router.delete("/tasks/:id",authMiddleware, ControllerApi.deleteTask);

router.get("/listOfTask",authMiddleware,validate, ControllerListApi.getAllList)
router.get("/listOfTask/:id",authMiddleware,validate, ControllerListApi.getListById)
//router.post("/lists",authMiddleware,validateListBody,validate,listController.create);
//router.put("/lists/:id",authMiddleware,validateListIdParam,validateListBody,validate,listController.update);
//router.post("/lists/add/:id",authMiddleware,validateListIdParam,validateListBody,validate,listController.addToList);

module.exports = router;