
/**
 * Créez une fonction asynchrone qui attend 2 secondes
 * 
 * utilisez new Promise 
 */
const sleep = () => new Promise(resolve => setTimeout(resolve, 2000))

module.exports = {sleep};