const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log("authMiddleware démarre")

        if (!authHeader) {
            return res.status(401).json({
                message: "Token manquant"
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Token invalide"
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);


        req.user = decoded;

        console.log("authMiddleware terminé")

        next(); 

    } catch (error) {
        return res.status(401).json({
            message: "Token invalide ou expiré"
        });
    }
};


module.exports = authMiddleware;