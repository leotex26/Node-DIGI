const bcrypt = require("bcrypt");
const User = require("../model/User")
const jwt = require("jsonwebtoken");

const salt = 10


const service = {
    login:async (email, password)=>{
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error("Utilisateur introuvable");
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error("Mot de passe incorrect");
        }


        const token = jwt.sign(
            { userId: user.id, email: user.email},
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );
        
        return {user, token}
    },
    register:async (email, password)=>{

        const passwordHashed = await bcrypt.hash(password, salt);
        const user = await User.findOne({ where: { email } });
        if(user){return {message:"Utilisateur déjà enregistré"}}

        await User.create({
            email:email,
            password:passwordHashed,
        })

        return {message:"Utilisateur créé"}
    }
}



module.exports = service;