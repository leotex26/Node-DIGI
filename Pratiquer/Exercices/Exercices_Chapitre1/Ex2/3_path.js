// Créez un chemin complet vers un fichier appelé example.txt dans un dossier nommé assets
// Affichez le nom du répertoire du chemin complet
// Affichez le nom du fichier à partir du chemin complet
// Affichez l'extension du fichier

const path = require("path");

const filePath = path.join(__dirname, "assets", "example.txt");

console.log("Répertoire:", path.dirname(filePath));

console.log("Nom du fichier:", path.basename(filePath));

console.log("Extension:", path.extname(filePath));