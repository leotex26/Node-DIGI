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
        console.log("Token décodé :", decoded);


        req.user = decoded;

        console.log("authMiddleware terminé")

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Token invalide ou expiré"
        });
    }
};


const verifyAdmin = (req, res, next) => {
    try {
        if (req.user.role != "admin") return res.sendStatus(403);
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Utilisateur non admin, route non autorisée"
        });
    }
};

const verifyInstructor = (req, res, next) => {
    try {
        if (req.user.role !== "instructor" && req.user.role !== "admin") {
            return res.sendStatus(403);
        }
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Utilisateur non instructeur, route non autorisée"
        });
    }
};



module.exports = { authMiddleware, verifyAdmin, verifyInstructor };