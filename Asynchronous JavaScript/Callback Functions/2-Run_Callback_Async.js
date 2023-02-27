/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
    setTimeout(function callback() {
        callbackFunction()
    },1000);    
}

module.exports = runCallback;