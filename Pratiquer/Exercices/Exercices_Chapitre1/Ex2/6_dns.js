// Utilisez dns.lookup pour obtenir l'adresse IP du NDD m2iformation.fr
// Récupérez les enregistrements MX du même domaine (permet de spécifier les serveurs de messagerie pour un domaine).
// Affichez le résultat dans la console 

const dns = require("dns");

const getDnsInfo = () => dns.lookup("m2iformation.fr", (err, addresses) => {
    if (err) {
        console.error("Erreur:", err);

    }else{
        console.log("Adresses IP:", addresses);
    }
});


const getMx = () => dns.resolveMx('geeksforgeeks.org', (err, 
    addresses) => console.log('mx records: %j', addresses));

getDnsInfo();
getMx();




