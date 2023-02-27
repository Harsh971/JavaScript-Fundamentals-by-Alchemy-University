class Pact {
    // add methods to return on the instance
    constructor(executionFunction) {
        this.promiseChain = [];
        this.handleError = () => {};
        this.onResolve = this.onResolve.bind(this);
        this.onReject = this.onReject.bind(this);
        executionFunction(this.onResolve, this.onReject);
    }
    then(handleSuccess) {
        this.promiseChain.push(handleSuccess);
        return this;
    }
    catch(handleError) {
        this.handleError = handleError;
        return this;
    }
    onResolve(value) {
        let storedValue = value;
        try {
            this.promiseChain.forEach((nextFunction) => {
                storedValue.nextFunction(storedValue);
            });
        }catch(error){
            this.promiseChain = {};
            this.onReject(error);
        }
        
    }
    onReject(error) {
        this.handleError(error);
    }
    catch() {

    }
    then(resolve,onRejected) {
        console.log("then...",resolve)
        resolve(42);
    }
}

module.exports = Pact;