// Créez un serveur HTTP qui répond différemment selon l'URL demandée :
// Si l'URL est /, il doit répondre avec "Bienvenue sur la page d'accueil!".
// Si l'URL est /about, il doit répondre avec "Ceci est la page à propos."
// Si l'URL est /contact, il doit répondre avec "Contactez-nous à contact@example.com."
// Sinon, si le code d'erreur est 404, il doit répondre avec "Page non trouvée."

const http = require("http");

const server = http.createServer((req,res)=>{


    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    if(req.url === "/"){
        res.end("Bienvenue sur la page d'accueil!");
    } else if(req.url === "/about"){
        res.end("Ceci est la page à propos.");
    } else if(req.url === "/contact"){
        res.end("Contactez-nous à contact@example.com.");
    } else {
        res.statusCode = 404;
        res.end("Page non trouvée.");
    }
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})