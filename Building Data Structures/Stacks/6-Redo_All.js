const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack()
        this.undos = new Stack()
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {
        this.undos.push(this.operations.peek());
        this.operations.pop()
    }

    redo() {
        this.operations.push(this.undos.peek());
        this.undos.pop();
    }

    redoAll() {
        while(!this.undos.isEmpty())
        {
            this.redo()
        }
    }
}

module.exports = OperationManager;