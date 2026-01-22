const express = require("express");
const router = express.Router();
const ControllerUser = require("../controller/ControllerUser");
const {validateUserBody} = require("../validator/UserValidator")

router.post("/register",validateUserBody, ControllerUser.register)
router.post("/login", ControllerUser.login); //

module.exports = router;