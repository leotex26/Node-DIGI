const {sleep} = require("../exercices/10_promise");
const axios = require("axios");


/**
 * Créez une fonction synchrone qui attend 2 secondes puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const usingThen = (callback) => new Promise(resolve => setTimeout(resolve, 2000)).then(callback)

// console.log(usingThen(() => console.log("Hello World")));


/**
 * Créez une fonction asynchrone qui attend 2 secondes puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créée précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */ 

const  usingAwait = async ( callback) => { 
    await sleep();
    return callback();
}

// console.log(usingAwait(() => console.log("Hello World")));

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer avec la commande suivante:
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé 
// const axios = require("axios");

const apiResponse = (url) => axios.get(url).then(response => response.data)

module.exports = {usingThen, usingAwait, apiResponse};