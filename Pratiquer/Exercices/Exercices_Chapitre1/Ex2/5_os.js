// Ecrivez la fonction displayOsMessage() qui détecte le systeme d'exploitation
// Cette fonction affichera un message différend pour Windows, macOS et Linux
// Appelez la fonction pour la tester
// Il faudra trouver quel est la chaîne de retour pour chacun des systèmes

const os = require("os");

const displayOsMessage = () => {
    const platform = os.platform();
    const arch = os.arch();
    const cpus = os.cpus().length;
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    switch (platform) {
        case "win32":
            console.log("Windows");
            break;
        case "darwin":
            console.log("macOS");
            break;
        case "linux":
            console.log("Linux");
            break;
        default:
            console.log("Unknown");
            break;
    }

    console.log(`Arch: ${arch}`);
    console.log(`CPUs: ${cpus}`);
    console.log(`Total Memory: ${totalMemory}`);
    console.log(`Free Memory: ${freeMemory}`);

};

displayOsMessage();