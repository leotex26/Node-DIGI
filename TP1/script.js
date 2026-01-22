const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { EventEmitter } = require("events");
const emitter = new EventEmitter();
const dns = require("dns");
const url = require("url")



const server = http.createServer((req,res)=>{


    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    const parsedUrl = url.parse(req.url, true);

    try{
        if(req.url === "/"){
            res.statusCode = 200;
            res.end("accueil!");



        } else if(req.url === "/about"){
            res.statusCode = 200;
            const txt = fs.readFileSync("./ressources/about.txt","utf-8")
            res.end(txt);



        } else if(req.url === "/status"){
            res.statusCode = 200;

            res.writeHead(200, {
                "Content-Type": "text/event-stream; charset=utf-8",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive"
            });

            const majListener = () => {
                res.write(`data: ${osInfos()}\n\n`);
            };
    
            emitter.on("maj", majListener);
    
            req.on("close", () => {
                emitter.removeListener("maj", majListener);
            });


        } else if (parsedUrl.pathname === "/resolve") {
            let domainParam = parsedUrl.query.domain;
        
            if (!domainParam) {
                res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
                return res.end("Erreur : paramètre 'domain' manquant !");
            }
        
            if (!domainParam.startsWith("http://") && !domainParam.startsWith("https://")) {
                domainParam = "http://" + domainParam;
            }
        
            let hostname;
            try {
                hostname = new URL(domainParam).hostname;
            } catch (err) {
                res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
                return res.end("Erreur : URL invalide !");
            }
        
            dns.lookup(hostname, (err, address) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    return res.end(`Erreur DNS : ${err.message}`);
                }
        
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
                res.end(`Adresse IP de ${hostname} : ${address}`);
            });
        } else {
            res.statusCode = 404;
            res.end("Page non trouvée.");
        }
    }catch(err){
        console.error("Erreur 500 :", err.message);
        res.statusCode = 500;
    }



});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})







// ------------------------------------------------------------------------------------------------------------------------------------

// INFOS
const osInfos = () => {
    const cpus = os.cpus().length;
    const freeMemory = Math.round(os.freemem() / 1024 / 1024);
    const uptimeInSeconds = Math.floor(os.uptime()/60/60);

    return `Utilisation CPU : ${cpus}, Mémoire disponible : ${freeMemory}, Temps de fonctionnement : ${uptimeInSeconds} `
}


setInterval(() => {
    emitter.emit("maj");
}, 1000);







