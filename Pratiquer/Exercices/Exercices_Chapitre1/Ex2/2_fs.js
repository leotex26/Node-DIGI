// Lisez le contenu du fichier example.txt situé dans le dossier assets et affichez-le dans la console.
// Créez un nouveau fichier appelé output.txt dans le même dossier et écrivez-y une chaîne de caractères : Ceci est un nouveau fichier créé avec Node.js
// Supprimez le fichier output.txt que vous venez de créer.

const fs = require("fs");

try {

fs.readFile("assets/example.txt", "utf8");

fs.writeFile("assets/output.txt", "Ceci est un nouveau fichier créé avec Node.js","utf8");

fs.unlink("assets/output.txt");

} catch (error) {
    console.error("Erreur:", error);
}