const { body, param } = require("express-validator");
const User = require("../model/User");

const validateUserBody = [
    body("username")
    .isString().notEmpty().withMessage("username invalide")
    .custom(async (username)=>{
        const user = await User.findOne({ where: {username: username}})
        if(user) throw new Error("Cet user existe déjà");
        return true;
    })
    .isLength({min:3}),

    body("email")
    .isEmail().withMessage("format email non reconnu")
    .custom(async (email)=>{
        const user = await User.findOne({ where: {email: email}})
        if(user) throw new Error("Cet user existe déjà");
        return true;
    }),

    body("password")
    .isLength({min:6}),

    body("role")
    .custom((role)=>{
        if(role == "instructor" || role == "admin" ) return true;
    })
];

/*### User
- `username` : non vide, min 3 caractères, unique
- `email` : format email valide, unique
- `password` : min 6 caractères
- `role` : doit être , "instructor" ou "admin"*/ 

const validateUserIdParam = [
    param("id")
        .isInt().withMessage("L'id doit être un entier numérique")
];


module.exports = {
    validateUserBody,
    validateUserIdParam
};