class Dialog {
    onClose(callback) {
        // store the callback
        this.callbackFunction = callback
    }

    close() {
        // invoke the callback
        this.callbackFunction();
    }

    callbackFunction() {
        console.log("Call")
    }
}

module.exports = Dialog;