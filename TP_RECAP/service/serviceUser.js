const bcrypt = require("bcrypt");
const User = require("../model/User")
const jwt = require("jsonwebtoken");

const salt = 10


const service = {
    login:async (username, email, password)=>{
        const user = await User.findOne({ where: { email, username } });
        if (!user) {
            throw new Error("Utilisateur introuvable");
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error("Mot de passe incorrect");
        }


        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role},
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        );
        
        return {user, token}
    },
    register:async (username,email, password)=>{

        const passwordHashed = await bcrypt.hash(password, salt);
        const user = await User.findOne({ where: { email } });
        if(user){return {message:"Utilisateur déjà enregistré"}}

        await User.create({
            username: username,
            email:email,
            password:passwordHashed,
            role:"instructor" 
        })

        return {message:"Utilisateur créé"}
    },
    numberOfUserPerRole: async ()=>{
        const results = await sequelize.query(
           "SELECT u.role as role, count(u.id) as number_of_user FROM users u GROUP BY role;",
           {
             type: sequelize.QueryTypes.SELECT
           }
       );
       return results;    
   }
}



module.exports = service;