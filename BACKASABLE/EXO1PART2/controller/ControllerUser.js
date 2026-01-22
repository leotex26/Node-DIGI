const service = require("../service/serviceUser")

const controller = {
    register: async (req,res)=>{
        try{
            console.log("register démarre")

            const email = req.body.email;
            const password = req.body.password;

            const message = await service.register(email,password);
            res.status(201).json({message})
        }catch(error){
            res.status(400).json({ error: error.message });
        }
    },
    login: async (req,res)=>{
        try{
            const email = req.body.email;
            const password = req.body.password;
            const { user, token } = await service.login(email,password);
            res.status(200).json({message: "compte utilisateur loggé avec succès !", token:token})
        }catch(error){
            res.status(401).json({ error: error.message });
        }
    }
}


module.exports = controller;