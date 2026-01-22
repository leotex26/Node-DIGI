// Nous allons simuler un système de chat simple avec des messages recus et envoyés

// 1. Créez un événement personnalisé messageReceived qui accepte deux arguments : message et username et 
// ajoutez un gestionnaire d'événements pour messageReceived (emitter.on)

// 2. Simulez l'émission de l'événement messageReceived à partir de plusieurs utilisateurs 
// C'est-à-dire (Créer une fonction sendMessage qui prend un username et un message en param et l'appeler plusieurs fois)
// On affichera le nom de l'utilisateur puis le message dans la console 


const { EventEmitter } = require("events");

const emitter = new EventEmitter();


emitter.on("message", (txt, username) => {
    console.log(username+": "+txt);
})

const messageReceived = (txt,username) => {
    emitter.emit("message", txt, username);
}

messageReceived("Salut","P1")
messageReceived("Hola","P2")