class Dialog {
    constructor() {
        this.array = []
    }
    
    onClose(callback) {
        // store the callback
        this.callbackFunction = callback
        this.array.push(callback);
    }

    close() {
        // invoke the callback
        this.array.forEach(cb => cb())
    }

    callbackFunction() {
        console.log("Call")
    }
}

module.exports = Dialog;